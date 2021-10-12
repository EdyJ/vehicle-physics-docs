# Vehicle Dynamics

Add-on components modifying the vehicle's handling and behavior.

You could [write your own add-on components](../advanced/custom-addons.md) easily if the provided
components don't fit your needs or you need other features.

### VPAntirollBar

[Anti-roll bars](https://en.wikipedia.org/wiki/Anti-roll_bar) (also "stabilizer bars" or "sway bars")
_connect_ the two wheels of the same axle allowing a limited degree of freedom between their
suspensions. When one of the wheels is pushed upwards, the stabilizer bar transfers a portion of
that compression force to the other wheel, so its suspension compress as well. This reduces the
body lean in turns at that axle.

![VP Anti Roll Bar](/img/components/vpp-anti-roll-bar.png){: .img-medium .clickview }

Axle
:	The axle this anti-roll bar component will be attached to.

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

### VPAeroSurface

Stand-alone component (it doesn't require a VehicleBase-derived component) providing drag and
downforce based on the velocity of the vehicle. The forces are applied to the vehicle at the
position of the GameObject containing this component.

The recommended setup is having a VPAeroSurface GameObject at the middle of each axle, at least
at front and rear. These components can configure the behavior of the vehicle at high speeds.

![VP Aero Surface](/img/components/vpp-aero-surface.png){: .img-medium .clickview }

Drag Coefficient
:	Coefficient for the drag force with the speed. The force is applied counteracting the vehicle's
	velocity.

Downforce Coefficient
:	Coefficient for the downforce with the speed. The force is applied at the transform's position
	in the transform.down direction.

The force magnitudes are calculated with a simple quadratic formula:

$$ F = \rho \times v^2 $$

where $F$ is the force in Newtons, $\rho$ is the coefficient and $v$ is the vehicle's speed in m/s.

!!! warning "&fa-warning; Important:"

	Aerodynamic forces require keeping an eye on the suspension (you can use the Telemetry). The
	extra downforce will compress the suspension as well. The suspension must not reach the 100%
	compression (1.0) or unwanted effects will occur. Stiffer springs or progressive suspensions
	might be required for avoiding that.