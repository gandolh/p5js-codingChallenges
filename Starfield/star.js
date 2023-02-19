class Star {
    constructor(speed) {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.initialz = random(width);
        this.z = this.initialz;
        this.pz = this.z;
        this.speed = speed;
    }

    update() {
        this.z = this.z-speed;
        if(this.z<speed){
            this.z = this.initialz;
        }
        this.pz = this.z;
    }

    show() {
        fill(255);
        noStroke();
        let sx = map(this.x/this.z,0,1,0,width);
        let sy = map(this.y/this.z,0,1,0,width);
        let r = map(this.z,0,width,16,0);
        ellipse(sx, sy, r, r);
        stroke(255);
        strokeWeight(5);
        let px = map(this.x/this.pz,0,1,0,width);
        let py = map(this.y/this.pz,0,1,0,width);
        line(px,py,sx,sy);
    
        
    }
}