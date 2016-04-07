//-------------------------------------
// Javascript file
// version: 1.0.0
// last modified: dd/mm/yyyy by Viet Huong
// author: Viet Huong
// email: viethuong2072000@gmail.com
//---------------------------------------

$(document).ready(function($) {
	
	/* screen width */
	var window_width = $(window).width();


	/**
	 *  Call Superfish
	 *  -----------------------------------------------------------------------
	 */
	if( window_width > 1024 ) {
		$('.sf-menu').superfish({
			delay 		: 250,
			animation	: { opacity : "show" },
			speed		: 250,
			// cssArrows	: false
		});
	}

	$(window).resize(function() {
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.sf-menu').superfish( 'destroy' );//destroy superfish menu if screen width smaller 1025
		}
	});


	/**
	 *  Mobile Menu functionality.
	 *  -----------------------------------------------------------------------
	 */
	$('.mobile-nav').on( 'click', function( e ) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideDown( 800 );
		}
	});
	
	$('.mobile-close, .sf-menu li a').on( 'click', function( e ) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideUp( 800 );
		}
	});

});
