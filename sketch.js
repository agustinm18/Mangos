
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var stone, stoneObj,lstone;
var mango1,mango2,mango3,mango4,mango5,lmango;
var ground;
var boy,boyIMG;
var connector;

function preload()
{
	boyIMG = loadImage("sprites/Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,900,20)

	stone = new Stone(50,600,60,50);

	mango1 = new Mango(650,350,20,20);
	mango2 = new Mango(650,400,20,20);
	mango3 = new Mango(600,370,20,20);
	mango4 = new Mango(700,370,20,20);
	mango5 = new Mango(500,425,20,20);

	tree = new Tree(650,500,450,450);

	connector = new Connector(stone.body,{x:50, y:600});
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

	detectcollision(stoneObj,mango1);
	detectcollision(stoneObj,mango2);
	detectcollision(stoneObj,mango3);
	detectcollision(stoneObj,mango4);
	detectcollision(stoneObj,mango5);


  boy = image(boyIMG,30,575,150,150);

  stone.display();
  ground.display();
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  connector.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	connector.fly();
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=mango1.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=mango1.r+stone.r){
		Matter.Body.setStatic(mango1.body,false)
	}
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235,y:420})
		launcherObject.attach(stone.body)
	}
}
