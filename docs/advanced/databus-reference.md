# Data Bus reference

### Data Channels

| Channel | Type | Description |
| ------- | ---- | ----------- |
| StdInput 	| Write only 	| States of the vehicle input elements |
| Vehicle 	| Read only 	| State values of the internal components of the vehicle |

### StdInput channel

| Value | Description | Units | Resolution | Example |
| ----- | ----------- | ------| ---------- | ------- |
|Steer 		| Steering wheel position	| %		|		|
|Throttle 	| Throttle pedal position	| %     |       |
|Brake		| Brake pedal position      | %     |       |
|Handbrake	| Handbrake position        | %     |       |
|Clutch		| Clutch pedal position     | %     |       |
|Gear		| Gear stick position <sup>1</sup>   |       |		|
|Key		| Ignition key position <sup>2</sup>    |       |       |


<sup>1</sup> Gear stick position
:	- Manual: -1 (R), 0 (N), 1, 2, 3...
	- Auto: -2 (P), -1 (R), 0 (N), 1, 2, 3...
<sup>2</sup> Ignition key position
:	-1 = off, 0 = drive, 1 = ignite


### Vehicle channel