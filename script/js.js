// JavaScript Document
$(document).ready(function() {
	// Ẩn các li trong slider, chỉ hiện li đầu tiên
	$("ul#sliderId > li").hide();
	$("ul#sliderId > li:first").show();
	// <=> $("ul#sliderId > li").hide().filter(":first").show()
	
	// Chạy slider
	setInterval(function() {
		$("ul#sliderId > li:first").fadeOut("slow");
		$("ul#sliderId > li:first").next().fadeIn("slow").end().appendTo("#sliderId");
	}, 3500);
	
	


	
});


