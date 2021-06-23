let startingLocation;

// canvas size is stored as [x,y]
let canvasSize = [400, 400]

function setup() {
  // Set the starting location
  // do not change this unless you want
  // to start from a specific location
  
  startingLocation = random()*canvasSize[1];
  
  // Prepare the canvas
  createCanvas(canvasSize[0], canvasSize[1]);
  background(255);
}

var done = false;
function draw() {
  if (!done) {
    var data = createGraph(1);
    
    // Draw graph from data
    noFill();
    beginShape();
    data.forEach(dataSet => {
      vertex(dataSet[0],dataSet[1]);
    });
    endShape();
    
    // Prevent the graph from being drawn again
    done = true;
  }
}

function createGraph(difference) {
  let pastHeight = startingLocation;
  let currentLength = 0;
  
  // stored as [x,y]
  let graphData = [];
  
  for (let i = 0; i < canvasSize[0]; i++) {
    if (random()>=0.5){
      graphData.push([i,pastHeight+Math.floor(Math.random() * difference+1)]);
      pastHeight+=1;
    } else {
      graphData.push([i,pastHeight-Math.floor(Math.random() * difference+1)]);
      pastHeight-=1;
    }
  }
  
  return graphData;
}