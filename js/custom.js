// Navigation

$(document).ready(function() {
	var pathname = window.location.pathname;

	$(".nav li").each(function(index) {
	    if (pathname.toUpperCase().indexOf($(this).text().toUpperCase()) != -1)
	        $(this).addClass("active");
	});

	if ($(".nav li.active").length == 0)
	    $("li#home").addClass("active");
});


// Contact Form

$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=39c8f9e5a2de15ad63469475702522b9",
    data: $('#ajax-form').serialize()
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contact-form').find('form')[0].reset();
    $('#contact-form').replaceWith('<p style="color:green">Thank you for contacting us.<br>We will try to respond as soon as possible.</p>')
  });
  return false; //to stop the form from submitting
});
