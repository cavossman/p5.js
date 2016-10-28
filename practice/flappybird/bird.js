function Bird() {
  this.y = height/2;
  this.x = 64;
  this.radius = 16;
  
  this.gravity = 0.6;
  this.velocity = 0;
  this.lift = -15;
  
  // Add image to replace the circle bird?
  /*var img;
  function preload() {
    img = loadImage("assets/flappybird1.png");
  }

  function setup() {
    image(img, 0, 0, img.width, img.height);
  }*/
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  
  this.up = function() {
    this.velocity += this.lift;
  }
  
  this.update = function() {
    
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}