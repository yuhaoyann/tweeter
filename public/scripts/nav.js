$(document).ready(function() {

  $("#nav-button").hover(function() {
    $(this).css({"border-color": "white"})
  }, function() {
      $(this).css({"border-color": "rgb(201, 153, 64)", "background-color": "rgb(201, 153, 64)"})
  }).mousedown(function() {
    $(this).css({"background-color": "#4056A1"})
  }).mouseup(function() {
    $(this).css({"background-color": "rgb(201, 153, 64)"})
  }).click(function() {
    if ($("#tweet-new-form").css("display") === "none") {
      $("#tweet-new-form").slideDown();
      $("#tweet-text").focus();
    } else if ($("#tweet-new-form").css("display") === "block") {
      $("#tweet-new-form").slideUp();
      $("#error-message").slideUp();
    }
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