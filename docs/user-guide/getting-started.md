# Getting started

**Welcome to Vehicle Physics Pro!** The most complete, accurate and realistic vehicle physics kit
available for Unity 3D.

Open the project in Unity 3D ([clone the GIT repository](../advanced/git-repository-setup) if
necessary). Let's play some example scenes so you could get started quickly. Load and play the
scene **Playground 1k - JPickup - Standard Input**:

![Project > Scenes > Playground Scenes > Playground 1k - JPickup - Standard Input](/img/user-guide/vpp-sample-scenes.png){: .img-small .clickview }

<!--
&fa-thumbs-up:lg; If you haven't setup the Unity project yet, you can still [download and play the demos](){: .alert-link }
{: .alert .alert-info }
-->

The vehicles in all these scenes typically begin with the engine off. For starting the engine:

1. Press <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (check out the telemetry
window)
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

**Keyboard layout:**

Key(s)                              | Function          | Notes
:----------------------------------:|:-----------------:| ------------------------------------------
<kbd>K</kbd> 						| Ignition&nbsp;key | Press to move from "Off" to "Drive". Press and Hold for "Start". <kbd>ctrl+K</kbd> moves the key back to "Off".
<kbd>left</kbd><kbd>right</kbd>  	| Steering 			|
<kbd>up</kbd> 						| Throttle 			|
<kbd>down</kbd> 					| Brakes 			|
<kbd>shift</kbd> 					| Clutch 			| Actual vehicle setup uses a Torque Converter, which doesn't require active clutch. Still, the clutch can be used to completely disengage the engine from the transmission.
<kbd>space</kbd> 					| Handbrake 		| Affects rear wheels. Clutch should be used if vehicle uses a standard clutch to prevent the engine to stall.
<kbd>ctrl+space</kbd> 				| Toogle&nbsp;all&nbsp;brakes | Brakes are toggled in all wheels.
<kbd>R</kbd> 						| Reverse&nbsp;gear | If auto-shift is enabled R requires the vehicle to be nearly stopped and brakes released.
<kbd>N</kbd> 						| Neutral&nbsp;gear | Auto-shift will engage first gear when throttle is applied.
<kbd>Tab</kbd> 						| Gear&nbsp;Up 		| Auto-shift might revert to the previous gear
<kbd>Caps Lock</kbd> 				| Gear&nbsp;Down 	| Auto-shift might revert to the previous gear
<kbd>1</kbd>-<kbd>5</kbd> 			| Engage&nbsp;gear 	| Auto-shift might discard the change and choose a more convenient gear
<kbd>Page up</kbd><kbd>Page down</kbd> | Gear&nbsp;mode	| Select the different gear modes if the vehicle has Automatic transmission (M P R N D L). The actual modes may be engaged or not depending on specific conditions (i.e. Reverse requires the vehicle to be nearly stopped).
<kbd>B</kbd> 						| Toggle&nbsp;telemetry&nbsp;data
<kbd>C</kbd> 						| Change&nbsp;camera
<kbd>F1-F4</kbd>					| Select&nbsp;different&nbsp;camera&nbsp;modes
<kbd>Escape</kbd> 					| Reset&nbsp;scene
<kbd>T</kbd> 						| Toggle&nbsp;slow&nbsp;motion&nbsp;mode

#### Vehicle setup

The main component that implements the vehicle simulation is **[VP Vehicle Controller](/components/vehicle-controller)**.
The object **VPP Pickup** in the pickup test scene contains this component with all its settings to
play with:

![VP Vehicle Controller](/img/components/vpp-vehicle-controller.png){: .img-medium .clickview }

- **Center Of Mass:** references the position of the center of mass of the vehicle.
- **Axes:** references to the wheels and assign steering and brakes to them.
- **Steering:** steering angle, ackerman, toe.
- **Brakes:** brake torques, balance, handbrake.
- **Tires:** tire friction model and parameters.
- **Driveline:** driveline type and component setup (differentials, torque splitter). Current setup
	is AWD with main drive power applied at the rear axle and a torque splitter dynamically routing
	part of the power to the front axle.
- **Engine:** torque and power curves, rpm limiter, stall settings.
- **Clutch:** type of clutch and parameters. Using a torque converter is very handy when a real
	clutch simulation (_Disc Friction_) is not required.
- **Gearbox:** transmission type, gear ratios, auto-shift parameters.
- **Retarder:** typically used by heavy vehicles, not used at the pickup (zero levels).
- **Advanced / Experimental settings:** leave then untouched for now. [Learn more](../advanced/vehiclebase-reference.md#advanced-experimental-settings)

The mass of the vehicle is configured at the Rigidbody component.

Wheel properties (radius, mass) and suspension settings (spring, damper) are handled per-wheel at
the [VP Wheel Collider](/components/wheel-collider) components:

![VP Wheel Collider](/img/components/vpp-wheelcollider.png){: .img-medium .clickview }

#### Other components

The other components present at the Vehicle gameobject provide different add-on functionalities and
features:

![VP Vehicle add-on components](/img/user-guide/vpp-vehicle-components.png){: .img-medium .clickview }

[VP Standard Input](/components/vehicle-input#vpstandardinput)

:	Reads the user input from the standard Unity Input class, then converts it into input for the
	vehicle: steering, throttle, brake, etc.

[VP Audio](/components/vehicle-addons#vpaudio)

:	Plays various audio effects based on the state of the vehicle and the wheels.

[VP Tire Effects](/components/vehicle-addons#vptireeffects)

:	Triggers the tire-related effects such as marks, trails, smoke, and dust based on the state
	of each wheel and the underlying [Ground Material](/components/ground-materials).

[VP Visual Effects](/components/vehicle-addons#vpvisualeffects)

:	Plays various visual effects such as the steering wheel rotation, brake and reverse lights, and
	dashboard gauges.

[VP Telemetry](/components/vehicle-debug#vptelemetry)

:	Displays a overlay window with detailed numeric data on the wheels and the vehicle. Toggle with
	the <kbd>B</kbd> key.

[VP Camera Target Setup](/components/camera-controller#vpcameratargetsetup)

:	Configures the parameters for this vehicle to be properly pointed at with the [Camera Controller](/components/camera-controller)
	component, such as minimum distance, view height, and more.

#### Ground Materials

The component [VP Ground Material Manager](/components/ground-materials#vpgroundmaterialmanager)
manages the ground materials present at the scene.

![VP Ground Materials](/img/user-guide/vpp-ground-materials.png){: .img-medium .clickview }

Each [Ground Material](/components/ground-materials#groundmaterial)
defines the material properties such as grip, drag, and the objects used for playing the tire
effects (marks, smoke...) on that material.

#### Camera Controller

The component [VP Camera Controller](/components/camera-controller) controls the camera movement 
based on the target vehicle and several camera modes available.

![VP Camera Controller](/img/components/vpp-camera-controller-inspector.png){: .img-medium .clickview }

## Source code and internal details

These are the actual folders for the Vehicle Physics Pro Beta project:

![Vehicle Physics Pro project folders](/img/user-guide/vpp-project-folders.png)

The vehicle physics scripts are inside the **Vehicle Physics core** folder. The main script
to look at is the Vehicle Controller component at Components\VPVehicleController.cs. This component
inherits from `VehiclePhysics.VehicleBase` and overrides its virtual methods for implementing the
vehicle's internals using the available blocks: ([engine](../blocks/engine.md), [gearbox](../blocks/gearbox.md),
[differential](../blocks/differential.md)...). `VehicleBase` at Core\VehicleBase.cs manages the
integration solver and the wheels, which computes the the final tire forces.

Vehicles are internally modeled as a graph of connected blocks that derive from `VehiclePhysics.Block`.
Each block can receive input torques and produce output torques. Wheels are blocks that receive
torques at their inputs. Motors are blocks that produce torques at their outputs. Other blocks have
torque inputs and torque outputs. This allows to simulate any kind of internal configuration of the
vehicle by connecting blocks in any combination.

Vehicle blocks are created, initialized and connected within the `VPVehicleController.cs`
script, `OnInitialize` method. Check out the comments in the file `VehicleBase.cs` for indications
on how the vehicles are implemented and simulated by overriding the virtual methods.

!!! info "&fa-info-circle; Some useful pages"

	- [Miscellaneous topics explained](/advanced/misc-topics-explained)
	- [Data Bus reference](/advanced/databus-reference)
	- [Custom Vehicle Controller](/advanced/custom-vehicles)
