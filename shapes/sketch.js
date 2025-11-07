/// <reference path="../p5.d.ts" />

function setup() {
  createCanvas(500, 500);
  background(230);
  // angleMode(DEGREES);
}

function draw() {
  // ?------------------- strokeWeight
  // strokeWeight(5);
  // ?------------------- point
  // point(20, 20);
  // ?------------------- line
  // line(100, 100, 100, 400);
  // line(200, 150, 200, 350);
  // line(300, 200, 300, 300);
  // line(100, 100, 400, 250);
  // line(100, 400, 400, 250);
  // ?------------------- circle | fill
  // fill(255, 0, 0);
  // circle(250, 250, 400);
  // fill(255, 255, 255);
  // circle(250, 250, 300);
  // fill(255, 0, 0);
  // circle(250, 250, 200);
  // ?------------------- rect
  // rect(100, 100, 200, 200);
  // rect(150, 150, 200, 200);
  // ?------------------- triangle
  // triangle(250, 150, 400, 400, 100, 400);
  // ?------------------- beginShape | vertex | endShape
  // beginShape();
  // vertex(100, 50);
  // vertex(400, 100);
  // vertex(450, 300);
  // vertex(200, 450);
  // vertex(50, 350);
  // vertex(150, 200);
  // endShape();
  // ?------------------- arc
  // *Para usar arc hay que añadir en el metodo setup
  // *la función angleMode con el argumento DEGREES
  // *para que el sketch utilice angulos
  // noFill();
  // arc(250, 250, 400, 400, -45, 45);
  // arc(250, 250, 300, 300, 0, 90);
  // arc(250, 250, 200, 200, 45, 135);
  // arc(250, 250, 100, 100, 90, 180);
  // ?------------------- rect
  noStroke();
  fill("#780000");
  rect(50, 50, 200, 400);
  fill("#c1121f");
  rect(250, 50, 200, 200);
  fill("#a2d2ff");
  rect(250, 250, 100, 100);
  fill("#003049");
  rect(350, 250, 100, 100);
  fill("#003049");
  rect(250, 350, 100, 100);
  fill("#a2d2ff");
  rect(350, 350, 100, 100);
}

function keyPressed() {
  console.log("key pressed");
  save("squares.png");
}
