var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    AgriLoan.prototype.showInterest = function () {
        console.log("Interest is " + this.interest);
    };
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
obj.showInterest();
