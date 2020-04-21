$(document).on('ready', function()
{
  $(".slider").slick(
  {
	dots: true,
	arrows: true,
	infinite: false,
	draggable: false,
	accessibility: false,
	speed: 0,
	pauseOnDotsHover: true,
	fade: true,
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
