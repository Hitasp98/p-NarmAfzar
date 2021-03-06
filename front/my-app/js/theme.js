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
totop()


   })
	

})(window.jQuery);