class Rope {
    constructor(bodyA, bodyB,offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10,
            pointB: {x: this.offsetX, y:this.offsetY}
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    
        strokeWeight(4);
        fill("blue");

        var anchorx1=pointA.x;
        var anchory1=pointA.y;

        var anchorx2=pointB.x+this.offsetX;
        var anchory2=pointB.y+this.offsetY;
        line(anchorx1, anchory1, anchorx2, anchory2);
    }

}