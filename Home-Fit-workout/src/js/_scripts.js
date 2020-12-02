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
	$(".choice__block").not(":first").hide();
	$(".choice__item").click(function() {
	$(".choice__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".choice__block").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	

});

var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});



var mediaQuery = window.matchMedia('(min-width: 1024px)')
function handleTabletChange(e) {
	var videoWin = document.getElementById('video');
	
	  if (e.matches) {
		videoWin.setAttribute('poster', './img/individual-sport-xl.jpg');
  } else {
	  videoWin.setAttribute('poster', './img/individual-sport.jpg');
  }
	}
	mediaQuery.addListener(handleTabletChange)
	handleTabletChange(mediaQuery)
