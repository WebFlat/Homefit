jQuery(function($){
	'use strict';


	//slider********************************************
	$(document).ready(function(){
		$('.progress__items').slick({
			dots: false,
			infinite: false,
			slidesToShow: 12,
			slidesToScroll: 5,
			prevArrow: $('.prev'),
      		nextArrow: $('.next')
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
	
	//Menu user show*****************************************
	$('.header__user').click(function() {
		$('.header__menu-user').toggleClass('open-user-info');
		$('.burger').toggleClass('click-menu');
	});


	//click to icon schedule*****************************
	function handler( event ) {
		  var target = $( event.target );
		  if(target.parent().hasClass('click-icon')) {
			target.parent().toggleClass('click-icon');
			target.toggleClass('invert');
			target.next('.schedule__popup').toggleClass('show-popup');
			target.next('.schedule-xl__popup').toggleClass('show-popup');

		  } else {
		  	$('.schedule__popup').removeClass('show-popup');
		  	$('.schedule__icon-wrap').removeClass('click-icon');
		  	$('.schedule__icon').removeClass('invert');
			$('.schedule-xl__popup').removeClass('show-popup');
		  	$('.schedule-xl__icon-wrap').removeClass('click-icon');
		  	$('.schedule-xl__name').removeClass('invert');
			target.parent().toggleClass('click-icon');
			target.toggleClass('invert');
			target.next('.schedule__popup').toggleClass('show-popup');
			target.next('.schedule-xl__popup').toggleClass('show-popup');

		  }
		};
		$( ".schedule__icon" ).click( handler );
		$( ".schedule-xl__name" ).click( handler );

});


