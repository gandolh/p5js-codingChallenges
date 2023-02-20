
function Snake(scl) {
    this.scl = scl;
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.getDir = function () {
    return createVector(this.xspeed, this.yspeed);
    }

    this.update = function () {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        } 
        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.x = this.x + this.xspeed * this.scl;
        this.y = this.y + this.yspeed * this.scl;
        this.x = constrain(this.x, 0, width - this.scl);
        this.y = constrain(this.y, 0, height - this.scl);
    }

    this.show = function () {
        for (let i = 0; i < this.tail.length; i++) {
            fill(255);
            rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
        }
        fill(255);
        rect(this.x, this.y, this.scl, this.scl)
    }

    this.dir = function (xspeed, yspeed) {
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    this.eat = function (food) {
        let d = dist(this.x, this.y, food.x, food.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function(){
        for(let i=0; i<this.tail.length;i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d<1){
                console.log('Game over')
                this.total = 0;
                this.tail = [];
            }
        }
    }
}

