function setup() {
	createCanvas(480, 120); 
}

function draw() {
	let h = hour(); 
	text('Current hour:\n' + h, 5, 50);
}