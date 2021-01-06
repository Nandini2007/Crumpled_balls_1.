
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ball = new Ball(80,20);
	 bin1 = new Bin(width - 150,height - 40,20,80)
	 bin2 = new Bin(width - 10,height - 40,20,80)
	 bin3 = new Bin(width - 80,height ,160,40)
	 ground = Bodies.rectangle(400,700, 800, 10 , {isStatic:true} );
	
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  fill("red");
  bin1.display();
  bin2.display();
  bin3.display();
  fill("black");
  rect(400,700, 800, 10);
 // rect(ground.body.position.x,ground.body.position.y,800,10);
 // ground.display();
  fill("green"); 
  ball.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-300})
}
}






