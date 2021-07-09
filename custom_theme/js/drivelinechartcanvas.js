

function drivelinechartcanvas (canvasId, canvasWidth, canvasHeight)
	{
	var self = this;

	self.canvas = new texturecanvas(
		{
		canvasId: canvasId,
		pixelsWidth: 16 * canvasWidth,
		pixelsHeight: 17 * canvasHeight,
		width: canvasWidth,
		height: canvasHeight,
		originX: 0,
		originY: canvasHeight,
		});

	// Drawing offset

	self.originX = 0;
	self.originY = 0;

	// Settings

	self.strokeOptions = { stroke: "black", strokeWidth: 3 };

	// Initialization

	self.canvas.Grid({ stroke: "#DDF", strokeWidth: 0.4 });

	// Internal

	var SetOrigin = function()
		{
		self.canvas.originX = self.originX;
		self.canvas.originY = canvasHeight + self.originY;
		}

	// Chart helper methods

	self.Text = function (x, y, text)
		{
		SetOrigin();
		self.canvas.Text([ x, y, 0.75 ], text, { fill: "black", originY: "bottom" });
		}


	self.Wheel = function (x, y)
		{
		SetOrigin();
		self.canvas.Rect([ x, y, 1, 2 ], { fill: "gray", stroke: "black", strokeWidth: 3, rx: 6, ry: 6 });
		}


	// Debug

	self.DrawRulers = function ()
		{
		self.canvas.originX = 0;
		self.canvas.originY = canvasHeight;
		for (var y = -1; y > -canvasHeight; y--)
			self.canvas.Text([ 0, y, 0.5 ], (y - self.originY) + "", { fill: "black", originY: "top", originX: "left" });
		for (var x = 1; x < canvasWidth; x++)
			self.canvas.Text([ x, 0, 0.5 ], (x - self.originX) + "", { fill: "black", originY: "top", originX: "left" });
		SetOrigin();
		}


	// Wheels with a shaft


	self.WheelLeft = function (x, y, shaftLength)
		{
		self.Wheel ( x, y );
		self.ConnectX ( x+1, y-1, shaftLength );
		}


	self.WheelRight = function (x, y, shaftLength)
		{
		self.Wheel ( x, y );
		self.ConnectX ( x, y-1, -shaftLength );
		}


	self.ConnectX = function (x, y, length)
		{
		SetOrigin();
		self.canvas.Line([ x, y, x+length, y ], self.strokeOptions);
		}


	self.ConnectY = function (x, y, length)
		{
		SetOrigin();
		self.canvas.Line([ x, y, x, y+length ], self.strokeOptions);
		}


	// Only the differential, no shafts.
	//
	// Desired shafts must be applied separately. Shafts take the same
	// coordinates as the differential they belong to.

	self.Differential = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x+0.25, y-1, x+1, y-0.25 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-1, x+1, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+1, y-0.25, x+1.75, y-1 ], self.strokeOptions);
		self.canvas.Line([ x+1, y-1.75, x+1.75, y-1 ], self.strokeOptions);
		}


	// Shafts take the same coordinates as the 2x2 object they belong to.

	self.ShaftLeft = function (x, y)
		{
		self.canvas.Line([ x, y-1, x+0.25, y-1 ], self.strokeOptions)
		}


	self.ShaftRight = function (x, y)
		{
		self.canvas.Line([ x+1.75, y-1, x+2, y-1 ], self.strokeOptions)
		}


	self.ShaftTop = function (x, y)
		{
		self.canvas.Line([ x+1, y, x+1, y-0.25 ], self.strokeOptions)
		}


	self.ShaftBottom = function (x, y)
		{
		self.canvas.Line([ x+1, y-1.75, x+1, y-2 ], self.strokeOptions)
		}


	self.TorqueSplitter = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x+0.25, y-0.25, x+1.75, y-0.25 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-0.25, x+0.25, y-1 ], self.strokeOptions);
		self.canvas.Line([ x+1.75, y-0.25, x+1.75, y-1 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-1, x+1, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+1.75, y-1, x+1, y-1.75 ], self.strokeOptions);
		}


	self.TorqueSplitterDown = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x+0.25, y-1.75, x+1.75, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-1, x+0.25, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+1.75, y-1, x+1.75, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-1, x+1, y-0.25 ], self.strokeOptions);
		self.canvas.Line([ x+1.75, y-1, x+1, y-0.25 ], self.strokeOptions);
		}


	self.TorqueInputTop = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x, y+1, x, y ], self.strokeOptions);
		self.canvas.Line([ x-0.5, y+1, x+0.5, y+1 ], self.strokeOptions);
		}


	self.TorqueInputRightTop = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x, y, x+1, y ], self.strokeOptions);
		self.canvas.Line([ x+1, y, x+1, y+1 ], self.strokeOptions);
		self.canvas.Line([ x+0.5, y+1, x+1.5, y+1 ], self.strokeOptions);
		}


	self.Axle = function (x, y)
		{
		self.WheelLeft ( x, y, 2 );
		self.Differential ( x+3, y );
		self.ShaftLeft ( x+3, y );
		self.ShaftRight ( x+3, y );
		self.WheelRight ( x+7, y, 2 );
		}


	self.AxleTop = function (x, y)
		{
		self.Axle ( x, y )
		self.ShaftTop ( x+3, y );
		}


	self.AxleBottom = function (x, y)
		{
		self.Axle ( x, y )
		self.ShaftBottom ( x+3, y );
		}


	self.HDriveGroup = function (x, y)
		{
		self.WheelLeft ( x, y, 1 );
		self.WheelLeft ( x, y-4, 1 );
		self.WheelRight ( x+7, y, 1 );
		self.WheelRight ( x+7, y-4, 1 );

		self.ConnectX ( x+2, y-3, 1 );
		self.ConnectX ( x+5, y-3, 1 );
		self.ConnectY ( x+2, y-1, -4 );
		self.ConnectY ( x+6, y-1, -4 );
		self.Differential ( x+3, y-2 );
		self.ShaftLeft ( x+3, y-2 );
		self.ShaftRight ( x+3, y-2 );
		}


	self.HDriveGroupTop = function (x, y)
		{
		self.HDriveGroup ( x, y );
		self.ShaftTop ( x+3, y-2 );
		}


	self.HDriveGroupBottom = function (x, y)
		{
		self.HDriveGroup ( x, y );
		self.ShaftBottom ( x+3, y-2 );
		}


	self.InterAxleGroup = function (x, y)
		{
		self.AxleBottom ( x, y );
		self.AxleTop ( x, y-4 );
		self.Differential ( x+3, y-2 );
		self.ShaftTop ( x+3, y-2 );
		self.ShaftBottom ( x+3, y-2 );
		self.ShaftLeft ( x+3, y-2 );
		}
	}
