jQuery(document).ready(function($) {
	
	$(".protfolio-filter li").on('click', function (){
		var filterData = $(this).attr("data-filter");
		
		$(".protfolio-list").isotope({
			filter: filterData
		});
	});
	
	$(".protfolio-list").isotope({
		itemSelector: '.single-protfolio-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.single-protfolio-item',
			horizontalOrder: true
		}
	});
	
	
});


    
	