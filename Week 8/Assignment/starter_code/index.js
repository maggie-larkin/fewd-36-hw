//wait for document to load

jQuery(document).on('ready',function(){
//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD";
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]


//use the array to add values to the ```<select>``` menu by using a ```for``` loop in JavaScript (don't update the HTML to do this!)
//Use $.append() in your iteration on the drop-down menu 

 for (i=0;i<cities.length;i++){
 	jQuery("#city-type").append("<option>"+cities[i]+"</option>")
 	
 }
 


//Use the ```$.change``` event handler to capture user actions
jQuery("form").on("change","#city-type",selectCity);


function selectCity() {

//Get the value of user input using ```$.val()```
	jQuery("#city-type").val();

// When the user changes the input of the drop-down, update the background image based on what they selected
//Use ```if/else if/else ``` conditionals to control the flow of your application
//Use the ```$.attr()``` function to update html classes 
	if (cities[0]) {
	jQuery("body").attr("class","nyc");
	}

	else if (cities[1]) {
	jQuery("body").attr("class","sf");
	}

	else if (cities[2]) {
	jQuery("body").attr("class","la");
	}

	else if (cities[3]) {
	jQuery("body").attr("class","austin");
	}

	else if (cities[4]) {
	jQuery("body").attr("class","sydney");
	}

}


});