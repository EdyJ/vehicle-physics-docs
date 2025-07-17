# 3D models and environment

[TOC]

## Vehicles

Rules for vehicle 3D models:

- FBX file
- Forward direction is +Z
- Scale is 1 unit = 1 meter
- Origin is the middle of the front axle at ground level
- Rotations are 0, 0, 0 excepting the parts that have a logical orientation (eg. steering wheel
	pitch)
- Movable parts have their local origin placed at the rotation point (eg. doors, steering wheel)
- Movable parts should have zero logical rotation at their default/rest position (eg. doors)
- Wheels' origins should be at the geometric center of the wheel. Twin wheel groups (eg. rear
	wheels at trucks) should have their origin at the center of both wheels.
- Wheel complements (brake calipers, suspension) should have the same origin as their corresponding
	wheels.
- All parts in hierarchy are named in plain _English_, so everyone can understand it (also note that
	language-specific characters often cause missing meshes)

!!! info "&fa-lightbulb-o:lg; Hints for modeling vehicles in Blender"
	- The forward direction is -Y (negative Y). This translates to +Z in Unity.
	- Use this [Blender To Unity FBX Exporter](https://github.com/EdyJ/blender-to-unity-fbx-exporter)
		to export the FBX file correctly for Unity.

A high quality vehicle 3D model also mets these conditions:

- Reasonable polygon density in all parts
- Good use of materials and textures.
- A good reference for essential materials is: car paint, glass, plastics, metals.
- Additional materials may be included as per specific details: mirrors, lights, chromed parts,
dashboard...
- Car paint has a properly unwrapped UV map so liveries can be painted at the texture.

#### Interior

Dashboard gauges and steering wheel must meet these requirements:

- The local origin is the center of rotation
- They rotate around the Z axis
- Default Z rotation is zero. Other axis may have some rotation applied

&fa-lightbulb-o:lg; Typically, the center of rotation of the steering wheel is the center of the
external circumference. Using the center of the logo as center of rotation can result in a very
off-center rotation of the steering wheel.
{: .alert .alert-success }

#### Vehicle collider

![Convex vehicle collider](/img/user-guide/vpp-vehicle-collider.png){: .clickview .img-medium }

Game-ready 3D vehicles usually come with a simplified shape of the vehicle (collision mesh). The
vehicle collider must be a **convex** collider (MeshCollider > Convex), or a set of convex
colliders.

!!! warning "&fa-warning:lg; At least one convex collider is mandatory in the vehicle"
	A vehicle without colliders will exhibit a very weird and unnatural behavior as soon as the
	simulation starts, unless the inertia tensor is explicitly configured (Rigidbody.inertiaTensor).

!!! warning "&fa-warning:lg; VPWheelCollider components must be located _**inside**_ the vehicle's colliders"
	Ensure that the **top half** of each VPWheelCollider component is **enclosed within regular
	convex colliders** belonging to the vehicle's main rigidbody. Otherwise, strange behaviors and
	side effects may happen when the vehicle enters in contact with other objects.

	![Good (left) and bad (right) positions for the VPWheelCollider with respect to the vehicle collider](/img/user-guide/vpp-colliders-and-wheels.png){: .clickview .img-small }

#### Articulated vehicles

Multi-body vehicles such as trucks with trailers can be attached together. Each part is a 3D model
that can be setup as an independent vehicle with its own Vehicle Controller (i.e. trailers) or as a
a separated rigidbody with all wheels configured in the main Vehicle Controller (i.e. articulated bus).

Add a VPVehicleJoint component at the transform representing the _male_ plug:

- Other anchor: transform in the other part representing the _female_ connector.
- X, Y, Z motion: Locked
- Angular X, Y, Z motion: Free

Both bodies should be close enough to the connected position for preventing abrupt movements when
the VPVehicleJoint gets enabled.

Each body must have its collider according to the collider specifications above.

#### Driver's view

Configuring the head movement in the first person view provides a nice feeling of the inertia in
the driver's view. Add a VPHeadMotion component to a child gameobject of the vehicle:

- Longitudinal and Lateral movement can be either _tilt_ or _slide_.
- Vertical movement can be _tilt_ only.
- Spring Rate affects the maximum displacement (more spring -> less displacement).
- Damper Rate affects the bounciness of the movement (more damper -> less bounciness).

## Scenery

&fa-warning:lg; Work In Progress
{: .alert .alert-warning }

TO-DO:

Colliders, continuity, player safety.

Roads & tracks do & dont's

## Physic Materials

TO-DO:

Unity physic materials for vehicles and environment.

Different grip levels on different surfaces.

Settings to represent asphalt, grass, concrete walls, tire walls, etc

Learned from Box2D:
https://github.com/erincatto/Box2D/blob/master/Box2D/Box2D/Dynamics/Contacts/b2Contact.h

- The physically correct friction combination is **Multiply**:
Friction mixing law. The idea is to allow either fixture to drive the restitution to zero.
For example, anything slides on ice.

- The physically correct bounce combination is **Maximum**:
Restitution mixing law. The idea is allow for anything to bounce off an inelastic surface.
For example, a superball bounces on anything.

