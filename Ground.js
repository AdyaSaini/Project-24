class Ground{
    constructor(width, height) {
        var options= {
            'isStatic' : true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(600,340, width, height, options);
        this.width = width;
        this.height = height;
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
    }
  }