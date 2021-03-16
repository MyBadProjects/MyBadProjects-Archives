function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {  
  background(50);
  
  if (keyIsDown(UP_ARROW)||keyIsDown(87)){
    rotateX(360 * 0.01);
    rotateZ(frameCount * 0.01)
  }
  if (keyIsDown(DOWN_ARROW)||keyIsDown(83)){
    rotateX(360 * -0.01);
    rotateZ(frameCount * 0.01)
  }
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(65)){
    rotateY(360 * 0.01);
    rotateZ(frameCount * 0.01)
  }
  if (keyIsDown(LEFT_ARROW)||keyIsDown(68)){
    rotateY(360 * -0.01);
    rotateZ(frameCount * 0.01)
  }
  
  box(50);
}