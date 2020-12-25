const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height-50,1200,20);
    leftB = new Box(910,height-130,20,150);
    bottomB = new Box(1090,height-130,20,150);
    rightB = new Box(1000,height-60,200,20);
    ball = new Ball(200,150,50,50);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    ball.display();
    leftB.display();
    bottomB.display();
    rightB.display();
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body, ball.body.position,{x:55,y:-60})
    }
}