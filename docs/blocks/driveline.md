# Driveline

![VP Vehicle Controller driveline](/img/blocks/vpp-driveline-inspector.png)

The Driveline helper builds the vehicle's driveline connecting a number of differentials and/or
torque splitters based on the number of drive wheels and the specified configuration.

Each differential or torque splitter in the driveline can be configured independently:

- [Differential](/blocks/differential)
- [Torque Splitter](/blocks/torque-splitter)

### Definitions

Axle Differential or _Differential_ alone.
:	The standard differential that connects the two wheels in the same axle.

Center Differential
:	A differential connecting the front and rear "regions" in the driveline. These differentials may
	connect axle differentials or inter-axle differentials.

Inter-axle differential
:	A differential connecting two axles in the same front or rear region.

Torque splitter
:	A viscous coupling between two differentials. The torque is applied to the first differential,
	but if the wheels in that axle slip then part of the torque is routed to the second differential.

	A typical AWD car with a torque splitter would work as this: front wheels are powered, but if
	these wheels slip, the rear wheels receive a portion of the torque. This is similar to the
	Haldex coupling in the Audi Quattro.

### Driveline configurations

#### Single driven axle

Axle Differential
:	A single driven axle with a differential connecting both wheels.

<canvas id="fig1" class="img-responsive" width="224px" height="102px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var canvas = new drivelinechartcanvas("fig1", 14, 6);

		canvas.Axle ( 3, -2 );
		canvas.TorqueInputTop ( 7, -2 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

#### Two driven axles

Center differential
:	A center differential connecting the two axle differentials.

Torque splitter
:	Drive power goes to the first axle. A torque splitter routes part of the power to the second
	axle.

H-Drive
:	Wheels on each side of both axles are linked together. A single center differential connects
	both sides.

<canvas id="fig2" class="img-responsive" width="576px" height="272px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var canvas = new drivelinechartcanvas("fig2", 36, 16);

		canvas.Axle ( 3, -2 );
		canvas.Axle ( 3, -12 );
		canvas.Differential ( 6, -7 );
		canvas.ConnectY ( 7, -4, -3 );
		canvas.ConnectY ( 7, -9, -3 );
		canvas.Axle ( 14, -2 );
		canvas.Axle ( 14, -12 );
		canvas.TorqueInputRightTop ( 8, -8 );

		// canvas.TorqueInputTop ( 7, -2 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

#### Three driven axles

H-Drive and center differential
:	Second and third axles are side-linked to a single differential. Drive power goes to a center
	differential connecting the side-linked axles and the first axle.

H-Drive and torque splitter at linked axles
:	Second and third axles are side-linked to a single differential. Drive power goes to the
	second-third linked axles. A torque splitter routes part of the power to the first axle.

H-Drive and torque splitter at independent axle
:	Second and third axles are side-linked to a single differential. Drive power goes to the first
	axle. A torque splitter routes part of the power to the second-third linked axles.

#### Four driven axles

Dual inter-axle differentials and center differential
:	First and second axles are connected with a inter-axle differential. Third and fourth axles are
	connected with another inter-axle differential. Inter-axle differentials are connected together
	with a center differential.

Dual inter-axle differentials and torque splitter
:	First and second axles are connected with a inter-axle differential. Third and fourth axles are
	connected with another inter-axle differential. Drive power goes to the 1-2 inter-axle
	differential. A torque splitter routes part of the power to the 3-4 inter-axle differential.

Dual H-Drive and center differential
:	First-second and third-fourth axles are side-linked to a single differential each pair. Both
	differentials are connected together with a center differential.

Dual H-Drive and torque splitter
:	First-second and third-fourth axles are side-linked to a single differential each pair. Drive
	torque goest to the first-second axles. A torque splitter routes part of the power to the
	third-fourth axles.

Full H-Drive
:	Wheels on each side of all axles are linked together. A single center differential connects both
	sides.

<canvas id="figN" class="img-responsive" width="400px" height="425px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var canvas = new drivelinechartcanvas("figN", 25, 25);

		canvas.Wheel ( 0,0 );
		canvas.ConnectX ( 1, -1 , 2);
		canvas.Differential ( 3, 0 );
		canvas.ConnectX ( 5, -1 , 2);
		canvas.Wheel ( 7, 0 );

		canvas.Axle ( 0, -5 );
		canvas.TorqueInputTop ( 4, -5 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>
