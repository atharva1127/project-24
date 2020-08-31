class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.box = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.box);
    }
    display(){
      var pos =this.box.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  