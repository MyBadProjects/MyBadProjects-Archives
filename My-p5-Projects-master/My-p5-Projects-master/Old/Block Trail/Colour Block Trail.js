let count = 0;
let scale = 50;
let artscale = scale
let framerate = 60;

function setup(){
  //Frame
  createCanvas(500, 500);
  background(51);
  frameRate(framerate);
  
  //Colour Picker
  colorPicker = createColorPicker('#0000f');
  colorPicker.position(0, height + 5);
}

function draw(){
  //Block
  fill(colorPicker.color());
  rect(mouseX,mouseY,artscale,artscale); 
  
  if (count <= 30){
    count++
    artscale=artscale+10;
  }
  else
  {
    count=1;
    artscale = scale;
  }
  
  print(count);
  
}