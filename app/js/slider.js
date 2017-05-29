$(document).ready(function() {
	$('.h-slider').slick({
		draggable: false,
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 10000
	});

	$('.i-slider').slick({
		draggable: false,
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		slidesToScroll: 3,
		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});

	$('.c-slider').slick({
		draggable: false,
		infinite: true,
		dots: true,
		adaptiveHeight: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		slidesToScroll: 3,
		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
});