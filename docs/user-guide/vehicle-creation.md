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

8.	Add or configure the **vehicle collider**. The 3D vehicles usually come with a simplified shape
	of the vehicle (collider). This is used for collision detection. Add a **MeshCollider**
	component to the collider's object and mark is as **Convex**.

	If the vehicle comes without collider you can add a Cube as child of the Vehicle object, then
	scale it to roughly match the shape of the vehicle.

	!!! warning "&fa-warning; At least one convex collider is mandatory in the vehicle"
		A vehicle without colliders require the inertia tensor to be explictly set (Rigidbody.inertiaTensor),
		or it will show a very weird and unnatural behavior as soon as the simulation starts.

### Configure the components

Rigidbody
:	- mass depending on the vehicle. Typical car is 1000-2000 Kg.
	- drag = 0, angular drag = 0
	- Interpolate recommended.

VP Vehicle Controller
:	- **Axles** > **Left Wheel** and **Right Wheel** of each axle must point to the corresponding
		VPWheelCollider component (the WheelXX objects).

Enough for now! Click <kbd>Play</kbd>. The vehicle is now live in the scene and you can drive it
around using the standard keys.


### Configure the cameras

### Add sounds

### Ground materials and tire effects

### Visual effects

## Vehicle configuration guide

TO-DO: move elsewhere (specific section?)

Essential:

- Rigidbody: mass
- VP Wheel Collider: radius, mass, suspension distance, spring, damper
- VP Vehicle Controller: axles, center of mass
- VP Standard Input

Accessory:

- VP Audio
- VP Telemetry
- VP Aero Surface
- _Vehicle Tire Effects_
- _Vehicle Visual Effects_

Scene:

- Ground Material Manager


#### VP Wheel Collider

There is one VPWheelCollider component per wheel. It configures the basic properties of the wheels
and the suspension parameters.

Together with the mass (Rigidbody) and the center of mass (VPVehicleController), the suspension
settings define most of the vehicle's behavior and reactions without the engine and powertrain
settings.

Mass (Kg)
: 	Use a value that roughly matches the real wheels. Small values (less than 10) are
	not recommended because numerical stability may be affected. This value doesn't need to be
	precise because it has rather more influence in the numerical stability than in the physic
	effects.

Radius (m)
:	It should match the radius of the wheel meshes for their rotation rate to be correctly matched.

Suspension Distance (m)
: 	Distance of the suspension travel from fully compressed to fully elongated.

Suspension Anchor (%)
:	How much the suspension is visually compressed in the vehicle's 3D model. This defines where
	the limits of the suspension will be in the simulated vehicle.

Spring (N/m)
:	Springs support the weight of the vehicle. When suspension is fully elongated
	the springs provide no force. When suspension is fully compressed the spring provide
	$force = spring * suspensionDistance$ in Newtons.

Damper (N/ms<sup>-1</sup>)
:	Dampers limit the speed of movement of the suspension. They affect the angular momentum
	of the vehicle on weight shifting situations (accelerating, braking, cornering...).

#### VP Vehicle Controller

Vehicle dynamics and functional components.

Center of mass
:	Should be located around the middle-top of the chassis and slightly biased towards the position
	of the engine.

Axles
:	Reference the wheels (VPWheelCollider) and set up each axle's features.

Transmission
:	How many driven axles and how they will be connected together and with the engine.

Steering
:	Angle, ackerman, toe.

Brakes
:	Brake power, brake bias, handbrake.

Tires
:	Tire friction model and friction curves.

Engine
:	Torque and rpms, idle, inertia, friction, can stall.

Clutch
:	Clutch type and parameters.

Gearbox
:	Gearbox type and ratios, auto-shift, park mode.

Differential or Axle Differential
:	Differential(s) connecting the two wheels of the same axle.

Inter-Axle Differential (if configured at Transmission)
:	Differential(s) connecting two axle differentials together.

Center differential (if configured at Transmission)
:	A differential connecting the _front_ and _rear_ sections of the transmission together and with
	the drivetrain upwards.

Torque splitter (if configured at Transmission)
:	Connects the _front_ and _rear_ sections of the transmission together and with the drivetrain
	upwards. The torque splitter couples the drivetrain with one of the sections, and routes a
	configured portion of the drive power to the other section.


#### VP Standard Input

Reads Unity's standard Input system for controlling the vehicle.

Throttle And Brake Mode
:	Whether throttle and brake axis control the throttle and brakes only, or if Reverse is
	automatically engaged.

Brake On Throttle Backwards
:	Throttle engages brakes when applied while the vehicle is moving backwards.

Apply Clutch On Handbrake
:	Clutch is applied for disengaging the engine from the transmission when handbrake is applied.

Unlock Transmission On Handbrake
:	Ensures than the front-rear sections of the transmission are disconnected from each other when
	handbrake is applied.

