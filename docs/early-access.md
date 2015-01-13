
# Early Access {: .title }

Early Access to Vehicle Physics Pro is available with the Professional License add-on ($200).
{: .title }

---


!!! warning "&fa-warning; **Alpha stage**"

	Please have in mind that:

	- Some components and scripts are yet to be completed and/or will be significantly modified.
	- Some features already available in the old Edy's Vehicle Physics are yet to be ported here
	(i.e. skidmarks, smoke)
	- The component [VPVehicleController](components/vehicle-controller.md) is under active development and expected to receive
	important changes.
	- Repository contains code, scenes and libraries from past development iterations.
	It will be cleaned up for the beta stage.
	- Documentation is being written actively. Some parts are still missing, and documented features
	may be described in a different way than they work right now.

	**The project is actually being developed in <u>Unity 4</u>**. There is a very serious
		bug at the WheelCollider in Unity 5 (beta 19 when writing this) that turns the vehicles
		unstable above certain speed (~100 Km/h or 60 mph). The project will be upgraded to Unity 5
		as soon as this bug is resolved. The package will be compatible with both Unity 4 and 5.

!!! info "Feedback is requested on:"

	- General: usage, workflow, integration in current projects.
	- Scripts: class and member naming.
	- Simulation: components, settings, behavior.
	- Documentation: things you would want to learn, know about, or are not fully understood.
	- Documentation: typo and grammar fixes.

	Feel free to write me to [edytado@gmail.com](mailto:edytado@gmail.com).

### Repositories

As professional licensee you should have received credentials for accessing the repositories. You
can browse them at [projects.edy.es](http://projects.edy.es).

- **Vehicle Physics Pro** is my actual Unity project as sandbox for development. It contains all
the evolutions of the vehicle physics scripts since I started researching my own tire model.
- **Common Tools core** is a submodule with common tools and scripts. Goes to "Assets/Core/Common Tools core"
	in the Unity project.
- **Vehicle Physics core** is the submodule that actually contains the latest vehicle physics
scripts only. Goes to "Assets/Core/Vehicle Physics core" in the Unity project.

### Setup instructions

1.	Clone the **Vehicle Physics Pro** repository locally.

		> git clone ssh://git@projects.edy.es/edy/vehicle-physics-pro.git

2.	Check out the **wip** branch (_master_ branch is an obsolete iteration)

		> cd vehicle-physics-pro
		> git checkout wip

3. 	Fetch and update the submodules:

		> git submodule update --init --recursive

4.	Now you can open the project at the folder **vehicle-physics-pro** with Unity 4.

### Where to look at

The latest developments are located in the folder **NinjaCamp v2**. The actual sandbox scene I'm
using for development and testing is **NinjaTest v2** in this folder.

When playing the scene the vehicle begins with the engine off. For starting the engine:

1. Press <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (check out the telemetry window)
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>Ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

The main component that implements the vehicle simulation is **[VPVehicleController](components/vehicle-controller.md)**.
Open the scene NinjaTest v2, select the object NinjaVehicle v2, and there you have the component
with all its settings to play with. The actual setup of the vehicle is:

- **Engine:** powerful engine (140 hp) with rather realistic stall settings. Ignition key is controlled
with <kbd>K</kbd> as described above.
- **Clutch:** torque converter, which doesn't require an active clutch pedal, and makes the engine
harder to stall. Still, clutch can be manually engaged with <kbd>shift</kbd>.
- **Gearbox:** manual 5-speed gearbox with auto-shift. Forward gears are automatically engaged. Reverse
gear is engaged with <kbd>R</kbd>. Neutral gear is engaged with <kbd>N</kbd>. Forward gears can
be manually engaged with <kbd>1</kbd>-<kbd>5</kbd>. If enabled, Park mode is toggled with <kbd>P</kbd>.
- **Differential:** 20% viscous differential at the driven rear axle.
- **Brakes:** 70:30 balanced to the front. Handbrake is controlled with <kbd>Space</kbd> and affects
the rear axle. <kbd>Ctrl+Space</kbd> toggles all brakes in all wheels.

	Note that handbrake affects the powered wheels. Thus, best practice is to engage clutch (<kbd>shift</kbd>)
when applying handbrake for avoiding the engine to stall.

- **Tire friction:** Isotropic Pacejka friction with a peak coefficient of friction of 1.1. Tire
relaxation is enabled with a rate simulating standard road wheels.
- **Solver:** Euler with two integration steps. Physic step is 0.02 seconds (50Hz), so vehicle
calculations are done at 100Hz.
- Other settings are mostly part of the development tests.

### Code and scripts

The vehicle physics scripts are inside the **Core/Vehicle Physics core** folder. The main script
to look at is `VPVehicleController.cs`. This class derives from `VPVehicleControllerBase.cs` and
overrides its virtual methods for implementing the vehicle's internals with the available classes:
([engine](classes/engine.md), [gearbox](classes/gearbox.md), [differential](classes/differential.md)
...). [VPVehicleControllerBase](classes/vehicle-controller-base.md) contains the integration solver
class ([VPSolver](classes/solver.md)) and the wheels ([VPCWheel](classes/wheel.md)), which receive
the final torques and calculate the tire forces.

Vehicles are internally modeled as a graph of connected objects that derive from [VPComponent](classes/component.md).
Each component can receive input torques and produce output torques. Wheels ([VPCWheel](classes/wheel.md))
are components that receive torques at their inputs only. Motors ([VPCEngine](classes/engine.md))
are components that produce torques at their outputs only. Other components have torque inputs and
torque outputs. This allows to simulate any kind of internal configuration of the vehicle by
connecting components in any combination.

Vehicle components are created, initialized and connected within the [VPVehicleController](components/vehicle-controller.md)
object, `OnInitialize` method. Check out the comments in the file `VPVehicleControllerBase.cs` for
indications on how the vehicles are implemented and simulated by overriding the virtual methods.

