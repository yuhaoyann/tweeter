$(document).ready(function() {

  $(".tweet-article").hover(function() {
    $(this).css("box-shadow", "5px 5px rgb(142, 164, 172)");
  }, function() {
    $(this).css("box-shadow", "none");
  }),

  $(".tweet-article i").hover(function() {
    $(this).css("color", "rgb(158, 117, 14)");
  }, function() {
    $(this).css("color", "rgb(45, 19, 68)");
  })

})

