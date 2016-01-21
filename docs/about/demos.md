# Compiled demos

Try Vehicle Physics Pro yourself. Here you have some demos for PC/Windows.

Notes:

- **No driving aids!** Only an auto-shift version is available for some demos.

- **Clutch:** these vehicle setups use a Torque Converter, which doesn't require active clutch.
	Still, the clutch control can be used to completely disengage the engine from the transmission.

- Demos are compressed in [7z archives](http://7-zip.org). Download the demo, unpack to a folder of
	your choice and launch the executable.

#### Start your engines!

The vehicles in these demos begin with the engine off. For starting the engine:

1. Press and release <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (watch the [Telemetry](/components/vehicle-debug#vptelemetry))
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

The Logitech G27 maps <kbd>DPad-Right</kbd> and <kbd>DPad-Left</kbd> at the shifter device to the
ignition key.

### Keyboard-controlled

Choose the gearbox version of your choice (_manual gears_ or _auto-shift_) from the Download column.

| Preview | Car / Scene | VR&#8209;Enabled |   DOWNLOAD       | Video         |
|-----------------|---------------------|------------|--------------------------------------|------------|
|![VPP Test Vehicle @ Playground scene](/img/gallery/vpp-test-vehicle-playground.jpg){: .img-thumb .clickview }	| VPP Test Vehicle / Gymkhana Playground | No  | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_Gymkhana.7z)                     | [Youtube](https://www.youtube.com/watch?v=eRBasBaKn1g) |
|![Ferrari @ Playground 1K](/img/gallery/vpp-ferrari-playground-1k.jpg){: .img-thumb .clickview } 				| Ferrari / Playground 1K  		| No  | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari_manual_gears.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari.7z) | [Youtube](https://www.youtube.com/watch?v=FuqO4gKDzKE)	|
|![JPickup @ Playground 1K](/img/gallery/vpp-jpickup-playground-1k.jpg){: .img-thumb .clickview } 				| JPickup / Playground 1K		| Yes | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup_manual_gears.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup.7z) |              											|

##### Keyboard assignments

<center style="text-align:right">Key</center>| Function |<center style="text-align:right">Key</center>| Function
-----------------------------------:|-----------------|-----------------------------------:|-----------------
<kbd>K</kbd> <kbd>ctrl+K</kbd>		| Ignition key       | <kbd>R</kbd> 						| Reverse gear
<kbd>left</kbd><kbd>right</kbd>  	| Steering              | <kbd>N</kbd> 						| Neutral gear
<kbd>up</kbd> 						| Throttle              | <kbd>1</kbd> - <kbd>5</kbd> 			| Engage manual gears
<kbd>down</kbd> 					| Brake                 | |
<kbd>shift</kbd> 					| Clutch                | <kbd>B</kbd> 						| Toggle telemetry data
<kbd>space</kbd> 					| Handbrake             | <kbd>C</kbd> 						| Change camera
<kbd>Tab</kbd> 						| Gear Up          	    | <kbd>F1-F4</kbd>					| Select&nbsp;different&nbsp;camera&nbsp;modes
<kbd>Caps Lock</kbd> 				| Gear Down     	   | <kbd>T</kbd> 						| Toggle slow motion
<kbd>ctrl+space</kbd> 				| Toggle parking brake  | <kbd>Escape</kbd> 					| Reset scene

### Logitech G27

!!! warning "&fa-warning:lg; Ensure that the G27 is connected and working!"
	Otherwise the demo will crash on startup due to the faulty Logitech's wrapper for Unity.

Choose the gearbox version of your choice (_manual gears_ or _auto-shift_) from the Download column.

| Car      			| Scene         	| VR&#8209;Enabled | Download	        | Video |
|-------------------|-------------------|------------|--------------------------------------|-------|
| Ferrari			| Monza				| Yes        | [Manual gears](#)					        |		|
| Ferrari			| Spa-Francorchamps | Yes        | [Manual gears](#)					        | [Youtube](#) |
| Ferrari			| Playground 1K		| Yes        | [Manual gears](#) &#124; [Auto&#8209;shift](#)	| [Youtube](#) |
| JPickup			| Playground 1K 	| Yes        | [Manual gears](#) &#124; [Auto&#8209;shift](#)	|       |
| JPickup			| The City			| Yes        | [Manual gears](#) &#124; [Auto&#8209;shift](#)	|       |

##### Logitech G27 setup

The G27 must be configured in the device's control panel:

-	Degrees of rotation: **460** (for matching the rotation of the steering wheel in the 3D model)
-	Uncheck _Allow Game To Adjust Settings_

##### Logitech G27 mapping

