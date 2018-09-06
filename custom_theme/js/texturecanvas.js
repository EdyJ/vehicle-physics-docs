

function texturecanvas (canvasSettings)
	{
	var self = this;
	self.settings = canvasSettings;

	// Create and fill canvas

	// Canvas dimensions

	self.canvasElement = $('#' + self.settings.canvasId);
	self.pixelsWidth = self.settings.pixelsWidth? self.settings.pixelsWidth-1 : self.canvasElement.width()-1;
	self.pixelsHeight = self.settings.pixelsHeight? self.settings.pixelsHeight-1 : self.canvasElement.height()-1;
	self.scaleX = self.pixelsWidth / self.settings.width;
	self.scaleY = self.pixelsHeight / self.settings.height;

	// Canvas settings

	self.originX = self.settings.originX? self.settings.originX : 0;
	self.originY = self.settings.originY? self.settings.originY : 0;

	self.fontHeight = self.settings.fontHeight? self.settings.fontHeight : 1;

	// Actually create and configure the canvas

	self.canvas = new fabric.StaticCanvas(self.settings.canvasId);

	// fabric.Object.prototype.fontSize

	self.canvasElement.css("height", "auto");

	// console.log(self.pixelsWidth + " x " + self.pixelsHeight + ";  " + self.scaleX + " x " + self.scaleY);

	if (self.settings.fill)
		{
		self.canvas.add(
			new fabric.Rect({ top: 0, left: 0, width: self.pixelsWidth, height: self.pixelsHeight, fill: self.settings.fill })
			);
		}


	// Drawing methods


	// Line: [ x1, y1, x2, y2 ]

	self.Line = function (points, options)
		{
		self.TransformPoints(points);

		if (!options) options = {};
		if (!options.originX) options.originX = 'center';
		if (!options.originY) options.originY = 'center';

		self.canvas.add(new fabric.Line(points, options));
		}


	// Circle: [ x, y, radius ]

	self.Circle = function (points, options)
		{
		self.TransformPoints(points);

		if (!options) options = {};
		options.left = points[0];
		options.top = points[1];
		options.radius = points[2];

		if (!options.originX) options.originX = 'center';
		if (!options.originY) options.originY = 'center';

		self.canvas.add(new fabric.Circle(options));
		}


	// Rect: [ x, y, width, height ]

	self.Rect = function (points, options)
		{
		if (!options) options = {};
		options.left = self.TransformX(points[0]);
		options.top = self.TransformY(points[1]);
		options.width = self.TransformWidth(points[2]);
		options.height = self.TransformHeight(points[3]);

		// options.top -= options.height;

		if (options.strokeWidth)
			{
			// options.height -= options.strokeWidth;
			// options.width -= options.strokeWidth;
			}

		self.canvas.add(new fabric.Rect(options));
		}


	// Text: [ x, y, size ]

	self.Text = function (points, text, options)
		{
		if (!options) options = {};

		options.fontSize = self.TransformHeight(points[2]);
		self.TransformPoints(points);
		options.left = points[0];
		options.top = points[1];

		if (!options.originX) options.originX = 'center';
		if (!options.originY) options.originY = 'center';
		if (!options.textAlign) options.textAlign = 'center';
		if (!options.fontFamily) options.fontFamily = 'Helvetica';

		self.canvas.add(new fabric.Text(text, options));
		}



    // Grid

	self.Grid = function (options)
		{
		var points = [ 0, 0, 0, 0 ];

		if (!options) options = {};
		if (!options.originX) options.originX = 'center';
		if (!options.originY) options.originY = 'center';

		for (var i=0, x = -self.originX; i <= self.settings.width; x++, i++)
			{
			points[0] = x;
			points[1] = -self.originY;
			points[2] = x;
			points[3] = self.settings.height;

			self.Line(points, options);
			}

		for (var i=0, y = -self.originY; i <= self.settings.height; y++, i++)
			{
			points[0] = -self.originX;
			points[1] = y;
			points[2] = self.settings.width;
			points[3] = y;

			self.Line(points, options);
			}
		}


	// Scaling methods, mostly internal


	self.TransformPoints = function (points)
		{
		for (var i = 0; i < points.length; i += 2)
			{
			points[i] = self.TransformX(points[i]);
			points[i+1] = self.TransformY(points[i+1]);
			}
		}


	self.TransformX = function (value)
		{
		if (value != undefined) value = Math.round((value + self.originX) * self.scaleX);
		return value;
		}


	self.TransformY = function (value)
		{
		if (value != undefined) value = Math.round(self.pixelsHeight - (value + self.originY) * self.scaleY);
		return value;
		}


	self.TransformWidth = function (value)
		{
		if (value != undefined) value = Math.round(value * self.scaleX);
		return value;
		}


	self.TransformHeight = function (value)
		{
		if (value != undefined) value = Math.round(value * self.scaleY);
		return value
		}
	}
