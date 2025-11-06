/// <reference path="../p5.d.ts" />

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  fill(255, 100, 100);
  ellipse(mouseX, mouseY, 50, 50);
}
