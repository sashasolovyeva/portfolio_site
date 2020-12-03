let stars = [];

var speed;
var c1, c2;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  c1 = color(0, 0, 30);
  c2 = color(0, 0, 100);
}

function draw() {
  speed = map(mouseY, 0, height, 0, 5);
 setGradient(c1, c2);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);
    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);

  }
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (let i = 0; i <= width; i++) {
      let inter = map(i, 0, width, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, 0, i, height);
    }
}
