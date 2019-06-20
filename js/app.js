"use strict";
// initializing variables
let score=0;
let number= document.querySelector('.score');
number.innerHTML="score is ::" +score;
// Enemies our player must avoid
let Opponent = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Opponent.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 300);
  }
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 300);
  }
  // pasition of player
  //reloading player
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
    player.x = 200;
    player.y = 400;
    // sweet alert
    Swal.fire({
      title: 'Game over',
      html: 'total score is:' +score,
      confirmButtonText: '<i class="fa fa-thums-up"></i> Play again',
    }).then(() => {
      document.location.reload();
    });
  }
};

// Draw the enemy on the screen, required method for game
Opponent.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Winner {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
}

Winner.prototype.update = function(dt) {
          //score
          if(this.y<40){
            this.x=200;
            this.y=380;
            score +=50;
            number.innerText="Your player score is :" +score;
            if (score === 1000){
              openWinModal();
            }
          }
}

Winner.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemyLocations = [60, 143, 226];
enemyLocations.map((positionY) => {
  var enemyItem = new Opponent(0, positionY, 150);
  allEnemies.push(enemyItem);
})
var player = new Winner(200, 400);

Winner.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      if (this.x >= 0) {
        this.x = this.x - 101;
      }
      break;
    case 'right':
      if (this.x < 350) {
        this.x = this.x + 101;
      }
      break;
    case 'down':
      this.y = this.y + 83;
      if (this.y > 404) {
        this.y = 404;
      }

      break;
    case 'up':
      this.y = this.y - 83;
      if (this.y < 60) {
        setTimeout(() => {
          this.x = 200;
          this.y = 400;

        }, 100)
      }
      break;
  }
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
