function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {  
  background(255);
  rect(0, 0, mouseX, mouseY);
}