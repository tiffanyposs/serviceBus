$(document).ready(function() {

  var counter = 1;
  $('#sendEvent').on('click', function() {
  	var orderCount = parseInt($('#orderCount').val().trim());
    $.ajax({
    	url: '/send-event',
    	method: 'POST',
    	data: {orderCount: orderCount},
    	success: function(data) {
    		console.log(data);
    		counter++;
    	}
    })
  });


});