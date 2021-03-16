var particles = [];
let framerate = 60;
var gravity;

function setup() {
  createCanvas(600,600);
  noCursor()
  frameRate(framerate);
  gravity = createVector(0,0.4);
}

function draw() {
  // Background
  background(1);
  
  // Stroke
  stroke(225);
  strokeWeight(5);

  // Mouse
  
  particles.push(new Particle(mouseX, mouseY));
  for (var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
}

function Particle(xPos, yPos){
  this.pos = createVector(xPos, yPos);
  this.vel = createVector(0,-4);
  this.acc = createVector(0,0);
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.show = function(){
   point(this.pos.x, this.pos.y); 
  }
}