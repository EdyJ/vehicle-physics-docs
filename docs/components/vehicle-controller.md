# VPVehicleControler

The vehicle-equivalent of Unity's character controller. Simulates most types of vehicles.

![VP Vehicle Controller](/img/components/vpp-vehicle-controller.png){: .clickview }

The vehicle controller exposes the settings for the center of mass, axles and powertrain: steering,
brakes, tires, driveline, engine, clutch, gearbox and retarder. Other settings for the wheels
(radius, mass) and suspension (spring, damper) are configured at each [VP Wheel Collider](wheel-collider)
component independently.

&fa-thumbs-o-up; You can [write your own custom vehicle controller](/advanced/custom-vehicles.md){: .alert-link }
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
	4. Imagine the chassis of the vehicle. Change the vertical position (Y) of the CoM until
		it "touches" the imaginary chassis from upside.
	5. Move the CoM longitudinally (Z) slightly towards the position of the engine. It should be
		placed around 2/3 of the length of the vehicle.

	When playing around with your vehicle you can adjust its handling behavior by modifying the Z
	position of the CoM. For modifying the stability move the Y position of the CoM.

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

Details: [Steering helper](/blocks/steering.md)

### Brakes

Brake parameters for the vehicle, including brake power, brake balance and handbrake.

![VP Vehicle Controller brakes](/img/blocks/vpp-brakes-inspector.png){: .img-small .clickview }

Details: [Brakes helper](/blocks/brakes.md)

### Tires

Tire friction model and settings for the wheels of the vehicle.

![VP Vehicle Controller tires](/img/blocks/vpp-tires-inspector.png){: .img-small .clickview }

Details: [Tire friction](/blocks/tires.md)

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

- [Driveline helper](/blocks/driveline.md)
- [Differential block](/blocks/differential.md)
- [Torque Splitter block](/blocks/torque-splitter.md)

### Engine

Set up the engine of the vehicle.

![VP Vehicle Controller engine](/img/blocks/vpp-engine-inspector.png){: .img-small .clickview }

&fa-thumbs-o-up; Feel free to play with these values while monitoring the resulting engine
performance data in the graph and below it. If the combination of values is not correct a warning
will be displayed.
{: .alert .alert-info }

Details: [Engine block](/blocks/engine.md)

### Clutch

The clutch couples the engine with the transmission and driveline.

![VP Vehicle Controller clutch](/img/blocks/vpp-clutch-inspector.png){: .img-small .clickview }

- Lock ratio: a kind of ideal coupling based on locking percent.
- Disc friction: realistic clutch providing a limited torque transfer.
- Torque converter: smooth coupling based on the angular velocity. This device is commonly used with
	automatic transmissions.

Details: [Clutch block](/blocks/clutch.md)

### Gearbox

Transmission type, gear ratios and transmission settings.

![VP Vehicle Controller gearbox](/img/blocks/vpp-gearbox-inspector.png){: .img-small .clickview }

- Automatic transmission
- Automatic transmission with manual shifting (M)
- Manual transmission
- Manual transmission with automatic shifting

Automatic transmissions are different than manual with auto-shift. An automatic transmission
provides smooth transitions without neutral gap among gears.

Details: [Gearbox block](/blocks/gearbox.md)

### Retarder

Retarder brake based on angular velocity. The retarder brake is commonly used in trucks, buses
and heavy vehicles.

![VP Vehicle Controller retarder](/img/blocks/vpp-retarder-inspector.png){: .img-small .clickview }

Details: [Retarder block](/blocks/retarder.md)

### Advanced / Experimental settings

These are detailed at the [VehicleBase reference](/advanced/vehiclebase-reference#advanced-experimental-settings).