
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall,wall1,wall2;
var paper;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,height,800,20);
	wall=new Dustbin(650,680,200,20)
	wall1=new Dustbin(540,640,20,100);
	wall2=new Dustbin(740,640,20,100);
	paper=new Paper(50,680,20);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  wall.display();
  wall1.display();
  wall2.display();
  paper.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position, {x:65,y:-65})


    }
}
