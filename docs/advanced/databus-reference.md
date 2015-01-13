# Data Bus reference

The **Data Bus** is the standard method for communicating with vehicles in Vehicle Physics Pro. It's
inspired in the [ODB-II standard](http://en.wikipedia.org/wiki/OBD-II_PIDs):

- Immediate access O(1)
- Direct, non-blocking read/write access from all clients
- Transport only: no error control, no range checking
- Stores integer values only. Float values are represented as fixed-resolution decimals (ie: 1.0 = 10000)
- NaN is gracefully supported as integer: <code>(int)NaN = -2147483647</code>
- Full forwards-backwards compatibility along versions.

Add-on components can use the data bus for reading/writing values. Values are arranged
into _channels_. Accessing a specific data requires the pair `ChannelId, ValueId`. The standard
Channels and their available values are referenced below.

#### Accessing the data bus

The bus is accessed via property **data** defined in VPVehicleControllerBase. Use code like this in a script
attached to a GameObject containing a VPVehicleController component or any other
VPVehicleControllerBase-derived component:

```
// Get a reference to the vehicle controller component

VPVehicleControllerBase vehicle = GetComponent<VPVehicleControllerBase>();

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
|Steer			| Steering wheel position	| %		|10000	|-10000 = full left, 0 = center, +10000 = full right
|Throttle		| Throttle pedal position	| %		|10000	|10000 = 1.0 = 100%
|Brake			| Brake pedal position		| %		|10000	|5000 = 0.5 = 50%
|Handbrake		| Handbrake position		| %		|10000	|5000 = 0.5 = 50%
|Clutch			| Clutch pedal position		| %		|10000	|5000 = 0.5 = 50%
|ManualGear		| Manual gear lever position | gear | | -1 (reverse), 0 (neutral), 1, 2, 3, ...
|AutomaticGear	| Automatic transmission mode | mode | | 0, 1, 2, 3, 4, 5<br>(M, P, R, N, D, L)<sup>1</sup>
|Key			| Ignition key position | position | | -1 = off, 0 = drive, 1 = ignite


<sup>1</sup> Automatic transmission modes:
:	- M: Manual: do not automatically engage gears. Use manual gear shifting.
	- P: Park
	- R: Reverse. Gear shifting is supported for more than one reverse gears.
	- N: Neutral
	- D: Drive: automatically engage forward gears. Gear shifting is supported as well.
	- L: Low: first gear only.

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
|GearboxGear 	| Engaged gear								| gear	|		| Negative = reverse, 0 = Neutral or Park, Positive = forward.
|GearboxMode	| Actual transmission mode					| mode	|		| 0, 1, 2, 3, 4, 5 = _M, P, R, N, D, L_


