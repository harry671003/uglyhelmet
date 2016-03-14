$(document).ready(function() {
	// Adjust the width of images to fill the
	// maximum space available
	$('.uh-post-excerpt p').each(function(i){          // For each paragraph
	    if ( ($(this).find('img').length) &&     // If there's an image
	         (!$.trim($(this).text()).length))   // and there's no text
	    {
	        $(this).addClass('image-only-uber');         // Add a special CSS class
	    }
	});

	// Add figcaption under an image
	$(".uh-post-excerpt img").each(function() {

	    if($(this).attr("caption")){
	        $(this).wrap('<figure class="image"></figure>')
	            .after('<figcaption>'+$(this).attr("caption")+'</figcaption>');
	    }
    });

    $("#uh-show-sidebar").click(function() {
    	$("#uh-sidebar").addClass("show");
    	$("#uh-topbar").addClass("hide");
    });

    $("#uh-hide-sidebar").click(function() {
    	$("#uh-sidebar").removeClass("show");
    	$("#uh-topbar").removeClass("hide");
    });

});