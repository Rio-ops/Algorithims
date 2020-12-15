var rectangle,FixedRectangle;


function setup() {
  createCanvas(800,400);

  rectangle = createSprite(300,300,70,60);
  FixedRectangle = createSprite(400,300,40,60);

  rectangle.shapeColor = "yellow";
  FixedRectangle.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
rectangle.x = World.mouseX;
rectangle.y = World.mouseY;

if (rectangle.x - FixedRectangle.x < rectangle.width/2 + FixedRectangle.width/2
 && FixedRectangle.x - rectangle.x < rectangle.width/2 + FixedRectangle.width/2 
 && FixedRectangle.y - rectangle.y < rectangle.width/2 + FixedRectangle.width/2
 && rectangle.y - FixedRectangle.y < rectangle.width/2 + FixedRectangle.width/2 ) {

  rectangle.shapeColor = "red";
  FixedRectangle.shapeColor = "red";
}
else{
  rectangle.shapeColor = "yellow";
  FixedRectangle.shapeColor = "green";
}
  drawSprites();
}