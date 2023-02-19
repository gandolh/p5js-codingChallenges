const stars = [];
let speed = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 400; i++) {
        stars.push(new Star(speed ));
    }

}

function draw() {
    background(0);
    // speed = map(mouseX, 0, width, 0, 20);
    translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();

    }
}
