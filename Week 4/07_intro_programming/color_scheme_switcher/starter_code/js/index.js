document.getElementById("grayButton").onclick = grayClick;
document.getElementById("whiteButton").onclick = whiteClick;



function grayClick(){
	//background of body to turn grey 
	document.body.style.backgroundColor = "grey";

	//turn text color white
	document.body.style.text = "white";

	

}

function whiteClick(){
	//background of body to turn white 
	document.body.style.backgroundColor = "white";

	//turn text color black
	document.body.style.text = "black";

	

}