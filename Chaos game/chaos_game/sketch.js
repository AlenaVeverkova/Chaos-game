var pressed = 0;
var dots = [0,0];
var counter = 0;
var travellerX=0;
var travellerY=0;
var placeTraveller = false;
var playing = false;
var lastTime = 0;
var cnv;

function setup() {
  cnv = createCanvas(500, 300);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  cnv.class("canvas");
}

function reset(){
  cnv = createCanvas(500, 300);
  cnv.class("canvas");
  dots = [0,0];
  travellerX=0;
  travellerY=0;
  counter = 0;
  playing = false;
  document.getElementById("playButton").innerHTML = "play";
}

function draw(){
  if(playing){
    if(counter>2){
      if(millis() - lastTime > 600-document.getElementById("speed").value){
        dotID = (floor(Math.random() * counter));
        travellerX = (dots[dotID].getX() + travellerX)/2;
        travellerY = (dots[dotID].getY() + travellerY)/2;
        fill(dots[dotID].getColor());
        noStroke();
        ellipse(travellerX, travellerY, 3, 3);
        lastTime = millis();
      }
    }
    else {
      tooLittleDots();
      playing = false;
      document.getElementById("playButton").innerHTML = "stop";
    }
  }
}

function setTraveller(){
  if(placeTraveller){
    placeTraveller = false;
    document.getElementById("travellerButton").innerHTML = "Click to place a starting point";
  }
  else {
    placeTraveller = true;
    document.getElementById("travellerButton").innerHTML = "Click to place a dot";
  }
}

function startTime(){
  if(playing){
    playing = false;
    document.getElementById("playButton").innerHTML = "play";
  }
  else {
    playing = true;
    document.getElementById("playButton").innerHTML = "stop";
  }
}

function repeat(){
  for(let i=0; i < document.getElementById("speed").value; i++){
    dotID = (floor(Math.random() * counter));
    travellerX = (dots[dotID].getX() + travellerX)/2;
    travellerY = (dots[dotID].getY() + travellerY)/2;
    fill(dots[dotID].getColor());
    noStroke();
    ellipse(travellerX, travellerY, 3, 3);
  }
}

function mousePressed() {
  if(mouseX<500 && mouseX>1 && mouseY<300 && mouseY>0){
  stroke(1);
    if(placeTraveller){
      travellerX = mouseX;
      travellerY = mouseY;
      fill(color(0,0,0));
      ellipse(travellerX, travellerY, 2, 2);
    }
    else{
      dots[counter] = new dot(mouseX, mouseY);
      console.log(mouseX + " " +mouseY);
      counter++;
    }
  }
}

function keyPressed(){
    switch (keyCode) {
      case 32:
        if(counter>2){
          repeat();
        }
        else {
          tooLittleDots();
        }
        break;
    }
 }

 function tooLittleDots(){
   alert("Place at least 3 dots.");
 }
