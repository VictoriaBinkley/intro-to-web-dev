// state
let circleX = 100;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

//Moon
fill(255,255,204);
   // draw current frame based on state
  circle(circleX, circleY, 100);

  // modify state
  circleX = circleX + xSpeed;

  //bounce off left and right
  if(circleX < 2 || circleX > width) {
    xSpeed = xSpeed * -1;
  }

//house base
fill(255,255,153);
  square(125,150,150);

//Roof
fill(128,128,128);
  triangle(300,160,200,70,100,160); 

//chimney and door
fill(204,0,0);
  rect(230,65,35,75);
  rect(200,225,45,75);

//doorknob
fill(255,255,0);
  circle(230,265,10);

//windows
fill(224,224,224);
  square(145,175,40);
  square(145,230,40);



}


 