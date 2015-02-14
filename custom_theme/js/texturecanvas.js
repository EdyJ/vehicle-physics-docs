

function texturecanvas (parameters)
	{
	var self = this;

	console.log(parameters);

	// Create and fill canvas

	self.canvasElement = $('#' + parameters.canvasId);

	self.pixelsWidth = self.canvasElement.width();
	self.pixelsHeight = self.canvasElement.height();
	self.scaleX = self.pixelsWidth / parameters.width;
	self.scaleY = self.pixelsHeight / parameters.height;

	self.canvasElement.css("height", "auto");
	self.canvas = new fabric.StaticCanvas(parameters.canvasId);

	console.log(self.pixelsWidth + " x " + self.pixelsHeight);


	if (parameters.fill != undefined)
		{
		self.canvas.add(
			new fabric.Rect({ top: 0, left: 0, width: self.pixelsWidth, height: self.pixelsHeight, parameters.fill: '#AAA' })
			);
		}


	// Scaling methods


	self.Scale = function (scaleParams)
		{
		// Convert any scaleParams parameter into the canvas scale

		scaleParams.x1 = ConvertPosX(scaleParams.x1);
		scaleParams.y1 = ConvertPosY(scaleParams.y1);
		scaleParams.x2 = ConvertPosX(scaleParams.x2);
		scaleParams.y2 = ConvertPosY(scaleParams.y2);
		scaleParams.left = ConvertPosX(scaleParams.left);
		scaleParams.top = ConvertPosY(scaleParams.top);
		scaleParams.width = ConverWidth(scaleParams.width);
		scaleParams.height = ConvertHeight(scaleParams.height);
		}


	self.CovertPosX = function (posValue)
		{
		if (posValue != undefined) posValue *= self.scaleX;
		return posValue;
		}


	self.CovertPosY = function (posValue)
		{
		if (posValue != undefined) posValue *= self.scaleY;
		return posValue;
		}


	self.ConvertWidth
	self.ConvertHeight


	}
