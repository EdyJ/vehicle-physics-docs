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

Single driven axle
:	- Axle Differential

Two driven axles
:	- Center differential
	- Torque splitter
	- H-Drive

Three driven axles
:	- H-Drive and center differential
	- H-Drive and torque splitter at linked axles
	- H-Drive and torque splitter at independent axle

Four driven axles
:	- Dual inter-axle differentials and center differential
	- Dual inter-axle differentials and torque splitter
	- Dual H-Drive and center differential
	- Dual H-Drive and torque splitter
	- Full H-Drive

<canvas id="fig2" class="img-responsive" width="400px" height="425px">
<!-- width and height here must be the same as the canvas will have, being:
	16 pixels per square in X
	17 pixels per square in Y
-->
</canvas>
<script type="text/javascript">
	var drawCanvas = function()
		{
		var canvas = new drivelinechartcanvas("fig2", 25, 25);

		canvas.Wheel ([ 0,0 ]);
		canvas.ConnectX ([ 1, -1 ], 2);
		canvas.Differential ([ 3, 0 ]);
		canvas.ConnectX ([ 5, -1 ], 2);
		canvas.Wheel ([ 7, 0 ]);

		canvas.Axle ([ 0, -5 ]);
		canvas.TorqueInputTop ([ 4, -5 ]);
		}

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>


<canvas id="fig1" class="img-responsive" width="390px" height="320px">
</canvas>
<script type="text/javascript">

	var Wheel = function (canvas, position)
		{
		var x = position[0];
		var y = position[1];
		var sizeX = 1;
		var sizeY = 2;

		canvas.Rect([ x, y, sizeX, sizeY ], { fill: "transparent", stroke: "black", strokeWidth: 3, rx: 6, ry: 6 });
		}

	var ConnectX = function (canvas, position, length)
		{
		var x = position[0];
		var y = position[1];

		canvas.Line([ x, y, x+length, y ], { stroke: "black", strokeWidth: 3 });
		}

	var Differential = function (canvas, position)
		{
		var x = position[0];
		var y = position[1];
		var options = { stroke: "black", strokeWidth: 3 };

		canvas.Line([ x, y-1, x+1, y ], options);
		canvas.Line([ x, y-1, x+1, y-2 ], options);
		canvas.Line([ x+1, y, x+2, y-1 ], options);
		canvas.Line([ x+1, y-2, x+2, y-1 ], options);
		}

	var TorqueInputTop = function (canvas, position)
		{
		var x = position[0];
		var y = position[1];
		var options = { stroke: "black", strokeWidth: 3 };

		canvas.Line([ x, y+1, x, y ], options);
		canvas.Line([ x-0.5, y+1, x+0.5, y+1 ], options);
		}

	var Axle = function (canvas, position)
		{
		var x = position[0];
		var y = position[1];

		Wheel (canvas, [ x, y ]);
		ConnectX (canvas, [ x+1, y-1 ], 2);
		Differential (canvas, [ x+3, y ]);
		ConnectX (canvas, [ x+5, y-1 ], 2);
		Wheel (canvas, [ x+7, y ]);
		}


	var drawCanvas = function()
		{
		var canvas = new texturecanvas(
			{
			canvasId: "fig1",
			pixelsWidth: 390,
			pixelsHeight: 300,
			width: 24,
			height: 17,
			originX: 0,
			originY: 17,
			});

		canvas.Grid({ stroke: "#DDF", strokeWidth: 0.4 });
/*
		canvas.Line([ 9, -0.5, 9, 8 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 8, 9, 8 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ 5, -0.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });
		canvas.Line([ -0.5, 4.5, 5, 4.5 ], { stroke: "slateblue", strokeWidth: 1, strokeDashArray: [5, 5] });

		canvas.Line([ 0, 0, 9, 8 ], { stroke: "red", strokeWidth: 3 });
		canvas.Line([ 9, 8, 11, 8 ], { stroke: "red", strokeWidth: 3 });

		canvas.Line([ -0.5, 0, 11, 0 ], { stroke: "#333", strokeWidth: 2 });
		canvas.Line([ 0, -0.5, 0, 9.5 ], { stroke: "#333", strokeWidth: 2 });

		canvas.Text([ 13.5, 0, 0.75 ], "Contact\ndepth (m)", { fill: "#444", fontWeight: "bold" });
		canvas.Text([ 0, 11, 0.75 ], "Force\n(N)", { fill: "#444", fontWeight: "bold" });

		canvas.Text([ 9.5, -1, 0.75 ], "suspension\ndistance", { fill: "slateblue", originY: "top" });
		canvas.Text([ 4.5, -1, 0.75 ], "suspension\nposition", { fill: "slateblue", originY: "top" });

		canvas.Text([ -1, 8, 0.75 ], "max force", { fill: "slateblue", originX: "right" });
		canvas.Text([ -1, 4.5, 0.75 ], "suspension\nforce", { fill: "slateblue", originX: "right", textAlign: "right" });
*/
		Wheel(canvas, [ 0,0 ]);
		ConnectX(canvas, [ 1, -1 ], 2);
		Differential(canvas, [ 3, 0 ]);
		ConnectX(canvas, [ 5, -1 ], 2);
		Wheel(canvas, [ 7, 0 ]);
		TorqueInputTop(canvas, [ 4, 0 ]);

		Axle (canvas, [ 0, -3 ]);


		};

	if (window.addEventListener) window.addEventListener('load', drawCanvas, false);
	else if (window.attachEvent) window.attachEvent('onload', drawCanvas);
</script>
