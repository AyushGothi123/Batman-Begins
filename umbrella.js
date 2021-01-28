class umbrella
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        

        World.add(world, this.body);


    }
    image(){
        this.body.display();
    }
	display()
	{
	umbrellapos=this.body.position;		

		push()
		translate(umbrellapos.x, umbrellapos.y);
		imageMode(CENTER);
		strokeWeight(3);
		image(this.image,0,0,this.r, this.r);
		pop()		
		
			
	}

}