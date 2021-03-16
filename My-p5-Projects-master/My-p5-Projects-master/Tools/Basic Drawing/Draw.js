let strokeSize;

/* UI */
let colorPicker;
let sizeSlider;
let bevelSlider;

function setup(){
  createCanvas(400,400);
  background(0);


  /* UI */
  createP("Colour")
  colorPicker = createColorPicker('#000ff');
  createP("Size")
  sizeSlider = createSlider(0, 400, 10);
  sizeSlider.style('width', '80px');
  createP("Bevels")
  bevelSlider = createSlider(0, 45, 45);
  bevelSlider.style('width', '80px');

  /* Settings */
  frameRate(120);
}

function draw(){
  /* Draw */
  strokeWeight(0);
  fill(colorPicker.color());

  if (mouseIsPressed){
    rect(mouseX, mouseY, sizeSlider.value(), sizeSlider.value(), bevelSlider.value());
  }
}
