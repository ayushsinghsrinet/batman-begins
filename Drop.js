class Drop{
    constructor(x,y,radius){
    
        this.body = ellipse(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    
    fall(speed){
        this.y +=speed;
    }
  // display function to guve the x,y,radius and color
    display(){
        push();
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }
