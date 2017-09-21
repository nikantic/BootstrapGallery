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
	};
	// function to set attributes for the full image
	var setPreview = function(imageLink) {
		var imageSrc = imageLink.find("img").attr("src");
		var title = imageLink.find(".title").text();
		var author = imageLink.find(".author").text();
		var views = imageLink.find(".views").text();
		var hearts = imageLink.find(".hearts").text();
		$(".imageFull").attr("src", imageSrc);
		$(".titleFull").text(title);
		$(".authorFull").text(author);
		$(".viewsFull").text(views);
		$(".heartsFull").text(hearts);
	};
	// show full image in modal
	$(".imageLink").on("click", function(){
		currentLink = $(this);
		setPreview(currentLink);
		siblingLinkExists(currentLink);
	});
	// go to the next image
	$(".nextImg").on("click", function(e){
		e.preventDefault();
		var nextLink = currentLink.parent().next();
		setPreview(nextLink);
		currentLink = nextLink.find("a");
		siblingLinkExists(currentLink);
	});
	// go the previous image
	$(".prevImg").on("click", function(e){
		e.preventDefault();
		var prevLink = currentLink.parent().prev();
		setPreview(prevLink);
		currentLink = prevLink.find("a");
		siblingLinkExists(currentLink);
	});
	// toggle image caption in preview
	$(".hideCaption, .imageFull").on("click", function(){
		$(".imageCaptionFull").toggleClass("moveCaption");
	});
});