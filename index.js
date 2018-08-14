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
      // to direct the click to play view to the game
      $(".play").show();
    }
    if ($(this).text().toLowerCase() == "score") {
      // to hide main menu
      $(".mainMenu").hide();
      // to show the high score board
      $(".score").show();
    }
  })
  // Saving DOM object to variables to make it easier call
  var game = $('#game'),
  ball = $('#ball'),
  paddle = $('.paddle'),
  paddle_1 = $('#paddle_1'),
  paddle_2 = $('#paddle_2'),
  restart = $('#restart_btn');
  // saving defualt game layout and set up
  var game_width = parseInt(game.width()),
  game_height = parseInt(game.height()),
  paddle_start_position = parseInt(paddle.css('bottom')),
  paddle_width = parseInt(paddle.width()),
  ball_left = parseInt(ball.css('left')),
  ball_height = parseInt(ball.height()),
  ball_width = parseInt(ball.width());

  // Game priciple variables
  var game_over = false,
  ball_center,
  paddle_center,
  ball_go = 'down',
  ball_right_left = 'right';
  top = 6,
  right_left_angle = 0,
  move_up_p1 = false,
  move_down_p1 = false,
  move_up_p2 = false,
  move_down_p2 = false,
  winner;



})
