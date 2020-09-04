const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
var ground;
var wall,wall1,wall2;
var paper;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,1600,20);
	wall=new Dustbin(800,650,200,20)
	wall1=new Dustbin(690,610,20,100);
	wall2=new Dustbin(910,610,20,100);
	paper=new Paper(200,450,40);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  wall.display();
  wall1.display();
  wall2.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:65,y:-65})
    }
}
