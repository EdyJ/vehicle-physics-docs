# VehicleBase reference

`VehiclePhysics.VehicleBase` is the base class for all the vehicles. Derived classes implement
the engine's internal parts by instancing and connecting Block classes (engine, gearbox, etc).

## VehicleBase overrides

!!! danger "&fa-exclamation-circle; Never override Update, FixedUpdate, or LateUpdate in the derived classes"

	Always use the overrides below for writing your code:

	- Update or FixedUpdate --> OnUpdate
	- FixedUpdate --> DoUpdateBlocks or DoUpdateData

#### OnInitialize

Configure the number of wheels by calling SetNumberOfWheels(n). Then create, configure and
connect all your blocks. Use the Block.Connect method.

Wheels can be accessed via wheels[n] and wheelsState[n] after calling SetNumberOfWheels:

"wheels" are the actual Wheel blocks. Required settings:

- radius
- mass
- tireFriction

"wheelsState" are the meaningful values of the wheels. Required settings:

- wheelCol
- steerable

Important: you must configure each WheelState with the corresponding the WheelCollider
WheelState.wheelCol. Also, ensure to flag the steering wheels as steerable (this is used by the
force feedback calculations).

#### OnFinalize

Called after the vehicle has been finalized, so the controller could finalize any custom
initialization (i.e. de-subscribe to events).

#### DoUpdateBlocks

Update the inputs and states for your blocks: engine, brakes, gear, etc.
Called before each integration step at the physics rate (FixedUpdate rate).

#### DoUpdateData

Populate the data bus with the actual values of the vehicle.
Called after each integration step at the physics rate (FixedUpdate rate).

#### OnUpdate

Adjust visual and per-frame stuff here at the visual refresh rate (Update rate). Frames may be skipped.

#### GetInternalObject

Optional: Allow the vehicle to expose references to internal classes / blocks on demand.
Each VehicleBase implementation chooses which items to expose.

This is intended for debugging / monitoring / telemetry the internal values that don't make sense
to expose otherwise.

## Advanced / Experimental settings

![VP Vehicle Controller advanced settings](/img/components/vpp-vehicle-controller-inspector-folded.png){: .img-small .clickview }

Some of these settings are likely to be changed or moved in upcoming versions. Most important are
described here.

#### Tire side deflection

Spring rate for the tire side to deflect and bend when sliding laterally. It can be used to
simulate tires targeted to different speeds. Tires with low rates (8-20) may become difficult to
drive at high speeds.

This setting will be moved to Tire Friction at some point.

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

#### Integration method and steps

**Substeps** are subdivisions of the Unity physics time steps that are used for calculating the
internal torques, forces and momentums at every block in the vehicle. The more substeps, the more
precise are the numeric results but CPU usage is increased.

A minimum value of 2 substeps is recommended. Multi-driven-axle vehicles should configure at least
two substeps per driven axle.

Detailed information: [Solver substeps explained](../advanced/misc-topics-explained.md#solver-numeric-integration)

