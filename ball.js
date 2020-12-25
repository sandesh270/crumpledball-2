class Ball {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width-20,height-20,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper.png");

      World.add(world, this.body);
    }
    display(){
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      
      imageMode(CENTER);
      fill("brown");
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
    }
  }
