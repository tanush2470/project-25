
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp;

function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 40);

	// dustbin1 = new Dustbin(width/2+573, height-40, 200, 20);
  // dustbin2 = new Dustbin(width/2+473, height-150, 20, 200);
  // dustbin3 = new Dustbin(width/2+673, height-150, 20, 200);
  dustbinObj=new Dustbin(900,650);

  //ground1 = new Ground(width/2, 780, 1500, 20);
  ground1 = new Ground(width/2, 670, width, 20);
  Engine.run(engine);

  // dustbinobj = createSprite(width/2+400, height-120, 100, 100);
  // dustbinobj.addImage("dustbin", dustbinobjp);
  // dustbinobj.scale = 0.8;
  // var render = Render.create({
	//   element: document.body,
	//   engine: engine,
	//   options: {
	//     width: 1500,
	//     height: 800,
	//     wireframes: false
	//   }
	// });


	// Render.run(render);
	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbinObj.display();
  
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  paper1.display();
  //drawSprites();

}

function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 400, y: -300});

  } 

}