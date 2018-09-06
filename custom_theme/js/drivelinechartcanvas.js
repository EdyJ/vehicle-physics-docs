

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
		var sizeX = 1;
		var sizeY = 2;

		SetOrigin();
		self.canvas.Rect([ x, y, sizeX, sizeY ], { fill: "transparent", stroke: "black", strokeWidth: 3, rx: 6, ry: 6 });
		}


	self.ConnectX = function (x, y, length)
		{
		SetOrigin();
		self.canvas.Line([ x, y, x+length, y ], { stroke: "black", strokeWidth: 3 });
		}


	self.ConnectY = function (x, y, length)
		{
		SetOrigin();
		self.canvas.Line([ x, y, x, y+length ], { stroke: "black", strokeWidth: 3 });
		}


	self.Differential = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		SetOrigin();
		self.canvas.Line([ x, y-1, x+1, y ], options);
		self.canvas.Line([ x, y-1, x+1, y-2 ], options);
		self.canvas.Line([ x+1, y, x+2, y-1 ], options);
		self.canvas.Line([ x+1, y-2, x+2, y-1 ], options);
		}


	self.TorqueSplitter = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		SetOrigin();
		self.canvas.Line([ x, y, x+2, y ], options);
		self.canvas.Line([ x, y, x, y-1 ], options);
		self.canvas.Line([ x+2, y, x+2, y-1 ], options);
		self.canvas.Line([ x, y-1, x+1, y-2 ], options);
		self.canvas.Line([ x+2, y-1, x+1, y-2 ], options);
		}


	self.TorqueSplitterDown = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		SetOrigin();
		self.canvas.Line([ x, y-2, x+2, y-2 ], options);
		self.canvas.Line([ x, y-1, x, y-2 ], options);
		self.canvas.Line([ x+2, y-1, x+2, y-2 ], options);
		self.canvas.Line([ x, y-1, x+1, y ], options);
		self.canvas.Line([ x+2, y-1, x+1, y ], options);
		}


	self.TorqueInputTop = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		SetOrigin();
		self.canvas.Line([ x, y+1, x, y ], options);
		self.canvas.Line([ x-0.5, y+1, x+0.5, y+1 ], options);
		}


	self.TorqueInputRightTop = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		SetOrigin();
		self.canvas.Line([ x, y, x+1, y ], options);
		self.canvas.Line([ x+1, y, x+1, y+1 ], options);
		self.canvas.Line([ x+0.5, y+1, x+1.5, y+1 ], options);
		}


	self.Axle = function (x, y)
		{
		self.Wheel ( x, y );
		self.ConnectX ( x+1, y-1 , 2);
		self.Differential ( x+3, y );
		self.ConnectX ( x+5, y-1 , 2);
		self.Wheel ( x+7, y );
		}


	self.HDriveGroup = function (x, y)
		{
		self.Wheel ( x, y );
		self.Wheel ( x, y-4 );
		self.Wheel ( x+7, y );
		self.Wheel ( x+7, y-4 );

		self.ConnectX ( x+1, y-1, 1 );
		self.ConnectX ( x+1, y-5, 1 );
		self.ConnectX ( x+6, y-1, 1 );
		self.ConnectX ( x+6, y-5, 1 );
		self.ConnectX ( x+2, y-3, 1 );
		self.ConnectX ( x+5, y-3, 1 );
		self.ConnectY ( x+2, y-1, -4 );
		self.ConnectY ( x+6, y-1, -4 );
		self.Differential ( x+3, y-2 );
		}
	}
