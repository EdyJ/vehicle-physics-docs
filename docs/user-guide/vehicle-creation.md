# Creating a vehicle

### Base hierarchy and components

1.	Create an empty GameObject in the scene (<kbd>ctrl-shift-N</kbd>). Name it **Vehicle**. Add
	these components (from the Component menu):

	- Component > Vehicle Physics > Vehicle Controller _(a RigidBody is added automatically)_
	- Component > Vehicle Physics > Vehicle Input

2.	Create a child GameObject (<kbd>ctrl-alt-N</kbd>). Name it **WheelColliders**.

3.	Create four children GameObjects under WheelColliders. Name them **WheelFL, WheelFR, WheelRL,
	WheelRR**. Your vehicle GameObject should be like this:

		Vehicle
		|- WheelColliders
			|- WheelFL
			|- WheelFR
			|- WheelRL
			|- WheelRR

4.	Select the four WheelXX GameObjects, then add a **VPWheelCollider** component to them:

	- Component > Vehicle Physics > Wheel Collider

5.	Add the vehicle mesh as child of your Vehicle. Mesh should reside in its own-sub hierarchy
	entirely:

		Vehicle
		|- WheelColliders
		|	|- WheelFL
		|	|- WheelFR
		|	|- WheelRL
		|	|- WheelRR
        |- My3DVehicle
			|  (hierarchy here is specific to each 3D vehicle)
			|- MeshBody
			|- MeshFrontLeft
			|- MeshFrontRight
			|- MeshRearLeft
			|- MeshRearRight
			|-   ...

6.	For each VPWheelCollider component (WheelXX) configure the property **Visual objects > Wheel**
	to their corresponding counterpart in the mesh. E.g. _WheelFL > Visual objects > Wheel_ to
	_MeshFrontLeft_.

7.	Select the four WheelXX components. Then click the context menu for the VPWheelCollider
	component and choose **Adjust position and radius to the Wheel mesh**. VPWheelColliders are
	automagically adjusted to fit the wheel meshes.

	> If you want / need to do it manually:
	>
	> - The position of the VPWheelCollider component must be the same as the Transform for the
	>   corresponding visual wheel.
	> - Use the VPWheelCollider's **center** property for moving the wheel shape to the outer bound
	>   of the visual wheel.
	> - Adjust the **radius** property for matching the radius of the visual wheel.

8.	Configure the **axles** property in VPVehicleController. Each axle must receive the references
	to their respective left-right VPWhelCollider components.

9.	Add or configure the **vehicle collider**. The 3D vehicles usually come with a simplified shape
	of the vehicle (collider). This is used for collision detection. Add a **MeshCollider**
	component to the collider object and mark is as **Convex**.

	If the vehicle comes without collider you can add a Cube as child of the Vehicle object, then
	scale it to roughly match the shape of the vehicle.

	!!! warning "&fa-warning:lg; VPWheelCollider components must be located _**inside**_ the vehicle's colliders"
		Ensure that the top half of each VPWheelCollider component is positioned **inside** regular
		convex colliders belonging to the vehicle's main rigidbody. No joint-attached bodies and
		colliders are valid here. Otherwise, strange behaviors and side effects may happen when
		the vehicle makes contact with other objects.

	!!! warning "&fa-warning:lg; At least one convex collider is mandatory in the vehicle"
		A vehicle without colliders require the inertia tensor to be explicitly set (Rigidbody.inertiaTensor),
		or it will show a very weird and unnatural behavior as soon as the simulation starts. Also,
		as described above, bad things will happen when contacting other objects.


### First test drive

This first drive will let us know if everything is ok so far. Configure the vehicle's components
as follows:

Rigidbody
:	- mass = 1000
	- drag = 0
	- angular drag = 0
	- Interpolate: Interpolate.

VP Telemetry (optional)
:	Add this component to the vehicle (Component > Vehicle Physics > Telemetry). It will show us
	what's happening under the hood.

	- Show Data = enabled
	- Style > Normal > Text Color = white
	- Style > Font = VeraMono
	- Big Style > Normal > Text Color = white
	- Big Style > Font = VeraMono
	- Big Style > Font Size = 20


Click <kbd>Play</kbd>. The vehicle is now live in the scene and you can drive it
around using the standard keys. Wheels should move and steer properly.

You can now head to the [Vehicle Configuration Guide](vehicle-setup.md) for configuring the
vehicle dynamics (engine, brakes, etc), or continue here for adding further components and features
such as audio and visual effects.


### Cameras

### Sounds

### Ground materials and tire effects

### Visual effects

