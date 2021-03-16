
let button;

var colour;
let cornervalue = 1;
let scale = 50;

let slider1;
let slider2;
let slider3;

let framerate = 60;


function setup(){
  //Frame
  createCanvas(500, 500);
  background(255);
  frameRate(framerate);
  
  //Slider1
  createP("Corner Amount");
  slider1 = createSlider(0, 360, 100);
  slider1.position(250, 520);
  slider1.style('width', '80px');
  
  //Slider2
  createP("Size");
  slider2 = createSlider(1, 500, 100);
  slider2.position(250, 555);
  slider2.style('width', '80px');
  
  //Slider3
  createP("Framerate");
  slider3 = createSlider(1, 120, 100);
  slider3.position(250, 588);
  slider3.style('width', '80px');
  
  //Button
  button = createButton('Clear All');
  button.position(19, 19);
  button.mousePressed(clear);
  
  //Colour Picker
  colorPicker = createColorPicker('#00000');
  colorPicker.position(0, 625);
}

function draw(){
  fill(colorPicker.color())
  rect(mouseX,mouseY,scale,scale, slider1.value())
  scale = slider2.value();
  frameRate(slider3.value());
}