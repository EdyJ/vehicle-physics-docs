$(document).on('ready', function() {
  $(".slider").slick({
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
});
