"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printToday() {
    const today = new Date();
    printOut(today.toLocaleDateString("no-NB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
}

printToday()
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function daysUntil2XKO() {
    const releaseDate = new Date('2025-05-14');  
    const today = new Date();  

    const timeDifference = releaseDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    printOut(`Time remaining until 2XKO's release: ${daysLeft} days`);
    return daysLeft;
}
function revealTheEpicCountdown() {
     printToday();
    daysUntil2XKO();  
    printOut("Are you ready to experience the tag-team action? O__O");
}
revealTheEpicCountdown();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleRadius(radius) {
    const diameter = 2 * radius;  
    const circumference = 2 * Math.PI * radius;  
    const area = Math.PI * Math.pow(radius, 2);  

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

circleRadius(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleProperties(rectangle) {
    const perimeter = 2 * (rectangle.width + rectangle.height); 
    const area = rectangle.width * rectangle.height;  
    printOut("Perimeter: " + perimeter);
    printOut("Areea: " + area);
}
rectangleProperties({ width: 4, height: 5 });

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
function CalculateNetPrice(aPrice, aTaxGroup) {
    let net = NaN;  
    let taxGroup = aTaxGroup.toUpperCase(); 
    let vat = NaN;  
    
    printOut("TaxGroup = " + taxGroup);  
    
    switch (taxGroup) {
        case "NORMAL":
            vat = 25;     
            break;
        case "FOOD":
            vat = 15;    
            break;
        case "HOTEL":
        case "TRANSPORT":
        case "CINEMA":
            vat = 10;     
            break;
        default:
            printOut("Unknown VAT group!");  
            return NaN;  
    }
    if (!Number.isNaN(vat)) {
        net = (100 * aPrice) / (vat + 100);
    }
    return net;  
}
const netPrice1 = CalculateNetPrice(125, "hotel");  
if (!Number.isNaN(netPrice1)) {
    printOut("netPrice1 = " + netPrice1.toFixed(2));
}
const netPrice2 = CalculateNetPrice(115, "food");  
if (!Number.isNaN(netPrice2)) {
    printOut("netPrice2 = " + netPrice2.toFixed(2)); 
}

const netPrice3 = CalculateNetPrice(110, "hotel");  
if (!Number.isNaN(netPrice3)) {
    printOut("netPrice3 = " + netPrice3.toFixed(2));  
}

const netPrice4 = CalculateNetPrice(105, "goblins");  
if (Number.isNaN(netPrice4)) {
    printOut("Unknown VAT group!");  
}

printOut("Sliter med å få denne til å fungere riktig, er ikke så god i matte")




printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedOrTimeOrDistance() {
    let distance = 100;  
    let time = undefined    
    let speed = undefined; 

    if (speed === undefined) {
        let calculatedSpeed = distance / time;  
        printOut("Calculated Speed = " + calculatedSpeed);
        return;
    }
    if (time === undefined) {
        let calculatedTime = distance / speed;  
        printOut("Calculated Time = " + calculatedTime);
        return;
    }
    
    if (distance === undefined) {
        let calculatedDistance = speed * time;  
        printOut("Calculated Distance = " + calculatedDistance);
        return;
    }
    printOut("Invalid Input - No parameter is missing!");
    return;
}

calculateSpeedOrTimeOrDistance();  

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function modifyText(text, maxSize, char, insertBefore) {
    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; 
        } else {
            text = text + char; 
        }
    }
    printOut(text);
}
// Is this the right usage?:
modifyText("Hello", 10, "*", true);  
modifyText("World", 10, "#", false); 

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathExpression() {
    let op = 1; 
    let maxLines = 200; 

    
    for (let line = 1; line <= maxLines; line++) {
        let sumLeft = 0;
        let sumRight = 0;

        
        for (let i = 0; i < line; i++) {
            sumLeft += op;
            op++;
        }

        
        for (let i = 0; i < line + 1; i++) {
            sumRight += op;
            op++;
        }

        
        if (sumLeft !== sumRight) {
            printOut(`Line ${line} failed: Left sum = ${sumLeft}, Right sum = ${sumRight}`);
            return; 
        }
    }

    
    printOut("Maths fun!");
}
testMathExpression();
printOut(newLine);
/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(n) {
    // CHAT GPT BRUKT
    if (n <= 1) {
        return 1;
    }
    // CHAT GPT
    return n * factorial(n - 1);
}

// CHAT GPT!:
let result = factorial(5);
printOut("Factorial of 5 is: " + result);

printOut(newLine);
