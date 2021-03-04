class Stone {
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 5, 5, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();
      }
}