class Bin{
    constructor(x,y,width,height){
        var opts ={
          //  restitution : 1.0,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,opts);
         this.height = height;
        this.width = width;
       
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}