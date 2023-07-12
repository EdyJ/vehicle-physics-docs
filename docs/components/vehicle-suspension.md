# Vehicle Suspension

Suspension in vehicles may be configured in several ways with several components.

VPWheelCollider
:	Provides the base suspension properties: suspension distance, base spring and damper rates, anchor
	position (attachment point).

VPAntiRollBar
:	A configurable link between the suspension of two wheels in the same axle that enforces a limit in
	the difference of the suspension travel.

VPAdvancedDamper
:	Provides advanced damper features: bump, rebound, slow/fast bump, slow/fast rebound. This component
	overrides the base damper rate specified in VPWheelCollider.

VPProgressiveSuspension
:	Increases the spring rate, and optionally the damper rate, based on the suspension compression. This
	may be used to implement [_leaf springs_](https://en.wikipedia.org/wiki/Leaf_spring), or _bump stops_ at the ending segment of the suspension travel.

VPDynamicSuspension
:	Automatically adjust the suspension springs in one or more axles to enforce a specified compression
	ratio. This allows the suspension to adapt itself to external loads such as cargo.

### VPWheelCollider

The base suspension properties are specified in the VPWheelCollider component for each individual wheel.

![VPWheelCollider inspector suspension](/img/components/vpp-wheelcollider-inspector-suspension.png){: .img-medium .clickview }

See [VPWheelCollider Suspension](/components/wheel-collider/#suspension-parameters) for details.

### VPAntiRollBar

[Anti-roll bars](https://en.wikipedia.org/wiki/Anti-roll_bar) (also "stabilizer bars" or "sway bars")
_connect_ the two wheels of the same axle allowing a limited degree of freedom between their
suspensions. When one of the wheels is pushed upwards, the stabilizer bar transfers a portion of
that compression force to the other wheel, so its suspension compress as well. This reduces the
body lean in turns at that axle.

![VPAntiRollBar inspector](/img/components/vpp-anti-roll-bar.png){: .img-medium .clickview }

Axle
:	The axle this anti-roll bar component will be attached to. 0 is first axle, 1 is second axle and
	so on.

Mode
:	Several working modes are provided:

	- Stiffness: configures the stiffness ratio of the bar.
	- Spring rate: configures the spring rate of the bar. The spring is applied based on the
		difference of travel between both suspensions.
	- Legacy: applies an anti-roll rate based on the difference of compression ratio between both
		suspensions.

Stiffness
:	0 removes the anti-roll effect (fully elastic bar). 1 means a rigid, totally inelastic bar. The
	effect is achieved by shifting the given ratio of suspension properties (spring, rate) among
	the wheels depending on their relative contact depths.

Spring Rate
:	Spring rate transferred from the less compressed to the most compressed suspension. For example,
	if the difference in the suspension travel is 10 cm, then the transferred rate will be 0.1 x
	Spring Rate.

Anti-roll rate
:	Legacy mode only: amount of spring rate transferred between suspensions based on the difference
	in their compression ratios.

Emit Telemetry
:	Includes this component in the telemetry system. These channels are added: CompressionLeft,
	CompressionRight, CompressionDiff, SpringLeft, SpringRight.

Here's an example of the effect of the anti-roll bar in the front axle. It shifts the weight of the
vehicle to the rear axle so it gains traction in corners. Without front anti-roll bar the rear inner
wheel just lifts up:

<div class="imagegallery" sm="2" md="2" lg="2" style="display:none">
	<img class="clickview" src="/img/components/vpp-anti-roll-bar-effect-01.jpg" alt="Without front anti-roll bar">
	<img class="clickview" src="/img/components/vpp-anti-roll-bar-effect-02.jpg" alt="With front anti-roll bar">
</div>

### VPAdvancedDamper

Provides realistic damper properties: bump, rebound, fast/slow bump, fast/slow rebound. Using this component
overrides the base _Damper Rate_ value in the affected VPWheelColliders.

![VPAdvancedDamper inspector](/img/components/vpp-advanced-damper-inspector.png){: .img-medium .clickview }

&fa-info-circle:lg; VPAdvancedDamper is applied _before_ other suspension components that modify the
suspension damper rates.
<br><br>
For example, if both VPAdvancedDamper and VPProgressiveSuspension are applied to the same wheel, then
both will produce the expected effect. First VPAdvancedDamper defines the damper rate, and then
VPProgressiveSuspension may increase it based on the state of the suspension.
{: .alert .alert-info }

#### Terminology

- **Bump**: Refers to an upward movement or compression of the suspension caused by hitting a bump or
	obstacle on the road or trail.
- **Rebound**: The opposite of compression. It refers to the extension or return of the suspension
	back to its original position after being compressed by a bump or impact.
- **Fast Bump**: Refers to the response of the suspension to quick or sudden bumps or impacts.
- **Slow Bump**: Refers to the response of the suspension to slower or more gradual bumps or impacts.
- **Fast Rebound**: Refers to the speed at which the suspension extends or returns to its original
	position after being compressed by a fast bump or impact. A faster rebound allows the suspension to
	recover quickly and maintain traction on rough terrain.
- **Slow Rebound**: Refers to the speed at which the suspension extends or returns to its original
	position after being compressed by a slow bump or impact. A slower rebound provides more stability and
	control, especially on smoother surfaces.

#### Properties

Axle
:	The axle to modify the damper properties. 0 is first axle, 1 is second axle and so on.

Mode
:	Defines the parameters to use:

	- **Bump And Rebound Only**: Same bump and rebound rates for all contact speeds.
	- **Slow and Fast Rates**: Separate fast and slow rates for bump and rebound.

Bump (compression, red)
:	Bump damper rate(s). Optional contact speed split in Slow And Fast Rates mode. Red plot in the graph.

Rebound (expansion, blue)
:	Rebound damper rate(s). Optional contact speed split in Slow And Fast Rates mode. Blue plot in the graph.

Auto-populate values
:	Given an initial damper rate, this utility populates the fast/slow bump and rebound values with
	pre-calculated coherent values:

	- Bump And Rebound Only:
		- Bump = 2/3 * Initial
		- Rebound = 3/2 * Initial
	- Slow And Fast Rates:
		- Low Speed Bump = 2/3 * Initial
		- High Speed Bump = 1/3 * Initial
		- Low Speed Rebound = 3/2 * Initial
		- High Speed Rebound = 3/4 * Initial

### VPProgressiveSuspension

Increases the spring rate, and optionally the damper rate, along all or part of the suspension travel. This
may be used to implement [_leaf springs_](https://en.wikipedia.org/wiki/Leaf_spring), or _bump stops_ at the
ending segment of the suspension travel.

![VPProgressiveSuspension inspector](/img/components/vpp-progressive-suspension-inspector.png){: .img-medium .clickview }

Axle
:	The axle to increment the suspension rates. 0 is first axle, 1 is second axle and so on.

Wheel
:	Whether to modify both wheels in the axle or just one of them.

Min Compression
:	Portion of the suspension length where the spring rate begins to be increased. 0.7 means the spring
	rate will begin increasing when the suspension is 70% compressed.

Max Spring Rate Offset
:	Maximum increment applied to the spring rate. This has effect when the suspension is fully compressed.

Adjust Damper
:	Also increases the damper rate when increasing the spring rate.

Max Damper Rate Offset
:	Maximum increment applied to the damper rate. It works in the same way as Max Spring Rate Offset.

Linearity Factor
:	Shape of the proportionality curve applied when applying spring and damper increments:

	- 0.5 = linear
	- &lt; 0.5 = slow increment at the beginning, then fast increment near the end.
	- &gt; 0.5 = fast increment at the beginning, then slow increment towards the end.

#### Example:

- Base spring rate in the VPWheelCollider: 50000 N/m
- Min Compression: 0.5
- Max Spring Rate Offset: 10000 N/m
- Linearity Factor: 0.5 (linear)

The suspension spring rate remains at 50000 N/m between compression 0% (no compressed) and 50% (half of the
suspension travel length). When the suspension continues compressing beyond 50% then the spring rate offset
is applied proportionally:

- Compression 0%: spring rate = 50000
- Compression 25%: spring rate = 50000
- Compression 50%: spring rate = 50000
- Compression 75%: spring rate = 55000
- Compression 100%: spring rate = 60000

### VPDynamicSuspension

Automatically adjust the suspension of one or several axles based on the current load, so the suspension
remains at a given compression value.

The base spring rates defined in the VPWheelColliders will be used to determine the proportion of load
supported by each wheel in the affected axle(s). Then, this component overrides the spring rates with the
values based on its configuration.

![VPDynamicSuspension inspector](/img/components/vpp-dynamic-suspension-inspector.png){: .img-medium .clickview }

&fa-info-circle:lg; VPDynamicSuspension is applied _before_ other suspension components that modify the
suspension spring rates.
<br><br>
For example, if both VPDynamicSuspension and VPAntiRollBar are applied to the same wheel, then
both will produce the expected effect. First VPDynamicSuspension defines the spring rate, and then
VPAntiRollBar may increase or reduce it based on the state of the suspension.
{: .alert .alert-info }

Axles
:	The axle(s) in the vehicle that will implement the dynamic suspension.

Suspension Distance
:	The suspension distance configured in the wheels of the Axles defined above. All wheels are expected
	to be configured to the suspension distance indicated here.

Target Compression
:	The suspension spring rates will be configured to keep the average compression ratio specified here.

Change Rate
:	Rate of change of the suspension spring values. 1 is the normal rate, <1 is slower, >1 is faster.

Ignore Engine State
:	When checked the suspension will be adjusted by the component regardless the state of the engine.
	Otherwise, the suspension is modified dynamically only if the engine is running.

Min Spring Rate
:	Minimum spring rate that may be applied to the suspension.

Max Spring Rate
:	Maximum spring rate that may be applied to the suspension.

Fast Update Interval
:	Interval in seconds to recalculate the spring rate when the vehicle is stopped.

	For example, in real trucks this is typically done each second, so the suspension keeps adapting when
	the truck is being loaded or unloaded.

Slow Update Interval
:	Interval in seconds to recalculate the spring rate when the vehicle is moving.

	For example, in real trucks this is typically done each 60 seconds, so the suspension keeps adapting
	to minor changes in load and conditions (i.e. fuel conditions, weight shifting on slopes, etc).

Debug Labels
:	Shows labels in the wheels with current suspension properties (spring rate, sprung mass).