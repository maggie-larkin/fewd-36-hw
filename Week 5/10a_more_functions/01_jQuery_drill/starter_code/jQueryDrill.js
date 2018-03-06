jQuery(document).ready(function(){

 //When the concat button is clicked, combine the two strings and output the result

	jQuery("#concatButton").click(function(event) {
	  event.preventDefault(); 
	  var firstConcat = jQuery("#concatOne").val();
	  var secondConcat = jQuery("#concatTwo").val();

	  jQuery("#concatResult").text(firstConcat+" "+secondConcat);

	  });




    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
    jQuery("#add20Button").click(function(event) {
	  event.preventDefault(); 
	  var add20 = jQuery("#add20Input").val();
	  var result = parseInt(add20) + 20;

	  jQuery("#add20Output").text(result);

	  });
   

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput

   jQuery("#appendButton").click(function(event) {
	  event.preventDefault(); 
	  var append = jQuery("#appendInput").val();
	  jQuery("#appendOutput").append("<p>"+append+"</p>")
	  
	  });

});