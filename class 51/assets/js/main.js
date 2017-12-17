jQuery(document).ready(function($) {
	$(".slider-area").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		dots: true,
		nav: false
	});

	$(".logo-carousel").owlCarousel({
		items: 5,
		margin: 30,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		nav: true
	});
});