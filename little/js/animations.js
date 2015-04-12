$(document).ready(function($) {
	if(Modernizr.csstransitions && !Modernizr.touch) {
		$('.animated').appear();
		$('.force-animate').appear({force_process: true}); 
		$('.animated').on('appear', function() {
			var elem = $(this);
			var animation = elem.data('animation');
			if (!elem.hasClass('visible')) {
				var animationDelay = elem.data('animation-delay');
				if (animationDelay) {
					setTimeout(function() {
						elem.addClass(animation + " visible" );
					}, animationDelay);
				} else {
					elem.addClass(animation + " visible");
				}
			}
		});
	}
});

if (Modernizr.touch) {
	$('.animated').css({'visibility': 'visible'});
}