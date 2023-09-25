# Getting started

Type _Getting Started_ in your Project's search box and open any of the scenes in the results. You
should have Vehicle Physics Pro set up already ([See Setting Up VPP](/user-guide/setting-up-vpp/)).

![Getting Started Scenes](/img/user-guide/vpp-getting-started-scenes.png)

&fa-thumbs-up:lg; If you haven't setup the Unity project yet, you can still [download and play the demos](/about/demos/){: .alert-link }
{: .alert .alert-info }

The vehicles in all these scenes typically start with the engine off. For starting the engine:

1. Press <kbd>K</kbd> once for moving the ignition key from "Off" to "Acc-On".
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.


**Car controls:**

Key(s)                              | Function          | Notes
------------------------------------|-------------------| ------------------------------------------
<kbd>K</kbd> 						| Ignition&nbsp;key | - Press once to move from "Off" to "Acc-On".<br>- Press and Hold for "Start".<br>- <kbd>ctrl+K</kbd> moves the key back to "Off".
<kbd>Left</kbd><kbd>Right</kbd>  	| Steering 			|
<kbd>Up</kbd> 						| Throttle 			|
<kbd>Down</kbd> 					| Brakes 			|
<kbd>Shift</kbd> 					| Clutch 			| These vehicles typically use a Torque Converter, which doesn't require active clutch. Still, the clutch key can be used to completely disengage the engine from the transmission.
<kbd>Space</kbd> 					| Handbrake 		|
<kbd>ctrl+Space</kbd> 				| Toogle&nbsp;all&nbsp;brakes | Handbrake and Brakes are toggled on/off. Useful to leave the completely stopped without pressing Brakes.
<kbd>R</kbd> 						| Reverse&nbsp;gear | If auto-shift is enabled R requires the vehicle to stop.
<kbd>N</kbd> 						| Neutral&nbsp;gear | Auto-shift will engage first gear when throttle is applied.
<kbd>Tab</kbd> 						| Gear&nbsp;Up 		| Auto-shift might discard the change.
<kbd>Caps Lock</kbd> 				| Gear&nbsp;Down 	| Auto-shift might discard the change.
<kbd>1</kbd>-<kbd>5</kbd> 			| Engage&nbsp;gear 	| Auto-shift might discard the change and choose a more convenient gear.
<kbd>Page&nbsp;up</kbd><kbd>Page&nbsp;down</kbd> | Gear&nbsp;mode	| Select the different gear modes if the vehicle has Automatic transmission (M P R N D). The actual modes may be engaged or not depending on specific conditions (i.e. Reverse requires the vehicle to stop).
<kbd>B</kbd> 						| Toggle&nbsp;telemetry&nbsp;data					|
<kbd>C</kbd> 						| Change&nbsp;camera								|
<kbd>F1-F4</kbd>					| Select&nbsp;different&nbsp;camera&nbsp;modes		|
<kbd>Escape</kbd> 					| Reset&nbsp;scene									|
<kbd>T</kbd> 						| Toggle&nbsp;slow&nbsp;motion&nbsp;mode			|

#### Vehicle setup

The main component that implements the vehicle simulation is **[VP Vehicle Controller](/components/vehicle-controller/)**.
The object **VPP Pickup** in the pickup test scene contains this component with all its settings to
play with:

![VP Vehicle Controller](/img/components/vpp-vehicle-controller.png){: .img-medium .clickview }

- **Center Of Mass:** references the position of the center of mass in the vehicle.
- **Inertia:** configures the distribution of mass in the vehicle. Affects understeering / oversteering behavior.
- **Axes:** references to the wheels and assigns steering and brakes to them.
- **Steering:** steering angle, ackerman, toe.
- **Brakes:** brake torques, balance, handbrake.
- **Tires:** tire friction model and parameters.
- **Driveline:** driveline type and component setup (differentials, torque splitter). Current setup
	is RWD with a Torque Splitter dynamically routing part of the drive to the front axle.
- **Engine:** torque and power curves, rpm limiter, stall settings.
- **Clutch:** type of clutch and parameters. Using a torque converter is very handy when a real
	clutch simulation (_Friction Disc_) is not required.
- **Gearbox:** transmission type, gear ratios, auto-shift parameters.
- **Retarder:** typically used by heavy vehicles, not used at the pickup (zero levels).
- **Advanced / Experimental settings:** leave then untouched for now. [Learn more](/advanced/vehiclebase-reference/#advanced-experimental-settings)

The mass of the vehicle is configured at the Rigidbody component.

Wheel properties (radius, mass) and suspension settings (spring, damper) are handled per-wheel at
the [VP Wheel Collider](/components/wheel-collider/) components:

![VP Wheel Collider](/img/components/vpp-wheelcollider.png){: .img-medium .clickview }

#### Other components

The other components in the Vehicle GameObject provide different add-on functionalities and
features:

![VP Vehicle add-on components](/img/user-guide/vpp-vehicle-components.png){: .img-medium .clickview }

[VP Standard Input](/components/vehicle-input/#vpstandardinput)

:	Reads the user input from the standard Unity Input class, then converts it into input for the
	vehicle: steering, throttle, brake, etc.

[VP Audio](/components/vehicle-addons/#vpaudio)

:	Plays various audio effects based on the state of the vehicle and the wheels.

[VP Tire Effects](/components/vehicle-addons/#vptireeffects)

:	Triggers the tire-related effects such as marks, trails, smoke, and dust based on the state
	of each wheel and the underlying [Ground Material](/components/ground-materials/).

[VP Visual Effects](/components/vehicle-addons/#vpvisualeffects)

:	Plays various visual effects such as the steering wheel rotation, brake and reverse lights, and
	dashboard gauges.

[VP Telemetry](/components/vehicle-telemetry/#vptelemetry)

:	Displays a overlay window with detailed numeric data on the wheels and the vehicle. Toggle with
	the <kbd>B</kbd> key.

[VP Camera Target Setup](/components/camera-controller/#vpcameratargetsetup)

:	Configures the parameters for this vehicle to be properly looked at with the [Camera Controller](/components/camera-controller/)
	component, such as minimum distance, view height, and more.

#### Ground Materials

The component [VP Ground Material Manager](/components/ground-materials/#vpgroundmaterialmanager)
manages the ground materials present at the scene.

![VP Ground Materials](/img/user-guide/vpp-ground-materials.png){: .img-medium .clickview }

Each [Ground Material](/components/ground-materials/#groundmaterial) defines the material properties
such as grip, drag, and the objects used for playing the tire effects (marks, smoke...) on that
material.

The ground materials are identified by the Physics Materials assigned to the colliders in the scene.
Colliders without Physic Material assigned can also have their Ground Material (Physic Material =
_none_, as shown in the above pic). Note that the friction properties in the Physic Materials don't
affect the tire friction.

#### Camera Controller

The component [VP Camera Controller](/components/camera-controller/) controls the camera movement
based on the target vehicle and several camera modes available.

![VP Camera Controller](/img/components/vpp-camera-controller-inspector.png){: .img-medium .clickview }

&fa-thumbs-up:lg; Now that you know how vehicles work in Vehicle Physics Pro, you can now
[create and configure a vehicle](/user-guide/vehicle-creation/){: .alert-link } youself.
{: .alert .alert-success }
