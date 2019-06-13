# Differential block

The differential block consists of one input and two outputs. Differentials always split the input
torque 50% to each output. Torque transfer among outputs takes place afterwards depending on the
type of differential and the state of the input and the outputs.

The standard [Vehicle Controller](/components/vehicle-controller) exposes the differential
configuration under the [Driveline section](/components/vehicle-controller/#driveline).

Differential blocks may be used in any number and combination ([driveline examples](/blocks/driveline)).
All expected and unexpected effects are simulated.

![VPP Differential](/img/blocks/vpp-differential-inspector.png)

Gear Ratio
:	The input to output reduction ratio of the differential. Car specifications commonly refer to
	this ratio as **Final Ratio**. This setting is common to all differential types.

#### Open

A standard open differential, as mounted in most commercial vehicles.

![VPP Open Differential](/img/blocks/vpp-differential-open.png)

[Video: How a Differential works?](https://www.youtube.com/watch?v=SOgoejxzF8c)

#### Locked

A spool forcing both outputs to rotate at the same rate, with all the side effects.

![VPP Open Differential](/img/blocks/vpp-differential-locked.png)

Locked differentials are typically used in drifting. In normal situations the car will typically
refuse to steer.

#### Viscous

Outputs are coupled together based on the parameters. The lock state and and the torque transfer
depend on the difference of speed between both outputs.

![VPP Viscous Differential](/img/blocks/vpp-differential-inspector.png)

Preload (Nm)
:	The minimum torque that couples both outputs.

Power Stiffness (%)
:	Stiffness of the coupling between both outputs when the input applies forward torque (_power_).
	0.0 is an open differential. 1.0 is a locked differential.

Coast Stiffness (%)
:	Stiffness of the coupling between both outputs when the input applies reverse torque (_coast_).
	0.0 is an open differential. 1.0 is a locked differential.

The viscous differential can be set up to mimic an open differential, or in the extreme, a spool,
and virtually any combination in between. Examples:

| Type							| Preload	| Power Stiffnes | Coast Stiffness |
|-------------------------------|-----------|----------------|-----------------|
| Open							| 0			| 0				 | 0           	   |
| Locked						| (any)		| 1				 | 1               |
| Viscous by lock ratio (%)		| 0			| % < 1 		 | % < 1  		   |
| Viscous by torque (Nm)		| torque	| 0				 | 0               |

#### Clutch Pack

Lock state and torque transfer depend on the input torque engaging a clutch pack. They behave as
open differential when no torque is applied or one of the outputs has no resistance (i.e. when a
wheel is lifted).

Differentials in this category include Salisbury, Limited Slip (1-way, 1.5-way, 2-way), Powerflow,
Torque-Lock, VariLock...

![VPP Clutch Pack Differential](/img/blocks/vpp-differential-clutch-pack.png)

Clutch Preload (Nm)
:	Minimum torque transfer provided by the clutch pack. Outputs are coupled by this value.

Clutch Pack Friction
:	Coefficient of friction of the clutch pack.

Power Angle (degrees)
:	Ramp angle applied when the input receives forward torque (_power_).

Coast Angle (degrees)
:	Ramp angle applied when the input receives reverse torque (_coast_).

[Video: Working of Limited Slip Differential (clutch pack, ramp angles, 1-way, 2-way, 1.5-way)](https://www.youtube.com/watch?v=PEdnH7_7_yc)<br>
[Video: Understanding Limited SLip Differential (clutch pack, preload)](https://www.youtube.com/watch?v=WeLm7wHvdxQ)

#### Torque Bias

Input torque is biased among outputs proportionally to the output with less resistance. The ratio
defines how much torque can be biased to the output with most resistance. They behave as open
differential when no torque is applied or one of the outputs has no resistance.

Differentials in this category include Torsen, Quaife, Truetrac, _torque biasing / torque sensing_
differentials, _limited slip by ratio_ differentials...

![VPP Torque Bias Differential](/img/blocks/vpp-differential-torque-bias.png)

Torque Preload (Nm)
:	Minimum torque that couples both outputs.

Power Ratio (n)
:	Ratio n:1 of torque that is applied to the output with most resistance when the input receives
	forward torque (_power_).

Coast Ratio (n)
:	Ratio n:1 of torque that is applied to the output with most resistance when the input receives
	reverse torque (_coast_).

For example, a 4:1 Torsen differential can be configured by setting 0 preload and both ratios to 4.

## Diagnosing the differential effects

The best way is using the _wheel spin_ chart of the [Performance Display](/components/vehicle-telemetry/#vpperformancedisplay)
component. It shows the wheel circumference speed for each wheel. You can see the difference of
speed between left and right drive wheels, and compare how the differential affects it in the
different situations.

Here's the chart for an **open differential** when heavily accelerating after a corner. The inner
wheel losses traction and reduces the acceleration:

![VPP Open Differential Effect](/img/blocks/vpp-differential-effects-open.png)

The same situation with the default **clutch pack differential**. After a minimum slip the
differential locks and allows both drive wheels to gain traction at the same time, providing
better acceleration:

![VPP Open Differential Effect](/img/blocks/vpp-differential-effects-locking.png)

## References

[http://www.taylor-race.com/sites/default/files/understanding_differentials.pdf](http://www.taylor-race.com/sites/default/files/understanding_differentials.pdf)<br>
[http://www.racer.nl/tutorial/differentials.htm](http://www.racer.nl/tutorial/differentials.htm)<br>
[http://www.teamhealeytexas.com/Technical%20Articles/Differentials1.htm](http://www.teamhealeytexas.com/Technical%20Articles/Differentials1.htm)<br>
[http://www.intothered.dk/simracing/differential.html](http://www.intothered.dk/simracing/differential.html)<br>
[http://www.zhome.com/ZCMnL/tech/Torsen/Torsen.htm](http://www.zhome.com/ZCMnL/tech/Torsen/Torsen.htm)

