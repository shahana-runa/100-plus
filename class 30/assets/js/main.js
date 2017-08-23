jQuery(document).ready(function($){
	$(".protfolio-list").masonry({

		// itemSelector: '.single-protfolio-item',
		// columnWidth: 1,
		// percentPosition: true
		
	});

	$(".single-protfolio-item").hover(function() {
		$(".single-protfolio-item .protfolio-hover h2").removeClass("animated fadeInUp");
		$(this).find(".protfolio-hover h2").addClass("animated fadeInUp");
		
		$(".single-protfolio-item .protfolio-hover p").removeClass("animated fadeInUp");
		$(this).find(".protfolio-hover p").addClass("animated fadeInUp");
	});

	$(".menu-trigger").on('click', function() {
		$(".offcanvas-menu").addClass("active");
		$(".canvas-overlay").addClass("active");
	});


	$(".menu-close i.fa, .canvas-overlay").on('click', function() {
		$(".offcanvas-menu").removeClass("active");
		$(".canvas-overlay").removeClass("active");
	});

	$(".header-area").headroom();

});