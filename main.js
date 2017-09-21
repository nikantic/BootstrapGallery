$(document).ready(function(){
	var currentLink;

	// function to hide or show next/prev links
	var siblingLinkExists = function(currentLink) {
		var nextLink = currentLink.parent().next();
		var prevLink = currentLink.parent().prev();
		// hide nextLink
		if (nextLink.length > 0) {
			$(".nextImg").show();
		} else {
			$(".nextImg").hide();	
		}
		// hide prevLink
		if (prevLink.length > 0) {
			$(".prevImg").show();
		} else {
			$(".prevImg").hide();	
		}
	}

	// show full image in modal
	$(".imageLink").on("click", function(){
		currentLink = $(this);
		siblingLinkExists(currentLink);
		console.log(currentLink);
		var imageSrc = $(this).find("img").attr("src");
		$(".imageFull").attr("src", imageSrc);
	})

	// go to the next image
	$(".nextImg").on("click", function(e){
		e.preventDefault();
		var nextLink = currentLink.parent().next();
		var imageSrc = nextLink.find("img").attr("src");
		$(".imageFull").attr("src", imageSrc);
		currentLink = nextLink.find("a");
		siblingLinkExists(currentLink);
	});

	// go the previous image
	$(".prevImg").on("click", function(e){
		e.preventDefault();
		var prevLink = currentLink.parent().prev();
		var imageSrc = prevLink.find("img").attr("src");
		$(".imageFull").attr("src", imageSrc);
		currentLink = prevLink.find("a");
		siblingLinkExists(currentLink);
	});
});