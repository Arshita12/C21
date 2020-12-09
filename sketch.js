
var fixedrect,movingrect,gameobject1,gameobject2,gameobject3;
function setup() {
  createCanvas(800,400);

 fixedrect= createSprite(500, 100, 50, 50);
 movingrect = createSprite(300,100,30,30);
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";

 gameobject1 = createSprite(100,100,50,50);
 gameobject1.shapeColor = "green";
 gameobject2 = createSprite(200,100,50,50);
 gameobject2.shapeColor = "green";
 gameobject3 = createSprite(300,100,50,50);
 gameobject3.shapeColor = "green";
 //movingrect.velocityX=-4;
//fixedrect.velocityX=4;
gameobject3.velocityX=-4;
gameobject1.velocityX=4;

}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  console.log(movingrect.x-fixedrect.x);
  //FOR isTouching
  if(isTouching(gameobject1,movingrect)){
    gameobject1.shapeColor="blue";
    movingrect.shapeColor="blue";
  }
  else{
    gameobject1.shapeColor="green";
    movingrect.shapeColor="green";
  }

  bounceOff(gameobject1,gameobject3);

  drawSprites();
}

