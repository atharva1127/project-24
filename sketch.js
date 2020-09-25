const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Render = Matter.Render;
const Body = Matter.Body;
var ground;
var wall;
//var wall1,wall2;
var paper;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
	//Create the Bodies Here.
	ground=new Ground(width/2,670,1600,20);
	// wall1=createSprite(1120,550,10,200);
	// wall2=createSprite(1280,550,10,200);
	// wall=new Dustbin(1200,550,200,10);
	// wall1=new Dustbin(1100,540,1,200);
	// wall2=new Dustbin(1300,540,1,200);
	// //var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	wall=new Dustbin(1350,515);
	Engine.run(engine);
	//Render.run(render);
} 


function draw() {
  background(225);
  Engine.update(engine);
  paper.display();
  ground.display();
  wall.display();
//   wall1.display();
//   wall2.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:133,y:-190})
    }
}
