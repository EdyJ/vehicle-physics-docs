# Creating a vehicle

Start here: <kbd>GameObject > Create Other > Vehicle</kbd>

A basic 4-wheeled vehicle will be added to the scene. This vehicle is fully functional.
You can hit <kbd>Play</kbd> at the Editor and drive around with it in your scenery.

The vehicle GameObject is structured as follows:

    Vehicle
    |- Mesh
	|	|- Body mesh
	|   |- WheelFL mesh
    |   |- WheelFR mesh
    |   |- WheelRL mesh
    |   |- WheelRR mesh
    |- Body Colliders
	|   |- Collider
	|- Wheel Colliders
	|	|- WheelFL
	|	|- WheelFR
	|	|- WheelFR
	|	|- WheelFR
	|- CoM
	|- Ackerman

Vehicle
: 	Contains the main components for the vehicle: Rigidbody, Vehicle Controller, Vehicle
	Input, Vehicle Sounds, Vehicle Effects.
Mesh
: 	All the visual parts go here. You can remove the sample parts and import your 3D model here.

Body Colliders
:	The invisible colliders for the vehicle's body go here.

Wheel Colliders
: 	The WheelCollider components, one per wheel. They are located at the actual positions of the
	vehicle's wheels.
CoM
:	The location of the Center of Mass. It has great influence in the vehicle's handling
	and stability.
Ackerman
: 	The location of the reference point for the Ackerman steering geometry. For 4-wheeled vehicles
	it's typically placed at the center of the rear axle.

## Component overview

Essential:

- Rigidbody: mass
- WheelColliders: radius, mass, suspension distance, spring, damper
- Vehicle Controller
- Vehicle Input

Accessory:

- Vehicle Sounds
- Vehicle Effects
- Vehicle Lights
- Vehicle Dashboard
- Vehicle Telemetry

Scene:

- Skidmarks
- Surface

## Setting up the vehicle

#### Rigidbody

Configure the **mass** of the vehicle here.

#### WheelColliders

Configure the basic properties of the wheels and the suspension parameters:

Radius (m)
:	It should match the radius of the wheel meshes so their rotation rate will be
	correctly matched
Mass (Kg)
: 	Use a value that roughly matches the real wheels. Small values (less than 10) are
	not recommended because numerical stability gets reduced. This value doesn't need to be accurate
	because it has rather more influence in the numerical stability than in the physic effects.
Suspension Distance (m)
: 	Distance of the suspension travel from fully compressed to fully elongated.

Spring (N/m)
:	Springs support the weight of the vehicle. When suspension is fully elongated
	the springs provide no force. When suspension is fully compressed the spring provide
	$force = spring * suspensionDistance$ in Newtons. A good starting value is $spring = mass*gravity*2/wheels$.
Damper (N/ms<sup>-1</sup>)
:	Dampers limit the speed of movement of the suspension. They affect the angular momentum
	of the vehicle on weight shifting situations (accelerating, braking, cornering...)

All other settings of the WheelCollider component can be ignored as they won't have any effect
on the Vehicle Physics module.

#### Vehicle Controller

The vehicle dynamics and functional components are handled and configured here.

Vehicle Type
:	Set up a predefined vehicle type or custom. The available options will vary depending on the
	vehicle type.
Axles
:	Reference the WheelColliders and wheel meshes for each wheel. Also set up axle roles.

Brakes
:	Brake power, brake bias, handbrake.

Steering
:	Angle, ackerman, toe.

Engine
:	Torque and rpms, idle, inertia, friction, can stall.

Clutch
:	Clutch type. Parameters if type is Torque Converter.

Gearbox
:	Gearbox type and ratios.

Differential
:	Differential type and specific settings.

Tires
:	Tire friction model and friction curves.


#### Vehicle Input
