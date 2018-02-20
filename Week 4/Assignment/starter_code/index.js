jQuery(document).ready(function(){

	jQuery(".readmore").click(function(event) {
	  event.preventDefault(); 
	});
	jQuery(".readless").click(function(event) {
	  event.preventDefault(); 
	});
	jQuery(".learnmore").click(function(event) {
	  event.preventDefault(); 
	});


	jQuery(".readmore").click(ReadMoreBlog);
	jQuery(".readless").click(ReadLessBlog);
	jQuery(".learnmore").click(ReadMoreSidebar);

	function ReadMoreBlog () {
		jQuery("#show-this-on-click").slideDown(400);
		jQuery(".readmore").hide();
		jQuery(".readless").show();
	}

	function ReadLessBlog () {
			jQuery("#show-this-on-click").slideUp(400);
			jQuery(".readless").hide();
			jQuery(".readmore").delay(800).show();
		}

	function ReadMoreSidebar () {
			jQuery("#learnmoretext").slideDown(300);
			jQuery(".learnmore").hide();
		}




	});