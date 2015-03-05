# Custom Components

A component derives from `VPComponent`. The class name prefix is VPC by convention.

Components are hosted by a vehicle controller (_host_), such as `VPVehicleController` on any other controller
derived from `VPVehicleControllerBase`.

< Schematic graph showing vehicle controller and components >


## Component protocol

< Schematic graph of a component showing inputs, outputs, settings, inputs, states, sensors >


### Input and Output connections

Components have inputs and outputs connecting them. Each connection is a object `VPComponent.Connection`
simulating the physical shaft that connects two components in a vehicle's drivetrain. For example,
the shaft connecting the gearbox with the differential, or the halfshafts connecting the differential
with the wheels, are simulated via inputs and outputs.

### Component connections and torque flow

The `VPComponent.Connect` method connects an input of a component to an output of a different
component. For this, the Connect method creates a `VPComponent.Connection` object an ensures both
components have access to it. This Connection object is the placeholder for the torque and momentum
values that are transmitted upwards and downwards among the components.

The actual torque and momentum flow occurs at the `VPComponent` class, specifically at the methods
`ComputeStateUpwards` and `EvaluateTorqueDownstream`. At ComputeStateUpwards the component takes the
momentum and reaction torque values from the Connection objects accessed at each output. These
values have been placed there by the component connected at each output. The component processes
them, then places the result at the Connection object accessed at the input. The upper component in
the chain will take them for processing, and so on. The ending point is the Engine, which takes the
momentum and reaction torque values at its output, processes them, and generates a drive torque that
is placed at the output as well.

Then an opposite flow happens at EvaluateTorqueDownstream. The component reads the amount of drive
torque the upper component has placed at the Connection object at its input. It processes that
torque value, then places the resulting values at its outputs for, for the components downstream to
receive and process them as well. The ending points now are the wheels, which received the drive
torque at their input, combine it with the brake torque and tire friction, compute a new momentum
value, calculate a tire force and a reaction torque. The momentum and the reaction torque are then
sent upwards through the input, and the cycle repeats.

### Public interface

A component exposes several types of public members:

Settings
:	A serializable class with the configuration values of the component. This class
	may be exposed and serialized at the inspector by the host controller.
	A public member `settings` must	be declared in the component as well. These settings define how
	the component is designed. They are likely to change during fine-tunning the vehicle in the
	Editor, but rarely in the final application.

Inputs
:	The values that come from the driver's controls. Examples: the position of the gear lever
	(gearbox component), the position of the throttle pedal (engine component), etc. Inputs are
	the values that can typically adjusted by the driver while driving.

	In some cases the component can modify an input value for preventing it to go out of range.
	This happens at the manual gearbox, for instance. Gear lever is not allowed to have an invalid
	value (non-existing gear).

States
:	States are a special kind of inputs that must be feed continuously with data coming from the
	vehicle and other components. Components use this data for their own logic. For example, the
	automatic gearbox requires knowing the actual speed of the vehicle for deciding whether is
	correct to engage a gear or not.

Sensors
:	Sensors expose internal information from the component to the vehicle controller.
	Examples: the rpm values of the engine, the actually engaged gear in the gearbox, etc.

The Vehicle Controller host is responsible of feeding the components with the appropriate inputs and
states, as well as exposing and using the sensors correctly. These values are typically to be
read, exposed and exchanged through the data bus.









