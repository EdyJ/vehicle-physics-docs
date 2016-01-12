# Features

Vehicle Physics Pro is the most complete, accurate and realistic vehicle physics kit available for
Unity 3D. It's based on a vehicle simulation model conceived, designed and implemented from scratch
for providing the most accurate vehicle physics on any condition.

### Applications

Racing games and simulators
:	Configure the vehicles applying the real-world techniques and tricks.

Training simulators
:	Apply the specifications of the real vehicle to Vehicle Physics Pro and develop a simulator for
	training drivers.

Prototyping
:	Experiment with any crazy idea you may have: two engines, one per front-rear axle? Observe the
	behavior and all the side effects!

### Ease of use

Vehicle Physics Pro comes with a set of ready-to-use components and vehicle prefabs to get you
started in minutes. The VPVehicleController component includes all the necessary features for
simulating most types of vehicles.

### Highly accurate simulation model

Vehicle Physics Pro vehicles exhibit all behaviors and side effects of each specific vehicle setup.
Even exotic effects like these happen in VPP:

- [Driveline windup](https://en.wikipedia.org/wiki/Driveline_windup) (also _axle binding_ or
	_driveline binding_) arises if the vehicle setup meets the same conditions. The binding can be
	clearly observed at the telemetry as accumulated torques and counter-torques affecting the
	wheels.
- Engine stall & inertial restart: leave a stalled vehicle go downwards a slope, press clutch, engage
	2nd gear, and release the clutch when the vehicle has gained some velocity. The engine restarts.
- Differential coupling: when the engine is off and a gear or Park is engaged, rotating one wheel
	causes a counter-rotation of the opposite wheel, the same exact amount but in the reverse
	direction.

None of the above have been explicitly implemented: all those effects are natural consequences of
the actual core design of the simulation model, proving its accuracy.

### Performance

The dynamics concept in the core of VPP is so simple that provides an outstanding performance while
keeping the accuracy of the simulation. This makes the kit perfectly suitable for mobile and low-end
systems. On high-end desktop and gaming platforms the dynamics solver can be set up for taking the
most precision out of these powerful systems.

!!! info ""
	VPP vehicles have been tested at update rates as low as 16 Hz (physics time step of 0.06)
	without noticeable adverse effects. This is a negligible impact on the CPU usage.

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

### Complete



#### Highly flexible and extensible

Any vehicle real of fictitious may be simulated in Vehicle Physics Pro. The dynamics model uses
connected functional blocks for implementing the power train.

Just connect the functional
blocks in any number and combination and make





