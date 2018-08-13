$(function() {
    $(".instruction").hide();
    $(".play").hide();
    $(".score").hide();
  $("button").click(function (event) {
    if ($(this).text() == "instructions") {
      $(".mainMenu").hide();
      $(".instructions").show();
    }
  })
})
