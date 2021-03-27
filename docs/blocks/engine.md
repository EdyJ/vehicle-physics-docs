# Engine block

The Engine block simulates a standard combustion engine.

![VP Vehicle Controller engine](/img/blocks/vpp-engine-inspector.png){: .clickview }

##### Legend

Horizontal: rpm. Vertical: torque in Nm, power in Kw.

- **Solid green:** engine torque (Nm). Vertical mark at the peak torque.
- **Solid blue:** engine power (Kw). Vertical mark at the peak power.
- **Solid red:** engine friction torque (Nm).
- **Circles:** configured torque and rpm values (Idle Rpm, Peak Rpm and Max Rpm parameters).
- **Dashed green:** engine torque without torque cap (Nm) (Torque Cap option).
- **Dotted orange:** raw combustion torque (Nm). Engine torque results of subtracting the engine friction
	torque from this combustion torque.
- **Dashed purple:** specific fuel consumption (g/kWh) (Fuel Consumption parameters).
- **Dotted white:** throttle map at idle and low rpm (Active Idle parameters).
- **Vertical dashed orange**: configured rpm limit (Rpm Limiter option).

##### Engine Specifications

#### Torque curve

The torque curve is mostly defined with the Idle, Peak and Max Rpm parameters. Circles in the graph
represent these settings (horizontal: rpm, vertical: torque in Nm). **Curve Bias** adjusts the
shape of the curve.

The actual engine specifications (Max Power, Max Torque, etc) are calculated and displayed below
the graph.

Idle Rpm
:	Rpm, torque (Nm) and curve bias when no throttle is applied.

Peak Rpm
:	Rpm, torque (Nm) and curve bias when the engine generates most raw combustion torque. Due to the engine
	friction the actual peak torque may be produced at different rpm (check specifications below
	the graph).

Max rpm
:	Maximum rpm the engine can reach with its own torque.

#### Inertia

The rotational inertia of the engine as measured in the output shaft (kg·m²).

This value defines how the engine resist to changes in its rpm. Higher values reduce the rpm change
rate. Lower values increase the rpm change rate. In other words, higher inertia values require more
torque to change the rpm, and lower values require less torque to change rpm.

Main effects of the engine inertia:

- How fast the rpm change when pressing and releasing throttle.
- Engine brake, especially when braking and upshifting.

#### Engine friction

Torque exerted by the engine when throttle is not applied as measured in the output shaft (Nm).
Engine friction configures:

- The engine brake based on rpm.
- How fast the engine returns to idle rpm when lifting throttle in neutral.

Engine friction torque is calculated as:

$$Tf = frictionTorque + w \cdot{rollingFriction} + (w \cdot{rollingFriction})^2$$

Where $Tf$ is the resulting engine friction torque in Nm and $w$ is the angular velocity of the
engine in rad/s.

Torque
:	_frictionTorque_ in the formula. Minimum friction torque (Nm) always applied by the engine.

Rotational
:	_rollingFriction_ in the formula. Coefficient multiplied by the angular velocity.

Viscous
:	_viscousFriction_ in the formula. Coefficient multiplied by the angular velocity squared.

#### Torque Cap

&fa-warning:lg; Work In Progress
{: .alert .alert-warning }

#### Rpm Limiter

#### Idle Control

The idle state can be enforced in two ways:

- **Passive:** The engine applies the exact torque that compensates the friction at idle rpms.
	Works better with a steep friction curve.
- **Active:** Vehicle's electronic system actively applies as much torque as available for
	keeping the idle rpms.

#### Stall

With **Can Stall** enabled the engine stalls if the rpms fall below the calculated stall rpms. This
is the point in the graph near the origin where the torque curve is negative. The **Stall
Sensitivity** settings helps adjusting the stall point. Check out the calculated values in the
inspector for the exact data.

#### Fuel Consumption


References:

[Brake Specific Fuel Consumption (BSFC)](https://en.wikipedia.org/wiki/Brake_specific_fuel_consumption)<br>
[Fuel consumption analysis of motor vehicle](http://www.posterus.sk/?p=14506)<br>
[Fuel densities](https://en.wikipedia.org/wiki/Diesel_fuel#Fuel_value_and_price)<br>