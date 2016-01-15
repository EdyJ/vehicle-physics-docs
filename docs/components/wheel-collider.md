# VPWheelCollider

This component implements the wheel colling entity in Unity 3D:

- Suspension, steering, physical contact
- Suspension analysis at the Inspector
- Comprehensive wheel gizmo at the Scene view
- Visual meshes for wheel, brake caliper and suspension geometry

![VP WheelCollider](/img/components/vpp-wheelcollider.png){: .clickview }

&fa-thumbs-o-up; The context menu option **"Adjust position and radius to the Wheel mesh"** at
the VPWheelCollider component automatically calculates position, radius and center to match the
visual **Wheel** mesh specified at Visual Objects.
{: .alert .alert-info }

![VP WheelCollider context menu](/img/components/vpp-wheelcollider-context-menu.png){: .img-small .clickview }

### Mass, radius

The mass should be roughly the mass of the wheel.

The radius should match the actual radius of the wheel mesh.

The **inertia** is calculated as $ 1/2 m r^2 $. Note that if the inertia is too small it may have
adverse effects in the numeric stability. Ensure to use a mass large enough for the wheel.

### Center

Position offset to the center of the wheel.

The `VPWheelCollider` component should be placed in the same position as its corresponding visual
Wheel transform (but _not_ in the same hierarchy, see [Visual Objects](#visual-objects) below). Then
the center property is used to match the actual position of the wheel.

The best position for the wheel collider's center is the outer part of the wheel. It provides better
accuracy and stability.

![VP WheelCollider position](/img/components/vpp-wheelcollider-position.png){: .img-small .clickview }

### Suspension parameters

Distance (m)
:	Length of the suspension travel.

Anchor (%)
:	Relative position in the suspension travel (compression) where the wheel is located at design
	time. This setting can be understood easily by adjusting it in the Editor and watching the
	gizmo in the Scene view.

Spring rate ($N/m$)
:	Springs sustain the weight of the vehicle. The inspector shows the maximum force and weight the
	spring can support right before hitting the limit.

	&fa-thumbs-o-up; As rule of thumb, configure the **spring rate** so each suspension can support up to
	twice of the evenly distributed weight.
	{: .alert .alert-info }

Damper rate ($N/ms^{-1}$)
:	Dampers limit the suspension movement and damp the spring oscillations. The damper setup affects
	the angular momentum of the vehicle on weight shifting situations (accelerating, braking,
	cornering...).

	&fa-warning; Dampers are very badly implemented in PhysX 3 / Unity 5. A damper value too high
	will surely cause weird behaviors and unnatural reactions. [Learn more](../advanced/misc-topics-explained#car-bouncing-or-shaking-over-the-ground){: .alert-link }
	{: .alert .alert-warning }

### Suspension analysis tool

Expand the "Analysis" section under the Suspension settings of the VPWheelCollider component
(select any wheel collider in your vehicle's hierarchy):

![VP WheelCollider suspension analysis](/img/components/vpp-wheelcollider-suspension-analysis.png){: .img-small .clickview }

The suspension analysis tool doesn't have effect on the actual suspension behavior. It just
calculates the suspension data based on the given compression ratio at rest.

1. Play the scene and ensure the vehicle is at rest.
2. Watch the telemetry for the compression ratio for the wheel you want to analyze.
3. Specify that compression ratio in the analysis tool. It computes and shows the resulting values.

Read [how suspensions work](../advanced/how-suspensions-work.md) for interpreting and understanding
the values.

### Visual objects

These are the transforms for the visual objects representing the actual wheel and suspension
components. They will be positioned and/or rotated according to the state of the wheel.

&fa-warning; Visual objects (Suspension, Caliper, Wheel) must reside in a different sub-hierarchy
	than the VPWheelColliders inside the vehicle GameObject. Check out [how a vehicle is created from
	scratch](../user-guide/vehicle-creation.md){: .alert-link } for details on how to build the
	vehicle hierarchy correctly.
{: .alert .alert-warning }

Suspension
:	Moves vertically as for the suspension compression.

Caliper
:	Moves vertically as for the suspension compression and rotates around the Y axis as for the
	steering.

Wheel
:	Moves vertically as for the suspension compression, rotates around the Y axis as for the
	steering, and rotates around the X axis as for the wheel's angular velocity.

Suspension, Caliper and Wheel transform can be parented together in any way. They will be moved
and rotated correctly.