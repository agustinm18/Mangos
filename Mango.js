class Mango{
    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;    
        this.image= loadImage("sprites/Plucking mangoes/mango.png");
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }

}