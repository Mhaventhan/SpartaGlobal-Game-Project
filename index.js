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
  // when the game is over will set to true
  var game_over = false,
  // to receive ball and paddle center position
  ball_center,
  paddle_center,
  // used for the movement of the ball
  ball_go = 'down',
  ball_right_left = 'right';
  // depends on the ball movement pixels
  top = 6,
  right_left_angle = 0,
  // for player 1 paddle movement
  move_up_p1 = false,
  move_down_p1 = false,
  // for player 2 paddle movement
  move_up_p2 = false,
  move_down_p2 = false;
  var who_won;
  // -----------------GAME FUNCTIONS START HERE---------------------------------

// Collision detection algorithm
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}



})
