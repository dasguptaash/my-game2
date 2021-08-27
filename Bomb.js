class Bomb{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r = 20;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("bomb.png");
        this.trajectory = [];
        World.add(world,this.body);
    }

    display(){
           
              
        if(this.body.velocity.y>0 && this.body.position.y === width/2){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }

        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
          }
    }
}