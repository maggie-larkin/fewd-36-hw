//Implement the red light using jQuery. Don't forget to add the script tags.




//Red
function illuiminateRed(){
	//turn off all lights
	jQuery(".bulb").css("background","black");
	//light red
	jQuery("#stopLight").css("background","red");
}
//Yellow
	//turn off all lights
	//light yellow

function illuiminateYellow(){
	//turn off all lights
	jQuery(".bulb").css("background","black");
	//light red
	jQuery("#slowLight").css("background","yellow");
}

//Green
	//turn off all lights
	//light green

function illuiminateGreen(){
	//turn off all lights
	jQuery(".bulb").css("background","black");
	//light red
	jQuery("#goLight").css("background","green");
}

jQuery("#stopButton").click(illuiminateRed);
jQuery("#slowButton").click(illuiminateYellow);
jQuery("#goButton").click(illuiminateGreen);