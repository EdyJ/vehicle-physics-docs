# Clutch block

The clutch progressively engages or disengages the engine from the transmission.

![VP Vehicle Controller clutch](/img/blocks/vpp-clutch-inspector.png)

#### Lock Ratio

An ideal (but unrealistic) simple clutch. Transmission may be fully engaged, fully disengaged or any
partial engagement in between.

![VPP Lock Ratio Clutch](/img/blocks/vpp-clutch-lock-ratio.png)

No parameters needed. The clutch pedal input is directly translated to lock ratio between engine
and transmission:

- When pedal input is 0 the lock ratio is 100% (transmission fully engaged).
- When pedal input is 1 the lock ratio is 0% (transmission fully disengaged).

#### Disc Friction clutch

This is the realistic clutch used with manual transmissions. When fully engaged allows a maximum
amount of torque to be transferred between the engine and the transmission as result of the friction
between the clutch discs.

![VPP Disc Friction Clutch](/img/blocks/vpp-clutch-disc-friction.png)

The supported torque transfer value is reduced proportionally to the clutch pedal input:

- When pedal input is 0 the clutch supports the configured _Max Torque Transfer_ (fully engaged)
- When pedal input is 0.5 the clutch allows _Max Torque Transfer_ * 0.5 (half engaged)
- when pedal input is 0 the clutch don't allow any torque transfer (fully disengaged)

If engine or transmission demand more torque than the supported amount then the clutch slips and
engine and transmission rpms won't match, even in "fully engaged" state.

&fa-thumbs-up:lg; A good value for _Max Torque Transfer_ is about twice the maximum engine torque.
Check out the engine specs under the [engine curve](/blocks/engine){: .alert.link } for the
_Max Torque_ value.
{: .alert .alert-success }

Sometimes the clutch may slip slightly when switching gears in full throttle. This is normal, and
it also happens in reality. Clutch wear may also be simulated by reducing the _Max Torque Transfer_
value.

#### Torque Converter

A fluid coupling device mostly used with automatic transmissions. Coupling between engine and
transmission is defined by the rpms.

![VPP Torque Converter](/img/blocks/vpp-clutch-inspector.png)

Lock Rpm
:	Transmission and engine are locked together above this rpm value.

Lock Ratio Bias
:	Shape of the locking curve.

The inspector shows the lock ratio vs. rpms. Also, the lock ratio at idle rpms is calculated and
marked in the graph (yellow marker). Typical values for lock ratio at idle should be around 4-10%.
This "default locking" is the reason for cars with automatic transmission to start moving gently
when brake is released.

## Monitoring the clutch

You can check out the actual lock ratio of the transmission at the telemetry or at the Input Monitor
UI:

![VPP Clutch Lock Telemetry](/img/blocks/vpp-clutch-lock-telemetry.png){: .img-medium .clickview }
![VPP Clutch Lock Monitor](/img/blocks/vpp-clutch-lock-monitor.png)

The thin blue bar in the Input Monitor UI shows the **transmission slip** from 0% (no slip,
transmission coupled) to 100% (full slip, transmission de-coupled).

The wide blue bar shows the position of the clutch pedal. The picture above shows a Torque Converter,
so the transmission slip depends on the rpm instead of the clutch pedal.

# Scripting reference

```
namespace VehiclePhysics
{
[Serializable]
public class ClutchSettings
	{
	public ClutchType type = ClutchType.TorqueConverter;

	// Lock Ratio clutch:
	//		Fully locked or fully open depending on the clutch input. No settings necessary.

	// Disc Friction clutch:
	//		Realistic clutch. Allows a maximum torque transfer when locked. Clutch can slip if
	// 		engine produces more torque than this value (check torque engine curves).
	//		Can be used for simulating clutch wear.

	public float maxTorqueTransfer = 300.0f;

	// Torque Converter:
	//		Smooth progressive lock based on the angular velocity.
	//		clutchInput is used to disengage the engine from the converter (Neutral).

	public float lockRpm = 2000.0f;

	//		lockRatioBias defines the shape of the locking curve in the torque converter.

	[Range(0.001f,0.999f)]
	public float lockRatioBias = 0.1f;
	}
}
```