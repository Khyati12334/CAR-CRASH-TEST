const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var obj;
var ground;

function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 
 var obj_options=
 {
  restitution:0.8
 }

 var ground_options=
 {
  isStatic:true

 }



  obj=Bodies.circle(200,100,50,obj_options);
  World.add(world,obj);
  console.log(obj.position.x);

  console.log(obj.position.y);

  ground=Bodies.rectangle(10,380,400,10,ground_options);
  World.add(world,ground);




}

function draw() {
  background(0); 
  
  Engine.update(engine);


  ellipseMode(CENTER);
  ellipse(obj.position.x,obj.position.y,50,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);


  
}