
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var tree;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var ch1;

function preload()
{
	
}

function setup() {
	createCanvas(1350,625);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(675,600,1400,10);
	tree = new Tree(1000,300,700,700);
  boy = new Boy(150,530,200,300);
  
	stone = new Stone(50,470,70,70);
  
  mango1 = new Mango(800,200,70,70);
	mango2 = new Mango(900,180,70,70);
	mango3 = new Mango(900,70,70,70);
 	mango4 = new Mango(1100,70,70,70);
	mango5 = new Mango(1000,150,70,70);
	mango6 = new Mango(1100,180,70,70);
    mango7 = new Mango(1200,200,70,70);

    ch1 = new Chain(stone.body,{x:50,y:470});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);




  drawSprites();

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  ch1.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  ch1.fly();
}

function detectCollision(Lmango,Lstone){
   mangoBodyPosition = Lmango.body.position
   stoneBodyPosition = Lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=Lmango.r+Lstone.r)
   {
     Matter.Body.setStatic(Lmango.body,false)
   }

}

function keyPressed(){
if (keyCode === 32){
  Matter.body.setPosition(stone.body,{x:50,y:470})
  ch1.attach(stone.body)
}
}
