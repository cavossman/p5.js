var bird;
var pipes = [];
var state = 'start';
var score = 0;

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  
}

function draw() {
  background(0);
  
  if (state == 'start') {
    textSize(32);
    fill(0, 102, 153);
    text("Flappy Bird", 100, 50);
    text("Press Enter to start!", 50, 500);
  }
  
  if (state == 'playing') {
    background(0, 255, 0);
    for (var i = pipes.length - 1; i >= 0; i--){
      pipes[i].show();
      pipes[i].update();
      
      if (pipes[i].hits(bird)) {
        //console.log("HIT");
        state = 'gameover';
      }
      
      // Continue fixing score - occasionaly bugged.
      if (frameCount % 100 == 0 && !pipes[i].hits(bird)) {
        //console.log("SCORE");
        score++;
      }
      
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }
    
    if (bird.y - bird.radius <= 0 || bird.y + bird.radius >= height){
      state = 'gameover';
    }
    
    bird.update();
    bird.show();
    
    if (frameCount % 150 == 0) {
      pipes.push(new Pipe());
    }
  }
  
  if (state == 'gameover') {
    textSize(32);
    fill(0, 102, 153);
    text("Game Over!", 100, 300);
    text("Score: " + round((score - 1)/2), 120, 400); // fix score
    text("Press enter to restart!", 40, 500);
    for (var i = pipes.length - 1; i >= 0; i--){
      pipes.splice(i, 1);
    }
    bird.y = height/2;
  }
}

function keyPressed() {
  if ((state == 'start' || state == 'gameover') && keyCode == "13") {
    state = 'playing';
    score = 0;
  }
  if (state == 'playing' && key == ' ') {
    bird.up();
  }
}