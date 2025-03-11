xPos=1;
yPos=1;
xSpeed=5;
ySpeed=5;
function setup() {
	createCanvas(windowWidth, windowHeight);
colorMode(HSB);
}
	
function draw() {
  xPos+=xSpeed;
  yPos+=ySpeed;

  if(xPos>width||xPos<0 ){
    xSpeed=-xSpeed;
  }

  if(yPos>height||yPos<0
  ){
    ySpeed=-ySpeed;
  }
	background('black');
	stroke('#000000');
  fill('white');
  circle(xPos,yPos,50);

  circle(mouseX,mouseY,50);


}
