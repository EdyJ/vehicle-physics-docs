# Driveline

![VP Vehicle Controller driveline](/img/blocks/vpp-driveline-inspector.png)

The Driveline helper builds the vehicle's driveline connecting a number of differentials and/or
torque splitters based on the number of drive wheels and the specified configuration.

Each differential or torque splitter in the driveline can be configured independently:

- [Differential](/blocks/differential)
- [Torque Splitter](/blocks/torque-splitter)

Axle Differential or _Differential_ alone.
:	The standard differential that connects the two wheels in the same axle.

Center Differential
:	A differential connecting the front and rear "regions" in the driveline. These differentials may
	connect axle differentials or inter-axle differentials.

Inter-axle differential
:	A differential connecting two axles in the same front or rear region.

Torque splitter
:	A viscous coupling between two axles. The torque is applied to the first axle, but if the wheels
	in that axle slip then part of the torque is routed to the second axle.

	A typical AWD car with a torque splitter would work as this: front wheels are powered, but if
	these wheels slip, the rear wheels receive a portion of the torque. This is similar to the
	Haldex coupling in the Audi Quattro.

### Single driven axle

A single driven axle with a differential connecting both wheels.

<canvas id="fig1" class="img-responsive" width="224px" height="102px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var chart = new drivelinechartcanvas("fig1", 14, 6);

		chart.originX = 3;
		chart.originY = -2;
		chart.AxleTop ( 0, 0 );
		chart.TorqueInputTop ( 4, 0 );
		chart.Text ( 4, -4, "Axle Differential" );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

### Two driven axles

Center differential
:	A center differential connecting the two axle differentials.

Torque splitter
:	Drive power goes to the first axle. A torque splitter routes part of the power to the second
	axle.

H-Drive
:	Wheels on each side of both axles are linked together. A single center differential connects
	both sides.

<canvas id="fig2" class="img-responsive" width="576px" height="289px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var chart = new drivelinechartcanvas("fig2", 36, 17);

		chart.originX = 3;
		chart.originY = -2;
		chart.Text ( 4, -14, "Center Differential" );

		chart.AxleBottom ( 0, 0 );
		chart.AxleTop ( 0, -10 );
		chart.Differential ( 3, -5 );
		chart.ShaftTop ( 3, -5 );
		chart.ShaftBottom ( 3, -5 );
		chart.ShaftRight ( 3, -5 );
		chart.ConnectY ( 4, -2, -3 );
		chart.ConnectY ( 4, -7, -3 );
		chart.TorqueInputRightTop ( 5, -6 );

		chart.originX = 14;
		chart.originY = -2;
		chart.Text ( 4, -14, "Torque Splitter" );

		chart.AxleBottom ( 0, 0 );
		chart.AxleTop ( 0, -10 );
		chart.TorqueSplitter ( 3, -3 );
		chart.ShaftTop ( 3, -3 );
		chart.ShaftBottom ( 3, -3 );
		chart.ShaftRight ( 3, -3 );
		chart.ConnectY ( 4, -2, -1 );
		chart.ConnectY ( 4, -5, -5 );
		chart.TorqueInputRightTop ( 5, -4 );

		chart.originX = 25;
		chart.originY = -2;
		chart.Text ( 4, -14, "H-Drive" );

		chart.WheelLeft ( 0, 0, 1 );
		chart.WheelLeft ( 0, -10, 1 );
		chart.WheelRight ( 7, 0, 1 );
		chart.WheelRight ( 7, -10, 1 );
		chart.Differential ( 3, -5 );
		chart.ShaftLeft ( 3, -5 );
		chart.ShaftRight ( 3, -5 );
		chart.ShaftTop ( 3, -5 );
		chart.TorqueInputTop ( 4, -5 );
		chart.ConnectY ( 2, -1, -10 );
		chart.ConnectY ( 6, -1, -10 );
		chart.ConnectX ( 2, -6, 1 );
		chart.ConnectX ( 5, -6, 1 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

### Three driven axles

H-Drive and center differential
:	Second and third axles are side-linked to a single differential. Drive power goes to a center
	differential connecting the side-linked axles and the first axle.

H-Drive and torque splitter at linked axles
:	Second and third axles are side-linked to a single differential. Drive power goes to the
	second-third linked axles. A torque splitter routes part of the power to the first axle.

H-Drive and torque splitter at independent axle
:	Second and third axles are side-linked to a single differential. Drive power goes to the first
	axle. A torque splitter routes part of the power to the second-third linked axles.

<canvas id="fig3" class="img-responsive" width="608px" height="357px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var chart = new drivelinechartcanvas("fig3", 38, 21);

		chart.originX = 3;
		chart.originY = -2;
		chart.Text ( 4, -17, "H-Drive and\nCenter Differential" );

		chart.AxleBottom ( 0, 0 );
		chart.HDriveGroupTop ( 0, -8 );
		chart.Differential ( 3, -5 );
		chart.ShaftTop ( 3, -5 );
		chart.ShaftBottom ( 3, -5 );
		chart.ShaftRight ( 3, -5 );
		chart.ConnectY ( 4, -2, -3 );
		chart.ConnectY ( 4, -7, -3 );
		chart.TorqueInputRightTop ( 5, -6 );

		chart.originX = 15;
		chart.originY = -2;
		chart.Text ( 4, -18, "H-Drive and\nTorque Splitter\nat H-Drive" );

		chart.AxleBottom ( 0, 0 );
		chart.HDriveGroupTop ( 0, -8 );
		chart.TorqueSplitterDown ( 3, -7 );
		chart.ShaftTop ( 3, -7 );
		chart.ShaftBottom ( 3, -7 );
		chart.ShaftRight ( 3, -7 );
		chart.ConnectY ( 4, -2, -5 );
		chart.ConnectY ( 4, -9, -1 );
		chart.TorqueInputRightTop ( 5, -8 );

		chart.originX = 27;
		chart.originY = -2;
		chart.Text ( 4, -18, "H-Drive and\nTorque Splitter at\nindependent axle" );

		chart.AxleBottom ( 0, 0 );
		chart.HDriveGroupTop ( 0, -8 );
		chart.TorqueSplitter ( 3, -3 );
		chart.ShaftTop ( 3, -3 );
		chart.ShaftBottom ( 3, -3 );
		chart.ShaftRight ( 3, -3 );
		chart.ConnectY ( 4, -2, -1 );
		chart.ConnectY ( 4, -5, -5 );
		chart.TorqueInputRightTop ( 5, -4 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

### Four driven axles

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

<canvas id="fig4" class="img-responsive" width="432px" height="374px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var chart = new drivelinechartcanvas("fig4", 27, 22);

		chart.originX = 3;
		chart.originY = -2;
		chart.Text ( 4, -19, "Dual inter-axle differentials\nand center differential" );

		chart.InterAxleGroup ( 0, 0 );
		chart.InterAxleGroup ( 0, -10 );
		chart.ConnectX ( 2, -3, 1 );
		chart.ConnectX ( 2, -13, 1 );
		chart.ConnectY ( 2, -3, -4 );
		chart.ConnectY ( 2, -13, 4 );
		chart.Differential ( 1, -7 );
		chart.ShaftTop ( 1, -7 );
		chart.ShaftBottom ( 1, -7 );
		chart.ShaftRight ( 1, -7 );
		chart.TorqueInputRightTop ( 3, -8 );

		chart.originX = 16;
		chart.originY = -2;
		chart.Text ( 4, -19, "Dual inter-axle differentials\nand torque splitter" );

		chart.InterAxleGroup ( 0, 0 );
		chart.InterAxleGroup ( 0, -10 );
		chart.ConnectX ( 2, -3, 1 );
		chart.ConnectX ( 2, -13, 1 );
		chart.ConnectY ( 2, -3, -4 );
		chart.ConnectY ( 2, -13, 4 );
		chart.TorqueSplitter ( 1, -7 );
		chart.ShaftTop ( 1, -7 );
		chart.ShaftBottom ( 1, -7 );
		chart.ShaftRight ( 1, -7 );
		chart.TorqueInputRightTop ( 3, -8 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>

<canvas id="fig5" class="img-responsive" width="640px" height="374px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var chart = new drivelinechartcanvas("fig5", 40, 22);

		chart.originX = 3;
		chart.originY = -2;
		chart.Text ( 4, -19, "Dual H-Drive\nand center differential" );

		chart.HDriveGroupBottom ( 0, 0 );
		chart.HDriveGroupTop ( 0, -10 );
		chart.ConnectY ( 4, -4, -3 );
		chart.ConnectY ( 4, -12, 3 );
		chart.Differential ( 3, -7 );
		chart.ShaftTop ( 3, -7 );
		chart.ShaftBottom ( 3, -7 );
		chart.ShaftRight ( 3, -7 );
		chart.TorqueInputRightTop ( 5, -8 );

		chart.originX = 16;
		chart.originY = -2;
		chart.Text ( 4, -19, "Dual H-Drive\nand torque splitter" );

		chart.HDriveGroupBottom ( 0, 0 );
		chart.HDriveGroupTop ( 0, -10 );
		chart.ConnectY ( 4, -4, -2 );
		chart.ConnectY ( 4, -12, 4 );
		chart.TorqueSplitter ( 3, -6 );
		chart.ShaftTop ( 3, -6 );
		chart.ShaftBottom ( 3, -6 );
		chart.ShaftRight ( 3, -6 );
		chart.TorqueInputRightTop ( 5, -7 );

		chart.originX = 29;
		chart.originY = -2;
		chart.Text ( 4, -18, "Full H-Drive" );

		chart.WheelLeft ( 0, 0, 1 );
		chart.WheelLeft ( 0, -4, 1 );
		chart.WheelLeft ( 0, -10, 1 );
		chart.WheelLeft ( 0, -14, 1 );
		chart.WheelRight ( 7, 0, 1 );
		chart.WheelRight ( 7, -4, 1 );
		chart.WheelRight ( 7, -10, 1 );
		chart.WheelRight ( 7, -14, 1 );

		chart.ConnectY ( 2, -1, -14 );
		chart.ConnectY ( 6, -1, -14 );
		chart.Differential ( 3, -7 );
		chart.ShaftTop ( 3, -7 );
		chart.ShaftRight ( 3, -7 );
		chart.ShaftLeft ( 3, -7 );
		chart.ConnectX ( 2, -8, 1 );
		chart.ConnectX ( 5, -8, 1 );
		chart.TorqueInputTop ( 4, -7 );
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>
