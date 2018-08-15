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
  var game = $('#game');
  var $ball = $('#ball');
  var paddle = $('.paddle');
  var paddle_1 = $('#paddle_1');
  var paddle_2 = $('#paddle_2');
  var restart = $('#restart_btn');

// four directions to set direction of the ball based on collision
  const UP_LEFT = -3 * Math.PI / 4;
  const UP_RIGHT = - Math.PI / 4;
  const DOWN_LEFT = 3 * Math.PI / 4;
  const DOWN_RIGHT = Math.PI / 4;


  // saving defualt game layout and set up
  var game_width = 1100,
  game_height = 360,
  paddle_start_position = parseInt(paddle.css('bottom')),
  paddle_width = parseInt(paddle.width());

  // when the game is over will set to true
  var game_over = false,

  // for player 1 paddle movement
  move_up= false,
  move_down= false,
  // for player 2 paddle movement
  move_up1= false,
  move_down1= false;
  var who_won;

ball = {
    top: 200,
    left: 200,
    angle: UP_RIGHT,
    speed: 1
  }

  // to update the ball and othe elements
  function update() {
    updateBall();
  };

  // set interval delay
  setInterval(update, 20);

  function updateBall() {
    ball.top += ball.speed * Math.sin(ball.angle);
    ball.left += ball.speed * Math.cos(ball.angle);

    $ball.css({
   top: `${ball.top}px`,
   left: `${ball.left}px`
 });

 if (isBallOverlappingWithPlayerPadel()) {
    if (ball.angle === UP_LEFT) {
      ball.angle = UP_RIGHT;
    } else {
      ball.angle = DOWN_RIGHT;
    }
  }

  if (isBallOverlappingWithAiPadel()) {
    if (ball.angle === UP_RIGHT) {
      ball.angle = UP_LEFT;
    } else {
      ball.angle = DOWN_LEFT;
    }
  }

  if (isBallOverlappingWithTop()) {
    if (ball.angle === UP_RIGHT) {
      ball.angle = DOWN_RIGHT;
    } else {
      ball.angle = DOWN_LEFT;
    }
  }

  if (isBallOverlappingWithBottom()) {
    if (ball.angle === DOWN_RIGHT) {
      ball.angle = UP_RIGHT;
    } else {
      ball.angle = UP_LEFT;
    }
  }

  }



  // -----------------CONTROLS-----------------------------

// Assigning keyboard controls
// Player 1 keyboard input controls
  function up() {
       if (parseInt(paddle_2.css('bottom')) > 0) {
           paddle_2.css('bottom', parseInt(paddle_2.css('bottom')) - 15);
           move_up = requestAnimationFrame(up);
       }
   }

   function down() {
       if (parseInt(paddle_2.css('bottom')) < (game_height - paddle_width)) {
           paddle_2.css('bottom', parseInt(paddle_2.css('bottom')) + 15);
           move_down = requestAnimationFrame(down);
       }
   }

   function up1() {
       if (parseInt(paddle_1.css('bottom')) > 0) {
           paddle_1.css('bottom', parseInt(paddle_1.css('bottom')) - 15);
           move_up1 = requestAnimationFrame(up1);
       }
   }

   function down1() {
       if (parseInt(paddle_1.css('bottom')) < (game_height - paddle_width)) {
           paddle_1.css('bottom', parseInt(paddle_1.css('bottom')) + 15);
           move_down1 = requestAnimationFrame(down1);
       }
   }

  //Player 1 controls

    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if (key === 40 && move_up === false && game_over === false) {
          move_up = requestAnimationFrame(up);
        }
        if (key === 38 && move_down === false && game_over === false) {
          move_down = requestAnimationFrame(down);
        }
        if (key === 83 && move_up1 === false && game_over === false) {
          move_up1 = requestAnimationFrame(up1);
        }
        if (key === 87 && move_down1 === false && game_over === false) {
          move_down1 = requestAnimationFrame(down1);
        }
      });

      $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 40 && game_over === false) {
          cancelAnimationFrame(move_up);
          move_up = false;
        } else if (key === 38 && game_over === false) {
          cancelAnimationFrame(move_down);
          move_down = false;
        } else if (key === 83 && game_over === false) {
          cancelAnimationFrame(move_up1);
          move_up1 = false;
        } else if (key === 87 && game_over === false) {
          cancelAnimationFrame(move_down1);
          move_down1 = false;
        }
      });
  
})
