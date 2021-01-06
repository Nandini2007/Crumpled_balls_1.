class Ball{
  
    constructor(x,y){
        var opts ={
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
        this.body = Bodies.circle(x,y,40,opts);
        World.add(world,this.body);
    }
   
    display(){
        var pos = this.body.position;
        circle(pos.x,pos.y,40);
    }
}