# Features

**Vehicle Physics Pro** is the most complete, accurate and realistic vehicle physics kit available
for Unity 3D. It's based on a vehicle simulation model conceived, designed and implemented from
scratch for providing accurate vehicle physics and dynamics on all conditions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdeJcpWNHsw" frameborder="0" allowfullscreen></iframe>

### Applications

Racing games and simulators
:	Configure and fine-tune the vehicles applying real-world techniques and tricks.

Training simulators
:	Apply the specifications of real vehicles to Vehicle Physics Pro and build a simulator for
	training drivers. [Example: Truck simulator](https://twitter.com/VehiclePhysics/status/705806025266434048)

Studying / researching
:	Design unbiased experiments by reproducing the same tests under different conditions and
	configurations. [Example: ABS vs. no-ABS test](https://www.youtube.com/watch?v=t0NFt3d-jbg)

Learning and Teaching
:	Learn how real vehicles and internal parts work: basics, requirements, behaviors, side-effects,
	configuration techniques, performance tips...

Prototyping
:	Experiment with any crazy idea you may have: two engines, one per front-rear axle? Why not.
	Observe the behavior and all the side effects!

### Easy to use

Vehicle Physics Pro comes with a set of ready-to-use components and vehicle prefabs to get you
started in minutes. The [VPVehicleController](../components/vehicle-controller) component
includes all the necessary features for simulating most types of vehicles.

### Highly accurate simulation model

VPP is consolidated on a solid vehicle dynamics model. There are no guesses nor arbitrary
assumptions. The design is physically accurate, so it accounts for all the expected and unexpected
behaviors and side effects.

Even exotic side effects like these happen in VPP:

- **[Driveline windup](https://en.wikipedia.org/wiki/Driveline_windup)** (also _axle binding_ or
	_driveline binding_) arises if the vehicle setup uses rigid shafts for connecting the wheels.
	The binding can be clearly observed at the telemetry as accumulated torques and counter-torques
	at the wheels, even with the vehicle stopped.

- **Engine stall & inertial restart:** release the clutch abruptly and the engine may (or may not)
	stall. Leave a stalled vehicle go downwards a slope, press clutch, engage 2nd gear, and release
	the clutch when the vehicle has gained some velocity. The engine restarts.

- **Accurate differential coupling:** when the engine is off and a gear or Park are engaged,
	rotating one wheel causes a counter-rotation of the opposite wheel, the same exact amount but
	in the opposite direction.

Nothing of the above has been explicitly implemented: all those effects are natural consequences of
the actual design of the core simulation model, proving its accuracy.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FuqO4gKDzKE" frameborder="0" allowfullscreen></iframe>

### High performance

The dynamics design in the core of VPP provides an outstanding performance while keeping the
accuracy of the simulation. This makes the kit perfectly suitable for mobile and low-end systems.
On high-end desktop and gaming platforms the dynamics solver can be set up for taking the most
precision out of these powerful systems.

!!! info ""
	VPP vehicles have been tested at update rates as low as 16 Hz (physics time step of 0.06)
	without noticeable adverse effects. This means that the performance impact of the entire Unity
	physics engine can be reduced without affecting the vehicle simulation.

The dynamics calculations are performed by a flexible integration solver. The substeps used by the
solver on each integration [can be configured](../advanced/misc-topics-explained/#solver-numeric-integration)
per-vehicle even in runtime, allowing the CPU usage to be carefully configured.
Example: you might configure the Unity physics to 50 Hz, the player's vehicle to 500 Hz (10
substeps) and the non-player vehicles to 100 Hz (2 substeps).

### Straightforward integration

VPP easily integrates into existing projects.

- Quality C# code
- Namespace `VehiclePhysics`
- Menu integration (Component > Vehicle Physics)
- Intuitive inspectors

The VPP kit is plain C# code without any external dependency. The code uses the namespace
`VehiclePhysics` for preventing conflicts with other code.

### Fully flexible and extensible

Any wheeled vehicle real of fictitious may be simulated in Vehicle Physics Pro. The dynamics model
connects several _functional blocks_ for implementing the power train.

You can [design your own vehicles](/advanced/custom-vehicles) combining the provided functional
blocks (engine, gearbox, differentials...) in any number and combination you want. Two engines,
each one powering one axle? Sure. Twenty wheel drive, all connected to a single gearbox and engine,
using a myriad of differentials, torque splitters and gear reductions? Why not.

You can even [write your own functional blocks](/advanced/custom-blocks) and plug them into your
vehicles along with all other standard blocks. Want to implement a turbine engine? Continuously
Variable Transmissions (CVT)? It's easy in Vehicle Physics Pro!

You may also [write add-on components](/advanced/custom-addons) that work with any VPP vehicle,
including custom ones. Many VPP features such as audio, visual effects, ground materials, etc are
implemented that way, so you may either use the provided components or write your own.

### Advanced simulation features

Multi-body vehicles
:	A vehicle may be composed of several rigidbodies, each one with several wheels attached.
	Articulations between rigidbodies are implemented with the VPVehicleJoint component. Example:

	<iframe width="560" height="315" src="https://www.youtube.com/embed/2JHrWiQV5mI" frameborder="0" allowfullscreen></iframe>

Dynamic suspension
:	The suspension of a group of wheels is dynamically adjusted to adapt to the supported weight
	keeping a constant ride height. Tractor trucks use this kind of suspension implemented as air
	bags.

	Example: when the truck starts in the video below (~sec 30) the rear wheels increase their
	suspension stiffness to adapt to the trailer's weight.

	<iframe width="560" height="315" src="https://www.youtube.com/embed/QYRHoKYw_rA" frameborder="0" allowfullscreen></iframe>

Liquid & solid cargo
:	The liquid cargo component simulates a fluid sloshing in a closed tank. The solid cargo
	component allows to easily simulate a solid cargo: position in the vehicle, volume occupied,
	weight...

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		<img class="clickview" src="/img/about/vpp-liquid-cargo.png" alt="Vehicle Physics Pro - Liquid Cargo component">
		<img class="clickview" src="/img/about/vpp-solid-cargo.png" alt="Vehicle Physics Pro - Solid Cargo component">
	</div>

Specialized vehicle support
:	Special vehicle controllers are provided for two-wheeled vehicles (experimental), tracked
	vehicles and bulldozer.

	<div class="imagegallery" sm="1" md="2" lg="3" style="display:none">
		<img class="clickview" src="/img/about/vpp-motorbike-controller.png" alt="Vehicle Physics Pro - Motorbike controller (experimental)">
		<img class="clickview" src="/img/about/vpp-tracked-vehicle-controller.png" alt="Vehicle Physics Pro - Tracked vehicle controller">
		<img class="clickview" src="/img/about/vpp-bulldozer-controller.png" alt="Vehicle Physics Pro - Bulldozer controller">
	</div>

Articulated vehicles support
:	VPP provides add-on components for controlling hydraulic mechanisms such as steering, booms,
	buckets, etc. found in typical machinery.

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		<img class="clickview" src="/img/about/vpp-wheel-loader-control.png" alt="Vehicle Physics Pro - Wheel Loader control">
		<img class="clickview" src="/img/about/vpp-excavator-control.png" alt="Vehicle Physics Pro - Excavator control">
	</div>

### Framework for autonomous vehicles

Self-drive
:	A complete "follow target" component that controls throttle, brake and steering for reaching the
	target within the configured conditions. Waypoint systems, road lanes, and AI algorithms may
	be developed by feeding this component with the target and conditions in runtime.

	![Vehicle Physics Pro - Self-drive component](/img/about/vpp-self-drive.png){: .img-small .clickview }

Automated test framework
:	A base class VPAutomatedTestBase providing an easy to use API for implementing automated and
	repeatable tests. Automated acceleration and braking tests are provided.

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		<img class="clickview" src="/img/about/vpp-acceleration-test.png" alt="Vehicle Physics Pro - Acceleration test">
		<img class="clickview" src="/img/about/vpp-braking-test.png" alt="Vehicle Physics Pro - Braking test">
	</div>

	The complete telemetry data of each test may be recorded and exported to CSV
	for further analysis via VPTelemetryExporter component.

Snapshots
:	The complete state of the vehicle may be recorded, then restored any number of times. This
	provides the same initial conditions in repeatable tests.



