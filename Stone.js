class Stone {
    constructor(x,y,width,height) {
        var options ={
            isStatic:false,
            restitution:0,
            frition:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
        this.image= loadImage("sprites/Plucking mangoes/stone.png");
        World.add(world,this.body)
    }
    display(){
        this.pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image,this.pos.x,this.pos.y,this.width,this.height);
        pop();
    }

}