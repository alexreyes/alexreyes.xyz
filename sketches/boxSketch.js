var boxSize = 50; 

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	background(0, 100, 200);  
} 

function draw() {
	rotateX(frameCount * 0.01); 
	rotateY(frameCount * 0.01); 
	box(boxSize);
} 
function mouseClicked() {
	// clear(); 
	// background(0, 100, 200);  
	boxSize += 50;
	console.log(boxSize);
}

function variableEllipse(x, y, px, py) {
	let speed = abs(x - px) + abs(y - py); 
	stroke(speed); 
	ellipse(x, y, speed, speed); 
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight); 
}