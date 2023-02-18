$(document).on('ready', function()
{
  $(".slider").slick(
  {
	dots: true,
	arrows: true,
	infinite: false,
	draggable: false,
	accessibility: false,
	speed: 300,
	pauseOnDotsHover: true,
	fade: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dotsClass: 'gusi-dots'
  });

  $(".slider-home").slick(
  {
	dots: true,
	arrows: false,
	infinite: true,
	draggable: false,
	accessibility: false,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	pauseOnDotsHover: true,
	pauseOnHover: true,
	fade: false,
	slidesToShow: 1,
	slidesToScroll: 1,
  });
});
