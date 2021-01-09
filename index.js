"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*interface carconfig{
   // carName:string;
    //brand:string="Hyundia";   ///default value assigning..
    color:colorData;
    makeYear:number;
    //carmodels:Array<string>;
} */
var Car = /** @class */ (function () {
    /* constructor(color:colorData,makeYear:number)
     {
          this.color=color;
          this.makeYear=makeYear;
     } */
    ///object way of defining and passing..  
    /* constructor(data:{color:colorData,makeYear:number})
     {
         this.color=data.color;
         this.makeYear=data.makeYear;
     } */
    //interface way of defining
    function Car(data) {
        this.color = data.color;
    }
    Car.prototype.carstart = function () {
        console.log('car started');
    };
    Car.prototype.getName = function () {
        // console.log(this.carName,this.color,this.makeYear);
    };
    Car.prototype.getDetails = function (carName, brandName, makeyear) {
        if (makeyear === void 0) { makeyear = '2020'; }
        console.log("there should be any non defualt values after optional declaration");
    };
    return Car;
}());
var obj = { color: "RED", makeYear: 2008 }; ///interface way of defining
//let c=new Car({color:"RED",makeYear:2008}); //object way of declaration
