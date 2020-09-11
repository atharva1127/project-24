const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Render = Matter.Render;
const Body = Matter.Body;
var ground;
var wall;
var paper;

// function preload(){

// }

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,1600,20);
	wall=new Dustbin(1000,580,200,150);
	paper=new Paper(200,450,70);
	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
	//Render.run(render);
}


function draw() {
  background(225);
  Engine.update(engine);
  ground.display();
  paper.display();
 
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:118,y:-118})
    }
}
