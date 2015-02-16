

function texturecanvas (canvasSettings)
	{
	var self = this;
	self.settings = canvasSettings;

	// Create and fill canvas

	self.canvasElement = $('#' + self.settings.canvasId);
	self.pixelsWidth = self.canvasElement.width();
	self.pixelsHeight = self.canvasElement.height();
	self.scaleX = self.pixelsWidth / self.settings.width;
	self.scaleY = self.pixelsHeight / self.settings.height;

	self.canvas = new fabric.StaticCanvas(self.settings.canvasId);
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
		self.ConvertPoints(points);

		if (!options.originX) options.originX = 'center';
		if (!options.originY) options.originY = 'center';

		self.canvas.add(new fabric.Line(points, options));
		}


	// Circle: [ x, y, radius ]

	self.Circle = function (points, options)
		{
		self.ConvertPoints(points);

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
		options.left = self.ConvertPosX(points[0]);
		options.top = self.ConvertPosY(points[1]);
		options.width = self.ConvertWidth(points[2]);
		options.height = self.ConvertHeight(points[3]);

		options.top -= options.height;

		if (options.strokeWidth)
			{
			options.height -= options.strokeWidth;
			options.width -= options.strokeWidth;
			}

		self.canvas.add(new fabric.Rect(options));
		}


	// Scaling methods, mostly internal


	self.ConvertPoints = function (points)
		{
		for (var i = 0; i < points.length; i += 2)
			{
			points[i] = self.ConvertPosX(points[i]);
			points[i+1] = self.ConvertPosY(points[i+1]);
			}
		}


	self.ConvertPosX = function (value)
		{
		if (value != undefined) value *= self.scaleX;
		return value;
		}


	self.ConvertPosY = function (value)
		{
		if (value != undefined) value = self.pixelsHeight - value * self.scaleY;
		return value;
		}


	self.ConvertWidth = function (value)
		{
		if (value != undefined) value *= self.scaleX;
		return value;
		}


	self.ConvertHeight = function (value)
		{
		if (value != undefined) value *= self.scaleY;
		return value
		}
	}
