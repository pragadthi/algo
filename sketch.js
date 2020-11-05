var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(300, 200, 100, 50);
  fixedrect.shapeColor='green';
  fixedrect.debug=true;
  movingrect=createSprite(400, 200, 100, 50);
  movingrect.shapeColor='green';
  movingrect.debug=true;
}

function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
 if(movingrect.x -fixedrect.x < fixedrect.width/2 + movingrect.width/2){
   fixedrect.shapeColor='red';
   movingrect.shapeColor='red';
 }
 else{
  fixedrect.shapeColor='green';
  movingrect.shapeColor='green';

 }
  drawSprites();
}