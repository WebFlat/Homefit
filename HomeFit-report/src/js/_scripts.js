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

	//show popup add report*****************************************
	$('.btnAddReport').click(function() {
		$('.report-add').css('display', 'flex');
		$('body').css('overflow', 'hidden');
	});
	//close popup add report*****************************************
	$('#btnCloseReport').click(function() {
		$('.report-add').css('display', 'none');
		$('.report-add__inp').val('');
		$('body').css('overflow', 'visible');
	})





	Highcharts.chart('container1', {
		chart: {
			type: 'areaspline'
		},
		title: {
			text: ' '
		},
		legend: {
		   
		},
		xAxis: {
			categories: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday'
			]
		},
		yAxis: {
			title: {
				text: ' '
			}
		},
		tooltip: {
			shared: false,
			valueSuffix: 'см'
		},
		credits: {
			enabled: false
		},
	 
		series: [{
			name: '',
			data: [3, 4, 3, 5, 4, 6,7],
			color: '#e3e3e3'
		}]
	});
	Highcharts.chart('container2', {
		chart: {
			type: 'areaspline'
		},
		title: {
			text: ' '
		},
		legend: {
		   
		},
		xAxis: {
			categories: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday'
			]
		},
		yAxis: {
			title: {
				text: ' '
			}
		},
		tooltip: {
			shared: false,
			valueSuffix: 'см'
		},
		credits: {
			enabled: false
		},
	 
		series: [{
			name: '',
			data: [3, 4, 3, 5, 6, 8,7],
			color: '#e3e3e3'
		}]
	});
	Highcharts.chart('container3', {
		chart: {
			type: 'areaspline'
		},
		title: {
			text: ' '
		},
		legend: {
		   
		},
		xAxis: {
			categories: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday'
			]
		},
		yAxis: {
			title: {
				text: ' '
			}
		},
		tooltip: {
			shared: false,
			valueSuffix: 'см'
		},
		credits: {
			enabled: false
		},
	 
		series: [{
			name: '',
			data: [3, 5, 4, 5, 4, 6,7],
			color: '#e3e3e3'
		}]
	});
	Highcharts.chart('container4', {
		chart: {
			type: 'areaspline'
		},
		title: {
			text: ' '
		},
		legend: {
		   
		},
		xAxis: {
			categories: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday'
			]
		},
		yAxis: {
			title: {
				text: ' '
			}
		},
		tooltip: {
			shared: false,
			valueSuffix: 'см'
		},
		credits: {
			enabled: false
		},
	 
		series: [{
			name: '',
			data: [3, 4, 3, 5, 3, 4,7],
			color: '#e3e3e3'
		}]
	});


});




