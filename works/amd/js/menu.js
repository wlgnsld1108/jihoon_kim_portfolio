$(document).ready(function(){
	
	$("nav > ul > li").hover(function(){
		$(this).children("a").stop().animate({ "color" : "#ccc" });
	}, function() {
		$(this).children("a").stop().animate({ "color" : "#000" });
	});
	
	$("nav ul li, #nav_bg").hover(function(){
		if ($(window).width() > 800) {
			$("nav > ul > li > ul > li").stop().fadeIn(150);
			$("#nav_bg").stop().fadeIn(150);
		}
		
		}, function(){
		if ($(window).width() > 800) {
			$("nav > ul > li > ul > li").stop().fadeOut(150);
			$("#nav_bg").stop().fadeOut(150);
		}
	});
	
	
	$(".technology_btn").hover(function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#000", 
			"color" : "#FFF"
		}, 200);
	}, function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#EBEBEB", 
			"color" : "#000"
		}, 200);
	});
	
	$(".product_btn").hover(function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#000", 
			"color" : "#FFF"
		}, 200);
	}, function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#fff", 
			"color" : "#000"
		}, 200);
	});
	
	$(".responsibility_btn").hover(function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#000", 
			"color" : "#FFF"
		}, 200);
	}, function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#fff", 
			"color" : "#000"
		}, 200);
	});
	
	$(".about_btn").hover(function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#000", 
			"color" : "#FFF"
		}, 200);
	}, function() {
		$(this).find("a").stop().animate({ 
			"backgroundColor" : "#fff", 
			"color" : "#000"
		}, 200);
	});
	
	$("#accordion").accordion({
		active: false,
		collapsible: true,
		heightStyle: "content"			
	});
	
	/* #m_btn 클릭시 아코디언 등장 */
	
	$("#mobile").click(function(){
		$("#accordion_wrap").animate({"left":"0"}, 300);
		$("#accordion_bg").css({"display":"block"});
		$("body").css({"height":"1000px", "overflow":"hidden"});
	});
	
	$("#accordion_bg").click(function(){
		$("#accordion_wrap").animate({"left":"-100%"}, 300);
		$("#accordion_bg").css({"display":"none"});
		$("body").css({"height":"auto", "overflow":"auto"});
	});
});