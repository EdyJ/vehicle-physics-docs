# Creating custom blocks

Blocks implement the internal mechanical parts of the vehicle, such as engine, gearbox, etc.
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
the Connect method creates a `Block.Connection` object an ensures both block have access to it.
This `Connection` object is the placeholder for the torque and momentum values that are transmitted
upwards and downwards between the block.

The actual torque and momentum flow occurs at the `Block` class, specifically at the methods
`ComputeStateUpwards` and `EvaluateTorqueDownstream`. At ComputeStateUpwards the block takes the
momentum and reaction torque values from the Connection objects accessed at each output. These
values have been placed there by the block connected at each output. The block processes
them, then places the result at the Connection object accessed at the input. The upper block in
the chain will take them for processing, and so on. The ending point is the Engine, which takes the
momentum and reaction torque values at its output, processes them, and generates a drive torque that
is placed at the output as well.

Then an opposite flow happens at EvaluateTorqueDownstream. The block reads the amount of drive
torque the upper block has placed at the Connection object at its input. It processes that
torque value, then places the resulting values at its outputs for the blocks downstream to
receive and process them as well. The ending points are the wheels, which received the final drive
torque at their input, combine it with the brake torque and tire friction, compute a new momentum
value, calculate a tire force and a reaction torque. The momentum and the reaction torque are then
sent upwards through the input, and the cycle repeats.

### Public interface

A block exposes several types of public members by convention:

Settings
:	A serializable class with the configuration settings of the block. This class may be exposed
	and serialized at the inspector by the host controller.
	A public member `settings` must	be declared in the block as well. These settings are likely
	to change during fine-tunning the vehicle in the Editor, but rarely in the final application.

Inputs
:	The values that come from the driver's controls. Examples: the position of the gear lever
	(`Gearbox` block) or the position of the throttle pedal (`Engine` block). Inputs are
	the values that are typically adjusted by the driver while driving.

	In some cases the block can modify an input value for preventing it to go out of range.
	This happens at the manual gearbox, for instance. Gear lever is not allowed to have an invalid
	value (non-existing gear).

States
:	States are a special kind of inputs that must be fed continuously with data coming from the
	vehicle and other blocks. Blocks use this data for their own logic. For example, the
	automatic gearbox requires knowing the actual speed of the vehicle for deciding whether is
	correct to engage a gear or not.

Sensors
:	Sensors expose internal information from the block to the vehicle controller.
	Examples: the rpm values of the engine, the actually engaged gear in the gearbox, etc.

The Vehicle Controller host is responsible of feeding the blocks with the appropriate inputs and
states, as well as exposing and using the sensors correctly. These values are typically to be
read, exposed and exchanged through the data bus.
