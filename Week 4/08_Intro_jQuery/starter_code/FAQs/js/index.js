
//hide all the answers
jQuery("#answer1, #answer2, #answer3").hide();

//functions to toggle the answers

function toggle1(){
	jQuery("#answer1").slideToggle();
}

function toggle2(){
	jQuery("#answer2").slideToggle();
}

function toggle3(){
	jQuery("#answer3").slideToggle();
}


//bind functions to clicks


jQuery("#question1").click(toggle1);
jQuery("#question2").click(toggle2);
jQuery("#question3").click(toggle3);