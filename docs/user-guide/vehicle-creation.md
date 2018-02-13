# Creating vehicles

This step-by-step tutorial shows how to create and configure a new vehicle from scratch in Vehicle
Physics Pro. You will be configuring and rigging the L200-Pickup Test Vehicle, but you may configure
any vehicle following the same steps.

Requirements
:	An Unity 3D project with the VPP core and sample assets (see [Setting Up Vehicle Physics Pro](/user-guide/setting-up-vpp)).

### Basic working vehicle

Prepare a test scene, create the vehicle GameObject, add the basic VPP components, configure and
test the vehicle.
<div class="slick-carousel">
<section class="test-slider slider">
<div>
![](/img/user-guide/vpp-rig-tutorial-01.png){: .clickview }

1- Prepare the environment
{: .header}

- Open an Unity 3D project with Vehicle Physics Pro
- Load the scene **Playground 1k - Sandbox**
(_Sample Assets > Scenes_).

This scene contains everything you need: test scenario, camera, light, ground materials.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-02.png){: .clickview }

2- Create the vehicle GameObject and add the basic components
{: .header}

- Create an empty GameObject in the scene, name it **L200**.
- Add these components from the Component menu or Add Component button:

	- Component > Physics > **Rigidbody**.<br>
		_Mass_ = 1200, _Angular Drag_ = 0, _Interpolation_ = _Interpolate_
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

Select the four Wheel GameObjects, then add a **VPWheelCollider** component to them:

- Component > Vehicle Physics > **Wheel Collider**

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-05.png){: .clickview }

5- Add the visual mesh
{: .header }

- Locate the L200-Pickup mesh (_Sample Assets > Art > Models > Test Vehicle > Meshes_).
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

8- Configure the vehicle Axles
{: .header }

- Select the L200 GameObject.
- Locate the **VPVehicleController** component and expand the **Axles** section.
- Drag each wheel under WheelColliders to their corresponding slot as front/rear, left/right wheel.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-09.png){: .clickview }

9- Add the vehicle collision mesh
{: .header }

The collision mesh is a simplified version of the vehicle mesh.

- Locate the L200-Collider mesh (_Sample Assets > Art > Models > Test Vehicle > Meshes_).
- Drag it to the L200 GameObject in the Hierarchy so it becomes a child of L200.

&fa-warning:lg;&nbsp; **A collider is mandatory in the vehicle.** Check out [3D models and environments](/user-guide/3d-models)
for important information and requirements on the collision mesh for your vehicles.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-10.png){: .clickview }

10- Configure the collision mesh as Collider
{: .header }

- Select all the meshes that compose the collision mesh (_Base_ and _Top_ in this case).
- Add a **MeshCollider** component and enable the **Convex** flag.
- Configure the physic **Material** as _Vehicle Body_.
- Remove the MeshRenderer and MeshFilter components.

The vehicle is now ready for the first test drive.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-11.png){: .clickview }

11- Configure the camera to follow the car
{: .header}

- Select the **Camera Controller** GameObject.
- Drag the **L200** GameObject from the Hierarchy to the **Target** property in the camera controller.

</div>
<div>
![](/img/user-guide/vpp-rig-tutorial-12.png){: .clickview }

12- First test drive: Click Play &fa-play:lg; in the editor!
{: .header}

- Throttle, brake, steering: **arrow keys** or **WSAD**
- Handbrake: **space**
- Clutch: **ctrl** (i.e. for hot starts)
- Switch camera: **C**, **F1**-**F4**
- Reset car: **Enter** (i.e. after rolling over)
- Slow time mode: **T**
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

You should now be driving the L200 in the test scene. Review the steps above carefully if something
doesn't work or you get some error.

Note that vehicle dynamics are not configured at all - the car is using the default values for all
components. This allows some fun driving, but the handling and behavior will be poor. The next
chapter [Configuring Vehicles](https://vehiclephysics.com/user-guide/vehicle-setup/) describes
everything you need to know to configure the car properly.

!!! info "&fa-info-circle:lg; Configuring the VPWheelColliders manually"

	If the VPWheelCollider option **Adjust position and radius to the Wheel mesh** doesn't work in
	your case (step 7 above) you may do it manually:

	1. The position of the VPWheelCollider component must match the Transform's position of its
		assigned visual wheel.
	2. Use the VPWheelCollider's **center** property for moving the wheel gizmo to the outer bound
		of the visual wheel.
	3. Adjust the VPWheelCollider's **radius** for matching the radius of the visual wheel.

### Wheel collider positions

You may notice that the car experiences sudden bounces when touching other objects sideways. This is
caused by the wheel colliders being outside the vehicle's collider.

The option **Adjust position and radius to the Wheel mesh** (step 7 above) places the wheel collider
at the outer bound of the wheel. This position provides the best stability (larger wheelbase).
However, it's important that the top half of the WheelColliders remain _inside_ the vehicle's
collider for avoiding the described effects. [More information on vehicle colliders](/user-guide/3d-models/#vehicle-collider).

Check out the description of the issue and possible solutions below. Choose one of the solutions and
apply it.
<div class="slick-carousel">
<section class="test-slider slider">
<div>
![Good (left) and bad (right) positions for the wheel collider with respect to the vehicle collider](/img/user-guide/vpp-colliders-and-wheels.png){: .clickview .img-medium }

Good (left) and bad (right) positions for the wheel collider with respect to the vehicle collider.

</div>
<div>
![](/img/user-guide/vpp-colliders-and-wheels-01.png){: .clickview }

Solution 1 (recommended)
{: .header}

Modify **scale.x** in L200-collider to **1.1**. In this case this is enough for the vehicle collider
to enclose the top half of the wheel colliders.

Ideally, the collider should have been designed for including the top half of the wheel meshes.

</div>
<div>
![](/img/user-guide/vpp-colliders-and-wheels-02.png){: .clickview }

Solution 2
{: .header}

Modify **center.x** in the four wheel colliders to **-0.03** (left wheels) or **0.03** (right
wheels). This moves the wheel to the interior of the collider, but also reduces the wheelbase. As
result, the vehicle will be more prone to rolling over.

</div>
</section>
</div>
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

### Adding and configuring effects

Now let's configure the basic audio and visual effects by adding add-on components to the vehicle:
Telemetry, Audio, Tires, and Driver's View.

!!! info "&fa-info-circle:lg; Add-on components in Vehicle Physics Pro"

	VPP add-on components don't need to be necessarily at the vehicle's root GameObject. These
	components may be added to children GameObjects as well. You may arrange several add-on
	components in different GameObjects of the vehicle, enable disable them at your will, and even
	create and dispose them in runtime.

You may Play &fa-play; the scene after each step for testing how it works.
<div class="slick-carousel">
<section class="test-slider slider">
<div>
![](/img/user-guide/vpp-effects-tutorial-01.png){: .clickview }

1- Telemetry
{: .header}

- Components > Vehicle Physics > Telemetry > **Telemetry Window**.
- Enable **Show Data**.

[VPTelemetry](/components/vehicle-telemetry/#vptelemetry) is an invaluable tool for diagnosing
issues and configuring the effects properly.

&fa-hand-o-right:lg;&nbsp; Having the Telemetry window visible while testing the vehicle is highly
recommended.

</div>
<div>
![](/img/user-guide/vpp-effects-tutorial-02.png){: .clickview }

2- Audio effects
{: .header}

- Locate the **Car Audio** prefab (_Sample Assets > Prefabs_).
- Drag it to the L200 GameObject in the Hierarchy so it becomes a child of L200.

_Car Audio_ includes the [VPAudio](/components/vehicle-addons/#vpaudio) component pre-configured
with a set of AudioSources of standard audio effects.

</div>
<div>
![](/img/user-guide/vpp-effects-tutorial-03.png){: .clickview }

3- Tire effects
{: .header}

- Components > Vehicle Physics > Effects > **Tire Effects**.

[VPTireEffects](/components/vehicle-addons/#vptireeffects) includes tire marks and smoke. Different
[ground materials](components/ground-materials/) may show different marks, smoke, or particle
effects (i.e. dust).

</div>
<div>
![](/img/user-guide/vpp-effects-tutorial-04.png){: .clickview }

4- Configure the driver's view (1/2)
{: .header}

- Create a child GameObject in L200. Name it **Drivers View**.
- Change its local position to **0, 1.33, 1.09**.
- Add a Head Motion component: Components > Vehicle Physics > Effects > **Head Motion**.
- Configure Longitudinal and Lateral motions as **Tilt**.

</div>
<div>
![](/img/user-guide/vpp-effects-tutorial-05.png){: .clickview }

4- Configure the driver's view (2/2)
{: .header}

- Select the **Camera Controller** GameObject.
- Drag the **Drivers View** GameObject to **Attach To > Attach Target** in the camera controller.
- Press <kbd>C</kbd> several times (or <kbd>F1</kbd> once) while playing the scene for enabling the
driver's view.

Alternatively, you may configure the driver's view and other view parameters with the
[VPCameraTarget](/components/camera-controller/#vpcameratargetsetup) component (Components >
Vehicle Physics > Camera > Camera Target).

</div>
</section>
</div>
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

#### Other visual effects

The L200 3D model is not prepared for further visual effects. In your vehicles you can add a [VPVisualEffects](/components/vehicle-addons/#vpvisualeffects)
component for having these:

- Steering wheel rotation
- Lights: head, brakes, reverse
- Dashboard speed and rpm gauges
- Dashboard lights

Check out the _VPP JPickup_ vehicle in the scene _Playground 1k - JPickup - Keyboard_ for learning
how this component works.

&fa-thumbs-up:lg; You can now head to the [Vehicle Setup Guide](vehicle-setup.md){: .alert-link }
for configuring the vehicle dynamics (center of mass, engine, brakes, etc).
{: .alert .alert-success }