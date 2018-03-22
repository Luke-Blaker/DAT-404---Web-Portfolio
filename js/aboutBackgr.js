let circleObject1;
let circleObject2;
function setup() {
  createCanvas(500, 500);
  circleObject1 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50));
  circleObject2 = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), random(10, 50));
}
function draw() {
  background(160);
  circleObject1.moveFunction();
  circleObject1.displayCircle();
  circleObject2.moveFunction();
  circleObject2.displayCircle();
}
class Circle{
  constructor(x, y, speedX, speedY, size){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
  }
  moveFunction(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }
  displayCircle(){
    noStroke();
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
