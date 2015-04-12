/* --- Smooth scrolling --- */
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			var fixedHeaderHeight = 69;

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top == 0) ? target.offset().top : target.offset().top - fixedHeaderHeight
				}, 1000);
				return false;
			}
		}
	});
});

/* --- SVG Fallback --- */
var safari = (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0);

if(!Modernizr.svg || safari) {
	$('img[src*="svg"]').attr('src', function() {
		return $(this).attr('src').replace('.svg', '.png');
	});

}