# How simple suspensions work

A suspension is essentially a damped spring producing opposing force when being compressed. Springs
sustain the weight of the vehicle. Dampers oppose the spring movement, dissipating their energy and
preventing them to bounce without control.

The force produced by the springs depends on the distance they are compressed and it's given by
[Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law):

$$F=-Kx$$

where

$K$ is the spring's _**stiffness**_ or _spring rate_ in $N/m$, and
{: .indent }

$x$ is the _**contact depth**_ or _compresion distance_ in $m$.
{: .indent }

The force produced by the dampers depend on how fast the suspension is being compressed or elongated
(_**contact speed**_), opposing the movement.

When a wheel is lifted from the ground the suspension produces no force. At the slightest contact
possible it also won't produce any force. As the spring gets more compressed, more force is
produced proportionally to the _contact depth_:

<canvas id="fig1" class="img-responsive" width="390px" height="320px">
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var canvas = new texturecanvas(
			{
			canvasId: "fig1",
			pixelsWidth: 390,
			pixelsHeight: 300,
			width: 24,
			height: 17,
			originX: 7,
			originY: 4,
			});

		canvas.Grid({ stroke: "#DDF", strokeWidth: 0.4 });

		canvas.Line([ 9, -0.5, 9, 8 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 8, 9, 8 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ 5, -0.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 4.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });

		canvas.Line([ 0, 0, 9, 8 ], { stroke: "red", strokeWidth: 3 });
		canvas.Line([ 9, 8, 11, 8 ], { stroke: "red", strokeWidth: 3 });

		canvas.Line([ -0.5, 0, 11, 0 ], { stroke: "#333", strokeWidth: 2 });
		canvas.Line([ 0, -0.5, 0, 9.5 ], { stroke: "#333", strokeWidth: 2 });

		canvas.Text([ 13.5, 0, 0.75 ], "Contact\ndepth (m)", { fill: "#444", fontWeight: "bold" });
		canvas.Text([ 0, 11, 0.75 ], "Force\n(N)", { fill: "#444", fontWeight: "bold" });

		canvas.Text([ 9.5, -1, 0.75 ], "suspension\ndistance", { fill: "slateblue", originY: "top" });
		canvas.Text([ 4.5, -1, 0.75 ], "suspension\nposition", { fill: "slateblue", originY: "top" });

		canvas.Text([ -1, 8, 0.75 ], "max force", { fill: "slateblue", originX: "right" });
		canvas.Text([ -1, 4.5, 0.75 ], "suspension\nforce", { fill: "slateblue", originX: "right", textAlign: "right" });
		};

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>


The compression limit is the _**suspension distance**_. Beyond this point the spring has reached its
maximum force and cannot compress further. A hard contact with the rigid body is produced.

The slope of the force line is given by the _stiffness_ $K$. The more _stiffness_, more steep slope.

The _**suspension position**_ is the _contact depth_ where the spring force matches exactly the
force applied on the spring. In vehicles this force is typically caused by the _**weight**_
supported by the wheel:

- The more weight is loaded on a wheel, the more compressed will be its spring (suspension
position visibly lower).
- The less weight is loaded on a wheel, the less compressed will be its spring (suspension
position visibly higher).
- If the _**center of mass**_ of a vehicle is moved (load, passengers...) the weight will be
redistributed along the wheels and their suspensions will be compressed / elongated as result of
the new weight distribution.
- If the vehicle is accelerating, braking or cornering the weight will be temporarily shifted
among the wheels, varying their suspension positions accordingly. For instance, accelerating makes
a certain amount of weight (depending on the actual acceleration) to be transfered from front
wheels to rear wheels. Similar effects happen when braking and cornering.
- Aerodynamic surfaces push the vehicle down with speed, increasing the load on the wheels and
compressing their suspensions accordingly.

The _**suspension force**_ is calculated as:

$$suspensionForce = {stiffness}\cdot{contactDepth} + {damper}\cdot{contactSpeed}$$

When the suspension is not moving the _contact speed_ is 0. This happens when the vehicle is either
resting, cruising at constant speed or under constant acceleration. The suspension position for a
specific wheel may then be calculated as:

$$suspensionPosition = \frac{weight \cdot{gravity}}{stiffness}$$

where $weight$ is the actual weight being supported by that wheel.

### Studying the oscillating behavior

The suspension properties may be studied from the point of view of the oscillating behavior
([Harmonic oscillator](https://en.wikipedia.org/wiki/Harmonic_oscillator)). The associated concepts
are used to study the reactions of the suspension in different situations.

!!! warning "&fa-warning:lg; Understanding vehicle suspension as harmonic oscillator"

	A suspension behaves as harmonic oscillator _under certain conditions_, and may be studied
	as a harmonic oscillator under those conditions. Read [Application to real vehicles](#application-to-real-vehicles)
	below.

	While a suspension based on specifying the oscillating properties (frequency, damping) is
	possible, simulating a suspension as a generic harmonic oscillator is generally a bad idea and may
	easily provide incoherent results. It's not just one, but four (or more) attached suspensions with
	complex interactions among them: weight shifting, cargo, aerodynamic downforce, road conditions...

Given the force produced by the suspension at a specific steady state (_contact speed_ = 0) the
_**effective sprung mass**_ value for studying that situation may be calculated as:

$$sprungMass = \frac{suspensionForce}{gravity}$$

When the vehicle is at rest, cruising at constant speed or under constant acceleration on a flat surface
the sum of the sprung masses of all the wheels matches the mass of the vehicle exactly.

Using the _sprung mass_ you may calculate the _**natural frequency**_ for the spring under those
conditions. The _natural frequency_ is the rate at which the spring can respond to changes in load:

$$naturalFrequency = \sqrt{\frac{stiffness}{sprungMass}}$$

The _natural frequency_ defines the oscillating behavior of the suspension. For example, a typical family
car is set up to exhibit a natural frequency somewhere between 5 and 10.

The _effective sprung mass_ may also be used for studying the [damping behavior](https://en.wikipedia.org/wiki/Damping),
that is, the rate at which the suspension dissipates the energy stored at the spring. We may
calculate the _**damping ratio**_ for learning whether the suspension will be under-damped,
over-damped or critically-damped:

$$dampingRatio = \frac{damper}{2 \sqrt{stiffness \cdot{sprungMass}}}$$

A _damping ratio_ greater than 1.0 means over-damping (sluggish suspension), a value of exactly 1.0
is critically-damped, and a value less than 1.0 is under-damped (bouncy suspension). Values for
realistic vehicles are in the range of 0.2 and 0.6. The _damper rate_ that targets a specific
_damping ratio_ may be calculated by rearranging the equation above:

$$damper = dampingRatio \cdot{2} \sqrt{stiffness \cdot{sprungMass}}$$

In under-damped suspensions ($dampingRatio < 1$) the frequency at which the system oscillates is
different than the _natural frequency_:

$$underdampedFrequency = naturalFrequency \cdot{\sqrt{1-dampingRatio^2}}$$

### Suspension and simulation steps

Another interesting concept for the simulation is the number of simulating updates that will occur
during each spring oscillation. This number is given by the _**alpha**_ ratio:

$$alpha = \frac{1}{timestep} \sqrt{\frac{sprungMass}{stiffness}}$$

Applying the [Nyquist theorem](https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem) we
deduct that a physically correct simulation should have _alpha_ >= 2. Smaller values means that the
simulation sampling rate is not enough to simulate the given spring rate.

### Application to real vehicles

Suspensions in real vehicles don't have constant frequency and damping ratio at all times. You may
calculate and study the oscillating behavior in specific situations separately: at rest,
accelerating, braking... Weight transfer on some of these situations actually affects the behavior
of the suspension. That's the challenge of configuring suspensions in real vehicles: finding a good
balance for most situations.

If the vehicle is under constant acceleration (accelerating / braking / cornering) the _weight_ is
redistributed among the wheels. Wheels will be supporting more or less load than in their positions at rest.
This effectively modifies the oscillating properties of the suspensions at those specific situations,
therefore producing different reactions. For instance, imagine a racing car heavily braking at the end of a
long straight before entering a slow curve. If that part of the track is a bumpy surface then the
suspension must be set up properly for ensuring correct handling while braking over the bumps.
Another example is the downforce caused by aerodynamic surfaces. Suspension will have different
behavior on high speeds due to the additional load. Studying the oscillating behavior of the suspension in
this detail is critical for setting up racing cars that react properly on every situation.

We may summarize the role of the vehicle suspension as:

- **Springs** sustain the weight of the vehicle.
- **Dampers** dissipate the energy in the springs when the suspension moves (_weight transfers_, bumps).

When the suspension is not moving the dampers have no effect. This happens when the vehicle is at
rest, cruising at constant speed, or under constant acceleration. Otherwise, weight transfers occur
among the suspensions. The springs should be strong enough for sustaining the weight of the vehicle
preventing the suspension to reach its limits on all situations, including weight transfers.

When the formulas for the Harmonic Oscillator (above) are applied to vehicles in those situations
they yield a surprising result:

\begin{cases}
naturalFrequency &= \sqrt{\frac{stiffness}{sprungMass}} \\
{}\\
sprungMass &= \frac{suspensionForce}{gravity} \\
{}\\
suspensionForce &= stiffness \cdot{contactDepth}
\end{cases}

$$\Longrightarrow naturalFrequency = \sqrt{\frac{gravity}{contactDepth}}$$

So the single factor that defines the frequency of our suspension is the **contact depth**. The frequency
of the suspension will vary on the different situations (accelerating, braking, cornering...) according to
the contact depth. Note that this _contact depth_ includes any pre-load of the spring inside the suspension
strut.

As a result, configuring the vehicle suspension for a similar behavior in a broad range of conditions
requires minimizing the changes in the _contact depth_ in those conditions. There are several strategies
for this:

- Harder springs and anti-roll bars, reducing weight transfers on accelerating, braking, cornering, etc.
- A lower center of mass reduces the weight transfers without modifying the suspension properties.
- Electronically controlled suspension which dynamically modify the suspension properties to preserve the
	_contact depth_ (and the _ride height_) constant in all situations: accelerating, braking, cornering
	 or carrying variable cargo or passengers.

Vehicle Physics Pro includes a variety of [suspension components](/components/vehicle-suspension/) allowing different ways of
configuring the suspension:

- **VPWheelCollider** component with standard spring and damper settings.
- **VPAntiRollBar:** links the suspension of the wheels in the same axle in order to control the
	lateral roll in curves.
- **VPAdvancedDamper:** configures dampers with bump / rebound parameters: slow bump, fast bump,
	slow rebound, fast rebound.
- **VPDynamicSuspension:** modifies the suspension spring in runtime order to preserve a given
	_contact depth_ (or _ride height_).
- **VPProgressiveSuspension:** Modifies the suspension properties along the suspension travel. This
 	allows simulating bump stops or [leaf spring suspensions](https://en.wikipedia.org/wiki/Leaf_spring).
