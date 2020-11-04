var bullet,bullet2,bullet3,bullet4
var thickness;
var speed;
var weight;
var wall,wall2,wall3,wall4
var bound,bound1,bound2,bound3,bound4;
var damage;


function setup() {
  createCanvas(800,400);
  bullet=createSprite(0, 40, 40, 10);
  bullet2=createSprite(0, 240, 40, 10);
  bullet3=createSprite(0, 140, 40, 10);
  bullet4=createSprite(0, 340, 40, 10);
   wall=createSprite(700,40,20,50);
   wall2=createSprite(700,240,20,50);
   wall3=createSprite(700,140,20,50);
   wall4=createSprite(700,340,20,50);
   bound1=createSprite(100,80,50000,10);
   bound2=createSprite(100,180,5000,10);
   bound3=createSprite(100,280,5000,10);
  
   
  wall.thickness=random(22)
  wall2.thickness=random(34)
  wall3.thickness=random(12)
  wall4.thickness=random(55)
  bullet.velocityX=(30)
  bullet.weight=(22)
  bullet2.velocityX=(20)
  bullet2.weight=(55)
  bullet3.velocityX=(18)
  bullet3.weight=(54)
  bullet4.velocityX=(12)
  bullet4.weight=(84)
}

function draw() {
   background(255,255,255);
   background("black") 

   bullet.shapeColor="white"
   bullet2.shapeColor="white"
   bullet3.shapeColor="white"
   bullet4.shapeColor="white"

  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    
      wall.shapeColor="green"

  }
  if(wall2.x-bullet2.x<wall2.width/2+bullet2.width/2){
    bullet2.velocityX=0;
    
      wall2.shapeColor="red"

  }
  if(wall3.x-bullet3.x<wall3.width/2+bullet3.width/2){
    bullet3.velocityX=0;
    
      wall3.shapeColor="red"

  }
  if(wall4.x-bullet4.x<wall4.width/2+bullet4.width/2){
    bullet4.velocityX=0;
    
      wall4.shapeColor="green"

  }
  drawSprites();
}