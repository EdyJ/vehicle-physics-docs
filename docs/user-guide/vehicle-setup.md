# Vehicle Setup Guide

This guide assumes you have your vehicle rigged according to the [Creating a Vehicle](vehicle-creation.md)
section. Your vehicle should have already passed the first test drive.

- It's recommended to configure at least the engine audio in the component VPAudio.
- If you're modifying the values in runtime in the Editor, **remember to backup your values before
	exiting Play mode**. Either note them down to paper, or use the Copy Component / Paste Component
	Values functionality from the component's context menu.

---

[TOC]

---

### Mass

Set the vehicle's mass at the rigidbody.

### Suspension

The suspension is configured per-wheel at the `VPWheelCollider` components.

The **suspension distance (m)** should be configured for matching the vehicle's specifications.

The **anchor (%)** simply defines how much the suspension is compressed in the 3D model (in Edit time).
0 means the suspension is fully extended and can only be compressed from the original position. 1
means the suspension is fully compressed and can only be extended. 0.5 means the suspension is half
compressed.

##### Springs

Springs sustain the weight of the vehicle. As rule of thumb, configure the **spring rate (N/m)**
so each suspension can support up to twice of the distributed weight. The maximum weight of each
wheel is displayed at the `VPWheelCollider` inspector.

Example:

- Vehicle mass: 4000 Kg.
- For 4 wheels, this is 1000 Kg each
- Suspension springs should support up to 2000 Kg each.
- Thus, if the weight is evenly distributed at rest each suspension would be at half of its travel.

Of course, you can always apply real values to the springs or any other values that fit better
with your vehicle.

##### Dampers

Dampers (aka _shock absorbers_) limit the suspension movement and damp the spring oscillations.
They damper setup affects the angular momentum of the vehicle on weight shifting situations
(accelerating, braking, cornering...).

The **damper rate (N/ms<sup>-1</sup>)** should be configured so the
oscillating behavior resembles the real vehicle. You can drop the vehicle from some height
(<kbd>Enter</kbd> key by default) and observe the result. A rough starting point for the damper
rate is around 1/10 of the spring rate.

### Center of Mass

Add a gameobject to the vehicle and name it **CoM**. Set its reference at VPVehicleController >
**Center Of Mass**. You might want to set **Runtime Com Changes** as "Editor Only", so you could
modify the position of the CoM and see the results in runtime.

Longitudinal position of the CoM (Z):

- Start at the mid-point between the vehicle's axles.
- Move it slightly towards the position of the engine.
- If the specifications include the weights on each axle, then move the Z position of the CoM while
	watching the telemetry until the weights match the specifications. The VPTelemetry component
	can be configured to show the load in Kg (option **Show load in	Kg**).

Vertical position of the CoM (Y):

- A rough estimation is slightly above the chassis.
- You might find this value as Center of Gravity Height in the vehicle specifications.
- It can also be estimated by watching a similar vehicle in equilibrium on two side wheels ([as in this video](https://www.youtube.com/watch?v=viXprD1CkXg)).
- Some related articles:
	- [Finding the Center of Gravity Height](http://www.longacreracing.com/technical-articles.aspx?item=42586)
	- [Measured Vehicle Center-of-Gravity Locations - Including NHTSA's Data Through 2008 NCAP](http://papers.sae.org/2010-01-0086/)

The sideways position of the CoM (X) should be 0 (middle of the vehicle).

After configuring the CoM you will probably need to make adjustments to the suspension for
accommodating the new weight distribution. Typically, the spring rates should be adjusted so all
suspensions reach the same compression ratio at rest. The damper rates should also be fine tunned
accordingly as well.

### Engine

[_Engine graphic_]

The engine torque curve is the sum of two curves: _ideal_ torque curve (dotted orange) and
_friction_ torque curve (dashed red). The result of adding those curves together is the _final_
engine torque curve (green). When you watch at a [dyno torque curve](https://www.google.es/search?q=dyno+curve&tbm=isch)
you're really watching this green curve.

The **final torque curve** is guaranteed to cross three key values:

- **Idle Rpm** (yellow circle): rpms and torque (Nm) at idle.
- **Peak Rpm** (white circle): rpms and torque (Nm) where the _ideal_ engine produces the maximum
	torque. This not necessarily the same point where the maximum _final_ torque is reached.
- **Max Rpm** (orange circle): the value where the _final_ engine torque becomes zero.

The **Curve Bias** parameters have some influence in the transitions between Ilde and Peak.

The **friction torque curve** produces the engine brake effect when no throttle is applied. Its
settings have also effect on the shape of the final torque curve:

- **Torque (Nm)**: friction torque at zero rpms
- **Rotational ($ \mu $)**: lineal coefficient of friction with rpms
- **Viscous ($ \mu^2 $)**: quadratic coefficient of friction with rpms

The effect of the friction parameters can be lively observed at the graph.

The **inertia** defines how much "efforth" takes to modify the rpms in the engine. Formula 1 style
engines have very little inertia (0.1-0.2), while trucks have a large inertia in their engines
(8-10). Standard cars are around 0.4 and 1.

If the engine **Can Stall** the parameters can be configured as well:

- **Stall Bias**: how "easy" is to stall the engine once the rpms fall below the idle value. 0 means
	the engine is hard to stall. 1 means easy to stall.
- **Extra Friction (Nm)**: a stalled engine increments the engine friction by this value.
- **Starter Reliability**: how "easy" is to the starter (<kbd>K</kbd> key by default) to start
	the engine. 0 won't likely be able to start the engine. 1 will quickly start the engine.
	Intermediate values (depending on the actual engine settings) gradually add some difficulty and
	random factor.

!!! Info "&fa-thumbs-o-up; Pro-Tip"
	The Starter Reliability can be used to simulate external factors such as drained batteries, cold
	temperatures, mechanical failures, and so on.

!!! Info "&fa-thumbs-o-up; Pro-Tip"
	As happens in reality, a stalled engine can also be restarted inertially. That is leaving the
	vehicle running down a slope in neutral, then engaging a gear and releasing the clutch.

### Gearbox

The **Transmission type** can be either manual or automatic:

- **Manual**: gears are engaged individually, with a minimum interval among each change (**Gear
	change time (s)**).
	- **Auto shift** is also available in Manual transmissions.
- **Automatic**: gears are progressively engaged, with a smooth transition in both torque and rpms
	among each gear.
	- Each gear change takes **Gear transition time (s)** to shift from a gear to another.
	- A minimum of **Shift interval (s)** time is enforced before a new gear shift.

[Pics of manual vs. automatic transmissions]

The **Gear Ratios** define the power ratio that is applied to the engine torque. If the first gear
ratio is 3.84, this means that the torque at the output of the gearbox in first gear will be 3.84
times the torque applied by the engine. The rotational velocity will be 3.84 times slower as well.

Any number of gears and ratios can be configured for both forward and reverse gears. Standard cars
have 4 - 6 gears. Trucks can have 12, 18 or even more.

[Pics of car vs gear ratios]

Requirements for gear ratios are:

- Gear ratios of zero are not permitted. This is what Neutral gear is for.
- Automatic transmission and Auto-shift in Manual transmission require the forward gear ratios to
	be sorted in decreasing order.
- Reverse gears are not automatically engaged. The automated modes engage the first reverse gear
	when required, but other reverse gears should be manually engaged via manual gear shift.

In order not to change gear up if the drive wheels have lost their traction, the **Auto shift** mode
only engages the 2nd gear if the vehicle's speed is above the **2nd gear min speed (m/s)** value.

The Park mode is characteristic of the Automatic transmissions, but it can be simulated in Manual
transmissions as well (**Allow Park mode**).