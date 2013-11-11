$(document).ready(function() {
	var pathname = window.location.pathname;

	$(".nav li").each(function(index) {
	    if (pathname.toUpperCase().indexOf($(this).text().toUpperCase()) != -1)
	        $(this).addClass("active");
	});

	if ($(".nav li.active").length == 0)
	    $("li#home").addClass("active");
});