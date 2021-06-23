var shapes = [];
var sizeEffect = true;
let speed = 5;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  // Clear past objects
  background(220);
  
  // Generate new objects
  shapes.forEach(shape => {
    // Calculate and set the gravity
    
    if (sizeEffect) {
      shape.y -= ((-9.81 * (shape.y/100))/(speed-(speed*2))) * (shape.size/6.67);
    } else {
      shape.y -= (-9.81 * (shape.y/100))/(speed-(speed*2));
    }
    
    // Display the object
    circle(shape.x, shape.y, shape.size);
  })
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