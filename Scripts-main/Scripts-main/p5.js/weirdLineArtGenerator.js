var shapes = [];
var sizeEffect = true;
let speed = 5;
var linearGuess = 0.45;
var linearGuessDisplace = 0.45;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  // Clear past objects
  background(220);
  
  // Generate line
  fill(0);
  beginShape();
  let pastVal = [0,0];
  shapes.forEach(shape => {
    // Create mid-line vertext
    vertex(interLerp(pastVal.x, shape.x, linearGuess + linearGuessDisplace), interLerp(pastVal.y, shape.y, linearGuess - linearGuessDisplace));
    
    // Create destination
    vertex(shape.x, shape.y);
    
    pastVal = shape;
  })
  endShape();
}


function mousePressed() {
  addAShape();
}

function addAShape() {
  let customshape = {
    x: mouseX,
    y: mouseY,
    size: 50 % Math.floor(random() * 41) + 10,
  }
  shapes.push(customshape);
}

function interLerp(a, b, n) {
  return (1 - n) * a + n * b;
}