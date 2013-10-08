var pages;

$(document).ready(function(){
	$('#nav').css('margin-top', $(window).height()-90);

	pages = [{img: 'img/bg0.jpg', data: 'data.html #home'}, {img: 'img/bg1.jpg', data: 'data.html #portfolio'}, {img: 'img/bg2.jpg', data: 'data.html #pricing'}, {img: 'img/bg3.jpg', data: 'data.html #contact'}]
	if($(window).width() > 1400){
		$('#content').load(pages[0].data, function(){
			$('#content').fadeIn(500);
		});
	}
});


var changeBg = function(bgNr){
	$('#content').hide();
	$('#content').html("");

	$('body').css({background: 'url("'+pages[bgNr].img+'") no-repeat center center fixed'});
	$('body').css({'-webkit-background-size': 'cover'});
	$('body').css({'-moz-background-size': 'cover'});
	$('body').css({'-o-background-size': 'cover'});
	$('body').css({'background-size': 'cover'});

	$('#content').load(pages[bgNr].data, function(){
		$('#content').fadeIn(500);
	});
}

var bubble = function(el){
	$('.bc').slideUp("fast");

	if(el.children('div').is(':visible')){
		el.children('div').slideUp("fast");
	}else{
		el.children('div').slideDown("fast");
	}
}