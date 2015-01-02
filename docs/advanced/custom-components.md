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


### Public interface

A component exposes several types of public members:

Settings
:	A serializable class with the configuration values of the component. This class
	may be exposed and serialized at the inspector by the host controller.
	A public member `settings` must	be declared as well. These settings define how the component
	is designed. They are likely to	change during fine-tunning in the Editor, but rarely in the
	final application.

Inputs
:	The values that come from the driver's controls. Examples: the position of the gear lever
	(gearbox component), the position of the throttle pedal (engine component), etc. Inputs are
	the values that can typically adjusted by the driver while driving.

States
:	States are a special kind of inputs that must be feed with data coming from the vehicle and
	other components. Components use this data for their own logic. For example, the automatic
	gearbox requires knowing the actual speed of the vehicle for deciding whether is correct to
	engage a gear or not.

Sensors
:	Sensors are information from the internal component that is exposed to the vehicle controller.
	Examples: the rpm values of the engine, the actually engaged gear in the gearbox, etc.

The Vehicle Controller host is responsible of feeding the components with the appropriate inputs and
states, as well as exposing and using the sensors correctly. These values are typically to be
read, exposed and exchanged through the data bus.









