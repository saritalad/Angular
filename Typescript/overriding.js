var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.Area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(height, radius) {
        var _this = _super.call(this, radius) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.Area = function () {
        _super.prototype.Area.call(this);
        return 2 * this.height * this.radius * (this.radius + this.height);
    };
    return Cylinder;
}(Circle));
var cylider = new Cylinder(12, 2);
console.log("Answer is " + cylider.Area());
