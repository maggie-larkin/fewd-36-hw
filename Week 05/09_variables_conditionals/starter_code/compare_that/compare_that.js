jQuery("#submit").click(function(){

	//If A > B show >

	var a = jQuery("#a").val();
	var b = jQuery("#b").val();

	if (parseFloat(a) > parseFloat(b)) {
		jQuery ("#comparison").text(">");

	}


	//If A < B show <
	if (parseFloat(a) < parseFloat(b)) {
		jQuery ("#comparison").text("<");
	}


	//If A =B show ==
	if (parseFloat(a) == parseFloat(b)) {
		jQuery ("#comparison").text("==");
	}



});