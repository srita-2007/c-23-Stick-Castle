const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1, rect2, rect3, rect4, rect5, rect6, rect7;
var polygon, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7;

var ground; 

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  rect1 = new Rectangle(90,300,50,200);
  rect2 = new Rectangle(20,300,15,300);
  rect3 = new Rectangle(565,300,15,300);
  rect4 = new Rectangle(500,300,50,300);
  rect5 = new Rectangle(140,320,50,150);
  rect6 = new Rectangle(450,320,50,150)
  rect7 = new Rectangle(385,320,80,120);
  rect8 = new Rectangle(205,320,80,120);
  rect9 = new Rectangle(295,320,50,200);
  polygon1 = new Triangle(46,89,4,30);
  polygon2 = new Triangle(71,112,4,30);
  polygon3 = new Triangle(102,113,4,47);
  polygon4 = new Triangle(147,100,4,30);
  polygon5 = new Triangle(192,113,4,47)
  polygon6 = new Triangle(224,112,4,30);
  polygon7 = new Triangle(249,65,4,30);
  ground = new Ground(200,390,900,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rect8.display();
  rect9.display();

  polygon1.display();
  polygon2.display();
  polygon3.display();
  polygon4.display();
  polygon5.display();
  polygon6.display();
  polygon7.display();

  ground.display();
  drawSprites();
}