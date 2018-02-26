//document loader thingy

jQuery(document).ready(function(){

//stop 
jQuery("#submit-btn").click(function(event) {
	  event.preventDefault(); 

	var city = jQuery("#city-type").val();

	jQuery("#city-type").val("");

	//take the variable city and make all inputs lower case

	city = city.toLowerCase();

	// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if(city == "new york" || city == "new york city" || city == "nyc" ) { 
		jQuery("body").css(".nyc");
	}

	//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		if(city == "san francisco" || city == "sf" || city == "bay area" ) { 
		jQuery("body").addClass(".sf");
	}

	//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		if(city == "los angeles" || city == "la" || city == "lax" ) { 
		jQuery("body").addClass(".la");
	}

	//"Austin" or "ATX" make the background of the page austin.jpg
		if(city == "austin" || city == "atx") { 
		jQuery("body").addClass(".austin");
	}

	//"Sydney" or "SYD" make the background of the page sydney.jpg
		if(city == "sydney" || city == "new york city" || city == "nyc" ) { 
		jQuery("body").addClass(".sydney");
	}
});

});