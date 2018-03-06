//document loader thingy

jQuery(document).ready(function(){

//stop button from soing whatever it usually does
jQuery("#submit-btn").click(function(event) {
	  event.preventDefault(); 

	//take the variable city and make all inputs lower case
	var city = jQuery("#city-type").val().toLowerCase();


	// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if(city == "new york" || city == "new york city" || city == "nyc" ) { 
		jQuery("body").attr("class","nyc");
	}

	//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		if(city == "san francisco" || city == "sf" || city == "bay area" ) { 
		jQuery("body").attr("class","sf");
	}

	//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		if(city == "los angeles" || city == "la" || city == "lax" ) { 
		jQuery("body").attr("class","la");
	}

	//"Austin" or "ATX" make the background of the page austin.jpg
		if(city == "austin" || city == "atx") { 
		jQuery("body").attr("class","austin");
	}

	//"Sydney" or "SYD" make the background of the page sydney.jpg
		if(city == "sydney" || city == "new york city" || city == "nyc" ) { 
		jQuery("body").attr("class","sydney");
	}

});

	jQuery("#city-type").val("");

});