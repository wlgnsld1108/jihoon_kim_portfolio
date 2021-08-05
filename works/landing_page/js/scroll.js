// JavaScript Document

$(document).ready(function(){
	$(function () {
		$('#scrollup').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
		});
var scrollHeight = $(document).height();
		$('#scrolldown').click(function () {
			$('body,html').animate({
				scrollTop: scrollHeight
			}, 1000);
		});
	});

});