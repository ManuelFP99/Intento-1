let canvas;
let colorPicker;
let p;
let txtInput;
let a;
let slider;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  colorPicker = createColorPicker('Grey');
  colorPicker.position(500, 560);

  p = createP('Manu F. Pardo');
  p.style('font-size', '80px');
  p.style('font-family', 'Verdana');
  p.style('color', 'red');
  p.style('background-color', 'orange');
  p.position(500, 00);

  txtInput = createInput('texto inicial');
  txtInput.position(591, 591);
  txtInput.size(300);

  a = createA('https://manuelfp99.github.io/Manu-F.-Pardo-Sitio-Web-Version-Definitiva-/', 'Sitio Web', '_blank');
  a.position(500, 300);
  a.style('color', 'rgb(0, 255, 0)');
  a.style('text-decoration', 'none'); 
  a.style('font-size', '30px');

  slider = createSlider(10, 200, 40);
  slider.position(500, 500);
}

function draw() {
  background(colorPicker.color());
  fill(255, 10, 0);
  textSize(50);
  textFont('Verdana');  
  text(txtInput.value(), 500, 270);
  ellipse(width / 2, height / 2, slider.value(), slider.value());
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}






