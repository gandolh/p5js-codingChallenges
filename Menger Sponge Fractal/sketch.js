
var rotateAngle = 0;

var sponge = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  var b = new Box(0, 0, 0, 300);
  sponge.push(b);
}

function mousePressed() {
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
  noStroke();
}

function draw() {
  background(51);
  rotateX(rotateAngle);
  rotateY(rotateAngle * 0.4);
  // rotateZ(rotateAngle * 0.1);
  directionalLight(167, 255, 131, -1, 1, -1);
  directionalLight(43, 65, 255, -1, -1, 1);
  directionalLight(252, 81, 133, 1, -1, 1);
  ambientMaterial(255,255,255);
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
  rotateAngle += 0.01;
}
