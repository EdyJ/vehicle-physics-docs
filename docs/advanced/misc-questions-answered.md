# Miscelaneous questions answered

[TOC]

## Solver / Numeric Integration

#### Euler or Runge-Kutta 4 (RK4)?

RK4 adds a kind smoothing to the calculations, so rapid changes in the integrated data
are smoothed in some amount. On the other hand, Euler allow fast changing values, provide
immediate response, and the number of substeps can be raised for better accuracy.

RK4 always takes 4 integration substeps. Personally I prefer to use Euler with 4 substeps rather
than RK4.

#### Euler substeps

**Substeps** are subdivisions of the Unity physics time steps. Euler can use from 1 to any
number of substeps. Runge-Kutta 4 (RK4) takes 4 substeps always.

The more substeps, more precise are the results but take more CPU. However I've noticed no
significant penalty on using 1 to 8 substeps. CPU usage as shown at the profiler gets increased
from 10 substeps and above.

Some subjective recommendations:

Substeps | Comments
-------- | ---------------
1 |	Non-player vehicles that don't require precise physics such traffic, parked cars, etc.
**2** | Minimum recommended for any player vehicle or "active" non-player vehicle (i.e. opponents) that require correct physic behavior.
4 | Good value for having reasonably precise results.
8 | Nice value for having good precise results. Profiler tests show no significant penalty on using from 1 to 8 substeps.
20 | Maximum recommended value. With Unity's default physic step (50Hz) the vehicle does its internal calculations at 1000Hz (20 x 50hz).

Reaching 40 or more substeps is typically not necessary nor recommended. Some components exhibit
numerical oscillations on high amount of substeps.

Final value depends on the specific project: CPU requirements, number and type of vehicles, expected
precision of the physic data...

#### Vehicle shakes or becomes instable

If you observe values that are quickly oscillating at the telemetry then either change the
integration method or adjust the substeps in the Euler method:

- A single substep is likely to cause oscillating values, but usually they don't have a noticeable effect.
- 2-8 substeps are stable in most situations.
- 30-50 or more substeps are not recommended as the numerical oscillations can get increased.

If the vehicle becomes instable at high speeds then either increase the tire relaxation rate or
disable the tire relaxation feature. At high speeds low relaxation rates can enter in resonance
with lateral forces destabilizing the vehicle.

!!! Info "&fa-thumbs-o-up;"
	Tire relaxation rates can be used to simulate tires targeted to different speeds. Tires with
	low spring rates become difficult to drive at high speeds.


## Engine component

#### It's difficult to stall

The **Idle Control** setting defines how the idle rpms are enforced:

- **Active**: Vehicle's electronic system actively applies as much torque as available for keeping
	the idle rpms.
- **Passive**: Engine applies the torque that compensates the friction at idle rpms. Works better
	with a steep lineal friction setting. Also, requires the throttle to be applied for starting
	with the ignition key.

The Passive mode is much easier to stall, but requires configuring the engine friction in a specific
way.

Increasing the **Stall bias** setting makes the engine more sensitive to rpms below idle. Check out
the calculated stall rpm value at the inspector, below the engine graph.

#### Stalls too easy

Disabling **Can Stall** ensures the engine never stalls. Assuming Can Stall is enabled:

- Reduce the **Stall Bias** value. Check out the calculated stall rpm value at the inspector, below the engine graph.
- Set **Idle Control** to **Active**.
- Change the **Clutch Type** to **Torque Converter** in Clutch Settings.

