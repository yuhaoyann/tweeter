$(document).ready(function() {
  function foo() {
    setTimeout(foo1, 500);
    $("#nav-arrow").css("color", "white");
  }
  function foo1() {
    setTimeout(foo, 500);
    $("#nav-arrow").css("color", "red");
  }
  foo();  
})