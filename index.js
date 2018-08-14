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
  var game_width = 1100,
  game_height = 356,
  paddle_start_position = parseInt(paddle.css('bottom')),
  paddle_width = parseInt(paddle.width()),
  ball_top = parseInt(ball.css('top')),
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
  ball_right_top = 'right';
  // depends on the ball movement pixels
  top = 6,
  right_top_angle = 0,
  // for player 1 paddle movement
  move_up= false,
  move_down= false,
  // for player 2 paddle movement
  move_up1= false,
  move_down1= false;
  var who_won;
  
  // -----------------CONTROLS-----------------------------

// Assigning keyboard controls
// Player 1 keyboard input controls
  function up() {
       if (parseInt(paddle_2.css('top')) > 0) {
           paddle_2.css('top', parseInt(paddle_2.css('top')) - 15);
           move_up = requestAnimationFrame(up);
       }
   }

   function down() {
       if (parseInt(paddle_2.css('top')) < (game_height - paddle_width)) {
           paddle_2.css('top', parseInt(paddle_2.css('top')) + 15);
           move_down = requestAnimationFrame(down);
       }
   }

   function up1() {
       if (parseInt(paddle_1.css('top')) > 0) {
           paddle_1.css('top', parseInt(paddle_1.css('top')) - 15);
           move_up1 = requestAnimationFrame(up1);
       }
   }

   function down1() {
       if (parseInt(paddle_1.css('top')) < (game_height - paddle_width)) {
           paddle_1.css('top', parseInt(paddle_1.css('top')) + 15);
           move_down1 = requestAnimationFrame(down1);
       }
   }

  //Player 1 controls

    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 38 && move_up === false && game_over === false) {
          move_up = requestAnimationFrame(up);
        }
        if (key === 40 && move_down === false && game_over === false) {
          move_down = requestAnimationFrame(down);
        }
        if (key === 87 && move_up1 === false && game_over === false) {
          move_up1 = requestAnimationFrame(up1);
        }
        if (key === 83 && move_down1 === false && game_over === false) {
          move_down1 = requestAnimationFrame(down1);
        }
      });

      $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 38 && game_over === false) {
          cancelAnimationFrame(move_up);
          move_up = false;
        } else if (key === 40 && game_over === false) {
          cancelAnimationFrame(move_down);
          move_down = false;
        } else if (key === 87 && game_over === false) {
          cancelAnimationFrame(move_up1);
          move_up1 = false;
        } else if (key === 83 && game_over === false) {
          cancelAnimationFrame(move_down1);
          move_down1 = false;
        }
      });












// Collision detection algorithm
  function collision($div1, $div2) {
    var x1 = $div1.offset().top;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().top;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}



})
