jQuery(document).ready(function() {

	jQuery(".mainNav li:first-child").click(function() {
		jQuery(".mobileMenu").toggleClass("open");

	});

	jQuery(".mobileMenu .XOutMobile a").click(function() {
		jQuery(".mobileMenu").toggleClass("open");

	});

	jQuery(".mobileMenu ul li a").click(function() {
		jQuery(".mobileMenu").toggleClass("open");

	});


	jQuery(".scrollButton").click(function() {
		jQuery("html, body").animate({
			scrollTop: $("#features").offset().top
		}, 2000);
	});

});