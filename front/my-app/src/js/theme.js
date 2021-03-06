(function($) {
	$(document).ready(function(){

	"use strict";

		$('#mainmenu li ').hover(function(){
			$(this).children('ul').stop(true,true).fadeIn();
		})
		$('#mainmenu li ').mouseleave(function(){
			$(this).children('ul').stop(true,true).fadeOut();
		})

		

		// Start Mmenu
		 $("#my-menu").mmenu({
	         extensions: [
	         "position-right",
	         "fx-menu-zoom",
              "fx-panels-zoom",
              "pagedim-black"

	         ],
	         rtl: {
               use: true
            }
	      });



// fix sidebar
    $('.content, .sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 30
    });



// fixing menu
	var a= $('#menu').offset().top;

$(window).scroll(function(){
	if($(window).scrollTop()>a){
		$('#menu').addClass('fix');
	}else{
		$('#menu').removeClass('fix');

	}
})




// Search pop
$('.search-pop').click(function(){
	$('#searchpop').slideDown();
	$('.search-pop-form input').focus();
})
$('#searchpop span.close').click(function(){
	$('#searchpop').fadeOut();
})


// log pop
$('ul.usermenu li span').click(function(){
	$('#poplogin').fadeIn();
})
$('#poplogin span.close').click(function(){
	$('#poplogin').fadeOut();
})



// Start Backtotop
$('.backtotop').click(function(){
	$('html,body').animate({scrollTop : 0},600);
})

function totop(){
	var totop= $(window).height();
	$(window).scroll(function(){
		if($(window).scrollTop()>totop){
		$('.backtotop').addClass('active');
		}else{
			$('.backtotop').removeClass('active');

		}
	})
}
totop();



// Start Basket
$('#cart span.total').click(function(){
	var par= $(this).parent();

	if(par.hasClass('active')){
		par.removeClass('active');
	}else{
		par.addClass('active');

	}
})


// Start Price Range
if($( "#slider-range" ).length){

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "تومان" + ui.values[ 0 ] + " - تومان" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "تومان" + $( "#slider-range" ).slider( "values", 0 ) +
      " - تومان" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

}

// Start Zoomer
$("#img_01").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 

//pass the images to Fancybox
$("#img_01").bind("click", function(e) {  
  var ez =   $('#img_01').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});






   })
	

})(window.jQuery);