let framerate = 60;
let scale = 400;
let oldscale = scale;

var button1;
var checkbox1;
var slider1;
var slider2;
var slider3;

function setup() {
  createCanvas(scale, scale);
  background(220);
  frameRate(framerate);
  createP("Framerate");
  slider1 = createSlider(1, 120, 120, 1);
  createP("Mode");
  slider2 = createSlider(1, 4, 4, 1);
  createP("Size");
  slider3 = createSlider(1, 1800, 400, 1);
  createP("Misc");
  checkbox1 = createCheckbox('Pause', false);
  button = createButton('Clear');
  button.mousePressed(clearCanvas);
}

function draw() {
  if (checkbox1.checked()!=true){
    if (slider2.value()==1){
      SquareGen();
    }
    else if (slider2.value()==2){
      TriangleGen();
    }
    else if (slider2.value()==3){
      VertexGen(); 
    }
    else
    {
      Random(); 
    } 
  }
  
  scale = slider3.value();
  
  if (scale != oldscale){
    oldscale = scale;
    resizeCanvas(scale,scale);
  }
  
  framerate = slider1.value();
  frameRate(framerate);
}

function SquareGen(r,g,b){
  fill(random(255),random(255),random(255));
  rect(random(scale),random(scale),random(scale),random(scale),random(scale),random(scale));
}

function TriangleGen(r,g,b){
  fill(random(255),random(255),random(255));
  rect(random(scale),random(scale),random(scale),random(scale),random(scale),random(scale));
}

function VertexGen(r,g,b){
  fill(random(255),random(255),random(255));
  beginShape()
  vertex(random(scale),random(scale));
  vertex(random(scale),random(scale));
  vertex(random(scale),random(scale));
  vertex(random(scale),random(scale));
  vertex(random(scale),random(scale)); 
  endShape();
}

function Random(){
  fill(random(255),random(255),random(255));
  
  let randomNum = random(scale);
  
  if (randomNum <= (scale/2)){
    VertexGen()
  }
  else
  {
    if (randomNum >= (scale/4)){
      SquareGen();
    }
    else{
      TriangleGen();
    }
  }
}

function clearCanvas(){
 background(220); 
}