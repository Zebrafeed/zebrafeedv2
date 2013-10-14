var pages;
var content;
var bgImg;

$(document).ready(function(){
	content = $('#content');
	bgImg = $('#bgImg');
	pages = [{img: 'img/bg0.jpg', data: 'data.html #home'}, {img: 'img/bg1.jpg', data: 'data.html #portfolio'}, {img: 'img/bg2.jpg', data: 'data.html #pricing'}, {img: 'img/bg3.jpg', data: 'data.html #contact'}];

	if($(window).width() > 800){
		
		newPage = window.location.href.split('#')[1];
		switch(newPage){
			case "home":
				changeBg(0);
				break;
			case "portfolio":
				changeBg(1);
				break;
			case "pricing":
				changeBg(2);
				break;
			case "contact":
				changeBg(3);
				break;
			default:
				changeBg(0);
		}

	}else{
		content.hide();
		$('#nav').css('margin-top', 0);
		$('#mobileC10').load("data.html #home");
		$('#mobileC20').load("data.html #portfolio");
		$('#mobileC30').load("data.html #pricing");
	}
	

	$(window).resize(function(){
		displayMobile();
	});
});


var changeBg = function(bgNr){
	content.hide();
	content.html("");

	change(pages[bgNr].img, function(){
		content.load(pages[bgNr].data, function(){
			content.show();
			content.animate({
				'right': '0px'
			}, 500);
		});
	});
}

var change = function(path, callback){
	var bg = $('#bg');
	var bg2 = $('#bg2');

	content.css('right', '-50%');

	bg2.css({
		'background': 'url("'+path+'") no-repeat center center fixed',
		'background-size': 'cover'
	});
	bg.animate({
		'opacity': '0'
	}, 500, function(){
		bg.css({
			'background': 'url("'+path+'") no-repeat center center fixed',
			'background-size': 'cover',
			'opacity': '1'
		});
	});
	setTimeout(function(){
		callback();
	}, 500);
}

var bubble = function(el){
	$('.bc').slideUp("fast");

	if(el.children('div').is(':visible')){
		el.children('div').slideUp("fast");
	}else{
		el.children('div').slideDown("fast");
	}
}

var displayMobile = function(){
	if($(window).width() > 800){
		
	}else{
		content.hide();
		$('#nav').css('margin-top', 0);
		$('#mobileC10').load("data.html #home");
		$('#mobileC20').load("data.html #portfolio");
		$('#mobileC30').load("data.html #pricing");
	}
}