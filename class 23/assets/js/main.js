jQuery(document).ready(function(){

   // Video

	$('.welcome-area').YTPlayer({
    	fitToBackground: true,
    	videoId: 'LSmgKRx5pBo',
	});


	// Slider

	var homepageSlides = $(".homepage-slides");

    homepageSlides.owlCarousel({
  	   items: 1,
   	   loop: true,
  	   autoplay: true,
  	   autoplayTimeout: 4000,
  	   nav: true,
  	   dots: true,
  	   navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });

    homepageSlides.on('translate.owl.carousel',function(event) {
    	$(".welcome-area-text h4").removeClass("animated fadeIn");
    	$(".welcome-area-text h1").removeClass("animated zoomIn");
    	
    });

    homepageSlides.on('translated.owl.carousel',function(event) {
    	$(".welcome-area-text h4").addClass("animated fadeIn");
    	$(".welcome-area-text h1").addClass("animated zoomIn");
    	
    });

});