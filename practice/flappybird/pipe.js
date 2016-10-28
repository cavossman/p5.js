function Pipe() {
  // bug - occasionally makes pipes with too small of a gapp to cross.
  this.opening = random(height/2);
  this.top = this.opening - 50;
  this.bottom = this.opening + 50;
  this.x = width;
  this.w = 40;
  this.speed = 2;
  
  this.hits = function(bird) {
    if (bird.y - bird.radius < this.top || bird.y + bird.radius > this.bottom) {
      if (bird.x + bird.radius > this.x && bird.x + bird.radius < this.x + this.w){
        return true;
      }
    }
    return false;
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top); //update later. 11:00
    rect(this.x, this.bottom, this.w, height - this.bottom); 
  }
  
  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    return this.x < -this.w;  // Returns true or false
  }
}