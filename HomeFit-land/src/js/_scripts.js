jQuery(function($){
	'use strict';

	//change bg ***************************************
	var device = window.matchMedia("(min-width: 1024px)");
	var noslider= window.matchMedia("(max-width: 1023px)");
	noslider.addListener(handleSlideChange);
	device.addListener(handleDeviceChange);
	function handleDeviceChange(e) {
		if (e.matches) {
			$('.statement__bg').attr('src', './img/statement-bg-xl.png');
			$('.appointment__bg').attr('src', './img/appointment-bg-xl.png');
			$('.why__bg').attr('src', './img/woman-water-xl.png');
			$('.access__bg').attr('src', './img/access-bg-xl.png');
			$('.steps__three-bg').attr('src', './img/spep2-bg-xl.jpg');
			$('.steps__bg').attr('src', './img/step0-bg-xl.jpg');
			$('.steps__two-bg').attr('src', './img/young-lady-doing-arm-1.jpg');
			$('.steps__four-bg').attr('src', './img/step3-bg-xl.jpg');
			$('.result__bg').attr('src', './img/young-lady-doing-xl.jpg');
			//popup img***********************************
			$('.steps__slides-cab').click(function() {
				$('.slick-arrow').click(function(e) {
					e.stopPropagation();
				});
				$('.bigimg__img').attr('src', $(this).find('.scale').attr('src'));
				$('.bigimg').css('transform', 'scale(1.5)');
				$('#bigImg').show().css('display','flex');
				$('body').css('overflow', 'hidden');
			});
			$('.steps__messendger-item').click(function() {
				$('.slick-arrow').click(function(e) {
					e.stopPropagation();
				});
				$('.bigimg__img').attr('src', $(this).find('.tel').attr('src'));
				$('.bigimg').css('transform', 'scale(1.5)');
				$('#bigImg').show().css('display','flex');
				$('body').css('overflow', 'hidden');
			});
		} else {
			$('.statement__bg').attr('src', './img/statement-bg.png');
			$('.appointment__bg').attr('src', './img/appointment-bg.png');
			$('.why__bg').attr('src', './img/woman-water.png');
			$('.access__bg').attr('src', './img/access-bg.png');
			$('.steps__three-bg').attr('src', './img/step2-bg.png');
			$('.steps__bg').attr('src', './img/step0-bg.jpg');
			$('.steps__two-bg').attr('src', './img/young-lady-doing-arm-1.jpg');
			$('.steps__four-bg').attr('src', './img/step3-bg.png');
			$('.result__bg').attr('src', './img/young-lady-doing-arm-stretch-exercise-on-pink-back-8H4GAN9.png');
		} 
	}
	function handleSlideChange(e) {
		if (e.matches) {
				$('.steps__messendger-items').slick({
					dots: false,
					arrow: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1
				});
		}
	}
	handleDeviceChange(device);
	handleSlideChange(noslider);



	//slider********************************************
	$(document).ready(function(){
		$('.steps__slides-cab').slick({
			dots: false,
			arrow: true,
			infinite: false,
		});
	});
	$(document).ready(function(){
		$('.result__items').slick({
			dots: false,
			arrow: true,
			infinite: false
		});
	});
	$(document).ready(function(){
		$('.video__items').slick({
			dots: false,
			arrow: true,
			infinite: false,
			// prevArrow: $('.prev'),
      		// nextArrow: $('.next')
		});
	});
	


	$('#toStep1').click(function() {
		$("#btn1").click();
	});
	$('#toStep2').click(function() {
		$("#btn2").click(); 
	});
	$('#toStep3').click(function() {
		$("#btn3").click(); 
	});

	//tabs***********************************************
	$(".steps__item").not(":first").hide();
	$(".steps__btn").click(function() {
	$(".steps__btn").removeClass("active").eq($(this).index()).addClass("active");
	$(".steps__item").hide().eq($(this).index()).fadeIn();
	$('.slide2').slick("getSlick").refresh();
	$('.slide3').slick("getSlick").refresh();
	$('.steps__slides-cab').slick("getSlick").refresh();
	$('.steps__messendger-items').slick("getSlick").refresh();
	}).eq(0).addClass("active");






	//popup trainer**************************************
	$('#trainer-btn').click(function() {
		$('#trainer').show().css('display','flex');
		$('body').css('overflow', 'hidden');
	});
	$('.popup__close').click(function() {
		$('.popup').hide();
		$('body').css('overflow', 'auto');
	});

	//popup plan****************************************
	$('#plan-btn').click(function() {
		$('#plan').show().css('display','flex');
		$('body').css('overflow', 'hidden');
	});

	//popup video****************************************
	$('#video-btn').click(function() {
		$('#video').show().css('z-index','10000').css('opacity','1');
		$('body').css('overflow', 'hidden');
	});

	//popup nutritionist********************************
	$('#nutritionist-btn').click(function() {
		$('#nutritionist').show().css('display','flex');
		$('body').css('overflow', 'hidden');
	});

	//popup curator********************************
	$('#curator-btn').click(function() {
		$('#curator').show().css('display','flex');
		$('body').css('overflow', 'hidden');
	});


	//popup food********************************
	$('#food-btn').click(function() {
		$('#food').show().css('display','flex');
		$('body').css('overflow', 'hidden');
	});

	
	
	
	


});


