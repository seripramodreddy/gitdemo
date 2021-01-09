type colorData='RED'|'BLUE'|'ORANGE';

import {carconfig} from "./carconfig"
/*interface carconfig{
   // carName:string;
    //brand:string="Hyundia";   ///default value assigning..
    color:colorData;
    makeYear:number;
    //carmodels:Array<string>;
} */
class Car{
   /* carName:string;
    brand:string="Hyundia";   ///default value assigning..
    color:string;
    makeYear:number;
    carmodels:Array<string>; */

color:string;
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
    constructor(data:carconfig){
           this.color=data.color;
    }
    carstart()
    {
        console.log('car started');
    }

    getName()
    {
       // console.log(this.carName,this.color,this.makeYear);
    }

    getDetails(carName:string,brandName?:string,makeyear:string='2020')
    {
        console.log("there should be any non defualt values after optional declaration")
    }

}

let obj:carconfig={color:"RED",makeYear:2008};///interface way of defining

//let c=new Car({color:"RED",makeYear:2008}); //object way of declaration


