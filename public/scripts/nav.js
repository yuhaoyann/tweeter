$(document).ready(function() {

  $("#nav-button").hover(function() {
    $(this).css({"border-color": $("nav").css("color"), "background-color": $("nav").css("color"), "color": $("nav").css("background-color")})
  }, function() {
      $(this).css({"border-color": $("nav").css("background-color"), "background-color": $("nav").css("background-color"), "color": $("nav").css("color")})
  }).mousedown(function() {
    $(this).css({"border-color": $("nav").css("background-color"), "background-color": $("nav").css("background-color"), "color": $("nav").css("color")})
  }).mouseup(function() {
    $(this).css({"border-color": $("nav").css("color"), "background-color": $("nav").css("color"), "color": $("nav").css("background-color")})
  }).click(function() {
    if ($("#tweet-new-form").css("display") === "none") {
      $("#tweet-new-form").slideDown();
      $("#tweet-text").focus();
    } else if ($("#tweet-new-form").css("display") === "block") {
      $("#tweet-new-form").slideUp();
      $("#error-message").slideUp();
    }
  })

  $(window).resize(function() {
    $("#nav-button").css({"border-color": $("nav").css("background-color"), "background-color": $("nav").css("background-color")})
  })

  function foo() {
    setTimeout(foo1, 500);
    $("#nav-arrow").css("padding-top", "5px");
  }
  function foo1() {
    setTimeout(foo2, 500);
    $("#nav-arrow").css("padding-top", "10px");
  }
  function foo2() {
    setTimeout(foo3, 500);
    $("#nav-arrow").css("padding-top", "15px");
  }
  function foo3() {
    setTimeout(foo, 500);
    $("#nav-arrow").css("padding-top", "10px");
  }
  foo();
})