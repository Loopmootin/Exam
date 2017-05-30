// JavaScript Document
$(document).ready(function(){
		$('.questionOne').toggleClass('expanded').siblings('.questionDropOne').slideToggle(400);
});

$('.questionOne').click(function(){
		$(this).toggleClass('expanded').siblings('.questionDropOne').slideToggle(400);
});

$('.submit1').click(function(){
		$('.questionDropOne').slideUp(400);
		$('.questionTwo').toggleClass('expanded').siblings('.questionDropTwo').slideToggle(400);
});

$('.questionTwo').click(function(){
		$(this).toggleClass('expanded').siblings('.questionDropTwo').slideToggle(400);
});

$('.submit2').click(function(){
		$('.questionDropTwo').slideUp(400);
		$('.questionThree').toggleClass('expanded').siblings('.questionDropThree').slideToggle(400);
});

$('.questionThree').click(function(){
		$(this).toggleClass('expanded').siblings('.questionDropThree').slideToggle(400);
});

$('.submit3').click(function(){
		$('.questionDropThree').slideUp(400);
		$('.questionFour').toggleClass('expanded').siblings('.questionDropFour').slideToggle(400);
});

$('.questionFour').click(function(){
		$(this).toggleClass('expanded').siblings('.questionDropFour').slideToggle(400);
});

$('.submit4').click(function(){
		$('.questionDropFour').slideUp(400);
});







