# Block reference

The drivetrain in Vehicle Physics Pro is designed as a tree of connected _Blocks_, each one
implementing an internal mechanical part of the vehicle. The drivetrain may use any number and
combination of connected blocks.

VPP provides blocks for the most common parts: engine, gearbox, differential, etc. The provided [Vehicle Controller component](/components/vehicle-controller)
internally connects the necessary blocks based on the vehicle configuration (i.e front-wheel-drive,
all-wheel-drive, h-drive, etc).

Also, you may write custom blocks if your vehicle requires specific parts not provided in VPP. Check
out [Creating custom blocks](/advanced/custom-blocks) for an example of a custom block with source
code.

Example of drivetrain in a vehicle controller:

<div class="mermaid">
graph RL
subgraph Vehicle Controller
subgraph Wheels
WFL>Wheel Front Left]
WFR>Wheel Front Right]
WRL>Wheel Rear Left]
WRR>Wheel Rear Right]
end

%% Re-define these here so they appear first
WFL>Wheel Front Left]
WFR>Wheel Front Right]

Eng(Engine + Clutch)
Gear[Gearbox]
Diff{Differential}
Eng-->Gear
Gear-->Diff
Diff-->WRL
Diff-->WRR
end
</div>

Wheel blocks include Steering, Brakes and Tire Friction.

## Block protocol

A block inherits from the base class `VehiclePhysics.Block`. Blocks are hosted by a vehicle
controller (_host_), such as `VPVehicleController` on any other component derived from
`VehiclePhysics.VehicleBase`.

See [Creating Custom Vehicles](custom-vehicles.md) for an example source code on a vehicle
controller creating and connecting Blocks.

### Input and Output connections

Block have inputs and outputs that connect them. Each connection is a `Block.Connection` object
simulating the physical shaft that connects two blocks in a vehicle's powertrain. For example,
the shaft connecting the gearbox with the differential, or the halfshafts connecting the
differential with the wheels, are simulated via inputs and outputs.

<div class="mermaid">
graph RL
subgraph Block
T("- Settings<br>- User Inputs<br>- States (In)<br>- Sensors (Out)")
BL["#nbsp;<br>Block Logic<br>#nbsp;"]
end

I0(Input 0)-->BL
BL-->O0>Output 0]
BL-->O1>Output 1]
BL-->|...|ON>Output n]

O0-->BO0(Downstream Block)
O1-->BO1(Downstream Block)
ON-->BON(Downstream Block)
BI0(Upstream Block)-->I0

classDef InOut fill:#FFF,stroke:#FFF
class I0,O0,O1,ON InOut

classDef Text fill:#FFD,stroke:#BB4
class T Text

classDef NoFill fill:#FFF
class BO0,BO1,BON,BI0 NoFill
</div>

While it's possible to have multiple inputs in a Block, the specific math and physics considerations
for this haven't been developed yet. There are no examples of a physically correct block using
more than one input in VPP.

### Block connections and torque flow

The `Block.Connect` method connects an input of a block to an output of a different block. For this,
the Connect method creates a `Block.Connection` object an ensures both blocks have access to it.
This `Connection` object is the placeholder for the torque and momentum values that are transmitted
upstream and downstream between the connected blocks.

The actual torque and momentum flow is a two-stage process in the `Block` class, specifically at the
methods `ComputeStateUpstream` and `EvaluateTorqueDownstream`.

#### 1. ComputeStateUpstream

<div class="mermaid">
graph LR
E(Engine)
B0[Block 0]
B1[Block 1]
BN[Block n]
DOTS["..."]
W>Wheel]

W-."Momentum (L)<br><br>Inertia (I)<br><br>Reaction Torque (Tr)".->BN
BN-."L<br><br>I<br><br>Tr".->DOTS
DOTS-."L<br><br>I<br><br>Tr".->B1
B1-."L<br><br>I<br><br>Tr".->B0
B0-."L<br><br>I<br><br>Tr".->E

classDef NoBox fill:#FFF,stroke:#FFF
class DOTS NoBox
</div>

From left to right, each block collects **angular momentum (L)**, **inertia (I)** and **reaction
torque (Tr)** from the `Connection` objects at each output. Blocks downstream have already left the
values there. The block computes the resulting momentum, inertia and reaction torque and puts them
at the `Connection` object at the input. The block upstream in the chain will collect them for
processing, and so on.

The ending point is the **Engine**, which has no inputs. It takes momentum, inertia and reaction
torque from its output, processes them, then generates a **drive torque** and puts it back at the
output.

#### 2. EvaluateTorqueDownstream

<div class="mermaid">
graph RL
E(Engine)
B0[Block 0]
B1[Block 1]
BN[Block n]
DOTS["..."]
W>Wheel]

E-."Drive Torque (Td)".->B0
B0-."Td".->B1
B1-."Td".->DOTS
DOTS-."Td".->BN
BN-."Td".->W

classDef NoBox fill:#FFF,stroke:#FFF
class DOTS NoBox
</div>

From right to left, each block reads the amount of **drive torque (Td)** left by the block upstream
at the `Connection` object at its input. After processing it, puts the resulting torque values at
the outputs for the blocks downstream to get them.

The ending points are the **Wheels**, which have no outputs. They receive the final drive torque
at their inputs and do the final tasks:

- combine the drive torque with the brake torque and tire friction
- compute a **new momentum value** (this defines the wheel's new angular velocity)
- compute the **tire force** and the **reaction torque**

The tire force is applied to the vehicle's rigidbody. The momentum and the reaction torque are then
sent upstream through the input, and the loop repeats.

## Public interface

A block may expose several types of public members following this convention:

Settings
:	A serializable nested class with the configuration settings of the block. This class may be
	exposed and serialized at the inspector by the host controller. A public member `settings` should be
	declared in the block as well.

	For example, the Engine settings that are exposed in the vehicle controller is an instance of
	the `Engine.Settings` class and is assigned to the `settings` member of the `Engine` block.

Inputs
:	Values that come from the driver's controls. Examples: the position of the gear lever
	(`Gearbox` block) or the position of the throttle pedal (`Engine` block). Inputs are
	the values that are typically adjusted by the driver while driving.

	In some cases the block can constrain an input value for preventing it to go out of range.
	This happens at the manual gearbox, for instance. Gear lever is not allowed to have an invalid
	value (non-existing gear).

States
:	States are a special kind of inputs that must be fed continuously with data coming from the
	vehicle and other blocks. Blocks use this data for their own logic. For example, the
	automatic gearbox requires knowing the actual speed of the vehicle for deciding whether is
	correct to engage a gear or not.

Sensors
:	Sensors expose internal values from the block to the vehicle controller. These values might
	be used to feed the _States_ of other blocks, take part of the vehicle's logic, or exposed at
	the dashboard.
	Examples: the rpm values of the engine, the actually engaged gear in the gearbox, the torque
	transmitted by the clutch, etc.

The Vehicle Controller host is responsible of feeding the blocks with the appropriate inputs and
states, as well as exposing and using the sensors correctly. These values are typically to be
read, exposed and exchanged through the data bus.

## Block events

#### Initialize

Define the number of inputs and output here by calling `Block.SetInputs(n)` and `Block.SetOutputs(n)`.

#### CheckConnections

Verify whether the connections required for the block to work are established. Example:

	public override bool CheckConnections ()
		{
		// First input required
		return inputs[0] != null;
		}

This method is called after Initialize and prior to any integration, so yo could also set up
internal variables for caching the connections.

#### PreStep

Set up the block before each time step. This is the place for reading externally modified inputs and
configuring the block accordingly for the upcoming integration step.

`Solver.time` is linealy coherent in time: you can assume each _t_ will be greater than the value in
the previous call. `Solver.deltaTime` is typically the fixed time step in the host physics engine.

#### GetState

Override this for blocks with inertial part only.

Returns the actual state of the inertial part of the block. This is the state considered "actual":
spin rate of a wheel, rmp of an engine...

	L	angular momentum of the inertial part
	P	lineal momentum
	Lr	reactive angular momentum

#### SetSubstepState

Override this for blocks with inertial part only.

Apply the provided state to the block for further calculations within this substep. First substep
will typically receive the state already returned in GetState. Other substeps will receive states
computed by the solver.

The provided states might not have coherency in time (i.e. in RK4 calculations).

#### ComputeStateUpstream

Override this in blocks with inputs (i.e. motors would be excluded as they have outputs only).

Given the L-I-Tr states at the outputs, compute and report the L-I-Tr state at the inputs:

- Wheels: report the L-I-Tr state of the wheel.
- Motors: do nothing.
- Other: pass-thru L-I-Tr from outputs to inputs applying the block's logic.

This defines L, I and Tr of the system (and thus the angular velocity along all the shafts).

#### EvaluateTorqueDownstream

Given the outTd values received at the inputs, compute the outTd values at the outputs. Use
`Solver.time` and `Solver.deltaTime` as _t_ and _dt_ for your calculations.

- Motors: calculate the output torque outTd.
- Wheels: calculate the final derivatives T and F given the state at the inputs.
- Other: pass-thru outTd from inputs to outputs applying the block's logic.

This simulates the actual torque flow along the entire drivetrain.

#### GetSubstepDerivative

Override this for blocks with inertial part only.

Must return the derivatives that affected the inertial part's state in this substep based on the
state already provided by SetSubstepState and the block's inputs and logic.

Use `Solver.time` and `Solver.deltaTime` as t and dt for your calculations.

Typically the derivative has already been calculated in EvaluateTorqueDownstream for providing the
torque at the outputs.

	T	derivative of the angular momentum L (torque)
	F	derivative of the lineal momentum P (force)
	Tr	derivative of the reactive angular momentum (reaction torque)

#### SetState

Override this for blocks with inertial part only.

Receive the new integrated values for this integration interval `Solver.deltaTime`.

	L, P, Lr: 	Integrated magnitudes.

These values must be returned at the next GetState event.

Here `Solver.time` contains the next step's value. Methods GetState and SetState are invoked like
this:

	- GetState (time, deltaTime)
	-   [ substep ]
	- SetState (time + deltaTime, deltaTime)


# Scripting reference

```cs
namespace VehiclePhysics
{
	public class Block
}
```

### Nested classes

```
	// Definition for a torque connection (shaft) between two blocks

	public class Connection
		{
		public float L = 0.0f;				// State: Angular momentum
		public float I = 0.0f;				// State: Inertia
		public float Tr = 0.0f;				// Reaction torque

		public float outTd = 0.0f;			// Derivative: Drive torque

		// Connected blocks and their corresponding slots

		public Block input;
		public int inputSlot;
		public Block output;
		public int outputSlot;
		}

	// Definition of State and Derivative for inertial parts and wheels

	public struct State
		{
		public float L;			// Angular momentum
		public Vector2 P;		// Lineal momentum
		public float Lr;		// Reactive angular momentum
		}

	public struct Derivative
		{
		public float T;			// Torque is the derivative of angular momentum		dL/dt = T
		public Vector2 F;		// Force is the derivative of lineal momentum		dP/dt = F
		public float Tr;		// Reaction torque is the derivative of Lr			dLr/dt= Tr
		}
```

### Properties

```
	// Utility
	// Angular velocity in radians/s = 2pi * frequency in revs/ second  = 2pi * f / 60 in revs/min

	public static float RpmToW = (2.0f * Mathf.PI) / 60.0f;
	public static float WToRpm = 60.0f / (2.0f * Mathf.PI);
```

### Events

```
	// Torque calculation
	// =============================================================================================
	//
	// Blocks without inertial parts:
	// ------------------------------
	//
	// Torque transmitters/multipliers with neglicible inertia such as shafts, gears,
	// differentials...
	//
	//		Initialize
	//		CheckConnections
	//
	//		PreStep							Set up the block before the step is computed
	//		ComputeStateUpstream			|- Integration substep
	//		EvaluateTorqueDownstream		|
    //
	// Blocks with inertial parts:
	// ---------------------------
	//
	// Contain a significant inertial element, such as flywheel or wheels.
	//
	//		Initialize
	//		CheckConnections
	//
	//		PreStep						Set up the block before the step is computed
	//		GetState					Retrieve actual state of the inertial part
	//		  SetSubstepState			--|
	//		  ComputeStateUpstream		  |-- Integration substep
	//		  EvaluateTorqueDownstream	  |
	//		  GetSubstepDerivative		--|
	//		SetState					Set the new integrated state to the inertial part

	protected virtual void Initialize ()
	public virtual bool CheckConnections ()
	public virtual void PreStep ()
	public virtual void GetState (ref State S)
	public virtual void SetSubstepState (State S)
	public virtual void ComputeStateUpstream ()
	public virtual void EvaluateTorqueDownstream ()
	public virtual void GetSubstepDerivative (ref Derivative D)
	public virtual void SetState (State S)
```

### Methods

```
	// Initialization

	protected void SetInputs (int count)
	protected void SetOutputs (int count)

	// Connection management

	public static bool Connect (Block inputUnit, int inputSlot, Block outputUnit, int outputSlot)
	public static bool Connect (Block inputUnit, Block outputUnit)
	public static bool Connect (Block inputUnit, Block outputUnit, int outputSlot)
	public bool DisconnectInput (int inputSlot)
	public bool DisconnectOutput (int outputSlot)
```