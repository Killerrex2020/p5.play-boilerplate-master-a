const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse

var player;
var enemy1,enemy2;
var ground;
var slingshot;
var stone;
var score=0;
var checkPointSound;
function preload(){
  checkPointSound = loadSound("checkPoint.mp3");
}
function setup() {
  createCanvas(1600,1000);


  engine = Engine.create();
    world = engine.world;

  ground = new Ground(1000,1000,1600,20);
   player = new Player(700,800,200,200);
   enemy1 = new Enemy(500,900, 70, 70);
   enemy2 = new Enemy(900,900, 70, 70);
   enemy3 = new Enemy(400,900, 70, 70);
   enemy4 = new Enemy(1000,900, 70, 70);

   if(score>0 && score%100 === 0){
    checkPointSound.play() 
 }

}

function draw() {
  background("black");
  text( "Score:" +score, 500,500);
  Engine.update(engine);
  ground.display();
  player.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy1.score();
  enemy2.score();
  enemy3.score();
  enemy4.score();
  checkPointSound.play();
  //slingshot.display();
  //stone.display();
  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(player.body, {x:mouseX, y:mouseY});
}

/*function mouseReleased() {
  slingShot.fly();
}*/