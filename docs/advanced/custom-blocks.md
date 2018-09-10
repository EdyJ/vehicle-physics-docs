# Creating custom blocks

The modular drivetrain design in Vehicle Physics Pro uses functional _Blocks_ to implement the
internal mechanical parts of the vehicle such as engine, gearbox, etc. Blocks may be connected in
any number and combination.

A block derives from `VehiclePhysics.Block`. It implements the logic of the block by overriding the
virtual methods for simulating the state and torque flow within that block.

The virtual methods in `VehiclePhysics.Block` and their roles are detailed in [Block reference](block-reference.md).

Simple Block
:	Parts with negligible inertia such as shafts and gears. Write the events Initialize,
	CheckConnections, PreStep (optional), ComputeStateUpstream and EvaluateTorqueDownstream as in
	the [example below](#example-source-code).

Standard Block
:	Parts with negligible inertia following the [Block Protocol](/advanced/block-reference#public-interface)
	for Settings, Inputs, States and Sensors. Implement the same events as in the Simple Block and
	apply the protocol for the exposed fields.

	The [Differential block](/blocks/differential) is an example of standard block.

Inertial Block
:	Parts with noticeable inertia such as flywheels or wheels. These parts must solve the inertial
	part by implementing the events GetState, SetSubstepState, GetSubstepDerivative and SetState
	additionally to the other events.

	The [Engine block]/blocks/engine) is an example of inertial block.

## Example source code

This code implements a simple gear block (SimpleGear) that constrains the input and output to
corotate with the given ratio.

A [custom vehicle controller](/advanced/custom-vehicles) using this SimpleGear block may look like
this:

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
WFL
WFR

Eng(Direct Drive Motor)
Gear[SimpleGear]
Diff{Differential}
Eng-->Gear
Gear-->Diff
Diff-->WRL
Diff-->WRR
end
</div>

Check out [Creating custom vehicles](/advanced/custom-vehicles) for a full implementation of a
custom vehicle controller.

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

