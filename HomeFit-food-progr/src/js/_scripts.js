jQuery(function($){
	'use strict';




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

	//tabs***********************************************
	$(".foodsTabs").not(":first").hide();
	$(".foodOfDay__tab").click(function() {
	$(".foodOfDay__tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".foodsTabs").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	

});


