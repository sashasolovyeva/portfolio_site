var canvas
var x, y
var asset1, asset2, asset3, asset4, asset5
var pg
var circle_angle, circle_anglespeed
var star_anglespeed

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0,0)
	canvas.style('z-index', '-1')

	x = windowWidth
	y = windowHeight

	circle_angle = 0

	ellipseMode(CENTER)
	noStroke()
}

function draw(){
	background(255)
	circle_anglespeed = map(mouseX, 0, width, -.005, -.015)
	// star_anglespeed = map(mouseY, 0, height, 80, 220)
	star_anglespeed = 200

	fill(243, 237, 219)
	push()
	circle_angle = circle_angle + circle_anglespeed
	translate(x/2, y/2)
	rotate(circle_angle)
	ellipse(x*.2, y*.2, 300, 300)
	pop()

	fill(147, 115, 148)
	push()
	translate(x/40, y*3/4)
	rotate(frameCount/star_anglespeed)
	star(0, 0, 140, 280, 22)
	pop()

	fill(180, 208, 230)
	push()
	translate(x*.98, y/5)
	rotate(frameCount/-star_anglespeed)
	star(0, 0, 170, 340, 22)
	pop()
}

// FROM P5.JS REFERENCE
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


var timer
window.onresize = function(){
	if (timer) {
		clearTimeout(timer)
	}

	timer = setTimeout(() => {
		location.reload();
		console.log('resize')

	}, 50)
}
