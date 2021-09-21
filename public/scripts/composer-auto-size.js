$(document).ready(function() {
  $("#tweet-text").on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  }).on("submit", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  })
})