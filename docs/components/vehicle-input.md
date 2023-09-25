# Vehicle Input

The input components read the input values from the user and passes them to the vehicle. This
includes steering, throttle, brakes, gear lever, etc.

The vehicle receives the input data in the [data bus](/advanced/databus-reference/),
Input channel (`VehiclePhysics.Channel.Input`).

&fa-thumbs-o-up; You could write your own input component easily by [writing an add-on component](/advanced/custom-addons/)
that modifies the values of the [Input channel in the Data Bus](/advanced/databus-reference/#input-channel).
For example, an AI controller or a remote player.
{: .alert .alert-info }

#### The ignition key

Press and _hold_ the control assigned to the ignition key (<kbd>K</kbd> by default) for starting the
engine.

The vehicle implements the ignition key with three positions: OFF, ACC-ON, and START

- Pressing the corresponding Ignition Key control (<kbd>K</kbd> by default) once moves the key from
	OFF to ACC-ON.
- Pressing and holding keeps START applied until released or the engine gets started.
- Pressing the key-off control (<kbd>Ctrl-K</kbd> by default) moves the key from ACC-ON to OFF.

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
:	Single press moves key to Acc-On. Press and hold for Start the engine. Press with <kbd>Ctrl</kbd>
	for moving the key to Off.

Steer axis
:	Axis name for steering. Must be configured at Unity Input settings (_Edit > Project Settings >
	Input_). Recommended configuration:

	![VPP Steer Axis Configuration](/img/components/vpp-standard-input-steer-axis.png){: .img-small .clickview }

Throttle and Brake Axis
:	Axis name for throttle and brake. Must be configured at Unity Input settings (_Edit > Project Settings >
	Input_). Recommended configuration:

	![VPP Throttle and Brake Configuration](/img/components/vpp-standard-input-throttle-and-brake-axis.png){: .img-small .clickview }

	The behavior will be affected by the option _Throttle And Brake Mode_.

Handbrake axis
:	Axis for the handbrake. It can be a regular button defined at Input settings (sensitivity
	and gravity will apply). Press with <kbd>Ctrl</kbd> to lock/unlock all brakes.

Clutch Axis
:	Axis for the handbrake. It can be a regular button defined at Input settings (sensitivity
	and gravity will apply).

	&fa-warning:lg; Default value for clutch axis is **Fire1** (<kbd>Shift</kbd>). This assignment
	should be changed or removed on mobile/touch devices. Otherwise, the clutch will be engaged
	whenever the screen is touched.
	{: .alert .alert-warning }

Gear Shift Button
:	Button for gear shifting. It must have positive and negative bindings defined at the Input
	settings (_Edit > Project Settings > Input_):

	![VPP Gear Shift Configuration](/img/components/vpp-standard-input-gear-shift-axis.png){: .img-small .clickview }

Gear Mode Select Button
:	Button for selecting gear mode in automatic transmissions (R, N, D ...). It must have positive
	and negative bindings defined at the Input settings (_Edit > Project Settings > Input_):

	![VPP Gear Select Configuration](/img/components/vpp-standard-input-gear-select-axis.png){: .img-small .clickview }

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
reverse throttle, brake, handbrake, steer, clutch, ignition key.

Useful for debug or fine-testing purposes in the Editor. Can also be used for modifying the input
from scripting without having to deactivate the VPStandardInput component.

### VPDeviceInput

Supports joysticks and steering wheel controllers via DirectInput, including force feedback where available.

![VP Device Input](/img/components/vpp-device-input-inspector.png){: .img-small .clickview }

##### Device

Selected Device
:	Ordinal number of the device. 0 is the first device, 1 is the second device, etc.

Device Model
:	Applies internal mappings for the selected device model.

##### Input

Digital Handbrake Rate
:	How fast the handbrake gets applied when pressing the handbrake button.

Steering Non Linear Bias
:	Applies non-linearity to the steering. 0.5 is linear, above is faster response,
	below is slower response.

Axis Count For Clutch
:	The device is considered to have a Clutch pedal when the number of reported axis is this value
	or greater.

Fallback To Standard Input
:	If no device is detected the VPStandardInput component (if present) will be enabled instead.

##### Effective Pedal Ranges

Limit the ranges for Throttle, Brake and Clutch. For example, setting Brake to 0.00 - 0.50 means
that the full brake pressure will be applied when reaching half of the pedal travel.

##### Startup

Ignition Key Position
:	Where to set the ignition key on startup.

Automatic Gear Position
:	The position of the automatic gear lever on start.

Manual Gear Position
:	The position of the manual gear lever on start.

Handbrake Locked
:	Starts in _handbrake lock_ mode, which means that both handbrake and service brake are
	applied. Releasing handbrake will release the service brakes as well.

##### Force Feedback

Force feedback is based on the difference of slip at the sides of an hypothetical tire of certain width. When the vehicle is steering an edge of the tire slips more than the other edge. This difference causes a counter-force that tries to counter-steer the wheel to cancel such slip differences. This counter-force is calculated as torque that is applied to the wheel device.

Logical Tire Width
:	Tire width used for the force feedback calculations. More width causes more intense reactions. Doesn't need to match the width of the real tire.

Force Intensity
:	Overall multiplier for the force feedback.

Weight Intensity
:	How much the weight affects the force feedback.

Damper Coefficient
:	Applies resistance to the movement of the steering wheel.

Non Linear Bias
:	Applies non-linearity to the force feedback. 0.5 is linear, above is stronger response,
	below is weaker response.

##### G27 Specific

Mappings of the different actions to controls in the Logitech G27 wheel.

##### Test & Debug

Force Feedback GUI
:	Show a GUI for adjusting the force feedback settings in runtime. Note: changes here are not
	saved, but may be used for configuring the force feedback later.

: Enable Test Effects
	Tool for experimenting with the different force	feedback effects. Play the scene and move the
	Test Effect controls to see the reactions in the actual wheel. The vehicle doesn't apply force
	feedback.

Debug Gizmos
:	Show the gizmos used for the force feedback at the Scene view in runtime.

Debug Info
:	Show device information in runtime.
