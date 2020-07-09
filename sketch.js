
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin, paper; 
var ground;
var box1;

function setup() {
	var canvas = createCanvas(1500, 700);

 	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(1300, 670, 20, 200);
	box2 = new Dustbin(1200, 630, 100, 20, PI/2);
	box3 = new Dustbin(1400, 630, 100, 20, PI/2);
	ground = new Ground(width/2, 690, 1500, 20)
  paper = new Paper(50, 500);

   
 } 


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
}

