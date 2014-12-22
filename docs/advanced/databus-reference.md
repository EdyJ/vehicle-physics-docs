# Data Bus reference

The **Data Bus** is the standard method for communicating with vehicles in Vehicle Physics Pro. It's
inspired in the [ODB-II standard](http://en.wikipedia.org/wiki/OBD-II_PIDs):

- Inmmediate access O(1)
- Direct, non-blocking read/write access from all clients
- Transport only: no error control, no range checking
- Stores integer values only. Float values are represented as fixed-resolution decimals (ie: 1.0 = 10000)

Add-on components can use the data bus for reading/writing the values in the bus. Values are arranged
in _channels_. Accessing a specific data requires the pair `ChannelId, ValueId`. The standard Channels
and their available values are referenced below.

#### Accessing the data bus

The bus is accessed via property **data** defined in VPVehicleBase. Use code like this in a script
attached to a GameObject containing a VPVehicleController component or any other
VPVehicleBase-derived component:

```
// Get a reference to the vehicle controller component

VPVehicleBase vehicle = GetComponent<VPVehicleBase>();

// Set the input for the steering wheel

m_vehicle.data.Set(VPDChannel.StdInput, VPDStdInput.Steer, Input.GetAxis("Horizontal") * 10000);

// Read the engine rpms value

float engineRpm = m_vehicle.data.Get(VPDChannel.Vehicle, VPDVehicle.EngineRpm) / 1000.0f;
```

### Data Channels

| ChannelId | Type | Description |
| --------- | ---- | ----------- |
| StdInput	| Write only	| States of the vehicle input elements |
| Vehicle	| Read only		| State values of the internal components of the vehicle |

### StdInput channel

| ValueId | Description | Units | Resolution | Example |
| ------- | ----------- | ------| ---------- | ------- |
|Steer		| Steering wheel position	| %		|10000	|-10000 = full left, 0 = center, +10000 = full right
|Throttle	| Throttle pedal position	| %		|10000	|10000 = 1.0 = 100%
|Brake		| Brake pedal position		| %		|10000	|5000 = 0.5 = 50%
|Handbrake	| Handbrake position		| %		|10000	|5000 = 0.5 = 50%
|Clutch		| Clutch pedal position		| %		|10000	|5000 = 0.5 = 50%
|Gear		| Gear stick position <sup>1</sup>
|Key		| Ignition key position <sup>2</sup>


<sup>1</sup> Gear stick position
:	- Manual: -1 (R), 0 (N), 1, 2, 3...
	- Auto: -2 (P), -1 (R), 0 (N), 1, 2, 3...

	Gear stick position doesn't represent the actually engaged gear. The engaged gear is reported
	in the Vehicle channel.

<sup>2</sup> Ignition key position
:	-1 = off, 0 = drive, 1 = ignite

### Vehicle channel

| ValueId | Description | Units | Resolution | Example |
| ------- | ----------- | ------| ---------- | ------- |
|Speed			| Vehicle absolute velocity					| m/s	| 1000	| 14500 = 14.5 m/s
|EngineRpm		| Engine RPMs								| rpm	| 1000	| 1200000 = 1200 rpm
|EngineStalled	| Is the engine stalled? 		 			| 		|       | 0 = normal operation, 1 = engine stalled
|EngineTorque	| Torque at the output of the engine		| Nm	| 1000	| 200000 = 200 Nm
|EngineLoad		| How much load is demanded 				| % 	| 1000	| 200 = 0.2 = 20%
|ClutchTorque	| Torque at the output of the clutch in Nm	| Nm	| 1000	| 150000 = 150 Nm
|ClutchLock		| Lock ratio of the clutch					| %		| 1000	| 800 = 0.8 = 80%


