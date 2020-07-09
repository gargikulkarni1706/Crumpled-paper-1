class Dustbin {
    constructor(x, y, height, width, angle) {
      var options = {
           isStatic: true,
          'restitution':0.3,
          'friction':3.0,
          'density':1.7
      }
      this.body = Bodies.rectangle(x, y, height, width, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };