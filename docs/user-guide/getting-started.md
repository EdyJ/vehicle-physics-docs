# Getting started

Open the example project in Unity 3D (you should have [set it up](setting-up-vpp.md) already). Let's
play and walk through some example scenes so you could get started quickly. Load and play the scene
**Playground 1k - JPickup - Keyboard**:

![Assets > Development > Playground 1k - JPickup - Keyboard](/img/user-guide/vpp-sample-scenes.png){: .clickview }

<!--
&fa-thumbs-up:lg; If you haven't setup the Unity project yet, you can still [download and play the demos](){: .alert-link }
{: .alert .alert-info }
-->

The vehicles in all these scenes typically begin with the engine off. For starting the engine:

1. Press <kbd>K</kbd> for moving the ignition key from "Off" to "Acc-On" (check out the telemetry
window)
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

The scenes containing _Steering Wheel_ in the name require a steering wheel controller. The POV
left-right directions act as ignition key. Move to the right once, then move and hold for start the
engine.

**Keyboard layout:**

Key(s)                              | Function          | Notes
------------------------------------|-------------------| ------------------------------------------
<kbd>K</kbd> 						| Ignition&nbsp;key | Press to move from "Off" to "Acc-On". Press and Hold for "Start". <kbd>ctrl+K</kbd> moves the key back to "Off".
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

[VP Telemetry](/components/vehicle-telemetry#vptelemetry)

:	Displays a overlay window with detailed numeric data on the wheels and the vehicle. Toggle with
	the <kbd>B</kbd> key.

[VP Camera Target Setup](/components/camera-controller#vpcameratargetsetup)

:	Configures the parameters for this vehicle to be properly looked at with the [Camera Controller](/components/camera-controller)
	component, such as minimum distance, view height, and more.

#### Ground Materials

The component [VP Ground Material Manager](/components/ground-materials#vpgroundmaterialmanager)
manages the ground materials present at the scene.

![VP Ground Materials](/img/user-guide/vpp-ground-materials.png){: .img-medium .clickview }

Each [Ground Material](/components/ground-materials#groundmaterial) defines the material properties
such as grip, drag, and the objects used for playing the tire effects (marks, smoke...) on that
material.

The ground materials are identified by the Physics Materials assigned to the colliders in the scene.
Colliders without Physic Material assigned can also have their Ground Material (Physic Material =
_none_, as shown in the above pic). Note that the friction properties in the Physic Materials don't
affect the tire friction.

#### Camera Controller

The component [VP Camera Controller](/components/camera-controller) controls the camera movement
based on the target vehicle and several camera modes available.

![VP Camera Controller](/img/components/vpp-camera-controller-inspector.png){: .img-medium .clickview }

## Source code and internal details

These are the actual folders for the Vehicle Physics Pro project:

![Vehicle Physics Pro project folders](/img/user-guide/vpp-project-folders.png)

The VPP scripts are inside the **Vehicle Physics Core** folder. The vehicle dynamics model is
implemented in the "Base" folder:

- [VehicleBase](/advanced/vehiclebase-reference) is a standard MonoBehaviour that orchestrates all
	the elements involved in the vehicle dynamics. All vehicle controllers inherit from this
	component. The standard vehicle controller is [VPVehicleController](/components/vehicle-controller)
	in the Components folder.
- The wheel and tire model are implemented in the [Wheel and TireFriction](/blocks/tires) classes.
	The component [VPWheelCollider](/components/wheel-collider) (Components folder) is the interface
	with Unity's WheelCollider and also handles the visual elements of the wheel.
- [Block](/advanced/block-reference) implements a functional unit in the vehicle's powertrain, from
	the engine to the wheels. Every internal vehicle part inherits is from Block (Wheel, [Engine](/blocks/engine),
	[Differential](/blocks/differential), etc).
- [Solver](/advanced/misc-topics-explained/#solver-numeric-integration) is the dynamics solver that
	computes the states of all the blocks. Euler and substeps are implemented here.
- [DataBus](/advanced/databus-reference) defines the protocol to exchange data from-to the vehicle
	(inputs, engine data such as rpm, torque, etc).
- [GroundMaterial](/components/ground-materials/) defines the ground materials and the properties of
	the tire-ground contact. Includes [GroundMaterialManagerBase](/components/ground-materials/#groundmaterialcs),
	a MonoBehavior that is the base class for all the ground material managers. A simple ground
	material manager component is provided (VPGroundMaterialManager, Components/Ground Materials
	folder). Custom ground material managers may be easily implemented.
- Gravity is a wrapper for Physics.gravity. Ensures vehicles use gravity properly, including gravity
	forces in any direction.
- [VehicleBehaviour](/advanced/vehiclebehaviour-reference) is a MonoBehaviour used as base class for
	vehicle add-ons. VehicleBehaviour is aware of the vehicle it belongs to (`vehicle` property) so
	it  handles initialization, finalization and other states of the vehicle properly.


!!! info "&fa-info-circle; Some useful pages"

	- [Miscellaneous topics explained](/advanced/misc-topics-explained)
	- [Data Bus reference](/advanced/databus-reference)
	- [Custom Vehicle Controller](/advanced/custom-vehicles)
