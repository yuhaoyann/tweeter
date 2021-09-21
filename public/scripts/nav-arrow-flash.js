$(document).ready(function() {
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