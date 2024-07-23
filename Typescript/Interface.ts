interface ILoan { 
    interest:number ;
    showInterest():void;
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
     showInterest(): void {
        console.log("Interest is "+this.interest);
     }
 } 
 
 var obj = new AgriLoan(10,1) 
 //console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )
 obj.showInterest();