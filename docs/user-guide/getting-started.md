# Getting started

**Welcome to Vehicle Physics Pro!** The most complete, accurate and realistic vehicle physics kit
available for Unity 3D.

Let's play some example scenes so you could get started quickly. Load the scene:

 **Scenes/Playground Scenes/Playground 1k - JPickup - Standard Input**

and Play it.

The vehicles in all these scenes typically begin with the engine off. For starting the engine:

1. Press <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (check out the telemetry
window)
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

##### Keys used

Key(s) | Function | Notes
:------:| -------- | -----
<kbd>K</kbd> | Ignition key | Press to move from "Off" to "Drive". Press and Hold for "Start". <kbd>ctrl+K</kbd> moves the key back to "Off".
<kbd>left</kbd><kbd>right</kbd> | Steering |
<kbd>up</kbd> | Throttle |
<kbd>down</kbd> | Brakes |
<kbd>shift</kbd> | Clutch | Actual vehicle setup uses a Torque Converter, which doesn't require active clutch. Still, the clutch can be used to completely disengage the engine from the transmission.
<kbd>space</kbd> | Handbrake | Affects rear wheels. Clutch should be used if vehicle uses a standard clutch to prevent the engine to stall.
<kbd>ctrl+space</kbd> | Toogle all brakes | Brakes are toggled in all wheels.
<kbd>R</kbd> | Reverse gear | If auto-shift is enabled R requires the vehicle to be nearly stopped and brakes released.
<kbd>N</kbd> | Neutral gear | Auto-shift will engage first gear when throttle is applied.
<kbd>Tab</kbd> | Gear Up | Auto-shift might revert to the previous gear
<kbd>Caps Lock</kbd> | Gear Down | Auto-shift might revert to the previous gear
<kbd>1</kbd>-<kbd>5</kbd> | Engage gear | Auto-shift might discard the change and choose a more convenient gear
<kbd>Page up</kbd><kbd>Page down</kbd> | Gear mode | Select the different gear modes if the vehicle has Automatic transmission (M P R N D L). The actual modes may be engaged or not depending on specific conditions (i.e. Reverse requires the vehicle to be nearly stopped).
<kbd>B</kbd> | Toggle telemetry data
<kbd>C</kbd> | Change camera
<kbd>F1-F4</kbd> | Select different camera modes
<kbd>Escape</kbd> | Reset scene
<kbd>T</kbd> | Toggle slow motion mode

##### Vehicle settings

The main component that implements the vehicle simulation is **[VP Vehicle Controller](../components/vehicle-controller.md)**.
The object **VPP Pickup** in the pickup test scene contains this component with all its settings to
play with:

< pic: inspector folded >

- **Axes:** references to the wheels and assign steering and brakes to them.
- **Steering:** steering angle, ackerman, toe.
- **Brakes:** brake torques, balance, handbrake.
- **Tires:** tire friction model and parameters.
- **Driveline:** driveline type and component setup (differentials, torque splitter). Current setup
	is AWD with main drive power applied at the rear axle and a torque splitter dynamically routing
	part of the power to the front axle.
- **Engine:** torque and power curves, rpm limiter, stall settings.
- **Clutch:** type of clutch and parameters. Using a torque converter is very handy when a real
	clutch simulation (Disc Friction) is not required.
- **Gearbox:** transmission type, gear ratios, auto-shift parameters.
- **Retarder:** typically used by heavy vehicles, not used at the pickup (zero levels).
- **Advanced / Experimental settings:** leave then untouched for now. [Learn more](../advanced/vehiclebase-reference.md#advanced-experimental-settings)

Suspension is handled by the VP Wheel Collider components:

< pic: scene + hierarchy + wheelcollider selected >

##### Other components

<: pic the other components, folded >

Input

Audio

Tire Effects

Telemetry

Visual Effects

Camera Target Config

##### Ground Materials




## Vehicle Physics Pro structure

These are the actual folders for the Vehicle Physics Pro Beta project:

    Assets
    |- Core
	|	|- Common Tools core
	|	|- Vehicle Physics core
	|	|	|- Base
	|	|	|- Blocks
	|	|	|- Components
	|	|	|- Editor
	|   |- Vehicle Physics core assets
	|- Extensions
    |- Scenes
	|- Vehicles
	|- World

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

!!! info "&fa-info-circle; Useful resources"

	- [Early Preview article in the Blog](http://www.edy.es/dev/2014/11/early-preview-of-vehicle-physics-pro/)
	- [Development screenshots and videos](https://twitter.com/VehiclePhysics/media)
	- [Miscellaneous topics explained](../advanced/misc-topics-explained.md)
	- [Data Bus reference](../advanced/databus-reference.md)

## Components

#### VPWheelCollider

Wheels are implemented with this component, which replaces the stock WheelCollider:

![Vehicle Physics Pro Wheel Collider](/img/vehicle-physics-pro-wheel-collider.png)

#### VPVehicleController and add-ons

Actual inspector for the vehicle GameObject. The Vehicle Controller component exposes several
development properties:

![Vehicle Physics Pro Beta Inspector](/img/vehicle-physics-pro-beta-inspector.png)
