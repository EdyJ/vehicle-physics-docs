# Creating a vehicle

Instructions for creating and rigging a new vehicle from scratch.

### Base hierarchy and components

Create the vehicle's main GameObject, add the basic components and prepare the hierarchy for the
rest of the components.
<div style="max-width: 80%; margin: 0 auto">
<section class="test-slider slider">
<div>
![](http://via.placeholder.com/650x400?text=1){: .clickview }

Create an empty GameObject in the scene (<kbd>ctrl-shift-N</kbd>). Name it **Vehicle**.

Add these components from the Component menu:

- Component > Physics > Rigidbody
- Component > Vehicle Physics > Vehicle Controller
- Component > Vehicle Physics > Input > Standard Input

</div>
<div>
![](http://via.placeholder.com/650x400?text=2)

Create a child GameObject (<kbd>ctrl-alt-N</kbd>). Name it **WheelColliders**.

Create four children GameObjects under WheelColliders. Name them **WheelFL, WheelFR, WheelRL, WheelRR**
</div>
<div>
![](http://via.placeholder.com/650x400?text=3)

Select the four WheelXX GameObjects, then add a **VPWheelCollider** component to them:

- Component > Vehicle Physics > Wheel Collider

</div>
<div>
![](http://via.placeholder.com/650x400?text=4)
</div>
<div>
![](http://via.placeholder.com/650x400?text=5)
</div>
<div>
![](http://via.placeholder.com/650x400?text=6)
</div>
<div>
![](http://via.placeholder.com/650x400?text=7)
</div>
</section>
</div>
<script src="/js/slick.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
$(document).on('ready', function() {
  $(".slider").slick({
	dots: true,
	arrows: true,
	infinite: false,
	draggable: false,
	speed: 0,
	pauseOnDotsHover: true,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dotsClass: 'gusi-dots'
  });
});
</script>


1.	Create an empty GameObject in the scene (<kbd>ctrl-shift-N</kbd>). Name it **Vehicle**. Add
	these components (from the Component menu):

	- Component > Physics > Rigidbody
	- Component > Vehicle Physics > Vehicle Controller
	- Component > Vehicle Physics > Input > Standard Input

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

5.	Add the vehicle mesh as child of your Vehicle GameObject. The vehicle mesh should reside inside
	its own sub-hierarchy entirely:

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
		A vehicle without colliders will exhibit a very weird and unnatural behavior as soon as the
		simulation starts, unless the inertia tensor is explicitly set (Rigidbody.inertiaTensor).
		Also, as described above, bad things will happen when contacting other objects.


### First test drive

Let's check out if everything's ok so far. Configure these components as follows:

Rigidbody
:	- mass = 1000
	- drag = 0
	- angular drag = 0
	- Interpolate: Interpolate.

Telemetry (optional)
:	Add this component to the vehicle (Component > Vehicle Physics > Telemetry). It will show us
	what's happening under the hood:

	- Show Data = enabled

Click <kbd>Play</kbd>. The vehicle is now live in the scene and you can drive it around using the
standard keys (arrows or WSAD). Wheels should move and steer properly.

&fa-thumbs-up:lg; You can now head to the [Vehicle Setup Guide](vehicle-setup.md){: .alert-link }
for configuring the vehicle dynamics (engine, brakes, etc), or continue here for adding further
components and features such as audio and visual effects.
{: .alert .alert-success }


### Cameras

### Sounds

### Ground materials and tire effects

### Visual effects

