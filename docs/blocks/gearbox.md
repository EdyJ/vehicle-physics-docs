# Gearbox block

![VP Vehicle Controller gearbox](/img/blocks/vpp-gearbox-inspector.png){: .clickview }

(Documentation Work In Progress)

### Data Bus parameters

| Data Bus Value | Description | Notes |
| -------------- | ----------- | ----- |
|InputData.ManualGear 		| Manual gear lever position 					| -1 (reverse), 0 (neutral), 1, 2, 3, ...
|InputData.AutomaticGear	| Automatic transmission mode <sup>1</sup> 		| 0, 1, 2, 3, 4, 5 = _M, P, R, N, D, L_
|InputData.GearShift		| Incremental gear shifting value <sup>2</sup>	| Add +1 for gear up or -1 for gear down
|VehicleData.GearboxGear 	| Currently engaged gear						| Negative = reverse, 0 = Neutral or Park, Positive = forward.
|VehicleData.GearboxMode	| Actual transmission mode						| 0, 1, 2, 3, 4, 5 = _M, P, R, N, D, L_
|VehicleData.GearboxShifting| Is the gearbox in the middle of a gear shift operation? | 0 = no, 1 = yes
|SettingsData.AutoShiftOverride	| Auto-shift override setting <sup>3</sup>	| 0 = no override, 1 = force auto shift, 2 = force manual shift

See [Data Bus Reference](/advanced/databus-reference) for more information.

<sup>1</sup> Automatic transmission modes:
:	- M (0): Manual: do not automatically engage gears. Use manual gear shifting.
	- P (1): Park
	- R (2): Reverse. Gear shifting is supported for more than one reverse gears.
	- N (3): Neutral
	- D (4): Drive: automatically engage forward gears. Gear shifting is supported for forward gears.
	- L (5): Low: first gear only.

**<sup>2</sup> GearShift** value is reset to 0 when the vehicle has acknowledged and processed the
input. Successive gear shift commands can be grouped by adding/subtracting +-1 to this bus value.

**<sup>3</sup> AutoShiftOverride:** See notes below.

#### The AutoShiftOverride value

The behavior of AutoShiftOverride depends on the vehicle's transmission type:

- Automatic transmission: the override value switches among modes Manual [M] and Drive [D], but
	does nothing if any other mode is selected (i.e. Neutral [N] or Reverse [R]). It's also subject
	to the conditions of each mode. For example, [D] can't be selected if the vehicle is moving
	backwards faster than a threshold speed.
- Manual transmission: the override value enables or disables the auto-shift feature.

AutoShiftOverride is intended to temporary overrides in specific situations. For example, it's used
for preventing gear shifting during replays, as the replay data already includes the currently
engaged gear.

AutoShiftOverride is not a reliable way of implementing an auto-shift / manual-shift selector in the
vehicle because the value might be overwritten by other components. See below.

### Auto-shift / manual-shift selection

The behavior of the automated gear shifting is different between Automatic and Manual transmissions:

- Automatic Transmission: auto-shift is enabled in Drive [D] mode. Gears must be shifted
	manually in the Manual [M] mode.
- Manual Transmission: auto-shift is enabled with the _Auto Shift_ flag in the Gearbox settings.

!!! info "&fa-info-circle; Determining the transmission type"

	If you want to configure the shift mode externally to the vehicle (i.e. via UI or hotkey) then
	you should probably use a **Manual transmission** and modify the auto-shift flag. The Automatic
	transmission is intended to allow users to select among Drive [D] (automatic) or Manual [M]
	themselves.


Example: Add-on component that modifies the Gearbox settings in runtime in any transmission type.

```
using UnityEngine;
using VehiclePhysics;

public class GearShiftModeSelector : VehicleBehaviour
    {
	public enum GearShiftMode { Manual, Automatic }
	public GearShiftMode mode = GearShiftMode.Manual;

	Gearbox.Settings m_gearboxSettings;

	public override void OnEnableVehicle ()
		{
		// Retrieve a reference to the gearbox settings
		var gearbox = vehicle.GetInternalObject(typeof(Gearbox)) as Gearbox;
		if (gearbox == null)
			{
			// This vehicle doesn't have a gearbox. Self-disable this add-on.
			enabled = false;
			}

		m_gearboxSettings = gearbox.settings;
		}

    public override void FixedUpdateVehicle ()
        {
		if (m_gearboxSettings.type == Gearbox.Type.Automatic)
			{
			// Automatic Transmission. Select the proper mode.
			if (mode == GearShiftMode.Automatic)
				{
				// Force select mode D (4) unless current mode is R (2)
				if (vehicle.data.Get(Channel.Input, InputData.AutomaticGear) != 2)
					vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 4);
				}
			else
				{
				// Force select mode M (0)
				vehicle.data.Set(Channel.Input, InputData.AutomaticGear, 0);
				}
			}
		else
			{
			// Manual gearbox. Just match the auto-shift mode.
			m_gearboxSettings.autoShift = mode == GearShiftMode.Automatic;
			}
        }
    }

```