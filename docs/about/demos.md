# Vehicle Physics Pro demos

Try Vehicle Physics Pro yourself with these demos compiled for PC/Windows.

Notes:

- **No driving aids!** Only an auto-shift version is available for some demos.

- **Clutch:** these vehicle setups use a Torque Converter, which provides progressive coupling
	without requiring an active clutch. Still, the clutch control can be used to completely
	disengage the engine from the transmission.

- Demos are compressed in [7z archives](http://7-zip.org). Download the demo, unpack to a folder of
	your choice and launch the executable.

#### Start your engines!

The vehicles in these demos begin with the engine off. For starting the engine:

1. Press and release <kbd>K</kbd> for moving the ignition key from "Off" to "Drive" (watch the [Telemetry](/components/vehicle-debug#vptelemetry))
2. Press and hold <kbd>K</kbd> for moving the ignition key to "Start" and actually start the engine.

	<kbd>ctrl-K</kbd> moves the ignition key back to the "Off" switching off the engine.

Logitech steering wheels map <kbd>DPad-Right</kbd> and <kbd>DPad-Left</kbd> to the ignition key.

### Keyboard-controlled

Choose the gearbox version of your choice (_manual gears_ or _auto-shift_) from the Download column.

| Preview | Car / Scene | VR&#8209;Enabled | Video | Download demo |
|---------|-------------|------------------|-------|---------------|
|![VPP Test Vehicle @ Playground scene](/img/gallery/vpp-test-vehicle-playground.jpg){: .img-thumb .clickview }	| VPP Test Vehicle / Gymkhana Playground | No | [Youtube](https://www.youtube.com/watch?v=eRBasBaKn1g) | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_Gymkhana.7z)
|![Ferrari @ Playground 1K](/img/gallery/vpp-ferrari-playground-1k.jpg){: .img-thumb .clickview } 				| Ferrari / Playground 1K  		| No  | [Youtube](https://www.youtube.com/watch?v=FuqO4gKDzKE) | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari_manual_gears.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari_auto_shift.7z)
|![JPickup @ Playground 1K](/img/gallery/vpp-jpickup-playground-1k.jpg){: .img-thumb .clickview } 				| JPickup / Playground 1K		| Yes | | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup_manual_gears_VR.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup_auto_shift_VR.7z)

##### Keyboard assignments

<center style="text-align:right">Key</center>| Function     |<center style="text-align:right">Key</center>| Function
-----------------------------------:|-----------------------|----------------------------------:|-----------------
<kbd>K</kbd> <kbd>ctrl+K</kbd>		| Ignition key          | <kbd>R</kbd> 						| Reverse gear
<kbd>left</kbd><kbd>right</kbd>  	| Steering              | <kbd>N</kbd> 						| Neutral gear
<kbd>up</kbd> 						| Throttle              | <kbd>1</kbd> - <kbd>5</kbd> 		| Engage manual gears
<kbd>down</kbd> 					| Brake                 |
<kbd>shift</kbd> 					| Clutch                | <kbd>B</kbd> 						| Toggle telemetry data
<kbd>space</kbd> 					| Handbrake             | <kbd>C</kbd> 						| Change camera
<kbd>Tab</kbd> 						| Gear Up          	    | <kbd>F1-F4</kbd>					| Select&nbsp;different&nbsp;camera&nbsp;modes
<kbd>Caps Lock</kbd> 				| Gear Down     	    | <kbd>T</kbd> 						| Toggle slow motion
<kbd>ctrl+space</kbd> 				| Toggle parking brake  | <kbd>Escape</kbd> 				| Reset scene

---

### Logitech steering wheels

Vehicle Physics Pro supports the Logitech steering wheels: G25, G27, Driving Force... all controls
and features are supported including clutch, shifter and force feedback. The demos below require a
Logitech steering wheel controller.

![Logitech G27, shifter and pedals](/img/gallery/logitech-g27-full-set.jpg){: .img-thumb .clickview }

The steering wheel must be configured in the device's control panel:

-	Pedals > Combined: Disabled
-	Degrees of rotation: **460** (for matching the rotation of the steering wheel in the 3D model)
-	Overall Effects Strength: **50%**
-	Spring & Damper Effects Strength: **100%**
-	Centering Spring: Disabled
-	Uncheck _Allow Game To Adjust Settings_.

!!! warning "&fa-warning:lg; Ensure that your Logitech steering wheel is connected and working!"
	Otherwise the demo will crash on startup due to the faulty Logitech's wrapper for Unity.

Choose the gearbox version of your choice (_manual gears_ or _auto-shift_) from the Download column.

| Preview | Car / Scene | VR&#8209;Enabled | Video | Download demo |
|---------|-------------|------------------|-------|---------------|
|![Ferrari @ Monza](/img/gallery/vpp-ferrari-monza-2.jpg){: .img-thumb .clickview } | Ferrari / Monza | Yes | | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Monza_Ferrari_G27_manual_gears_VR.7z)
|![Ferrari @ Spa-Francorchamps](/img/gallery/vpp-ferrari-spa.jpg){: .img-thumb .clickview } | Ferrari / Spa-Francorchamps | Yes | [Youtube](https://www.youtube.com/watch?v=SdeJcpWNHsw) | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Spa_Ferrari_G27_manual_gears_VR.7z)
|![Ferrari @ Playground 1K](/img/gallery/vpp-ferrari-playground-1k.jpg){: .img-thumb .clickview } | Ferrari / Playground 1K | Yes | [Youtube](https://www.youtube.com/watch?v=FuqO4gKDzKE) | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari_G27_manual_gears_VR.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_Ferrari_G27_auto_shift_VR.7z)
|![JPickup @ Playground 1K](/img/gallery/vpp-jpickup-playground-1k.jpg){: .img-thumb .clickview } | JPickup / Playground 1K | Yes | | [Manual gears](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup_G27_manual_gears_VR.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/Playground_1K_JPickup_G27_auto_shift_VR.7z)
|![JPickup @ The City](/img/gallery/vpp-jpickup-the-city.jpg){: .img-thumb .clickview } | JPickup / The City | Yes | | [Manual gears](http://edy.es/unity/vpp-demos/alpha/The_City_JPickup_G27_manual_gears_VR.7z) &#124; [Auto&#8209;shift](http://edy.es/unity/vpp-demos/alpha/The_City_JPickup_G27_auto_shift_VR.7z)

Specific mappings may vary among the different Logitech models. D-Pad works the same in all of them.

![Logitech G27 shifter mappings for the VPP demos](/img/gallery/vpp-logitech-g27-shifter-mappings.jpg){: .img-medium  .clickview }


