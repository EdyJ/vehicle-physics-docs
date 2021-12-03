# Gearbox block

![VP Vehicle Controller gearbox](/img/blocks/vpp-gearbox-inspector.png){: .clickview }

#### Transmission Type

Manual
:	Each gear is either engaged or disengaged. Smooth gear shifting requires engaging the clutch or
	configuring a Torque Converter.

	The **Auto shift** option in the Gearbox configuration provides automatic gear shifting.

Automatic
:	Gears are engaged via clutches inside the gearbox, so shifting gears provide a smooth transition
	between them. Automatic transmissions are typically used in combination with a Torque Converter
	as clutch.

	Automatic gearbox can work in several modes, engaged via the [Data Bus](#data-bus-parameters):

	- **[M]** Manual. Do not automatically shift gears. Use manual gear shifting.
	- **[P]** Park. Transmission is locked.
	- **[R]** Reverse. Gear shifting is supported for more than one reverse gears.
	- **[N]** Neutral. Transmission is disengaged.
	- **[D]** Drive. Automatically engage forward gears. Gear shifting is supported for forward gears.
	- **[D1]** to **[D5]**: As Drive but using up to the specified gear. E.g. **[D3]** uses gears 1-2-3 only.

	The **[D]** mode provides auto-shifting, while the **[M]** mode requires gears to be engaged
	manually.

#### Gear Ratios

Forward Gear Ratios
:	Forward gears (positive ratios). 0 is the first gear, 1 the second gear, and so on. Ratios should
	be configured in descending order for the automatic shifting features to work.

Reverse Gear Ratios
:	Reverse gears (negative ratios). 0 is the first reverse gear, 1 the second reverse gear, and so
	on. If _Auto-shift in Reverse_ is enabled then ratios should be specified in ascending order
	(i.e. -3, -2, -1).

#### Manual Transmission

Each gear is either engaged or disengaged. Smooth gear shifting requires engaging the clutch or
configuring a Torque Converter.

![VP Manual Transmission](/img/blocks/vpp-gearbox-manual-transmission.png){: .clickview }

Gear Change Time
:	Time in seconds that takes shifting to current gear to another. Gearbox stays in Neutral during
	this time.

Auto Shift
:	Enables automatic gear shifting

	Neutral Rpm
	:	Engages Neutral when rpm falls below this value

	First Gear Rpm
	:	First Gear is engaged from Neutral above this rpm

	Gear Down Rpm
	:	Shifts gear down below this rpm

	Gear Up Rpm
	:	Shifts gear up above this rpm

	Gear Up Interval
	:	Minimum time in seconds between two consecutive gear up shifts.

	Gear Down Interval
	:	Minimum time in seconds between two consecutive gear down shifts.

	2nd Gear Min Speed
	:	Minimum speed of the vehicle in m/s to allow automatic gear shifting above the 2nd gear.
		Useful to prevent gear shifting when the drive wheels are heavily slipping in 1st gear.

Allow Park Mode
:	Park mode **[P]** is typical of automatic transmissions. This option enables park mode in the
	manual transmission.

Strict Park Mode
:	If enabled the park mode **[P]** can be engaged or disengaged only when the brake is
	strongly pressed. Otherwise this mode may be selected anytime.

#### Automatic Transmission

Gears are engaged via clutches inside the gearbox, so shifting gears provide a smooth transition
between them. Automatic transmissions are typically used in combination with a Torque Converter
as clutch.

![VP Automatic Transmission](/img/blocks/vpp-gearbox-automatic-transmission.png){: .clickview }

Gear Transition Time
:	Duration in seconds of the smooth transition from a gear to another.

Shift Interval
:	Minimum time in seconds between two consecutive gear changes.

Gear Down Rpm
:	A shorter gear is selected below this rpm.

Gear Up Rpm
:	A longer gear is selected above this rpm.

Initial Gear Forward
:	The forward gear to engage when selecting the **[D]** mode. Typically is 1, but some vehicles
	with many gears may engage the 2nd, 3rd or even 4rd. In these cases the shorter gears are used
	in **[D1]** to **[D5]** modes and with the shift-up / shift-down inputs.

Initial Gear Reverse
:	The reverse gear to engage when selecting the **[R]** mode. Typically is -1, but some vehicles
	with several reverse gears may engage any other initially. Other reverse gears may be selected
	with the shift-up / shift-down inputs.

Next Gear Min Speed
:	Minimum speed of the vehicle in m/s to allow automatic engagement of gears based on current
	speed. Note that above this min speed the system may select a gear shorter than the initial ones.

Auto-Shift In Reverse
:	Applies auto-shifting in reverse mode **[R]**. Reverse gear ratios should be in ascending order
	for this feature to work properly (i.e. -3, -2, -1).

Strict Park Mode
:	If enabled the park mode **[P]** can be engaged or disengaged only when the brake is strongly
	pressed. Otherwise this mode may be selected anytime.

### Data Bus parameters

| Data Bus Value | Description | Notes |
| -------------- | ----------- | ----- |
|InputData.ManualGear 		| Manual gear lever position 					| -1 (reverse), 0 (neutral), 1, 2, 3, ...
|InputData.AutomaticGear	| Automatic transmission mode <sup>1</sup> 		| 0, 1, 2, 3, 4 = _M, P, R, N, D_<br>5, 6, 7, 8, 9 = _D1, D2, D3, D4, D5_
|InputData.GearShift		| Incremental gear shifting value <sup>2</sup>	| Add +1 for gear up or -1 for gear down
|VehicleData.GearboxGear 	| Currently engaged gear						| Negative = reverse, 0 = Neutral or Park, Positive = forward.
|VehicleData.GearboxMode	| Actual transmission mode <sup>1</sup>			| 0, 1, 2, 3, 4 = _M, P, R, N, D_<br>5, 6, 7, 8, 9 = _D1, D2, D3, D4, D5_
|VehicleData.GearboxShifting| Is the gearbox in the middle of a gear shift operation? | 0 = no, 1 = yes
|SettingsData.AutoShiftOverride	| Auto-shift override setting <sup>3</sup>	| 0 = no override, 1 = force auto shift, 2 = force manual shift

See [Data Bus Reference](/advanced/databus-reference) for more information.

<sup>1</sup> Automatic transmission modes:
:	- M (0): Manual: do not automatically shift gears. Use manual gear shifting.
	- P (1): Park. Transmission is locked.
	- R (2): Reverse. Gear shifting is supported for more than one reverse gears.
	- N (3): Neutral. Transmission is disengaged.
	- D (4): Drive: automatically engage forward gears. Gear shifting is supported for forward gears.
	- D1 (5) to D5 (9): As Drive but using up to the specified gear. E.g. D3 uses gears 1-2-3 only.

**<sup>2</sup> GearShift** value is reset to 0 when the vehicle has acknowledged and processed the
input. Successive gear shift commands can be grouped by adding/subtracting +-1 to this bus value.

**<sup>3</sup> AutoShiftOverride:** See notes below.

#### The AutoShiftOverride value

The automatic shifting feature in both Manual and Automatic transmissions may be overridden from
scripting via Data Bus by modifying the AutoShiftOverride value in the Settings channel.

The effect of the AutoShiftOverride value depends on the vehicle's transmission type:

- **Automatic transmission:** the override value switches among modes Manual **[M]** and Drive
	**[D]**, but does nothing if any other mode is selected (i.e. Neutral **[N]** or Reverse
	**[R]**). It's also subject to the conditions of each mode. For example, **[D]** can't be
	selected if the vehicle is moving backwards faster than a threshold speed.
- **Manual transmission:** the override value enables or disables the auto-shift feature.

AutoShiftOverride is intended to temporarily override auto-shifting in specific situations. For
example, it's used for preventing gear shifting during replays, as the replay data already includes
the currently engaged gear.

AutoShiftOverride is not a reliable way of implementing an auto-shift / manual-shift selector in the
vehicle because the value might be overwritten by other components. Read below.

### Auto-shift / manual-shift selection

!!! info "&fa-info-circle; Determining the transmission type"

	If you want to configure the shift mode externally to the vehicle (i.e. via UI or hotkey) then
	you should probably use a **Manual transmission** and modify the auto-shift flag. The
	Automatic transmission is intended to allow users to select among Drive **[D]** (automatic) or
	Manual **[M]** themselves using the vehicle input.

The behavior of the automated gear shifting is different between Automatic and Manual transmissions:

- Automatic Transmission: auto-shift is enabled in Drive **[D]** mode. Gears must be shifted
	manually in the Manual **[M]** mode.
- Manual Transmission: auto-shift is enabled with the _Auto Shift_ flag in the Gearbox settings.

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