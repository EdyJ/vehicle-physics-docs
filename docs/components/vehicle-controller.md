# VPVehicleControler

The vehicle-equivalent of Unity's character controller. Simulates most types of vehicles.

![VP Vehicle Controller](/img/components/vpp-vehicle-controller.png){: .clickview }

The vehicle controller exposes the settings for the center of mass, inertia, axles, steering, brakes,
tires, powertrain (engine, clutch, gearbox, retarder, driveline), driving aids and safety aids.
Other settings for the wheels (radius, mass) and suspension (spring, damper) are configured at each
[VP Wheel Collider](wheel-collider) component independently.

This is the block layout of an AWD vehicle in VPVehicleController:

<div class="mermaid">
graph RL
subgraph VP Vehicle Controller
subgraph Front Axle
WFL>Wheel Front Left]
WFR>Wheel Front Right]
end
subgraph Rear Axle
WRL>Wheel Rear Left]
WRR>Wheel Rear Right]
end

Eng(Engine<br>+<br>Clutch)
Gear[Gearbox]
Ret[Retarder<br>Brake]
subgraph Driveline
Diff0[Center Differential<br>or<br>Torque Splitter]
Diff1{Axle<br>Differential}
Diff2{Axle<br>Differential}
end

Eng-->Gear
Gear-->Ret
Ret-->Diff0
Diff0-->Diff1
Diff0-->Diff2
Diff1-->WFL
Diff1-->WFR
Diff2-->WRL
Diff2-->WRR
end
</div>

Notes:

- Steering, Brakes and Tire Friction are included in the Wheel blocks in the figure.
- The Retarder Brake is typically used in heavy transport vehicles (trucks, buses). It stays
disabled on regular cars, SUVs, vans, etc.

&fa-thumbs-o-up; You can [write your own custom vehicle controller](/advanced/custom-vehicles){: .alert-link }
for special types of vehicles not directly covered by the stock Vehicle Controller component.
{: .alert .alert-info }

### Center of mass

Transform to be used as Center of Mass (CoM). If not specified, CoM will be calculated
out of the vehicle's colliders (_not recommended_).

The longitudinal position of the center of mass greatly affects the behavior and handling of the
vehicle. The vertical position affects the stability.

!!! info "&fa-info-circle; How to configure the Center of Mass"

	1. Create an empty child GameObject in your vehicle (<kbd>Alt</kbd><kbd>Shift</kbd><kbd>N</kbd>),
		name it `CoM`.
	2. Set it as Center of Mass in the vehicle controller.
	3. Move the CoM gameobject to the middle of your vehicle as seen from the top.
	4. Figure out the chassis of the vehicle. Change the vertical position (Y) of the CoM until
		it "touches" the imaginary chassis from upside.
	5. Move the CoM longitudinally (Z) slightly towards the position of the engine. It should be
		placed around 2/3 of the length of the vehicle.

	You may modify the position of the CoM in runtime for finding a better value.

### Inertia

The inertia defines the distribution of mas along the vehicle. Inertia plays a critical role in the
handling (understeer / oversteer).

!!! info "&fa-info-circle; How to configure the Inertia"

	Recommended method:

	1. In the Inertia settings choose the "Parametric" mode.
	2. Configure the chassis dimensions to roughly match the bottom part of the vehicle.
	3. Configure Inertia Bias to 1 if the vehicle has the engine in the front, or to -1 if the
		engine in the rear.
	4. Refine the Inertia Bias value based on the vehicle's behavior. Positive values cause more
		oversteer, while negative values cause more understeer.

	Feel free to play with the vehicle and modify Inertia Bias in runtime for adjusting the handling.

Details: [Inertia helper](/blocks/inertia)

### Axles

Each axle references the left-right wheels ([VPWheelCollider](/components/wheel-collider)
components) and configure its features.

![VP Vehicle Controller axles](/img/components/vpp-vehicle-controller-axles.png){: .img-small .clickview }

##### Left-right wheels

The [VPWheelCollider](/components/wheel-collider) component for each wheel of the axle.
Radius, mass, suspension distance, suspension spring, suspension damper and visual meshes are
configured at the VPWheelCollider.

##### Brakes

Which brake system (front, rear, neutral, none) will control the brakes for this axle.

##### Steering

Steering settings for this axle:

- Disabled: no steering
- Steerable: regular steering as configured in the Steering settings (below).
- Ratio: this axle steers a fraction of the demanded steering. Useful for multi-axle vehicles
	with several steering axles.
- Reference: the steering ratio is defined by the relative longitudinal position of the axle to
	the reference transform configured at the Steering settings (below).

### Steering

Steering parameters for the vehicle: angle, Ackerman, toe...

![VP Vehicle Controller steering](/img/blocks/vpp-steering-inspector.png){: .img-small .clickview }

Details: [Steering helper](/blocks/steering)

### Brakes

Brake parameters for the vehicle, including brake power, brake balance and handbrake.

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-inspector.png){: .img-small .clickview }

Details: [Brakes helper](/blocks/brakes)

### Tires

Tire friction model and settings for the wheels of the vehicle.

![VP Vehicle Controller tires](/img/blocks/vpp-tires-inspector.png){: .img-small .clickview }

Details: [Tire friction](/blocks/tires)

### Driveline

Configures the driven axles and the elements makes the connections among them and with the drive
torque upstream.

![VP Vehicle Controller driveline](/img/blocks/vpp-driveline-inspector.png){: .img-small .clickview }

The driveline settings can define up to 4 driven axles connected in a variety of ways using
differentials in several configurations (open, locked) and torque splitters. Each configuration
is briefly described in the Editor.

Depending on the chosen configuration, different additional parts will be available for setting up:

Differential or Axle Differential
:	Differentials connecting two wheels of the same axle.

![VP Vehicle Controller differential](/img/blocks/vpp-differential-inspector.png){: .img-small .clickview }

Inter-axle Differential
:	Differentials connecting two axle differentials together before routing the connection upstream
	to a center differential or torque splitter. Used in 4-driven axles configurations.

Center Differential
:	Differential connecting two axles or groups (inter-axle or axle differentials) before routing
	the connection upstream to the drive torque. Used in 2, 3 and 4-driven axles configurations.

Torque Splitter
:	A device that provides dynamic torque routing among two outputs.

![VP Vehicle Controller torque splitter](/img/blocks/vpp-torque-splitter-inspector.png){: .img-small .clickview }

Details:

- [Driveline helper](/blocks/driveline)
- [Differential block](/blocks/differential)
- [Torque Splitter block](/blocks/torque-splitter)

### Engine

Set up the engine of the vehicle.

![VP Vehicle Controller engine](/img/blocks/vpp-engine-inspector.png){: .img-small .clickview }

&fa-thumbs-o-up; Feel free to play with these values while monitoring the resulting engine
performance data in the graph and below it. If the combination of values is not correct a warning
will be displayed.
{: .alert .alert-info }

Details: [Engine block](/blocks/engine)

### Clutch

The clutch couples the engine with the transmission and driveline.

![VP Vehicle Controller clutch](/img/blocks/vpp-clutch-inspector.png){: .img-small .clickview }

- Lock ratio: a kind of ideal coupling based on locking percent.
- Disc friction: realistic clutch providing a limited torque transfer.
- Torque converter: smooth coupling based on the angular velocity. This device is commonly used with
	automatic transmissions.

Details: [Clutch block](/blocks/clutch)

### Gearbox

Transmission type, gear ratios and transmission settings.

![VP Vehicle Controller gearbox](/img/blocks/vpp-gearbox-inspector.png){: .img-small .clickview }

- Automatic transmission
- Automatic transmission with manual shifting (M)
- Manual transmission
- Manual transmission with automatic shifting

Automatic transmissions are different than manual with auto-shift. An automatic transmission
provides smooth transitions without neutral gap among gears.

Details: [Gearbox block](/blocks/gearbox)

### Retarder Brake

Retarder brake based on angular velocity. The retarder brake is commonly used in trucks, buses
and heavy vehicles.

![VP Vehicle Controller retarder](/img/blocks/vpp-retarder-inspector.png){: .img-small .clickview }

Details: [Retarder block](/blocks/retarder)

### Advanced / Experimental settings

More settings are detailed at the [VehicleBase reference](/advanced/vehiclebase-reference#advanced-experimental-settings).

#### Engine reaction factor

Ratio of the reaction torque used at the engine torque calculations.

Reducing this ratio solves the low-frequency numerical resonances among wheels and engine that may
occur at high-torque situations (i.e. heavy vehicles in slow gears). It should always be 1.0
unless this effect is clearly noticed.

# Scripting Reference

```cs
namespace VehiclePhysics
{
	public class VPVehicleController : VehicleBase
}
```

### Classes

```
public class VPAxle
	{
	public VPWheelCollider leftWheel;
	public VPWheelCollider rightWheel;

	public Brakes.BrakeCircuit brakeCircuit = Brakes.BrakeCircuit.Neutral;
	public Steering.SteeringMode steeringMode = Steering.SteeringMode.Disabled;
	public float steeringRatio = 1.0f;
	};

```

### Properties

```
	// Axles and driveline setup

	public VPAxle[] axles;
	public Driveline.Settings driveline = new Driveline.Settings();

	public Differential.Settings differential = new Differential.Settings();
	public Differential.Settings centerDifferential = new Differential.Settings();
	public Differential.Settings interAxleDifferential = new Differential.Settings();
	public TorqueSplitter.Settings torqueSplitter = new TorqueSplitter.Settings();

	// Steering, brakes, tire friction

	public Steering.Settings steering = new Steering.Settings();
	public Brakes.Settings brakes = new Brakes.Settings();
	public TireFriction tireFriction = new TireFriction();

	// Powertrain

	public Engine.Settings engine = new Engine.Settings();
	public Engine.ClutchSettings clutch = new Engine.ClutchSettings();
	public Gearbox.Settings gearbox = new Gearbox.Settings();
	public Retarder.Settings retarder = new Retarder.Settings();

	// Driving aids

	public SteeringAids.Settings steeringAids = new SteeringAids.Settings();
	public SpeedControl.Settings speedControl = new SpeedControl.Settings();

	// Safety aids

	public Brakes.AbsSettings antiLock = new Brakes.AbsSettings();
	public TractionControl.Settings tractionControl = new TractionControl.Settings();
	public StabilityControl.Settings stabilityControl = new StabilityControl.Settings();
	public AntiSpin.Settings antiSpin = new AntiSpin.Settings();

	// Advanced: proportion of the reaction torque used at specific calculations:
	//	- engine torque
	//	- park mode torque
	// Mitigates or removes numerical resonances at high-torque situations (i.e. heavy vehicles
	// in slow gears or Park mode).

	[Range (0, 1)]
	public float engineReactionFactor = 1.0f;
	[Range (0, 1)]
	public float parkModeReactionFactor = 0.95f;
```

### Methods

```
	// Get the driveline and gearbox ratios along the transmission for a given wheel.
	//
	// Returns NAN if there's no direct connection between the wheel and the powertrain,
	// for example:
	//	- No drive wheel
	//	- Neutral gear

	public float GetWheelFinalRatio (int wheelIndex, int gear = 0)

```

### See also

AntiSpin<br>
[Brakes](/blocks/brakes)<br>
[Driveline](/blocks/driveline)<br>
[Differential](/blocks/differential)<br>
[Engine](/blocks/engine)<br>
[Gearbox](/blocks/gearbox)<br>
[Inertia](/blocks/inertia)<br>
[Retarder](/blocks/retarder)<br>
SpeedControl<br>
StabilityControl<br>
[Steering](/blocks/steering)<br>
SteeringAids<br>
[TireFriction](/blocks/tires)<br>
[TorqueSplitter](/blocks/torque-splitter)<br>
TractionControl<br>
[VehicleBase](/advanced/vehiclebase-reference)<br>
[VPWheelCollider](/components/wheel-collider)<br>