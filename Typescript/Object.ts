class Car
{
    Engine:string;
    constructor(engine:string)
    {
        this.Engine=engine;
    }
Display():void
{
    console.log("Car engine "+this.Engine);
}

}
 let obj = new Car("Engine 1")
obj.Display();