$(document).ready(function() {
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    let data = $( this ).serialize();
    $.post("/tweets/", data)
  })
})