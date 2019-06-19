function dot (x,y) {
    this.x = x;
    this.y = y;
    this.c = color((Math.random() * 255), (Math.random() * 255), (Math.random() * 255));
    fill(this.c);
    ellipse(x, y, 5, 5);
    this.getX = returnX;
    this.getY = returnY;
    this.getColor = returnColor;
}
function returnX(){
  return this.x;
}

function returnY(){
  return this.y;
}

function returnColor(){
  return this.c;
}
