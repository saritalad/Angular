class Shape{
    sides:number;
    constructor(side:number)
    {
        this.sides=side;
    }
}
class Rectangle extends Shape{
  Display():void{
    console.log("Sides "+this.sides);
  }

}
let rect=new Rectangle(4);
rect.Display();