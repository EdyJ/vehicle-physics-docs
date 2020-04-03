# Vehicle rigging notes

These are my own notes for rigging vehicles. Currently adapted to rigging trucks, as I've had
to rig quite a few of these recently.

## Documentation

- Dimensions
- Total weight
- Weight per axle
- Engine specs and engine curve
- Transmission type, gears, gear ratios
- Axle ratio / Final ratio
- Top speed

## Base rig

Main GameObject + child mesh + child collider

Rigidbody: **Total weight**

VPVehicleController, VPTelemetry, VPStandardInput

WheelColliders

- Child WheelColliders GameObject with one VPWheelCollider child per wheel.
- **Specify wheel meshes** in  VPWheelCollider.
- Context menu > Adjust position and radius to meshes. Verify alignment.
- Context menu > Configure Spring and Damper.
- Configure wheels in VPVehicleController > Axles

Center of Mass (CoM)

- Child GameObject, reference it in VPVehicleController > Center Of Mass
- Longitudinal position: use **weight per axle** from specifications.
- Preliminary: must be refined after configuring suspension.

Inertia

- Parametric. Configure dimensions.
- Leave 0 bias for now (configure based on handling afterwards).

## Vehicle setup

Driveline

- Differential: **Final Ratio**

Steering

- Max Steer Angle: **Turn radius**
- Ackerman: child GameObject approx. in the position of the rear axle. Reference it in VPVehicleController > Steering > Ackerman Reference

Brakes

- Trucks: ~12000, 0.6. Parking: ~15000, 0.5

Tires (Parametric Model)

Single truck wheels:

	Adherent: 0.8
	Peak: 1.6, 0.9
	Limit: 8, 0.7
	ABCD: 0.7, 0, 0.2, 0

Twin truck wheels (use VPTireFrictionModifier):

	Adherent: 0,9
	Peak: 1.8, 1.1
	Limit: 8, 0.9
	ABCD: 0.8, 0, 0.15, 0

Engine

- **Engine curves and specs**

Gearbox

- **Gear ratios**
- Gear up/down rpms, manual y automatic transmissions

Solver

- 12 substeps
- Trucks: Tire Impulse Ratio: 0.3-0.4
- Trucks: Engine Reaction Factor: 0.9

Effects

- Audio: add Truck Audio or Car Audio prefabs
- Visual effects

## Suspension and dynamics

Suspension

- Must support **max weight per axle**
- Traction trucks: test for **max load over fifth wheel**
- Anti-roll bars
- Progressive suspension (leaf springs, bumpers)
- Dynamic suspension (truck's pneumatic suspension)

Rolling Friction

- Coefficient: 0.005
- Factor of 2 for twin wheels

Aerodynamics

- European truck cabin: drag 3, downforce 0
- American truck cabin: drag 2.3, downforce 0.002
- Position: point where the average drag is generated

Center Of Mass

- Refine CoM position with the suspension working. Use the **weight per axle** from specifications

## Safety aids

ABS, ESC, ASR, TCS

## Special vehicles

### Tandem + Trailer

Usually the combined mass is specified. Use 55% for tandem, 45% for trailer.