class Box {
  constructor(x, y, width, height){
    var options = {
      restitution: 0.8,
      friction: 1,
      density: 0.04
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };