# Vehicle Input

The input components read the input values from the user and passes them to the vehicle. This
includes steering, throttle, brakes, gear lever, etc.

The vehicle receives the input data at the [data bus](../advanced/databus-reference.md),
Input channel (`VehiclePhysics.Channel.Input`).

&fa-thumbs-o-up; You could write your own input component easily by [writing an add-on component](../advanced/custom-addons.md)
that modifies the values of the [Input channel at the Data Bus](../advanced/databus-reference.md#input-channel).
For example, an AI controller or a remote player.
{: .alert .alert-info }

#### The ignition key

Press and _hold_ the control assigned to the ignition key (<kbd>K</kbd> by default) for starting the
engine.

The vehicle implements the ignition key with three positions: OFF, ON, and IGNITE

- Pressing the corresponding Ignition Key control (<kbd>K</kbd> by default) once moves the key from
	OFF to ON.
- Pressing and holding keeps IGNITE applied until released or the engine gets started.
- Pressing the key-off control (<kbd>Ctrl-K</kbd> by default) moves the key from ON to OFF.

### VPStandardInput

Reads the input from Unity's standard Input class, which is configured at Edit > Project Settings >
Input.

![VP Standard input](/img/components/vpp-standard-input-inspector.png){: .img-small .clickview }

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

Ignition key
:	Single press moves key to On. Press and hold for ignite the engine. Press with <kbd>Ctrl</kbd>
	for  moving the key to Off.

Steer axis
:	Axis name for steering. Must be configured at Unity Input settings

Throttle and Brake Axis
:	Axis name for throttle and brake. The behavior will be affected by _Throttle And Brake Mode_.

Handbrake axis
:	Axis for the handbrake. It can be a regular button defined at Input settings (sensitivity
	and gravity will apply). Press with <kbd>Ctrl</kbd> to lock/unlock all brakes.

Clutch Axis
:	Axis for the handbrake. It can be a regular button defined at Input settings (sensitivity
	and gravity will apply).

Gear Shift Button
:	Button for gear shifting. It must have positive and negative bindings defined at the Input
	settings (_Edit > Project Settings > Input_, see pic below).

![VP Standard Input bidirectional bindings](/img/components/vpp-standard-input-bidirectional-bindings.png){: .img-small .clickview }

Gear Mode Select Button
:	Button for selecting gear mode in automatic transmissions (R, N, D ...). It must have positive
	and negative bindings defined at the Input settings (see pic above).

Keyboard Number Select Gears
:	The alphanumeric keyboard numbers engage the corresponding gears: 1, 2, 3, 4...

Neutral Gear
:	Key for selecting neutral gear, or _None_ for disable.

Reverse Gear
:	Key for selecting reverse gear, or _None_ for disable.

Enable Reset Vehicle
:	Resets velocity and orientation of the vehicle when the _Reset Vehicle Key_ is pressed. Useful
	for recovering from roll overs or car falling upside down.

Reset Vehicle Key
:	Key that resets the vehicle when _Enable Reset Vehicle_ is checked.

##### External inputs

Explicitly impose the inputs, overriding the values received from the standard Input: Throttle,
reverse throttle, brake, handbrake, steer, clutch, ignition.

Useful for debug or fine-testing purposes in the Editor. Can also be used for modifying the input
from scripting without having to deactivate the VPStandardInput component.

### VPLogitechInput

Supports the Logitech G27 controller with force feedback.

&fa-warning; Unity crashes if this component gets enabled while the G27 is **not** connected! Blame
the buggy LogitechSteeringWheelEnginesWrapper.dll. Proper steering wheel support will be available
soon for VPP.
{: .alert .alert-warning }

![VP Logitech Input](/img/components/vpp-logitech-input-inspector.png){: .img-small .clickview }

##### Input

Digital Handbrake Rate
:	How fast the handbrake gets applied when pressing the handbrake button.

Steering Non Linear Bias
:	Applies non-linearity to the steering. 0.5 is linear, above is faster response, below is slower
	response.

Gear Shift Up / Down
:	Controls for gear shifting

Automatic Gear Next / Prev
:	Controls for moving the gear lever in Automatic transmission mode

Ignition Key On / Off
:	Press and hold the ON control for starting the engine

Handbrake
:	Applies the handbrake at the specified _Digital Handbrake Rate_

Brake Lock Toggle
:	Lock / unlock all brakes.

##### Force Feedback

Logical Tire Width
:	Tire width used for the force feedback calculations. More width causes more intense reactions.

Weight Intensity
:	How much the weight affects the self-alignment torque.

Force Intensity
:	Overall multiplier for the force feedback.

Damper Coefficient
:	Applies resistance to the movement of the steering wheel.

Debug Log
:	Show debug messages at the console.

Debug Gizmos
:	Show the gizmos used for the force feedback at the Scene view in runtime.

##### Test Force Feedback Effects

Play the scene, check _Enable Test Effects_ and move these controls for experimenting with the
different force feedback effects. When test effects are enabled the vehicle doesn't apply force
feedback directly.

