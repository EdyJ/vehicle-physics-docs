# 3D models and environment

### Vehicles

Rigging requirements, orientation, origin, scale.

### Scenery

Colliders, continuity, player safety.

### Physic Materials

Unity physic materials for vehicles and environment.

Different grip levels on different surfaces.

Settings to represent asphalt, grass, concrete walls, tire walls, etc

Learned from Box2D:
https://github.com/erincatto/Box2D/blob/master/Box2D/Box2D/Dynamics/Contacts/b2Contact.h

- Correct friction combination is **Multiply**:
Friction mixing law. The idea is to allow either fixture to drive the restitution to zero.
For example, anything slides on ice.

- Correct bounce combination is **Maximum**:
Restitution mixing law. The idea is allow for anything to bounce off an inelastic surface.
For example, a superball bounces on anything.

