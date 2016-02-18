# Creating custom blocks

The _Blocks_ implement the internal mechanical parts of the vehicle such as engine, gearbox, etc.
A block derives from `VehiclePhysics.Block`.

Blocks are hosted by a vehicle controller (_host_), such as `VPVehicleController` on any other
component derived from `VehiclePhysics.VehicleBase`.

< Schematic graph showing vehicle controller and blocks >

## Block protocol

< Schematic graph of a component showing inputs, outputs, settings, inputs, states, sensors >

### Input and Output connections

Block have inputs and outputs that connect them. Each connection is a object `Block.Connection`
simulating the physical shaft that connects two blocks in a vehicle's powertrain. For example,
the shaft connecting the gearbox with the differential, or the halfshafts connecting the differential
with the wheels, are simulated via inputs and outputs.

### Block connections and torque flow

The `Block.Connect` method connects an input of a block to an output of a different block. For this,
the Connect method creates a `Block.Connection` object an ensures both blocks have access to it.
This `Connection` object is the placeholder for the torque and momentum values that are transmitted
upwards and downwards among blocks.

The actual torque and momentum flow occurs at the `Block` class, specifically at the methods
`ComputeStateUpwards` and `EvaluateTorqueDownstream`. At ComputeStateUpwards the block takes the
momentum and reaction torque values from the `Connection` objects at each output. These
values have already been placed there by the block downstream. The block processes
them, then places the result at the `Connection` object at the input. The block upstream in
the chain will take them for processing, and so on. The ending point is the Engine, which takes the
momentum and reaction torque values at its output, processes them, and generates a drive torque that
is placed at the output as well.

Then an opposite flow happens at `EvaluateTorqueDownstream`. The block reads the amount of drive
torque block upstream has placed at the `Connection` object at its input. It processes that
torque value, then places the resulting values at its outputs for the blocks downstream to
receive and process them as well. The ending points are the wheels, which receive the final drive
torque at their inputs and do the final tasks:

- combine the drive torque with the brake torque and tire friction
- compute a new momentum value (this defines the wheel's new angular velocity)
- calculate a tire force and a reaction torque

The resulting tire force is then applied to the rigidbody. Momentum and reaction torque are sent
upwards through the input, and the cycle repeats.

### Public interface

A block exposes several types of public members by convention:

Settings
:	A serializable class with the configuration settings of the block. This class may be exposed
	and serialized at the inspector by the host controller.
	A public member `settings` should be declared in the block as well. The values are likely
	to change during fine-tunning the vehicle in the Editor, but rarely in the final application.

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