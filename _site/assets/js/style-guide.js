(function() {

/* * * * * * *
 * Scroll and highlight code
 * * * * * * */

	var hash;
	var $root;

	$("a").click(function(anchor) {

		if ( $(this).attr("href").charAt(0) !== "#" ) {
			return;
		}

		anchor.preventDefault();
		var linkyLinky = $(this).attr("href");
		animateScroll(linkyLinky);
		console.log("linkyLinky: " + linkyLinky);
	});

	function animateScroll(linkyLinky) {
		$root.animate({
			scrollTop: $(linkyLinky).offset().top
		}, 500, function () {
			window.location.hash = linkyLinky;
		});
	}

	// Highlight nav when section is in viewport
	// - Define Viewport
	function isOnScreen(element) {
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = element.offset();
		bounds.right = bounds.left + element.outerWidth();
		bounds.bottom = bounds.top + element.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	// - Function to check if section is on screen
	function onScreenChecker() {
		$("section.post").each(function() {
			var onScreenId = $(this).attr("id");

			if ( isOnScreen($(this)) ) {
				$("#link-" + onScreenId).addClass("active");
			} else {
				$("#link-" + onScreenId).removeClass("active");
			}
		});
	};

/* * * * * * *
 * Filter code
 * * * * * * */

	var searchInput;

	function filterTopics(filterString) {
		var lowercaseFilterString = filterString.toLowerCase();
		toggleNavListItems(lowercaseFilterString);
		toggleContentListItems(lowercaseFilterString);
		setTimeout(function(){
			onScreenChecker();
		}, 0);
	}

	function toggleNavListItems(filterString) {
		$("nav ul li").each(function(index, element) {
			 var dataID = $(this).attr("data-filter-id").toLowerCase();

			 if ( dataID.indexOf(filterString) !== -1 ) {
					$(this).show();
					return;
			 }

			 $(this).hide();
		});
	}

	function toggleContentListItems(filterString) {
		$(".wrapper .post").each(function(index, element) {
			 var dataID = $(this).attr("data-filter-id").toLowerCase();

			 if ( dataID.indexOf(filterString) !== -1 ) {
					$(this).show();
					return;
			 }

			 $(this).hide();
		});
	}

	function searchInputKeyup() {
		filterTopics(searchInput.val());
	}

	function initialize() {
		hash = window.location.hash.substring(1);
		$root = $('body, html');

		onScreenChecker();

		searchInput = $(".filter-topics > input");
		searchInput.on("keyup", searchInputKeyup);
	}

	$(document).ready(initialize);

	// - Check if on screen during scroll
	$(window).scroll(function() {
		onScreenChecker();
	});

}());