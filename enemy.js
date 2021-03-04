class Enemy extends BaseClass {
  constructor(x, y) {
    super(x, y, 90, 90);
    this.image = loadImage("enemy.png");
    this.Visiblity = 255;
    isStatic:true;
  }

 display() {
  console.log(this.body.speed);
    if (this.body.speed < 5) {
      super.display();
    } else {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 10;
      tint(255, this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
  /*display() {
   // var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }*/

  score() {
    if (this.Visiblity < 0 && this.Visiblity > -1005) {
      score++;
    }
  }
}