$(document).ready(function() {
 $("#tweet-text").keydown(function() {
  const counter = $(this).parents().find(".counter");
  counter.val(140 - $(this).val().length);
  if (counter.val() <= 0) {
    counter.css("color", "red");
  }
  if (counter.val() > 0) {
    counter.css("color", "#545149");
  }
 })
});
