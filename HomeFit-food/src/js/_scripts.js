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


	$(".about-food__description").not(":first").hide();
	$(".about-food__item").click(function() {
	$(".about-food__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".about-food__description").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});


