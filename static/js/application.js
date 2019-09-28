// Loading animation
$(window).ready(function() {
  $("#loader").fadeOut(200);
  $("#loader-wrapper").fadeOut(500);
  $("body").show();
});

function navbarchange() {
  // $('.navbar').css('background-color', 'rgba(255,255,255,'+($(document).scrollTop() / 500) +')');
  scrollPosition = $(document).scrollTop();
  if (scrollPosition >= $(".upper-navbar").height()) {
    $(".navbar").removeClass("navbar-static-top");
    $(".navbar").addClass("navbar-fixed-top");
    $(".navbar").addClass("navbar-sm");
    if ($(window).width() < 992) {
      // http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
      // $(".navbar").autoHidingNavbar();
    }
  } else {
    $(".navbar").removeClass("navbar-fixed-top");
    $(".navbar").addClass("navbar-static-top");
    $(".navbar").removeClass("navbar-sm");
  }
}
$(document).ready(navbarchange());
$(document).on("scroll", navbarchange());

//To top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#scroll-to-top").fadeIn();
  } else {
    $("#scroll-to-top").fadeOut();
  }
});

// Mobile navbar
$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".menu").slideToggle();
  return false;
});

$("#scroll-to-top").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    2000
  );
  return false;
});
