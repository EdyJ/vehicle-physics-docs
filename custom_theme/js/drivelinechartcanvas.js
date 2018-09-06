

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
		var sizeX = 1;
		var sizeY = 2;

		SetOrigin();
		self.canvas.Rect([ x, y, sizeX, sizeY ], { fill: "transparent", stroke: "black", strokeWidth: 3, rx: 6, ry: 6 });
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


	self.Differential = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x+0.25, y-1, x+1, y-0.25 ], self.strokeOptions);
		self.canvas.Line([ x+0.25, y-1, x+1, y-1.75 ], self.strokeOptions);
		self.canvas.Line([ x+1, y-0.25, x+1.75, y-1 ], self.strokeOptions);
		self.canvas.Line([ x+1, y-1.75, x+1.75, y-1 ], self.strokeOptions);

		// self.canvas.Line([ x, y-1, x+1, y ], self.strokeOptions);
		// self.canvas.Line([ x, y-1, x+1, y-2 ], self.strokeOptions);
		// self.canvas.Line([ x+1, y, x+2, y-1 ], self.strokeOptions);
		// self.canvas.Line([ x+1, y-2, x+2, y-1 ], self.strokeOptions);
		}


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
		self.canvas.Line([ x, y, x+2, y ], self.strokeOptions);
		self.canvas.Line([ x, y, x, y-1 ], self.strokeOptions);
		self.canvas.Line([ x+2, y, x+2, y-1 ], self.strokeOptions);
		self.canvas.Line([ x, y-1, x+1, y-2 ], self.strokeOptions);
		self.canvas.Line([ x+2, y-1, x+1, y-2 ], self.strokeOptions);
		}


	self.TorqueSplitterDown = function (x, y)
		{
		SetOrigin();
		self.canvas.Line([ x, y-2, x+2, y-2 ], self.strokeOptions);
		self.canvas.Line([ x, y-1, x, y-2 ], self.strokeOptions);
		self.canvas.Line([ x+2, y-1, x+2, y-2 ], self.strokeOptions);
		self.canvas.Line([ x, y-1, x+1, y ], self.strokeOptions);
		self.canvas.Line([ x+2, y-1, x+1, y ], self.strokeOptions);
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
		self.Wheel ( x, y );
		self.ConnectX ( x+1, y-1 , 2);
		self.Differential ( x+3, y );
		self.ShaftLeft ( x+3, y );
		self.ShaftRight ( x+3, y );
		self.ConnectX ( x+5, y-1 , 2);
		self.Wheel ( x+7, y );
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
		self.ShaftLeft ( x+3, y-2 );
		self.ShaftRight ( x+3, y-2 );
		self.ShaftTop ( x+3, y-2 );
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
