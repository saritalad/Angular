class Circle{
    radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
    }
    Area():number
    {
        return Math.PI*this.radius*this.radius;
    }
}
class Cylinder extends Circle
{
height:number;
constructor(height:number,radius:number)
{      super(radius);
    this.height=height;
}
Area():number 
{
    super.Area();
   return 2*this.height *this.radius*(this.radius+this.height);
}
    
}

let cylider=new Cylinder(12,2);
console.log("Answer is "+cylider.Area());