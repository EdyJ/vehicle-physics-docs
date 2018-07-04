# Creating custom blocks

The modular driverain desing in Vehicle Physics Pro uses functional _Blocks_ to implement the
internal mechanical parts of the vehicle such as engine, gearbox, etc. A block inherits from the
base class `VehiclePhysics.Block`.

Blocks are hosted by a vehicle controller (_host_), such as `VPVehicleController` on any other
component derived from `VehiclePhysics.VehicleBase`.

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
Wheel blocks include steering and brakes.

## Block protocol

### Input and Output connections

Block have inputs and outputs that connect them. Each connection is a object `Block.Connection`
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

### Block connections and torque flow

The `Block.Connect` method connects an input of a block to an output of a different block. For this,
the Connect method creates a `Block.Connection` object an ensures both blocks have access to it.
This `Connection` object is the placeholder for the torque and momentum values that are transmitted
upstream and downstream between the connected blocks.

The actual torque and momentum flow happens in two stages at the `Block` class, specifically at the
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

W-."Momentum (L)<br>Reaction Torque (Tr)".->BN
BN-."L<br>Tr".->DOTS
DOTS-."L<br>Tr".->B1
B1-."L<br>Tr".->B0
B0-."L<br>Tr".->E

classDef NoBox fill:#FFF,stroke:#FFF
class DOTS NoBox
</div>

Each block collects momentum and reaction torque from the `Connection` objects at each output.
Blocks downstream have already left the values there. The block computes a resulting momentum
and a reaction torque and puts them at the `Connection` object at the input. The block upstream
in the chain will collect them for processing, and so on.

The ending point is the Engine, which takes momentum and reaction torque from its output,
processes them, then generates a drive torque that is put back at the output.

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

Each block reads the amount of drive torque left by the block upstream at the `Connection` object
at its input. After processing it, puts the resulting torque values at the outputs for the
blocks downstream to get them.

The ending points are the wheels, which receive the final drive torque at their inputs and do
the final tasks:

- combine the drive torque with the brake torque and tire friction
- compute a new momentum value (this defines the wheel's new angular velocity)
- calculate a tire force and a reaction torque

The resulting tire force is applied to the vehicle's rigidbody. Momentum and reaction
torque are then sent upstream through the input, and the loop repeats.

### Public interface

A block exposes several types of public members following this convention:

Settings
:	A serializable class with the configuration settings of the block. This class may be exposed
	and serialized at the inspector by the host controller. A public member `settings` should be
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

## Example source code

This code implements a simple gearbox block that constrains the input and output to corotate
with the given ratio.

**SimpleGear.cs**
```
using VehiclePhysics;

public class SimpleGear : Block
	{
	public float ratio = 1.0f;

	protected override void Initialize ()
		{
		// Declare this block to have a single input and a single output

		SetInputs(1);
		SetOutputs(1);
		}

	public override bool CheckConnections ()
		{
		// Both input and output are required to be connected to other blocks

		return inputs[0] != null && outputs[0] != null;
		}

	public override void ComputeStateUpstream ()
		{
		// Take the state from the output connection, process it,
		// and put the result at the input connection (upstream flow).
		// L = angular momentum, I = inertia, Tr = reaction torque

		inputs[0].L = output[0].L / ratio;
		inputs[0].I = output[0].I / ratio / ratio;
		inputs[0].Tr = output[0].Tr / ratio;
		}

	public override void EvaluateTorqueDownstream ()
		{
		// Take the torque from the input connection, process it,
		// and put the result at the output connection (downstream flow).

		outputs[0].outTd = inputs[0].outTd * ratio;
		}
	}
```