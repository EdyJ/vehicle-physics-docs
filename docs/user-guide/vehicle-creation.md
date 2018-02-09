# Creating a vehicle

This step-by-step tutorial shows how to create and rig a new vehicle from scratch in Vehicle Physics
Pro. You need a Unity 3D project with the VPP core and sample assets (see [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp)).

### Base hierarchy and components

Create the vehicle's main GameObject, add the basic components and prepare the hierarchy for the
rest of the components.
<div class="slick-carousel">
<section class="test-slider slider">
<div>
![](http://via.placeholder.com/650x400?text=1){: .clickview }

1- Prepare the environment
{: .header}

- Open an Unity 3D project with Vehicle Physics Pro
- Load the scene **VP Playground 1k - Sandbox**
(_Vehicle Physics Sample Assets > Scenes_).

This scene contains everything you need: test scenario, camera, light, ground materials.

</div>
<div>
![](http://via.placeholder.com/650x400?text=2){: .clickview }

2- Create the main GameObject
{: .header}

- Create an empty GameObject in the scene, name it **Vehicle**.
- Add these components from the Component menu:

	- Component > Physics > Rigidbody
	- Component > Vehicle Physics > Vehicle Controller
	- Component > Vehicle Physics > Input > Standard Input

</div>
<div>
![](http://via.placeholder.com/650x400?text=3){: .clickview }

3- Create the GameObjects for the wheels
{: .header }

- Create a child GameObject in the vehicle. Name it **WheelColliders**.
- Add four children GameObjects to it. Name them **WheelFL, WheelFR, WheelRL, WheelRR**.

</div>
<div>
![](http://via.placeholder.com/650x400?text=4){: .clickview }

4- Add the wheel components
{: .header }

Select the four WheelXX GameObjects, then add a **VPWheelCollider** component to them:

- Component > Vehicle Physics > Wheel Collider

</div>
<div>
![](http://via.placeholder.com/650x400?text=5){: .clickview }

5- Add the visual vehicle
{: .header }

Drag the vehicle's mesh from the Project to your Vehicle GameObject in the Hierachy, so it becomes
a child of it.

**Note:** the vehicle mesh should be contained within its own sub-hierarchy entirely. Check out [3D models and environments](/user-guide/3d-models)
for more information on the 3D files.

</div>
<div>
![](http://via.placeholder.com/650x400?text=6){: .clickview }

6- Assign the visual wheels to their physic counterparts
{: .header }

For each VPWheelCollider component (WheelXX) configure the property **Visual objects > Wheel** to
their corresponding counterpart in the mesh.

E.g. **WheelFL > Visual objects > Wheel** to MeshFrontLeft, the mesh object that represents the
front left wheel.

</div>
<div>
![](http://via.placeholder.com/650x400?text=7){: .clickview }

7- Adjust the physic wheels to match the visual wheels
{: .header }

- Select the four WheelXX components.
- Click the context menu for the VPWheelCollider component and choose **Adjust position and radius
	to the Wheel mesh**.

See _"Configuring the VPWheelColliders manually"_ below if you want / need to configure the
VPWheelColliders manually.

</div>
<div>
![](http://via.placeholder.com/650x400?text=8){: .clickview }

8- Add the vehicle collider
{: .header }

The collider is typically a simplified version of the vehicle mesh.

- Add the mesh collider as child of the vehicle.
- Add a **MeshCollider** component to it and enable the **Convex** flag.
- Remove the MeshRenderer and MeshFilter components.

&fa-hand-o-right:lg;&nbsp; Keep reading below for important considerations on vehicle colliders.

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
	accessibility: false,
	speed: 0,
	pauseOnDotsHover: true,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dotsClass: 'gusi-dots'
  });
});
</script>

!!! info "&fa-info-circle; Configuring the VPWheelColliders manually"

	If the VPWheelCollider option **Adjust position and radius to the Wheel mesh** doesn't work in
	your case (step 7 above) you may do it manually:

	1. The position of the VPWheelCollider component must match the Transform's position of its
		assigned visual wheel.
	2. Use the VPWheelCollider's **center** property for moving the wheel gizmo to the outer bound
		of the visual wheel.
	3. Adjust the VPWheelCollider's **radius** for matching the radius of the visual wheel.

### The vehicle collider

Game-ready 3D vehicles usually come with a simplified shape of the vehicle (collision mesh). The
vehicle collider must be a **convex** collider (MeshCollider > Convex), or a set of convex
colliders. The step 8 above describes how to add it as  collider to the vehicle.

The collision mesh is used for collision detection and inertia calculations. The vehicle dynamics
are actually affected by the shape of the collider. Thus, a collider resembling the shape of its
vehicle will provide a better simulation.

!!! warning "&fa-warning:lg; At least one convex collider is mandatory in the vehicle"
	A vehicle without colliders will exhibit a very weird and unnatural behavior as soon as the
	simulation starts, unless the inertia tensor is explicitly set (Rigidbody.inertiaTensor).
	Also, as described above, bad things will happen when contacting other objects.

![Convex vehicle collider](/img/user-guide/vpp-vehicle-collider.png){: .clickview .img-medium }

The collider of the vehicle can be:

- A collision mesh that comes with the 3D vehicle (best case).
- A box collider roughly resembling the vehicle's shape (not recommended, use for early prototyping
	only).
- A MeshCollider directly added to the 3D vehicle mesh. This may or	may not work depending on the
	actual complexity of the vehicle mesh. Most likely, exterior parts of the vehicle such as
	mirrors and antennas will have an adverse effect in the collisions.

!!! warning "&fa-warning:lg; VPWheelCollider components must be located _**inside**_ the vehicle's colliders"
	Ensure that the **top half** of each VPWheelCollider component is **enclosed within regular
	convex colliders** belonging to the vehicle's main rigidbody. No joint-attached colliders are
	valid here. Otherwise, strange behaviors and side effects may happen when the vehicle enters in
	contact with other objects.

	![Good (left) and bad (right) positions for the VPWheelCollider with respect to the vehicle collider](/img/user-guide/vpp-colliders-and-wheels.png){: .clickview .img-small }

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

