$(document).ready(function() {
	$('.h-slider').slick({
		draggable: false,
		infinite: true,
		dots: true
	});

	$('.i-slider').slick({
		draggable: false,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('.c-slider').slick({
		draggable: false,
		infinite: true,
		dots: true,
		adaptiveHeight: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1
	});
});