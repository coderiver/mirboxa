head.ready(function() {

	// slick

	$('.js-slick').slick({
		fade: true,
		autoplaySpeed: 5000
	});

	// mobile menu

	$('.js-menu-btn').on('click', function(){
		$('.js-menu').show();
		$('body').addClass('no-scroll');
	});
	$('.js-menu-close').on('click', function(){
		$('.js-menu').hide();
		$('body').removeClass('no-scroll');
	});

});