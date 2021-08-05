$(function(){	
	$("#nav ul li, #nav_bg").hover(function(){
		if ($(window).width() > 800) {
			$("#nav > ul > li > ul > li").stop().fadeIn(10);
			$("#nav_bg").stop().fadeIn(10);
		}
		
		}, function(){
		if ($(window).width() > 800) {
			$("#nav > ul > li > ul > li").stop().fadeOut(10);
			$("#nav_bg").stop().fadeOut(10);
		}
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