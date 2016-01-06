# Vehicle Input

The input components read the input values from the user and passes them to the vehicle. This
includes steering, throttle, brakes, gear lever, etc.

The vehicle receives the input data at the [data bus](../advanced/databus-reference.md),
Input channel (`VehiclePhysics.Channel.Input`).

### Standard Input (VPStandardInput)

Reads the input from Unity's standard Input class, which is configured at Edit > Project Settings >
Input.

< pic: VPStandardInput inspector >

Throttle And Brake Mode
:	Behavior of the vertical input axis:

	- Throttle and Brake: up is throttle, down is brake.
	- Auto Forward and Reverse: automatically engages forward/reverse gears, inverting the axis
		when moving reverse.

Brake On Throttle Backwards
:	When the vehicle is moving backwards throttle (_up_) acts as brake.

Apply Clutch On Handbrake
:	Useful when handbrake affects the driven wheels. Allows more immediate handbrake effect
	(otherwise the engine would be counteracting the handbrake).

Unlock Driveline On Handbrake
:	Disengages the center driveline block (differential or torque splitter) in AWD when applying
	handbrake. AWD connects front and rear axles. Thus, applying handbrake at one axle
	affects the other axle as well. This setting disconnects AWD axles when pressing handbrake,
	allowing an immediate effect on the hand-braked axle.



### Logitech Input (VPLogitechInput)

