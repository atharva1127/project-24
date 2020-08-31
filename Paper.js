class Paper {
    constructor(x,y,radious){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

    this.body=Bodies.circle(x,y,radious,options);
    this.radious=radious;
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(225);
        ellipse(0,0 , this.radious);
        pop();
     }
}