import $, { jQuery } from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

// Start carousel
$(document).ready(function() {
  $("#people-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoHeight: true,
    animateOut: "fadeOut",
    dotsContainer: "#customDots"
  });
  $(".owl-dot").click(function() {
    $("#people-slider").trigger("to.owl.carousel", [$(this).attr("goto"), 500]);
  });
});

let t = setInterval(function() {
  $(window).trigger("resize.px.parallax");
}, 100);

// $('#partners-slider').owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     margin: 10,
//     responsive: {
//         0: {
//             items: 3
//         },
//         768: {
//             items: 4,
//             autoPlay: 5000
//         },
//         992: {
//             items: 7,
//             autoplay: false
//         }
//     }
// })
// $(document).ready(function() {

//   $("#slider").owlCarousel({
//     margin:0,
//     autoplay : true,
//     lazyLoad : true,
//     items : 1,
//     autoHeight : true,
//     animateOut: 'fadeOut',
//     dotsContainer: '#customDots'
//   });

//   $(".owl-item.active h2").addClass('animated');
//   $(".owl-item.active h3").addClass('animated');

//   $(".next").click(function(){
//     $("#slider").trigger('owl.next');
//   });
//   $(".prev").click(function(){
//     $("#slider").trigger('owl.prev');
//   });
//   $('.owl-dot').click(function () {
//     $("#slider").trigger('to.owl.carousel', [$(this).attr('goto'), 500]);
//   });

//   $("#slider").on('change.owl.carousel', function(event) {
//   	$(".owl-item h2").removeClass('animated');
//   	$(".owl-item h3").removeClass('animated');
// 	});

// 	$("#slider").on('translate.owl.carousel', function(event) {
//   	$(".owl-item.active h2").addClass('animated');
//   	$(".owl-item.active h3").addClass('animated');
// 	});

//   $('#customDots').css('top', $('#slider').height()-200+"px");

// });

// // Position Stuff in Carousel
// $( window ).resize(function() {
//  	$('#customDots').css('top', $('#slider').height()-200+"px");
// });

var mousewheelevt = /Firefox/i.test(navigator.userAgent)
  ? "DOMMouseScroll"
  : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
$(window).bind(mousewheelevt, function(e) {
  var evt = window.event || e; //equalize event object
  evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
  var delta = evt.detail ? evt.detail * -40 : evt.wheelDelta; //check for detail first, because it is used by Opera and FF
  if (delta > 0) {
    // Scroll up
  } else {
    // Scroll down
  }
});

//Smooth Scroll to Elements
$(".nav.navbar-nav li a.scroll").on("click", function(e) {
  e.preventDefault();
  // history.pushState('Ilymun', 'Section of Home Page', $(this).attr('href'))
  $("html, body").animate(
    {
      scrollTop:
        $(
          $(this)
            .attr("href")
            .substring(1)
        ).offset().top - 50
    },
    2000
  );
});

//Animate Elements to Appear when Scroll to them.
var $animation_elements = $(".appear");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      // $element.removeClass('in-view');
    }
  });
}

$(window).load(check_if_in_view);
$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
