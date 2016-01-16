/* Inspired on http://www.w3schools.com/css/css_image_gallery.asp (link: http://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive_js) */
// Get the modal
var modal = document.getElementById("clickview_modal");
function ImgResponsive_Close()
{
	if (modal)
		modal.style.display = "none";
}
if (modal)
	modal.onclick = function() { ImgResponsive_Close(); }

// Get the <span> element that closes the modal
var span = document.getElementById("clickview_close");

// When the user clicks on <span> (x), close the modal
if (span)
	span.onclick = function()  { ImgResponsive_Close(); }

var modalImg = document.getElementById("clickview_content")
if (modalImg)
	modalImg.onclick = function() { ImgResponsive_Close(); }

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByClassName("clickview");
var captionText = document.getElementById("clickview_caption");
for (var i = 0; i < images.length; i++) {
	images[i].onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		modalImg.alt = this.alt;
		captionText.innerHTML = this.alt;
   }
}