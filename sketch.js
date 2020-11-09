const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, dustbin, dustbin2, ground;

function preload(){
}

function setup() {
	createCanvas(1200, 350);

	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(200,240);

	dustbin = new Dustbin(600,20,20,20);
	dustbin2 = new Dustbin(300,50,50,5);
	ground = new Ground(1200,15);//(1200,15);
	ground.shapeColor=color("yellow");

	Engine.run(engine);
}

function draw() {
  //rectMode(CENTER);
  keypressed();
  background("black");

  paperBall.display();
  dustbin.display();
  ground.display();

  keypressed();

  drawSprites();
}
function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:85})
	}
}