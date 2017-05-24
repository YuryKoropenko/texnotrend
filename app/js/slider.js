$(document).ready(function() {
	$('.h-slider').slick({
		draggable: false,
		dots: true
	});

	$('.interesting-offers__slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});
});