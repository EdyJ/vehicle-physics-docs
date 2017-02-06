# Data Bus reference

The **Data Bus** is the standard method for communicating with vehicles in Vehicle Physics Pro. It's
inspired in the [ODB-II standard](http://en.wikipedia.org/wiki/OBD-II_PIDs):

- Immediate access O(1)
- Direct, non-blocking read/write access from all clients
- Data transport only: no error control, no range checking
- Stores _integer_ values only. Float values may represented as fixed-resolution decimals (ie: 1.0 = 10000)
- NaN is gracefully supported as integer: <code>(int)NaN = -2147483647</code>
- Full forwards-backwards compatibility along versions.

Add-on components can use the data bus for reading/writing values. _Values_ are arranged into
_channels_. Accessing a specific value requires the pair `ChannelId, ValueId`. The standard Channels
and their available values are referenced below.

Blocks don't have direct access to the data bus. The [host Vehicle Controller](vehiclebase-reference)
is responsible of reading and populating their exposed values in the overrides for
`VehicleBase.DoUpdateBlocks` and `VehicleBase.DoUpdateData`.

For examples on how to use the Data Bus, check out the scripts `VPStandardInput.cs` (method
`UpdateVehicle`) and `VPVehicleController.cs` (methods `DoUpdateBlocks` and `DoUpdateData`).

#### Accessing the data bus

The bus is accessed via property **data** defined in VehicleBase. Use code like this in a script
attached to a GameObject containing a VPVehicleController component or any other
VehicleBase-derived component:

```
using VehiclePhysics;

...

// Get a reference to the vehicle controller

VehicleBase m_vehicle = GetComponent<VehicleBase>();

// Set the input for the steering wheel

m_vehicle.data.Set(Channel.Input, InputData.Steer, Input.GetAxis("Horizontal") * 10000);

// Read the engine rpm value

float engineRpm = m_vehicle.data.Get(Channel.Vehicle, VehicleData.EngineRpm) / 1000.0f;
```

The bus can also be accessed via [] operators: `data[channel][value]`

```
m_vehicle.data[Channel.Input][InputData.Steer] = Input.GetAxis("Horizontal") * 10000;

float engineRpm = m_vehicle.data[Channel.Vehicle][VehicleData.EngineRpm];
```

### Data Channels

| Channel | Type | Description |
| --------- | ---- | ----------- |
| Input		| Write&nbsp;only	| States of the vehicle input elements.<br>Intended for writing, but the states may be read for representing the actual positions of the elements in the vehicle 3D model (i.e. steering wheel, gear stick...) |
| Vehicle	| Read&nbsp;only	| State values of the internal parts of the vehicle |
| Settings	| Read/Write		| Common configuration settings |

### Input channel

| InputData | Description | Units | Resolution | Example |
| --------- | ----------- |:-----:|:----------:| ------- |
|Steer			| Steering wheel position	| %		|10000	|-10000 = full left, 0 = center, +10000 = full right
|Throttle		| Throttle pedal position	| %		|10000	|10000 = 1.0 = 100%
|Brake			| Brake pedal position		| %		|10000	|5000 = 0.5 = 50%
|Handbrake		| Handbrake position		| %		|10000	|5000 = 0.5 = 50%
|Clutch			| Clutch pedal position		| %		|10000	|5000 = 0.5 = 50%
|ManualGear		| Manual gear lever position | gear number | | -1 (reverse), 0 (neutral), 1, 2, 3, ...
|AutomaticGear	| Automatic transmission mode <sup>1</sup> | gear mode | | 0, 1, 2, 3, 4, 5 = _M, P, R, N, D, L_ <sup>1</sup>
|GearShift		| Incremental gear shifting value <sup>2</sup> | gear increment | | Add +1 for gear up or -1 for gear down <sup>2</sup>
|Retarder		| Retarder brake stick position <sup>3</sup> | retarder level | | 0 (off), 1, 2, 3, ...
|Key			| Ignition key position | key position | | -1 = off, 0 = drive, 1 = ignite

<sup>1</sup> Automatic transmission modes:
:	- M (0): Manual: do not automatically engage gears. Use manual gear shifting.
	- P (1): Park
	- R (2): Reverse. Gear shifting is supported for more than one reverse gears.
	- N (3): Neutral
	- D (4): Drive: automatically engage forward gears. Gear shifting is supported for forward gears.
	- L (5): Low: first gear only.

**<sup>2</sup> GearShift** value is reset to 0 when the vehicle has acknowledged and processed the
input. Successive gear shift commands can be grouped by adding/subtracting +-1 to this bus value.

**<sup>3</sup> Retarder** uniformly controls the continuous braking systems when available.

### Vehicle channel

| VehicleData | Description | Units  | Resolution | Example |
| ----------- | ----------- |:------:|:----------:| ------- |
|Speed			| Vehicle absolute velocity					| m/s	| 1000	| 14500 = 14.5 m/s
|EngineRpm		| Engine RPMs								| rpm	| 1000	| 1200000 = 1200 rpm
|EngineStalled	| Is the engine stalled? 		 			| 		|       | 0 = normal operation or switched off, 1 = engine stalled
|EngineWorking	| Is the engine up and running?  			| 		|       | 0 = engine is off (stalled or switched off), 1 = engine up and running
|EngineLimiter	| Is the rpm limiter cutting engine power?	| 		|       | 0 = no, 1 = yes
|EngineLoad		| How much load is demanded 				| % 	| 1000	| 200 = 0.2 = 20%
|EngineTorque	| Torque at the output of the engine		| Nm	| 1000	| 200000 = 200 Nm
|EnginePower	| Power developed by the engine				| kW	| 1000	| 10000 = 10 kW
|EngineFuelRate	| Instant fuel consumption					| g/s	| 1000	| 20230 = 20.23 g/s
|ClutchTorque	| Torque at the output of the clutch in Nm	| Nm	| 1000	| 150000 = 150 Nm
|ClutchLock		| Lock ratio of the clutch					| %		| 1000	| 800 = 0.8 = 80%
|GearboxGear 	| Engaged gear								| gear number	|		| Negative = reverse, 0 = Neutral or Park, Positive = forward.
|GearboxMode	| Actual transmission mode					| gear mode		|		| 0, 1, 2, 3, 4, 5 = _M, P, R, N, D, L_
|GearboxShifting| Is the gearbox in the middle of a gear shift operation?	|		|		| 0 = no, 1 = yes
|RetarderTorque	| Brake torque injected in the driveline by the retarder	| Nm	| 1000	| 2000000 = 2000 Nm
|AbsEngaged		| Is the ABS being engaged in any wheel?				|		|		| 0 = no, non-zero = yes
|TcsEngaged		| Is the TCS limiting the engine throttle?				| 		|		| 0 = no, non-zero = yes
|EscEngaged		| Is the ESC applying brakes for keeping stability?		|		|		| 0 = no, non-zero = yes
|AsrEngaged		| Is the ASR applying brakes for reducing wheel slip?	|		|		| 0 = no, non-zero = yes
|AidedSteer		| Steering wheel position after steering aids | %	| 10000	| -10000 = full left, 0 = center, +10000 = full right

### Settings channel

| SettingsData | Description | Units  | Resolution | Example |
| ------------ | ----------- |:------:|:----------:| ------- |
|DifferentialLock	| Override lock setting at the differential<sup>1</sup>	|	|	| 0 = no override, 1 = force locked differential, 2 = force open differential
|DrivelineLock		| Override lock setting at the driveline<sup>2</sup>	|	|	| 0 = no override, 1 = force locked driveline, 2 = force unlocked / open driveline
|AutoShiftOverride	| Auto-shift override setting							|	|	| 0 = no override, 1 = force auto shift, 2 = force manual shift
|AbsOverride		| ABS override setting									|	|	| 0 = no override, 1 = force ABS enabled, 2 = force ABS disabled

**<sup>1</sup> DifferentialLock** affects the axle differentials only.

**<sup>2</sup> DrivelineLock** affects the element connecting the front-rear parts of the
driveline. This might be either a differential or a torque splitter.
