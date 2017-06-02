$(document).ready(function() {
/*vars*/
	var hh = $('.header').height(); // высота header

	/*меню шапка*/
	$('.h-nav__mob button').on('click', function() {
		$('.header__mob-nav').slideToggle();
	});

	/*header scrol*/
	if ($(window).width() > 991) {
		$(window).scroll(function() {
			if ( $(window).scrollTop() >= hh ) {
				$('.header__scrol').show();
			} else {
				$('.header__scrol').hide();
			}
		});
	}


	/*up button*/
	$('.up-button button').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
	});

	$(window).scroll(function() {
		if ( $(window).scrollTop() >= hh ){
			$('.up-button').fadeIn();
		} else {
			$('.up-button').fadeOut();
		}
	});

	/*обратный звонок*/
	$('.fb-button').on('click', function() {
		$('.popup__bg').fadeIn();
		$('.cb-popup').fadeIn();
		return false;
	});
	$('.cb-popup__close button').on('click', function() {
		$('.popup__bg').fadeOut();
		$('.cb-popup').fadeOut();
	});

	$('.popup__bg').on('click', function() {
		$(this).fadeOut();
		$('.cb-popup').fadeOut();
	});
});