# How suspensions work

A suspension is essentially a damped spring producing opposing force when being compressed. Springs
sustain the weight of the vehicle. Dampers oppose the spring movement, dissipating their energy and
preventing them to bounce without control.

The force produced by the springs depends on the distance they are compressed and it's given by
[Hooke's Law](http://en.wikipedia.org/wiki/Hooke%27s_law):

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
			pixelsHeight: 320,
			width: 23,
			height: 18,
			originX: 6,
			originY: 4,
			});

		canvas.Grid({ stroke: "#BBF", strokeWidth: 0.5 });

		canvas.Line([ 9, -0.5, 9, 8 ], { stroke: "blue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 8, 9, 8 ], { stroke: "blue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ 5, -0.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 4.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });

		canvas.Line([ 0, 0, 9, 8 ], { stroke: "red", strokeWidth: 3 });
		canvas.Line([ 9, 8, 9, 10 ], { stroke: "red", strokeWidth: 3 });

		canvas.Line([ -0.5, 0, 11, 0 ], { stroke: "#333", strokeWidth: 2 });
		canvas.Line([ 0, -0.5, 0, 10 ], { stroke: "#333", strokeWidth: 2 });

		canvas.Text([ 13.5, 0, 0.75 ], "Contact\ndepth (m)", { fill: "#444", fontWeight: "bold" });
		canvas.Text([ 0, 11.5, 0.75 ], "Force\n(N)", { fill: "#444", fontWeight: "bold" });

		canvas.Text([ 9.5, -1, 0.75 ], "suspension\ndistance", { fill: "blue", originY: "top" });
		canvas.Text([ 4.5, -1, 0.75 ], "suspension\nposition", { fill: "slateblue", originY: "top" });

		canvas.Text([ -1, 8, 0.75 ], "max force", { fill: "blue", originX: "right" });
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

The _**suspension force**_ is calculated as:

$$suspensionForce = {stiffness}\cdot{contactDepth} + {damper}\cdot{contactSpeed}$$

When the suspension is not moving the _contact speed_ is 0. This happens when the vehicle is either
resting, cruising at constant speed or under constant acceleration. The suspension position for a
specific wheel can then be calculated as:

$$suspensionPosition = \frac{weight \cdot{gravity}}{stiffness}$$

where $weight$ is the actual weight being supported by that wheel.

### Studying the oscillating behavior

The suspension properties can be studied from the point of view of the oscillating behavior
([Harmonic oscillator](http://en.wikipedia.org/wiki/Harmonic_oscillator)). The associated concepts
are used to study the reactions of the suspension in different situations.

If the vehicle is under constant acceleration (accelerating / braking / cornering) the _weight_ is
redistributed among the wheels. Wheels will be supporting more or less load than in rest position.
This effectively modifies the oscillating properties of the suspensions at those specific
situations, thus having different reactions. For instance, imagine a racing car heavily braking at
the end of a long straight before entering a slow curve. If that part of the track is a bumpy
surface then the suspension must be set up properly for ensuring correct handling while braking
over the bumps. Studying the oscillating behavior of the suspension in this detail is critical for
setting up racing cars that react properly on every situation.

Given the force produced by the suspension at a specific steady state (_contact speed_ = 0) the
equivalent _**sprung mass**_ value for studying that situation can be calculated as:

$$sprungMass = \frac{suspensionForce}{gravity}$$

When the vehicle is at rest, cruising at constant speed or under constant acceleration the sum of
the sprung masses of all the wheels matches the mass of the vehicle exactly.

Using the _sprung mass_ you can calculate the _**natural frequency**_ for the spring under that
load. The _natural frequency_ is the speed at which the spring can respond to changes in load:

$$naturalFrequency = \sqrt{\frac{stiffness}{sprungMass}}$$

The _natural frequency_ defines the oscillating behavior of the suspension. A typical family car is
set up to exhibit a natural frequency somewhere between 5 and 10.

The _sprung mass_ is also used for studying the [damping behavior](http://en.wikipedia.org/wiki/Damping),
that is, the rate at which the suspension dissipates the energy stored at the spring. We can
calculate the _**damping ratio**_ for learning whether the suspension will be under-damped,
over-damped or critically-damped:

$$dampingRatio = \frac{damper}{2 \sqrt{stiffness \cdot{sprungMass}}}$$

A _damping ratio_ greater than 1.0 means over-damping (sluggish suspension), a value of exactly 1.0
is critically-damped, and a value less than 1.0 is under-damped (bouncy suspension). Typical cars
are slightly over-damped. Realistic values are mostly close to the critical damping, in the range
of 0.8 and 1.2. The _damper rate_ that targets a specific _damping ratio_ can be calculated by
rearranging the equation above:

$$damper = dampingRatio \cdot{2} \sqrt{stiffness \cdot{sprungMass}}$$

In under-damped suspensions ($dampingRatio < 1$) the frequency at which the system oscillates is
different than the _natural frequency_:

$$underdampedFrequency = naturalFrequency \cdot{\sqrt{1-dampingRatio^2}}$$

### Springs and simulation steps

Another interesting concept for the simulation is the number of simulating updates that will occur
during each spring oscillation. This number is given by the _**alpha**_ ratio:

$$alpha = \frac{1}{timestep} \sqrt{\frac{sprungMass}{stiffness}}$$

Applying the [Nyquist theorem](http://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem) we
can deduct that a physically correct simulation should have _alpha_ >= 2. Smaller values won't
likely cause noticeable artifacts, only the produced forces won't be physically precise.

---
