class Ball{
    constructor(x, y, radius){
        var options = {
            restitution: 3,
            frictionAir: 0.005,
            density: 4
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body)
    }

    display(){
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}