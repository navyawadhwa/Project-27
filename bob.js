class Bob {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution: 0.3,
          density: 1.2,
      }
  
      this.body = Bodies.circle(x,y,30, options);
      World.add(world, this.body);
    }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    strokeWeight(2);
    stroke ("white");
    fill("pink");
    ellipse(0,0,50);
    pop();
  }
  };