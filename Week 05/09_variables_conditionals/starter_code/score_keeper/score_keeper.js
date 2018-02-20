

	
var theScore = 0 
console.log("moo");
// function to add 5

function addFive() {
	
	theScore = 5 + theScore;
	jQuery ("#result").text(theScore);
}

//function to add 10
function addTen() {
	theScore = 10 + theScore;
	jQuery ("#result").text(theScore);
}

//function to subtract 1
function subtractOne() {
	theScore = theScore - 1;
	jQuery ("#result").text(theScore);
}

//function to reset

function resetToZero() {
	theScore = 0
	jQuery ("#result").text(theScore);
}


jQuery(document).ready(function(){
//function to attach function to button
jQuery("#zero").click(resetToZero);
jQuery("#add5").click(addFive);
jQuery("#add10").click(addTen);
jQuery("#sub1").click(subtractOne);


}); 