var fixedHeaderHeight = 70;


$('#img-loader').attr('src', 'http://res.cloudinary.com/dfvoztskv/image/upload/q_70/v1445263475/fasade-side_ciifwa.jpg').load(function() {
  console.log("image loaded");
   $(this).remove(); // prevent memory leaks as @benweet suggested
   var hero =  $('#hero');
   $(hero).css({"background":"url(http://res.cloudinary.com/dfvoztskv/image/upload/q_70/v1445263475/fasade-side_ciifwa.jpg) center center"});
   $(hero).css("background-size", "cover");
   $( "#hero-overlay" ).addClass( "loaded" );

});

/* --- Smooth scrolling --- */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top == 0) ? target.offset().top : target.offset().top - fixedHeaderHeight + 40
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function() {
  headerToggle();
});

$(window).scroll(function() {
  headerToggle();
});



/* --- Owl Carousel --- */
$("#building-carousel").owlCarousel({
  slideSpeed: 4200,
  touchDrag: false,
  paginationSpeed: 3000,
  singleItem: true,
  pagination: false,
  autoPlay: true,
  transitionStyle : "fade",
});


$("#library-carousel").owlCarousel({
	slideSpeed: 4200,
  touchDrag: false,
  paginationSpeed: 3000,
  singleItem: true,
  pagination: false,
  autoPlay: true,
  transitionStyle : "fade",
});

$("#events-carousel").owlCarousel({
	slideSpeed: 4200,
  touchDrag: false,
  paginationSpeed: 3000,
  singleItem: true,
  pagination: false,
  autoPlay: true,
  transitionStyle : "fade",
});

$("#contact-carousel").owlCarousel({
	slideSpeed: 4200,
  touchDrag: false,
  paginationSpeed: 3000,
  singleItem: true,
  pagination: false,
  autoPlay: true,
  transitionStyle : "fade",
});
