jQuery(function($){
	'use strict';


	//slider********************************************
	$(document).ready(function(){
		$('.progress__items').slick({
			dots: false,
			infinite: false,
			slidesToShow: 12,
			slidesToScroll: 5,
			arrows: false
		});
	});



	//Burger menu****************************************
	$('.burger').click(function() {
		$('.burger-wrap').toggleClass('open');
		$('.burger').toggleClass('closed');
	});
	$('.nav__link').click(function() {
		$('.burger-wrap').removeClass('open');
		$('.burger').removeClass('closed');
	});
	



	//click to icon schedule*****************************
	function handler( event ) {
		  var target = $( event.target );
		  if(target.parent().hasClass('click-icon')) {
			target.parent().toggleClass('click-icon');
			target.toggleClass('invert');
			target.next('.schedule__popup').toggleClass('show-popup');
		  } else {
		  	$('.schedule__popup').removeClass('show-popup');
		  	$('.schedule__icon-wrap').removeClass('click-icon');
		  	$('.schedule__icon').removeClass('invert');
			target.parent().toggleClass('click-icon');
			target.toggleClass('invert');
			target.next('.schedule__popup').toggleClass('show-popup');

		  }
		};
		$( ".schedule__icon" ).click( handler );

});


