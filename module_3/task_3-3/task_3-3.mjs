"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Fahrenheit = (kelvin - 237.15)*9/5+32;
//Celsius = Kelvin - 237.15;
//Celsius = (Fahrenheit - 32)*5/9;
const ETemperaturType = {Celsius:1, Fahrenheit: 2, Kelvin: 3}
function convertTemperature(aTemperature, aType) {
  let Fahrenheit = 0;
  let Celsius = 0;
  let kelvin = 0;
    switch (aType){
     case ETemperaturType.Celsius:
        printOut("Convert from Celsius")   
     Celsius= aTemperature;
      Fahrenheit = (Celsius *9/5) + 32; 
      kelvin = Celsius + 237.25;
      break;
     case ETemperaturType.Fahrenheit:
      printOut("Convert from Fahrenheit")    
      break;
     case ETemperaturType.Kelvin:
      printOut("Convert from kelvin")
      break;
  }// 

printOut("Celsius = " + Celsius.toFixed(0));
printOut("Fahrenheit = " + Fahrenheit.toFixed(0))
printOut("Kelvin = " + kelvin.toFixed(0))
}
convertTemperature(0,ETemperaturType.Celsius);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function CalculateNetPrice(aPrice, aTaxGroup){
    let net= 0
    let taxGroup = aTaxGroup.toUpperCase();
    let vat = NaN;
    printOut("TaxGroup = " +taxGroup);
    
    switch(taxGroup){
        case "NORMAL":
        vat = 25;     
    }
    if (!Number.isNaN(vat)){

    net = (100 *aPrice) / (vat+100);
   }
    return net;
 
 }


const netPrice1 = CalculateNetPrice(0, "hotel")
if (Number.isNaN(netPrice1)){
    printOut("Unknown VAT group")
}else {
    printOut("netPrice1 = " + netPrice1.toFixed(2))    
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun(){
    let op= 1; 
    let line = 1;
    //Left side
    let ok = false;
    do {}
    let sumLeft = 0;
    for (let left = 0; left < line + 1; left++){
      sumLeft += op; 
      op++; 

    }
let sumRight= 0;
for(let right = 0 ; right < line; right++){
    sumRight += op;
    op++;
}
if (sumLeft !==sumRight){
    //På en eller annen måte må vi stoppe function
    
} 





}

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
