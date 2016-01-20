# Compiled demos

Try Vehicle Physics Pro yourself. Here you have some demos for PC/Windows.

Notes:

- **No driving aids!** Only an auto-shift version is available for some demos.

- **Clutch:** these vehicle setups use a Torque Converter, which doesn't require active clutch.
	Still, the clutch control can be used to completely disengage the engine from the transmission.

#### Start your engines!

The vehicles in these demos begin with the engine off. For starting the engine:

1. Press and release <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (watch the [Telemetry](/components/vehicle-debug#vptelemetry))
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

The Logitech G27 maps <kbd>DPad-Right</kbd> and <kbd>DPad-Left</kbd> at the shifter device to the
ignition key.

### Keyboard-controlled

| Car      			| Scene         	| VR-Enabled |   Download	 					    | Video         |
|-------------------|-------------------|------------|--------------------------------------|------------|
| VPP Test Vehicle	| Playground		| No         | [Manual](#)							| [Youtube](#) |
| Ferrari			| Playground 1K		| No         | [Manual](#) &#124; [Auto-shift](#)	| [Youtube](#) |
| JPickup			| Playground 1K 	| Yes        | [Manual](#) &#124; [Auto-shift](#)	|            |

##### Keyboard assignments

<center style="text-align:right">Key</center>| Function |<center style="text-align:right">Key</center>| Function
-----------------------------------:|-----------------|-----------------------------------:|-----------------
<kbd>K</kbd> <kbd>ctrl+K</kbd>		| Ignition key       | <kbd>R</kbd> 						| Reverse gear
<kbd>left</kbd><kbd>right</kbd>  	| Steering              | <kbd>N</kbd> 						| Neutral gear
<kbd>up</kbd> 						| Throttle              | <kbd>1</kbd> - <kbd>5</kbd> 			| Engage gear no.
<kbd>down</kbd> 					| Brake                 | <kbd>Page up</kbd><kbd>Page down</kbd> | Gear&nbsp;mode (automatic transmission)
<kbd>shift</kbd> 					| Clutch                | <kbd>B</kbd> 						| Toggle telemetry data
<kbd>space</kbd> 					| Handbrake             | <kbd>C</kbd> 						| Change camera
<kbd>Tab</kbd> 						| Gear Up          	    | <kbd>F1-F4</kbd>					| Select&nbsp;different&nbsp;camera&nbsp;modes
<kbd>Caps Lock</kbd> 				| Gear Down     	   | <kbd>T</kbd> 						| Toggle slow motion
<kbd>ctrl+space</kbd> 				| Toggle parking brake  | <kbd>Escape</kbd> 					| Reset scene


### Logitech G27

!!! warning "&fa-warning:lg; Ensure that the G27 is connected and working!"
	Otherwise the demo will crash on startup due to the faulty Logitech's wrapper for Unity.

| Car      			| Scene         	| VR-Enabled | Download	 					| Video |
|-------------------|-------------------|------------|------------------------------|-------|
| Ferrari			| Monza				| Yes        | [Manual](#)					|			|
| Ferrari			| Spa-Francorchamps | Yes        | [Manual](#)					|  [Youtube](#) |
| Ferrari			| Playground 1K		| Yes        | [Manual](#) &#124; [Auto-shift](#)	| |
| JPickup			| Playground 1K 	| Yes        | [Manual](#) &#124; [Auto-shift](#)	| |
| JPickup			| The City			| Yes        | [Manual](#) &#124; [Auto-shift](#)	| |

##### Logitech G27 setup

The G27 must be configured in the device's control panel:

-	Degrees of rotation: 460 (in order to match the rotation of the steering wheel in the 3D model)
-	Uncheck _Allow Game To Adjust Settings_

##### Logitech G27 mapping

