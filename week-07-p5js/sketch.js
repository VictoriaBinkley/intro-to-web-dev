function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

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

fill(255,255,0);
  circle(230,265,10);

fill(224,224,224);
  square(145,175,40);

  square(145,230,40);

}

