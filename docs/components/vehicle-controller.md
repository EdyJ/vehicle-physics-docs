# Vehicle Controller

The vehicle-equivalent of Unity's character controller. Simulates most types of vehicles.

&fa-thumbs-o-up; You don't need to configure all settings here. Choosing one
of the preset vehicles below gives you a fully configured and ready to use vehicle controller.
All you have to do is to set up the wheels.
{: .alert .alert-info }

## Vehicle type

Choose one of the presets or select _Custom_ for setting up the axles and roles manually.

## Axles

WheelColliders and visual meshes for each wheel. Some settings may be available or not depending
on the vehicle type.

#### Wheels

- **Collider**: The WheelCollider for the wheel. Radius, mass, suspension distance, suspension
	spring and suspension damper are configured at the WheelCollider.
- **Pivot** (optional): Transform that will be affected by suspension and steering. Useful for
	brake calipers.
- **Wheel**: Transform that will be affected by wheel spin. If Pivot is used then this transform must
	be child of it.

&fa-warning; WheelColliders and visual meshes (pivots and wheels) must reside in different
	hierarchies inside the GameObject. Check out the [requirements for the 3D models](#){: .alert-link }
	for more information.
{: .alert .alert-warning }

#### Brakes

Which brake system (front, rear, neutral) will control the brakes for this axle.

#### Steering

Steering settings for this axle. The relative longitudinal position configures how the steering
affects this axle:

- 1: This is a regular front axle with steering
- 0: This axle is not affected by steering
- -1: This axle steers the opposite of the regular steering angle (i.e. rear steering wheels)

Values in between set an intermediate amount of steering for that axle. Useful for, for instance,
multi-axle cranes with several steering axles.

## Center of mass

Transform to be used as Center of Mass (CoM). If not specified, CoM will be calculated
out of the vehicle's colliders (not recommended).

The longitudinal position of the center of mass greatly affects the behavior and handling of the
vehicle. The vertical position affects the stability.

!!! info "&fa-info-circle; How to configure the Center of Mass"

	1. Create an empty child GameObject in your vehicle (<kbd>Alt</kbd><kbd>Shift</kbd><kbd>N</kbd>),
		name it `Com`.
	2. Set it as Center of Mass in the vehicle controller.
	3. Locate the CoM gameobject it in the middle of your vehicle as seen from the top.
	4. Figure out the chassis of the vehicle. Change the vertical position (Y) of the CoM until
		it "touches" the imaginary chassis from upside.
	5. Move the CoM longitudinally (Z) towards the position of the engine. It should be placed
		around 2/3 of the length of the vehicle.

	When playing around with your vehicle you can adjust its handling behavior by modifying the Z
	position of the CoM. For adjusting the stability modify the Y position of the CoM.

## Engine

Set up the engine of the vehicle.

&fa-thumbs-o-up; Feel free to play with these values while monitoring the resulting engine
performance data in the graph and below it. If the combination is not correct a warning will be
displayed instead of the performance values.
{: .alert .alert-info }

#### Power curve

Most of the shape of the engine power curve depends on the idle, peak and max rpm settings. Circles
in the graph represent these settings (horizontal: rpms, vertical: torque in Nm). _Curve Bias_
values adjust the shape of the curve.

- **Idle**: Rpms and torque when no throttle is applied.
- **Peak**: Rpms and torque when the engine generates most power internally. This power also
	compensates the engine friction, so the maximum effective torque will probably be located elsewhere.
- ** Max rpm**: Maximum rpms the engine can reach on its own (without external torques).

Check out the calculated values below the graph for the engine performance data.

#### Inertia


#### Engine friction


#### Idle and stall

The idle state can be enforced in two ways:

- **Passive**: The engine applies the exact torque that compensates the friction at idle rpms.
	Works better with a steep friction curve.
- **Active**: Vehicle's electronic system actively applies as much torque as available for
	keeping the idle rpms.

With **Can Stall** enabled the engine stalls if the rpms fall below the calculated stall rpms. This
is the point in the graph near the origin where the torque curve is negative. The **Stall Bias**
settings helps adjusting the stall point. Check out the calculated values in the inspector for the
exact data.

## Clutch



## Gearbox


## Differential


## Brakes


## Tires


