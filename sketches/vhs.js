
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 4.8; // Speed of the shape
let yspeed = 3.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(102);
  rotateX(frameCount * 0.01); 
  rotateY(frameCount * 0.01); 
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(240)

  box(xpos, ypos, rad, rad);
}
