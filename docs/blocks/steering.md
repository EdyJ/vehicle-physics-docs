# Steering

The Steering section configures the properties of the steerable wheels, typically the front wheels.

![VP Vehicle Controller steering](/img/blocks/vpp-steering-inspector.png){: .clickview }

### Steering modes

The wheels that are steerable are defined in the Axles section:

![VP Vehicle Controller steering](/img/blocks/vpp-steering-axles-inspector.png){: .clickview }

Each steering axle can be configured as follows in the Axles section:

Disabled
:	No steering.

Steerable
:	Regular steering as configured in the Steering settings. This is the standard steering mode.

Ratio
:	This axle steers the given fraction of the demanded steering. Useful for additional steering
	axles with smaller steering angle. Negative ratios are allowed (i.e. for rearmost axle in buses).

Reference
:	The steering ratio is defined by the longitudinal position of the axle relative to the Ratio
 	Reference transform configured in the Steering settings.

	Useful for multi-axle vehicles with several steering axles. Instead of specifying a ratio value,
	in this mode the ratio is defined by the distance of the axle to the Ratio Reference transform.

### Steering Settings

![VP Vehicle Controller steering](/img/blocks/vpp-steering-inspector.png){: .clickview }

Max Steer Angle
:	Maximum steer angle in degrees in plain conditions (no Ackerman, no ratio, etc).

Toe Angle
:	Toe angle in degrees. Positive value is convergence (Toe-in), negative value is divergence
	(Toe-out).

	[Reference: Toe Angle Basics](https://web.archive.org/web/20180722212251/http://www.rctek.com/technical/handling/toe_angle_effect_on_ackerman_steering_principle.html)<br>
	[Reference: How Toe Angle Affects Ackerman Angles](https://web.archive.org/web/20180722212251/http://www.rctek.com/technical/handling/toe_angle_effect_on_ackerman_steering_principle.html)

Ackerman
:	Enables Ackerman geometry for the steering wheels. Requires Ackerman Reference.

	[Reference: Ackerman Steering Geometry](https://en.wikipedia.org/wiki/Ackermann_steering_geometry)

Ackerman Reference
:	A local Transform in the car used as reference for calculating the Ackerman angles. The Ackerman
	effect depends of the position of this Transform:

	- True Ackerman: middle of the rear axle. Use this by default.
	- More Ackerman: ahead of the rear axle.
	- Less Ackerman: behind the rear axle.

Ratio Reference
:	A local Transform in the car used for calculating the steering ratio in multi-steering axles
	configured as Reference in the Axles section. Typically, the position of this transform is
	the middle of the axle that does _not_ steers.

Steering Wheel Range
:	Steering range in degrees of the vehicle's steering wheel, from end to end. This value is used
	for rotating the graphical steering wheel object (see [VPVisualEffects](/components/vehicle-addons/#vpvisualeffects)),
	as well as configuring the physical steering wheel device when used.

# Scripting Reference

### Steering.Settings

```
namespace VehiclePhysics
{
public class Steering
	{
	[Serializable]
	public class Settings
		{
		[Range(0,90)]
		public float maxSteerAngle = 35.0f;

		// Positive toe = toe in (front of the wheels pointing towards the centreline of the vehicle)
		// Begative toe = toe out (front of the wheels pointing away the centreline of the vehicle)

		[Range(-15,+15)]
		public float toeAngle = 0.0f;

		// Should this steering controller apply ackerman geometry? (requires ackermanReference)

		public bool ackerman;

		// Reference for the ackerman geometry. This transform will be typically located
		// at the rear axle. Ackerman effect can be increased setting the position forward of the
		// rear axle ("more ackerman") or decreased by setting it behind ("less ackerman").
		//
		// Note: We need the local position relative to the rigidbody.
		// 		In practice we take localPosition and show a warning in the PropertyDrawer if
		// 		the object has any scale applied or if there's no rigidbody on its parent.

		public Transform ackermanReference;

		// Reference for calculating the steering ratio on multiple steering axles. Wheels must be
		// added with the Reference steering mode.
		//
		// The axle farthest to the reference receives steering ratio +1 (or -1 if it's located
		// behind the reference). Wheels in between receive proportional ratios.

		public Transform ratioReference;

		// Degrees of rotation in the vehicle's steering wheel. Used to:
		//	- Visually rotate the steering wheel mesh
		//	- Configure physical steering wheel devices

		[Range(180, 1200)]
		public float steeringWheelRange = 600.0f;
		}
	}
}
```

