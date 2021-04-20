
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(350,390);
	bob2=new Bob(300,390);
	bob3=new Bob(250,390);
	bob4=new Bob(400,390);
	bob5=new Bob(450,390);
	//bob6=new Bob(500,390);

	roof1=new Roof(400,100,600,20);

	rope1=new Rope(bob1.body, roof1.body,-50,0);
	rope2=new Rope(bob2.body, roof1.body,-100,0);
	rope3=new Rope(bob3.body, roof1.body,-150,0);
	rope4=new Rope(bob4.body, roof1.body,0,0);
	rope5=new Rope(bob5.body, roof1.body,50,0);
	//rope6=new Rope(bob6.body, roof1.body, bob6.y*2, 0);


	bob1.depth=rope1.depth+10;
	bob2.depth=bob2.depth+3;
	bob3.depth=bob3.depth+3;
	bob4.depth=bob4.depth+3;
	bob5.depth=bob5.depth+3;
	//bob6.depth=bob6.depth+3;

	//console.log(bob1.depth, rope1.depth);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("green");

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   //bob6.display();

   roof1.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   //rope6.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-45});
	}
 }