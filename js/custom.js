// Contact Form

$('#ajax-form').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=3811ee3a869574d6e8f0c02910c19c14",
    data: $('#ajax-form').serialize()
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('#contact-form').find('form')[0].reset();
    $('#contact-form').replaceWith('<p style="color:green">Thank you for contacting us.<br>We will try to respond as soon as possible.</p>')
  });
  return false; //to stop the form from submitting
});
