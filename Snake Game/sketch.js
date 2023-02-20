const scl = 10;
const snake = new Snake(scl);
let food;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
    noStroke();
    pickLocation();
}
function pickLocation(){
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);
    snake.death();
    snake.update();
    if(snake.eat(food)){
        pickLocation();
    }
    snake.show();
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
}

function keyPressed(){

    if(keyCode === UP_ARROW 
        && snake.getDir().add(createVector(0,-1)).mag() != 0
    ){
        snake.dir(0,-1);
    } else if(keyCode == DOWN_ARROW  
        && snake.getDir().add(createVector(0,1)).mag() != 0){
        snake.dir(0,1);
    } else if(keyCode == RIGHT_ARROW 
        && snake.getDir().add(createVector(1,0)).mag() != 0){
        snake.dir(1,0)
    }else if(keyCode == LEFT_ARROW
        && snake.getDir().add(createVector(-1,0)).mag() != 0){
        snake.dir(-1,0)
    }
}

