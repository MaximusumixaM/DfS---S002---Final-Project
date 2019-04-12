//Top Comment

$(document).ready(function (e) {

	$(".exposepage").removeClass("hidden"); //Immediatly removes the class hidden once website is told to load so that the expose elements can be viewed
	$(".exposecontainer").removeClass("hidden"); //""
		
	$(".menutextexpose").click(function (e) { //(For header menu items) remove hidden class from the element you clicked on, and adds it to what you haven't clicked on
	    $(".hidden-start").addClass("hidden");
	    $(".projectscontainer").addClass("hidden");
	    $(".aboutcontainer").addClass("hidden");
	    $(".exposepage").toggleClass("hidden");
	    $(".exposecontainer").toggleClass("hidden");
	});

	$(".menutextprojects").click(function (e) {
	    $(".hidden-start").addClass("hidden");
	    $(".aboutcontainer").addClass("hidden");
	    $(".exposecontainer").addClass("hidden");
	    $(".projectspage").toggleClass("hidden");
	    $(".projectscontainer").toggleClass("hidden");
	});

	$(".menutextabout").click(function (e) {
	    $(".hidden-start").addClass("hidden");
	    $(".projectscontainer").addClass("hidden");
	    $(".exposecontainer").addClass("hidden");
	    $(".aboutpage").toggleClass("hidden");
	    $(".aboutpageaward").toggleClass("hidden");
	    $(".aboutcontainer").toggleClass("hidden");
	});

	$(".aboutpage").click(function (e) { //Same process as above, except its for the about and awards sub-headers
	    $(".aboutpageaward").addClass("notselected");
	    $(".aboutmainaward").addClass("hidden");
	    $(".aboutpage").toggleClass("notselected");
	    $(".aboutmaintext").toggleClass("hidden");
	});

	$(".aboutpageaward").click(function (e) {
	    $(".aboutpage").addClass("notselected");
	    $(".aboutmaintext").addClass("hidden");
	    $(".aboutpageaward").toggleClass("notselected");
	    $(".aboutmainaward").toggleClass("hidden");
	});

});

//END