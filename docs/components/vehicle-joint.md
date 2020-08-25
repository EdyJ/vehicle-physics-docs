# VPVehicleJoint

Encapsulates a [ConfigurableJoint](https://docs.unity3d.com/Manual/class-ConfigurableJoint.html)
component in a comprehensive and easy to use wrapper suitable to use in multi-part and articulated
vehicles.

VPVehicleJoint should be in the same GameObject as the Rigidbody that is to be joined to another one.
For example, an excavator arm should have a VPVehicleJoint beside the Rigidbody of the Arm, and
configure Other Anchor to the Transform in the excavator's body in the position of the arm's hinge.

Unlike ConfigurableJoint, VPVehicleJoint may be enabled and disabled anytime in runtime.

![Vehicle Physics Pro - VPVehicleJoint inspector](/img/components/vpp-vehicle-joint-inspector.png){: .clickview }

This Anchor, Other Anchor
:	Define the junction point in each object to be joined. When using position constraints these
	Transforms will be enforced to have the same world position. It's expected these transforms to
	be in the same position (or very close) when the VPVehicleJoint component is enabled. Otherwise
	they may be suddenly moved by the joint constraints.

	- This Anchor: Transform in the hierarchy of the Rigidbody this VPVehicleJoint belongs to.
		Optional, will use the VPVehicleJoint's Transform if not specified.
	- Other Anchor: Transform in the hierarchy of the other Rigidbody to be joined.

	This Anchor and Other Anchor must belong to different Rigidbodies (i.e. different non-null
		result for GetComponentInParent<Rigidbody>()). Both Rigidbodies may be in the same hierarchy,
		or even parented.

Update Mode
:	When to update the underlying ConfigurableJoint properties.

	- On Enable: once when the VPVehicleJoint component is enabled.
	- On Fixed Update: every physics step. Use this when the component's parameters (constraints,
		target position or rotation, etc) are expected to change in runtime.
	- On Fixed Update In Editor Only: Works as On Fixed Update in the editor but as On Enable in
		builds. Useful for finding the proper values during development in the Editor, but once set
		they won't change in runtime.

Enable Collision
:	Allows collisions between the colliders of the joined bodies.

Restore Pose On Disable
:	Restore local position and rotation of the VPVehicleJoint's transform when the component is
	disabled.

### Linear Constraints

When configured, these enforce the position of the anchors to be in the same world position. Different
modes may be configured per local axis.

Locked
:	Enforces the position to stay at the anchor in the given local axis.

Free
:	Position is free to move along the given local axis with respect to the anchor.

Damped Spring
:	Enforces the position to stay at the anchor in the given local axis by applying the specified
 	spring and damper values.

	In this mode Target Position may be used to dynamically move the Rigidbody the given offset in
	local coordinates with respect to the anchor. This requires Update Mode = On Fixed Update.

	If the force required to apply the constraint exceeds Max Force then the joint breaks. Use the
	standard event method [OnJointBreak](https://docs.unity3d.com/ScriptReference/Joint.OnJointBreak.html)
	to detect and handle broken joints.

Max Distance
:	Limits the maximum distance the Rigidbody can move from the anchor point in Free and Damped
	Spring modes. No effect if 0.

### Angular Constraints

When configured, these enforce the local rotation of the Rigidbody to remain unchanged since the
VPVehicleJoint component is enabled. Different modes may be configured per local axis.

Locked
:	Prevents the local rotation to change in the given local axis.

Free
:	The Rigidbody is free to rotate around the given local axis.

Damped Spring
:	Prevents the Rigidbody to rotate at the given local axis by applying the specified spring and
	damper values.

	In this mode Target Rotation may be used to dynamically rotate the Rigidbody in local
	coordinates. This requires Update Mode = On Fixed Update.

	Max Angle limits the maximum rotation angle from the initial pose. No effect if 0.

	If the torque required to apply the constraint exceeds Max Force then the joint breaks. Use the
	standard event method [OnJointBreak](https://docs.unity3d.com/ScriptReference/Joint.OnJointBreak.html)
	to detect and handle broken joints.

### Target Pose (Damped Spring)

These properties are used by constraints in Damped Spring mode to modify the position and/or
rotation in runtime. These require Update Mode = On Fixed Update to have effect.

Target Position
:	Offset from the anchor position in local coordinates.

Target Rotation
:	Desired local rotation.

Reset Frame On Enable
:	Resets Target Position to 0 and Target Rotation to Identity when enabling VPVehicleJoint.

### Advanced

Propagate Is Kinematic
:	Applies the Is Kinematic flag from a parent Rigidbody to this one.

Match Inertia Mode
:	When configured, modifies the inertia of this Rigidbody to be in a similar order of magnitude
	of the connected Rigidbody. This improves the joint stability when the connected masses are
	very different without having to increase the physics rate.

	- Connected Masses: Make the magnitude of this inertia proportional to the ratio of the
		connected masses.
	- Connected Inertia: Make the magnitude of this inertia a ratio of the magnitude of the
		connected inertias.

Match Inertia Factor
:	Multiply the inertia by this factor after calculating the new inertia.

Reset Inertia On Disable
:	Calls [Rigidbody.ResetInertiaTensor()](https://docs.unity3d.com/ScriptReference/Rigidbody.ResetInertiaTensor.html)
	to restore the inertia when VPVehicleJoint is disabled.

Articulation mode & Mass Scale & Debug Disable Mass Scale Force
:	Do not use, will be deprecated. It was an attempt to use [Joint.connectedMassScale](https://docs.unity3d.com/ScriptReference/Joint-connectedMassScale.html)
	and avoid the side effects of the increased mass by applying counter-gravity forces.
	Joint.connectedMassScale doesn't seem to make any sense at all - it just multiplies the mass
	by the scale, exactly as if it's multiplied in Rigidbody.mass, with the increased weight,
	inertia, etc.

Debug Label
:	Shows the reported parameters of the Joint in runtime.



