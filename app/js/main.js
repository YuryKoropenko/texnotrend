$(document).ready(function() {
	/*меню шапка*/
	$('.h-nav__mob button').on('click', function() {
		$('.header__mob-nav').slideToggle();
	});

	/*up button*/
	$('.up-button button').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
	});

	$(window).scroll(function() {
		var bo = $('.header').height();
		if ( $(window).scrollTop() >= bo ){
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