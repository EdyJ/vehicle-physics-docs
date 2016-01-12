# Getting started

**Welcome to Vehicle Physics Pro!** The most complete, accurate and realistic vehicle physics kit
available for Unity 3D.

Let's play some example scenes so you could get started quickly.
Start with Scenes/Playground Scenes/P


Vehicles typically begin with the engine off. For starting the engine:

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
<kbd>Page up</kbd><kbd>Page down</kbd> | Gear mode | Select the different gear modes in Automatic transmission (M P R N D L). The actual modes may be engaged or not depending on specific conditions (i.e. Reverse requires the vehicle to be nearly stopped).
<kbd>alt+mouse</kbd> | Camera movement and zoom
<kbd>Escape</kbd> | Reset scene
<kbd>T</kbd> | Toggle slow motion mode


The main component that implements the vehicle simulation is **[VPVehicleController](../components/vehicle-controller.md)**.
The object **VP Test Vehicle** in the pickup test scene contains this component with all its
settings to play with.

The actual setup of the vehicle is:

- **Engine:** powerful engine (140 hp) with rather realistic stall settings.
- **Clutch:** torque converter, which doesn't require an active clutch pedal, and makes the engine
harder to stall. Still, clutch can be manually engaged with <kbd>shift</kbd>.
- **Gearbox:** manual 5-speed gearbox with auto-shift enabled
- **Transmission:** AWD with main drive power at the rear axle and a torque splitter routing part of
the power to the front axle.
- **Brakes:** 70:30 balanced to the front.
- **Steering:** standard Ackerman geometry.
- **Tire friction:** Isotropic Pacejka friction with a peak coefficient of friction of 1.1. Tire
relaxation is enabled with a rate simulating standard road wheels.
- **Solver:** Euler with two integration steps. Physic step is 0.02 seconds (50Hz), so vehicle
calculations are done at 100Hz.

### Vehicle Physics Pro insights

Current project layout:

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

### Components

#### VPWheelCollider

Wheels are implemented with this component, which replaces the stock WheelCollider:

![Vehicle Physics Pro Wheel Collider](/img/vehicle-physics-pro-wheel-collider.png)

#### VPVehicleController and add-ons

Actual inspector for the vehicle GameObject. The Vehicle Controller component exposes several
development properties:

![Vehicle Physics Pro Beta Inspector](/img/vehicle-physics-pro-beta-inspector.png)
