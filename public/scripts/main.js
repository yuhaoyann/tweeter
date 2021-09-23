$(document).ready(function() {

  $(window).scroll(function() {
   if ($(window).scrollTop() > 0) {
     if ($(window).width() >= 1024){
       $("nav").slideUp();
      } else {
       $("nav, header").slideUp();
     }
     $("#main-hide").slideDown();
    } else {
      $("nav, header").slideDown();
      $("#main-hide").slideUp();
   }
  })

  $("#main-hide").click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $("#main-hide").slideUp();
    if ($("#tweet-new-form").css("display") === "none") {
      $("#tweet-new-form").slideDown();
      $("#tweet-text").focus();
    } else if ($("#tweet-new-form").css("display") === "block") {
      $("#tweet-text").focus();
    }
  }).hover(function() {
    $("#main-circle").css({"color": "white"});
    $("#main-arrow").css({"color": "red"});
  }, function() {
    $("#main-circle").css({"color": "red"});
    $("#main-arrow").css({"color": "white"});
  }).mousedown(function() {
    $("#main-circle").css({"color": "red"});
    $("#main-arrow").css({"color": "white"});
  }).mouseup(function() {
    $("#main-circle").css({"color": "white"});
    $("#main-arrow").css({"color": "red"});
  })

})