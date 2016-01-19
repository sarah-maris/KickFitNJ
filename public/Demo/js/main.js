/**
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var button = document.getElementById( 'topnav' ).getElementsByTagName( 'h5' )[0],
	    menu   = document.getElementById( 'topnav' ).getElementsByTagName( 'ul' )[0];

	if ( undefined === button )
		return false;

	// Hide button if menu is missing or empty.
	if ( undefined === menu || ! menu.childNodes.length ) {
		button.style.display = 'none';
		return false;
	}

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'sf-menu' ) )
			menu.className = 'sf-menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
		}
	};


} )();

// STiCKY NAV based on http://www.jay-han.com/2011/11/10/simple-smart-sticky-navigation-bar-with-jquery/

$(document).ready(function() {
	
	//calculate height of header
	var headerHeight = $('header').outerHeight();
console.log("heifht", headerHeight)
	//add padding to main 
	$(main).css('padding-top', headerHeight +'px');

	//Set height to change menu
	var changeHeight = 300;
	
	//Set minder
	var isSmall = false;

	//when scroll
	$(window).scroll(function(){

		//if scrolled down more than the header’s height fixed
		if ($(window).scrollTop() > changeHeight ){
		console.log("HERE")	
			//check to see if already small
			if (!isSmall) {
console.log("is small?", isSmall)
				//set minder to true
				isSmall = true;

				//add "small" class to the <nav>
				$('header').addClass('small');
				
				//re-calculate height of header
				headerHeight = $('header').outerHeight();

				//add padding to main 
				$(main).css('padding-top', headerHeight +'px');	
				
		}
				
		// when scroll up or less than aboveHeight process	
		} else {
			
			//check to see if small
			if (isSmall) {

			//set minder to false
				isSmall = false;
				
				// remove the "small" class
				$('header').removeClass('small');
				
				//re-calculate height of header
				headerHeight = $('header').outerHeight();

				//adjust padding
				$(main).css('padding-top', headerHeight +'px');


			}	
		}
			
			
	});

			$( ".sf-menu li" ).click(function() {
  console.log( "Handler for .click() called." );
          drawer.classList.remove('open');
});
});