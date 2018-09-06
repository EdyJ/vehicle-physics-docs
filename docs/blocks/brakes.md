# Brakes

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-inspector.png){: .clickview }

Max Brake Torque
:	Maximum amount of brake torque to be split among front and rear wheels based on the Brake Bias
	parameter. Each wheel will receive the computed torque regardless the number of wheels.

	Neutral wheels always receive Max Brake Torque / 2.

	The Front / Neutral / Rear setting is configured per axle in the [VPVehicleController.Axles](/components/vehicle-controller/#axles)
	list.

Brake Bias
:	Front / Rear distribution of the brake torque. Front is &gt; 0.5, Rear is &lt; 0.5.

Handbrake Torque
:	Torque applied to the wheels when the handbrake is enabled. This torque is accumulated to any
	other regular torque.

Handbrake Axle
:	Axle or axles affected by the hand brake. 0 = rear, 0.5 = all, 1 = front.

	A value of 0.5 is useful to simulate the parking brake in heavy vehicles, where all wheels are
	braked.

### Anti-lock braking (ABS)

![Anti-lock braking (ABS) inspector](/img/blocks/vpp-brakes-abs-inspector.png){: .clickview }

Enabled
:	Should the ABS have effect or not.

Mode
:	ABS operation mode: Simple, Multi-position, Continuous. See below for details on each mode.

Trigger
:	How to define the wheel slip velocity at which the ABS is triggered.

	- Peak Slip Offset: the slip is an offset to the point of maximum grip as defined in the Tire
		Friction.
	- Custom Slip: the slip is specified directly.

	Slip and offset values are m/s: speed of the tire surface relative to the ground.

Min Pressure Ratio
:	The brake torque applied to the wheel will be multiplied by this value when the ABS is in full
	effect.

##### Mode: Simple

The brake torque applied to the wheel is multiplied by Min Presure Ratio when the wheel slip
surpasses the trigger slip value.

##### Mode: Multi-position

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-abs-mode-multiposition.png){: .clickview }

A range of slip is defined:

- ABS is not applied below the minimum defined slip.
- ABS is fully applied (torque multiplied by Min Pressure Ratio) beyond the maximum slip.
- Within the range the slip is divided in a number of discrete positions (Valve Positions) which
release more or less brake torque depending on the slip.

This mode is the closest approach to real ABS systems.

##### Mode: Continuous

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-abs-mode-continuous.png){: .clickview }

A range of slip is defined:

- ABS is not applied below the minimum defined slip.
- ABS is fully applied (torque multiplied by Min Pressure Ratio) beyond the maximum slip.
- Within the range the brake torque is multiplied by the proportional value based on the slip.

### ABS calibration

ABS may be calibrated on each specific vehicle setup for providing the best performance.

**Min Pressure Ratio** is the proportion of braking torque that is allowed to pass-thru when the
ABS reduces the pressure on the brakes.

- 0 means no braking at all, which might affect the braking efficiency (there are time slices where
	brakes have no effect at all).
- A value too large means the wheel may continue locked even when the ABS has released all possible
	brake pressure. This is best noticeable when braking and steering at the same time. If the
	wheel still gets locked in this situation then Min Pressure Ratio is too large.

The best value for the pressure ratio is the higher value that doesn't lock the wheel while heavily
braking and steering at the same time.

In Peak Slip Offset mode, **Trigger** and **Slip Offset** define slip amount (m/s) that is applied
to the slip point of maximum grip in the tire friction curve. If the tire's forward slip surpasses
this point (slip of maximum grip + offset) then the ABS is triggered and the brake torque gets
multiplied by Min Pressure Ratio.

- Slip Offset = 0 means the ABS gets triggered at the slip point of maximum grip exactly.
- A value too large means that the tire would have to experience some amount of forward slip before
	the ABS gets actually triggered. This would greatly affect both the braking efficiency (as a
	typical tire has less grip with more slip) and the maneuverability while braking.

A good value for the offset is the tire slip point right before the grip suffers a significant drop.
This allows the tire to stay in a slip range with good grip the most time while braking with ABS.

**Example:** if Offset is 0.75 and the tire's peak friction slip is 1.25 then the ABS would be
triggered when the forward tire slip goes beyond ~2 m/s:

![VPP ABS calibration](/img/blocks/vpp-brakes-abs-calibration.png){: .clickview }

Once the ABS gets triggered the brake pressure would be reduced to the 25% of the nominal pressure
(as Min Pressure Ratio = 0.25). Given the Brakes setup at the top of this page, this means the brake
torque would be reduced from from 1400 Nm to 420 Nm in the front axle. When the slip goes below the
trigger point, the brakes would be back to full torque.

# Scripting reference

### Brakes.Settings

```
namespace VehiclePhysics
{
public class Brakes
	{
	[Serializable]
	public class Settings
		{
		// Maximum brake torque in Nm each individual brake is capable of.
		// Balanced settings (bias = 0.5) delivers maxBrakeTorque/2 to each axle.

		public float maxBrakeTorque = 2000.0f;

		// Wheel bias. 1.0f = front, 0.0 = rear, 0.5 = 50:50%

		[Range(0, 1)]
		public float brakeBias = 0.7f;

		// Handbrake torque

		public float handbrakeTorque = 1500.0f;

		// Handbrake axle. 1.0f = front, 0.0 = rear, 0.5 = both.
		// 0.5 means that both ends apply handbrakeTorque.
		// Default: 0.0f (handbrake affects the rear axle only)

		[Range(0, 1)]
		public float handbrakeAxle = 0.0f;
		}
	}
}
```

### Brakes.AbsSettings

```
	[Serializable]
	public class AbsSettings
		{
		public bool enabled = false;

		// ABS relief valve operation modes:
		//
		//	Simple: brake pressure multiplied by minPressureRatio when slip > minSlip
		//	MultiPosition: brake pressure multiplied by discrete ratios from minSlip to maxSlip,
		//		applying minPressureRatio beyond maxSlip. ValvePositions is the number of ratios.
		//	Continuous: brake pressure multiplied progressively from 1.0 @ minSlip to
		//		minPressureRatio @ maxSlip.

		public AbsMode mode = AbsMode.Simple;

		// Trigger: how to calculate the slip to be used as trigger to the ABS
		//
		// Trigger modes:
		//
		// 	PeakSlipOffset: Use offset values (m) wrt the tire's peak friction
		//	CustomSlip: Specify direct slip values (m)

		public AbsTrigger trigger = AbsTrigger.PeakSlipOffset;

		// Operating slip range. ABS gets triggered beyond minSlip.
		// Maximum brake relief happens beyond maxSlip.
		//
		// The Simple operation mode uses the "min" values only (minSlipOffset or minSlip).

		public float minSlipOffset = 0.3f;
		public float maxSlipOffset = 1.5f;

		public float minSlip = 0.5f;
		public float maxSlip = 5.0f;

		// Minimum % of pressure allowed in the brakes when ABS is engaged

		[Range(0, 1)]
		public float minPressureRatio = 0.25f;

		// MultiPosition mode only:
		// Number of discrete positions of the ABS relief valve (not counting the closed position)

		[Range(2, 8)]
		public int valvePositions = 2;
		}
	}
}
```