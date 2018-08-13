$(function() {
  // on launch to hide the following to prevent overlap
    $(".instructions").hide();
    $(".play").hide();
    $(".score").hide();
    // once button is clicked for instruction hide the main page
  $("button").click(function () {
    // if the button has the text instructions then hide main page and show instructions
    if ($(this).text() == "Instructions") {
      // to hide main menu
      $(".mainMenu").hide();
      // to show instructions
      $(".instructions").show();
    };
    if ($(this).text().toLowerCase() == "play") {
      // to hide main menu
      $(".mainMenu").hide();

      // to show instructions
      $(".play").show();
    }
    if ($(this).text().toLowerCase() == "score") {
      // to hide main menu
      $(".mainMenu").hide();

      // to show instructions
      $(".score").show();
    }
  })
})
