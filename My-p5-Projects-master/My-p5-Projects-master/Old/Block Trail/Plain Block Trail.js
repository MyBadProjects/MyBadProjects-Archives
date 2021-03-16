let scale = 50;
let framerate = 60;

function setup(){
  //Frame
  createCanvas(500, 500);
  background(51);
  frameRate(framerate);
}

function draw(){
  rect(mouseX,mouseY,scale,scale)
}