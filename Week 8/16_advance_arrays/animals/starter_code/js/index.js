//Have a list of images
var animalImageList = ["animal1.jpg","animal2.jpg","animal3.jpg","animal4.jpg","animal5.jpg","animal6.jpg","animal7.jpg"]


//Know what image we are on
var imageNumber = 0;


//function that sets image

function setImage(imageNumberSelected) {
	//Get the image in ImageNumberSlected position of the array
	var newSrc="images/" + animalImageList[imageNumberSelected];
	//Get the source of the image in the html to the image name
	jQuery("#image-to-vote-on").attr("src",newSrc);

}

//function for next image

function next(){
	imageNumber = imageNumber +1;
	if(imageNumber >= animalImageList.length){
		imageNumber=0;
	}
	setImage(imageNumber);

}

function back(){
	imageNumber = imageNumber -1;
	if(imageNumber <0 ){
		imageNumber=animalImageList.length-1
	}
	setImage(imageNumber);

}

//function for the previous image

//bind previous and next button to functions
jQuery(document).on('ready',function(){
	jQuery("#skip").click(next);
	jQuery("#back").click(back);

	});
