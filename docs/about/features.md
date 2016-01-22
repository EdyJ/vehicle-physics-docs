# Features

**Vehicle Physics Pro** is the most complete, accurate and realistic vehicle physics kit available
for Unity 3D. It's based on a vehicle simulation model conceived, designed and implemented from
scratch for providing accurate vehicle physics and dynamics on any condition.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SdeJcpWNHsw" frameborder="0" allowfullscreen></iframe>

### Applications

Racing games and simulators
:	Configure and fine-tune the vehicles applying the real-world techniques and tricks.

Training simulators
:	Apply the specifications of real vehicles to Vehicle Physics Pro and build a simulator for
	training drivers.

Prototyping
:	Experiment with any crazy idea you may have: two engines, one per front-rear axle? Why not.
	Observe the behavior and all the side effects!

Learning and Teaching
:	Learn how real vehicles and internal parts work: basics, requirements, behaviors, side-effects,
	configuration techniques, performance tips...

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

- **Engine stall & inertial restart:** release the clutch abruptly and the engine may stall. Leave
	a stalled vehicle go downwards a slope, press clutch, engage 2nd gear, and release the clutch
	when the vehicle has gained some velocity. The engine restarts.

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

You can design your own vehicles combining the provided functional blocks (engine, gearbox,
differentials...) in any number and combination you want. Two engines, each one powering one axle?
Sure. Twenty wheel drive, all connected to a single gearbox and engine, using a myriad of
differentials, torque splitters and gear reductions? Why not.

You can even write your own functional blocks and plug them into your vehicles along with all other
standard blocks. Want to implement a turbine engine? Continuously Variable Transmissions (CVT)? It's
easy in Vehicle Physics Pro!

### And much more!

- VR enabled. [Try the demos](demos)
- Highly detailed documentation
- [GIT repository access](/advanced/git-repository-setup) (Professional and Enterprise licensees)
- Redmine tracking system access (Enterprise licensees)



