# Vehicle Controller (VPVehicleControler)

The vehicle-equivalent of Unity's character controller. Simulates most types of vehicles.

&fa-thumbs-o-up; You can [write your own custom vehicle controller](../advanced/custom-vehicles.md){: .alert-link }
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

Each axle references the left-right wheels ([VPWheelCollider](../components/wheel-collider))
components) and configure its features.

##### Left-right wheels

The [VPWheelCollider](../components/wheel-collider) component for each wheel of the axle.
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

Details: [Steering helper](../blocks/steering.md)

### Brakes

Brake parameters for the vehicle, including brake power, brake balance and handbrake.

Details: [Brakes helper](../blocks/brakes.md)

### Tires

Tire friction model and settings for the wheels of the vehicle.

Details: [Tire friction](../blocks/tires.md)

### Powertrain

Configures the driven axles and the elements makes the connections among them and with the drive
torque upstream.

The powertrain settings can define up to 4 driven axles connected in a variety of ways using
differentials in several configurations (open, locked) and torque splitters. Each configuration
is briefly described in the Editor.

Depending on the chosen configuration, different additional parts will be available for setting up:

Differential or Axle Differential
:	Differentials connecting two wheels of the same axle.

Inter-axle Differential
:	Differentials connecting two axle differentials together before routing the connection upstream
	to a center differential or torque splitter. Used in 4-driven axles configurations.

Center Differential
:	Differential connecting two axles or groups (inter-axle or axle differentials) before routing
	the connection upstream to the drive torque. Used in 2, 3 and 4-driven axles configurations.

Torque Splitter
:	A device that provides dynamic torque routing among two outputs.

Details:

- [Powertrain helper](../blocks/powertrain.md)
- [Differential block](../blocks/differential.md)
- [Torque Splitter block](../blocks/torque-splitter.md)

### Engine

Set up the engine of the vehicle.

&fa-thumbs-o-up; Feel free to play with these values while monitoring the resulting engine
performance data in the graph and below it. If the combination of values is not correct a warning
will be displayed.
{: .alert .alert-info }

Details: [Engine block](../blocks/engine.md)

### Clutch

The clutch couples the engine with the transmission and powertrain.

- Lock ratio: a kind of ideal coupling based on locking percent.
- Disc friction: realistic clutch providing a limited torque coupling.
- Torque converter: smooth coupling based on the angular velocity. This device is commonly used with
	automatic transmissions.

Details: [Clutch block](../blocks/clutch.md)

### Gearbox

Transmission type, gear ratios and transmission settings.

- Automatic transmission
- Automatic transmission with manual shifting
- Manual transmission
- Manual transmission with automatic shifting

Automatic transmissions are different than manual with auto-shift. An automatic transmission
provides smooth transitions without neutral gap among gears.

Details: [Gearbox block](../blocks/gearbox.md)

### Retarder

Retarder brake based on angular velocity. The retarder brake is commonly used in trucks, buses
and heavy vehicles.

Details: [Retarder block](../blocks/retarder.md)

## Advanced / Experimental settings

#### Tire side deflection

Spring rate for the tire side to deflect and bend when sliding laterally. It can be used to
simulate tires targeted to different speeds. Tires with low rates (8-20) may become difficult to
drive at high speeds.

This setting will be moved to Tire Friction at some point

#### Tire impulse ratio

The default value of 0.5 works correctly on most vehicles.

- It can be raised on vehicles with low center of mass (F1 and racing cars) for enhancing the effect
of the transition from slip to adherent.
- It should be lowered on vehicles with elevated center of mass if they experiment visible
instabilities at rest.

!!! Info "&fa-gear; Tech details"
	The VPP solver calculates the impulses that keep the tires adherent to the surface. These are the
	_ideal_ impulses for the same vertical level as the center of mass. Tire forces are applied at a
	different vertical level (contact points), so these forces induce a torque in the vehicle as side
	effect. This torque can lead to numerical instabilities in the tire forces, being bigger with the
	vertical distance from the contact points to the center of mass. The tire impulse ratio prevents
	this effect by multiplying the calculated impulse before being applied to the vehicle as tire
	force.

#### Wheel sleep velocity

Wheels moving slower than this speed are allowed to sleep when no other forces / torques that can
move them are present.

#### Integration steps and method

**Substeps** are subdivisions of the Unity physics time steps that are used for calculating the
internal torques, forces and momentums at every block in the vehicle. The more substeps, the more
precise are the numeric results but CPU usage is increased.

A minimum value of 2 substeps is recommended. Multi-driven-axle vehicles should configure at least
two substeps per driven axle.

Detailed information: [Solver substeps explained](../advanced/misc-topics-explained.md#solver-numeric-integration)

#### Runtime CoM changes

How the changes to the Center Of Mass are handled:

- Disabled: Center of Mass is configured when enabling the vehicle only. Changing CoM requires
	disabling/enabling the component for the new CoM to take effect.
- Editor only: Runtime modifications to the CoM take effect immediately when playing the project
	within the Unity Editor only. This is useful for configuring it at runtime.
- Editor and Builds (_NOT RECOMMENDED_): Any modification to the CoM take effects immediately in
	the project. This is not recommended as modifying the CoM triggers a bunch of expensive
	calculations in the Unity physics engine.