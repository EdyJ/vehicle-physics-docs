function SetBootstrapCols(row, attr)
{
	var a = row.attributes[attr];
	a = a ? parseInt(a.value, 10) : 1;
	return Math.ceil(12 / a);
}

var galleries = document.getElementsByClassName("imagegallery");
for (var i = 0; i < galleries.length; i++)
{
	var row = galleries[i];
	row.className += " row";
	row.setAttribute("style", "margin: 20px -5px");

	var images = row.childNodes;

	var xs = SetBootstrapCols(row, "xs");
	var sm = SetBootstrapCols(row, "sm");
	var md = SetBootstrapCols(row, "md");
	var lg = SetBootstrapCols(row, "lg");

	var xsCurrent = 0;
	var smCurrent = 0;
	var mdCurrent = 0;
	var lgCurrent = 0;

	for (var j = 0; j < images.length; ++j)
	{
		var imgnode = images[j];
		if (imgnode.localName != "img") continue;

		var divnode = document.createElement("div")
		divnode.setAttribute("class", "col-xs-" + xs + " col-sm-" + sm + " col-md-" + md + " col-lg-" + lg);
		divnode.setAttribute("style", "padding:5px");

		imgnode.setAttribute("style", "margin:0");

		divnode.appendChild(imgnode);
		row.appendChild(divnode);

		xsCurrent += xs;
		smCurrent += sm;
		mdCurrent += md;
		lgCurrent += lg;

		var classes = "";

		if (xs < 12 && xsCurrent >= 12)
		{
			xsCurrent = 0;
			classes += " visible-xs";
		}

		if (sm < 12 && smCurrent >= 12)
		{
			smCurrent = 0;
			classes += " visible-sm";
		}

		if (md < 12 && mdCurrent >= 12)
		{
			mdCurrent = 0;
			classes += " visible-md";
		}

		if (lg < 12 && lgCurrent >= 12)
		{
			lgCurrent = 0;
			classes += " visible-lg";
		}

		if (classes != "")
		{
			//console.log("clearfix");
			var clearfix = document.createElement("div");
			clearfix.setAttribute("class", "clearfix" + classes);
			row.appendChild(clearfix);
		}
	}
}