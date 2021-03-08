var fixR,movR;

function setup() {
 createCanvas(800,400);
 fixR = createSprite(400, 200, 50, 50);
 fixR.shapeColor= "green";
 movR = createSprite(400, 200, 80, 50);
 movR.shapeColor = "blue";

}

function draw() {
  background(0); 
  movR.x = World.mouseX;
  movR.y = World.mouseY;
 
  if (movR.x - fixR.x < movR.width/2 + fixR.width/2
    && fixR.x - movR.x < movR.width/2 + fixR.width/2
    && movR.y - fixR.y < movR.height/2 + fixR.height/2
    && fixR.y - movR.y < movR.height/2 + fixR.height/2){
       movR.shapeColor = "red";
       fixR.shapeColor = "red";
  }
    else{
      movR.shapeColor = "blue";
      fixR.shapeColor = "green";
    }
  drawSprites();
}