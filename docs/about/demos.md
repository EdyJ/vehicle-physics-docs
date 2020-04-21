# Vehicle Physics Pro demos

Try Vehicle Physics Pro yourself with these demos for PC/Windows and Mac OS X.

Instructions:
:	- Download and unpack to a folder of your choice.
	- Run the _Vehicle Physics Pro Demo_ executable (Windows) or the _app_ file (Mac).
	- Check out the in-game help (button <kbd>**?**</kbd>) for mappings and further instructions.

All demos include:
:	- Full-featured interactive dashboard.
	- Detailed live telemetry data.
	- Performance chart with analysis tool.
	- Support for keyboard, XBox gamepad and several steering wheel controllers with force feedback.
	- Support for motion platforms (D-BOX and SimTools 2.0).
	- Driver assists and steering assist.
	- Multiple camera modes (<kbd>C</kbd> key)
	- Complete in-game help.

&fa-warning:lg; **Note:** Xbox gamepad and steering wheel controllers are supported in the PC/Windows versions only.
{: .alert .alert-warning }

### JPickup Demo

<div class="imagegallery" sm="2" md="2" lg="2" style="display:none">
	<img class="clickview" src="/img/demos/vpp-jpickup-city-1.png" alt="Vehicle Physics Pro - JPickup Demo">
	<img class="clickview" src="/img/demos/vpp-jpickup-city-2.png" alt="Vehicle Physics Pro - JPickup Demo">
</div>

<center>**Download Vehicle Physics Pro JPickup Demo<br>
[PC/Windows&nbsp;(29&nbsp;MB)](https://www.edy.es/vehiclephysics/demos/2019-08-29-VPP-JPickup-Demo-PC-Windows.7z) | [Mac&nbsp;OS&nbsp;X&nbsp;(34&nbsp;MB, old version)](https://www.edy.es/vehiclephysics/demos/2019-05-04-VPP-JPickup-Demo-Mac-OS-X.zip)**</center>

The reviewed City scenery with the VPP-based JPickup truck. Includes a Setup dialog for configuring
the most typical features in a standard car:

- All-Wheel-Drive (AWD) vs. Rear-Wheel-Drive (RWD)
- Manual vs. Automatic transmission
- Auto-shift in Manual transmission
- Clutch vs. Torque Converter
- Differential Lock, three levels: axle, center, full.
- Engine stall

The Setup dialog includes built-in help. Just move the mouse over an option to see its description.

### Ascari Demo

<div class="imagegallery" sm="2" md="2" lg="2" style="display:none">
	<img class="clickview" src="/img/demos/vpp-ascari-golf-1.png" alt="Vehicle Physics Pro - Ascari Demo">
	<img class="clickview" src="/img/demos/vpp-ascari-golf-2.png" alt="Vehicle Physics Pro - Ascari Demo">
</div>

<center>**Download Vehicle Physics Pro Ascari Demo<br>
[PC/Windows&nbsp;(70&nbsp;MB)](https://www.edy.es/vehiclephysics/demos/2019-08-29-VPP-Ascari-Demo-PC-Windows.7z) | [Mac&nbsp;OS&nbsp;X&nbsp;(87&nbsp;MB, old version)](https://www.edy.es/vehiclephysics/demos/2019-05-04-VPP-Ascari-Demo-Mac-OS-X.zip)**</center>

This is the demo I use to learn and memorize the key aspects of this awesome track in both day and
night conditions. The car is a stock Volkswagen Golf. Not a racing car, not even a particularly
powerful car, so the challenge is driving it to competitive level getting the maximum out of it.
See the _Rules & Hints_ tab in the in-game Help for more.

The demo features a beautiful day-night cycle. Time of the day is accelerated to the rate of 1 hour
per minute, so an entire day takes 24 minutes of simulation time. Visibility is very poor on purpose
at night, so you have to memorize the track as much as possible and drive by using the few
references at all within your reach. Remember to turn the headlights on!

Can you beat the 2:50 mark? My lap record at the time of writing this is 2:45.881.

**Credits:** The 3D model of the Ascari Resort Track is my own adaptation to Unity of a mod for
Assetto Corsa developed by the AC forum member **_liquido_** a few years ago. [Full story here](https://assettocorsamods.net/threads/ascari-race-resort-ronda-spain.235/).

## Steering Wheel Support

Currently the demos support these steering wheel models:

- Logitech G27 / G29
- Thrustmaster T300 / T500 / TX (maybe other models supported as well)

If you have any other model and want it supported, you can greatly help me to support it by
following these instructions:

1. Ensure all the steering wheel parts are connected and enabled (wheel, shifter, pedals...)
2. The configuration should be as standard and default as possible in the device's control panel.
3. Disable any "combined pedals" option or similar in the devicel's control panel. Gas and brake
	pedals should be configured to use an independent axis each.
4. Download and open the **JPickup Demo**.
5. Open the **Input Config** section (_devices_ icon at the toolbar):

	![VPP - Steering Wheel Device debug window](/img/about/vpp-live-steering-wheel-device-info.jpg){: .img-medium .clickview }

6. Select **Wheel**. Your wheel should be initialized. Note down the information here: wheel model,
	buttons, axes, and force feedback (ffb) motors.
7. Click on the information. A new debug window appears at the top-right of your screen. This window
	lively shows the raw values read from your wheel.

#### Get information on the axes and buttons

1. Move the steering wheel full-left to full-right and center. Note down which axis changes
	(A0, A1, etc) and the values for left, right and center.
2. Press and release each pedal. Note down which axis changes (A0, A1, etc) and the values for
	fully pressed and fully released.
3. Move each d-pad, POV, joystick or lever in your wheel. If any of the POVs change (P0, P1, etc)
	note it down.
4. All other controls should be mapped to buttons (BT). No need to note down these, as I should be
	able to get them from the documentation of your wheel model.

#### Get information on the Force Feedback

1. Ensure that **Mappings** is configured as **Logitech G27** in the **Input Config > Wheel**
	section.
2. Open the **Car Setup** section (_wrench_ icon), then configure these options:

	- Transmission = Automatic
	- Coupling = Clutch
	- Engine Stall = Off

	![VPP - Input Config for force-feedback tests](/img/about/vpp-input-config-force-feedback-test.jpg){: .img-medium .clickview }

	The engine starts and the car begins moving slowly.

3. Move the steering wheel gently and feel the force feedback. Note down if the direction of the
	force feedback is correct (tries to re-center the wheel) or opposite (tries to move the wheel
	further in the current direction).

---

Send me all the information you've noted down to [edy@vehiclephysics.com](mailto:edy@vehiclephysics.com)
and I'll add support to your wheel in the next version. Thanks!!
