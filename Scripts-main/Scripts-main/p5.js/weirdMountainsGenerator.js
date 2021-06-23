function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  createLand(mouseX,mouseY,0.02,10,12,2)
}

function createLand(x,y,noiseScale,noiseIntensity,noiseSmoothness,noiseDiffer) {
  noiseIntensity = ((noiseIntensity*4)-(PI^2/mouseY)%12)*(TWO_PI/noiseDiffer);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(255);
    line(x, mouseY+noiseVal*(noiseIntensity*(random()%95)*noiseIntensity,(noiseSmoothness*noiseIntensity))/12 , x, height);
  }
}