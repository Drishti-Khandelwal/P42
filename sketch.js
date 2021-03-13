
var monkeyImage;
var monkey;
var bananaImage;
var obstacleImage;
var bananaImage;
var score = 0;
var score1=0;
var obstacleImage;
var ground;
var obstacleGroup;
var foodGroup;
var invisibleground;
var jungle;
function preload(){
  
  
monkeyImage =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
 
}



function setup() { 
  createCanvas(600,600);
bk = createSprite(300,300,20,20);
bk.addImage("bkImage",jungleImage);
  bk.scale= 1.2;
  
monkey = createSprite(80,550,10,10);
monkey.addAnimation("running",monkeyImage);
monkey.scale = 0.1; 

  //edges = createEdgeSprites();
 
ground = createSprite(400,580,900,10);
 obstacleGroup = new Group();
  foodGroup = new Group();
ground.visible = false;

}


function draw() {

// background("white");
  
   ground.velocityX = -4;
  bk.velocityX = -5;
  ground.x = ground.width/2;
   if(ground.x<0){
  ground.x = 300;   
 }
 if(bk.x<0){
  bk.x = 300;
}
 

  if(keyDown("space")){
   monkey.velocityY = -11; 
     
  }
    monkey.velocityY = monkey.velocityY+0.5;

  
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale = 0.2;
  }
   if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach()
     score1 = score1+2;
     }

  
  switch(score){ 
    case 10: monkey.scale=0.12; break;
    case 20: monkey.scale=0.14; break; 
    case 30: monkey.scale=0.16; break; 
    case 40: monkey.scale=0.18; break; 
    default: break;}
  spawnobstacle();
  spawnfood();
  drawSprites();
  textSize(15);
  stroke("black");
    fill("red");
    text('SurvivalTime:'+score,350,40); 
      text('My score :'+score1,250,40); 
  score = score+Math.round(getFrameRate()/60);

}


function spawnobstacle(){
  if(frameCount%200===0){
 var ob = createSprite(500,540,10,10); 
 ob.addImage(obstacleImage) ;
  ob.scale = 0.2;
  ob.velocityX = -4;

    obstacleGroup.add(ob);
  }
  
}

function spawnfood(){
  if(frameCount%200===0){
    var food = createSprite(450,500,10,10);
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -4;
    food.y = Math.round(random(300,400));
    
    foodGroup.add(food);
  }
}




