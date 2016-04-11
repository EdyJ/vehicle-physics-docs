# 3D models and environment

## Vehicles

A good vehicle 3D model mets these minimum standards:

- FBX file
- Forward direction is +Z
- Scale is 1 unit = 1 meter
- Rotations are 0, 0, 0 excepting the parts that have a logical orientation (i.e. steering wheel)
- Movable parts have their local origin placed at the rotation point (wheels, steering wheel...)
- Movable parts should have zero logical rotation at their default/rest position (i.e. doors)
- All parts in hierarchy are named in plain _English_, so everyone can understand it. Also,
	language-specific characters often cause missing meshes.

Importing the FBX alone should comply with these rules (no prefabs involved).

A very good vehicle 3D model also mets these conditions:

- Reasonable polygon density in all parts
- Good use of materials and textures
- A good reference for main materials is: car paint, glass, plastics, metals
- Additional materials may be included as per specific details: mirrors, lights, chromed parts,
dashboard...

#### Driver's view

Configuring the head movement in the first person view provides a nice feeling of the inertia in
the driver's view.

Create a child GameObject at the position of the driver's head. Add a Rigidbody and a Configurable
Joint.

Rigidbody:

- Mass: 0.5
- Interpolation: none

Configurable Joint:

- Connected Body: vehicle rigidbody
- Anchor.Y: Tilt origin, typically around -0.5
- X,Y,Z Motion: Locked
- Angular Y Motion: Locked
- Angular X,Z Montion: Free
- Angular X Drive: Spring 25, Damper 5
- Angular YZ Drive: Spring 30, Damper 10

Lineal inertial movement may be configured instead or additionally to the angular movement.
Example for adding movement in the Y axis simulating the floating seats in heavy trucks and buses.

- Y Motion: Free
- Y Drive: Spring 50, Damper 5

#### Articulated vehicles

Multi-part vehicles such as trucks with trailers can be attached together. Add a Configurable Joint
to the rigidbody of the attached part:

- Connected Body: the rigidbody of the main vehicle
- Anchor: local position of the attachment point in the attached part
- Connected Anchor: local position in the main vehicle where the joint is connected at

	If both bodies are at the correct positions when the joint is created (at startup or when creating
the joint in runtime) then _Auto Configure Connected Anchor_ can be left enabled. Otherwise, the
Connected Anchor position must be configured explicitly.

	If the joint is created at runtime then both bodies should be close enough to the connected position
for preventing abrupt movements.

- X,Y,Z Motion: Locked
- Angular X,Y,Z Motion: Free
- Enable Collision: Enabled

## Scenery

TO-DO:

Colliders, continuity, player safety.

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

