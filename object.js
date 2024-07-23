var Car = /** @class */ (function () {
    function Car(engine) {
        this.Engine = engine;
    }
    Car.prototype.Display = function () {
        console.log("Car engine " + this.Engine);
    };
    return Car;
}());
var obj = new Car("Engine 1");
obj.Display();
