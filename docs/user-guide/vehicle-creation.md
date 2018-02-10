# Creating a vehicle

This step-by-step tutorial shows how to create and configure a new vehicle from scratch in Vehicle
Physics Pro. You will be configuring and rigging the L200-Pickup Test Vehicle, but you may configure
any vehicle following the same steps.

Requirements
:	An Unity 3D project with the VPP core and sample assets (see [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp)).

### Base hierarchy and components

Prepare a test scene, create the vehicle GameObject, add the basic VPP components and
configure the vehicle.
<div class="slick-carousel">
<section class="test-slider slider">
<div>
![](/img/user-guide/vpp-rig-tutorial-01.png){: .clickview }

1- Prepare the environment
{: .header}

- Open an Unity 3D project with Vehicle Physics Pro
- Load the scene **VP Playground 1k - Sandbox**
(_Sample Assets > Scenes_).

This scene contains everything you need: test scenario, camera, light, ground materials.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-02.png){: .clickview }

2- Create the vehicle GameObject and add the basic components
{: .header}

- Create an empty GameObject in the scene, name it **L200**.
- Add these components from the Component menu or Add Component button:

	- Component > Physics > **Rigidbody**
	- Component > Vehicle Physics > **Vehicle Controller**
	- Component > Vehicle Physics > Input > **Standard Input**

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-03.png){: .clickview }

3- Create the GameObjects for the wheels
{: .header }

- Create a child GameObject in L200. Name it **WheelColliders**.
- Add four children GameObjects to it. Name them **WheelFL, WheelFR, WheelRL, WheelRR**.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-04.png){: .clickview }

4- Add the wheel components
{: .header }

Select the four WheelXX GameObjects, then add a **VPWheelCollider** component to them:

- Component > Vehicle Physics > **Wheel Collider**

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-05.png){: .clickview }

5- Add the visual mesh
{: .header }

- Locate the L200-Pickup mesh (_Sample Assets > Art > Models > Test Vehicle >
Meshes_).
- Drag it to the L200 GameObject in the Hierarchy so it becomes a child of L200.

&fa-hand-o-right:lg;&nbsp; Check out [3D models and environments](/user-guide/3d-models) for more
information and requirements of the 3D models.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-06.png){: .clickview }

6- Assign the visual wheels to their physic counterparts
{: .header }

Configure the property **Visual objects > Wheel** in each VPWheelCollider component under WheelColliders.
Drag the corresponding visual wheel from the L200-Pickup mesh to the Wheel property in the
component.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-07.png){: .clickview }

7- Adjust the physic wheels to match the visual wheels
{: .header }

- Select the four VPWheelCollider components under WheelColliders.
- Click the context menu for the VPWheelCollider component and choose **Adjust position and radius
	to the Wheel mesh**.

The VPWheelCollider components adjust their positions and radii to the visual wheels. See
_"Configuring the VPWheelColliders manually"_ below if you need to do it manually.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-08.png){: .clickview }

8- Add the vehicle collision mesh
{: .header }

The collision mesh is a simplified version of the vehicle mesh.

- Locate the L200-Collider mesh (_Sample Assets > Art > Models > Test Vehicle >
Meshes_).
- Drag it to the L200 GameObject in the Hierarchy so it becomes a child of L200.

&fa-hand-o-right:lg;&nbsp; A collider is mandatory in the vehicle. Check out [3D models and environments](/user-guide/3d-models)
for important information and requirements on the collision mesh for your vehicles.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-09.png){: .clickview }

9- Configure the collision mesh as Collider
{: .header }

- Select all the meshes that compose the collision mesh (_Base_ and _Top_ in this case).
- Add a **MeshCollider** component and enable the **Convex** flag.
- Configure the physic **Material** as _Vehicle Body_.
- Remove the MeshRenderer and MeshFilter components.

**&fa-check-square-o:lg;&nbsp; Done! The vehicle is ready for the first test.**

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

!!! info "&fa-info-circle:lg; Configuring the VPWheelColliders manually"

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
colliders.

!!! warning "&fa-warning:lg; At least one convex collider is mandatory in the vehicle"
	A vehicle without colliders will exhibit a very weird and unnatural behavior as soon as the
	simulation starts, unless the inertia tensor is explicitly configured (Rigidbody.inertiaTensor).

The collision mesh is used for collision detection and inertia calculations. The vehicle dynamics
are actually affected by the shape of the collider. Thus, a collider resembling the shape of its
vehicle will provide a better simulation.

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

