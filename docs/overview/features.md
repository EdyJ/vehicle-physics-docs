# Vehicle Physics Pro features


Vehicle Physics Pro is the most complete, accurate and realistic vehicle physics kit available for
Unity 3D.

VPP is based on a simulation model conceived, designed and implemented from scratch for providing
the most accurate vehicle physics and dynamics on any condition.

### Ease of use



### Performance

The dynamics concept in the core of VPP is so simple that provides an outstanding performance while
keeping the accuracy of the simulation. This makes the kit perfectly suitable for mobile and low-end
systems. On high-end desktop and gaming platforms the dynamics solver can be set up for taking the
most precision out of these powerful systems.

VPP vehicles have been tested at update rates as low as 16 Hz (physics time step of 0.06) without
adverse effects.

The dynamics calculations are performed by an integration solver which can be configured per-vehicle
for


### Complete

Components provided


### Configure like the real thing

Specifications and data for real-world vehicles can be configured directly in VPP for simulating
them.


### Highly accurate core design

VPP vehicles exhibit all behaviors and side effects of each specific vehicle setup. Even exotic
effects like these happen in VPP:

- [Driveline windup](https://en.wikipedia.org/wiki/Driveline_windup) (also _axle binding_ or
	_driveline binding_) arises if the vehicle setup meets the same conditions. The binding can be
	clearly observed at the telemetry as accumulated torques and counter-torques affecting the
	wheels.
- Engine stall & inertial restart: leave a stalled vehicle go downwards a slope, press clutch, engage
	2nd gear, and release the clutch when the vehicle has gained some velocity. The engine restarts.
- Differential coupling: when the engine is off and a gear or Park is engaged, rotating one wheel
	causes a counter-rotation of the opposite wheel, the same exact amount but in the reverse
	direction.

Nothing of the above has been explicitly implemented: all those effects are natural consequences of
the core dynamics design, proving its accuracy.


### Flexible block-based system

Any vehicle real of fictitious may be simulated in Vehicle Physics Pro. Just connect the blocks in
any number and combination and make


### Applications

Racing games

Training simulators

Prototyping





### Highly extensible
