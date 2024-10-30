"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/
const answerNumber = 45;
let guessNumber = 0 
while(answerNumber !== guessNumber){
guessNumber = Math.ceil (Math.random() * 60); 
}
printOut("Guess Number =" + guessNumber.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/
guessNumber = 0
let guessCount= 
const startTime= Date.now();
while (answerNumber !== guessNumber){
    guessCount++;
    guessNumber = Math.ceil (Math.random()*1000000);
}
const endTime= Date.now();
const timeUsed= endTime-startTime;

printOut("Guess number= " +  guessNumber + "Number of guesses= " + guessCount.toString() + "time used to guess number= "+ timeUsed.toString()+"ms");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/
printOut("Dice Rolling Extravaganza");
const d1= Math.ceil(Math.random()*6);
const d2= Math.ceil(Math.random()*6);
const d3= Math.ceil(Math.random()*6);
const d4= Math.ceil(Math.random()*6);
const d5= Math.ceil(Math.random()*6);
const d6= Math.ceil(Math.random()*6);

let diceThrow= ""; 
diceThrow += d1.toString()+ ",";
diceThrow += d2.toString()+ ",";
diceThrow += d3.toString()+ ",";
diceThrow += d4.toString()+ ",";
diceThrow += d5.toString()+ ",";
diceThrow += d6.toString();
 
 printOut("diceThrow: " + diceThrow);

const count1= diceThrow.match(/1/g) || "".length; 
const count2= diceThrow.match(/2/g) || "".length; 
const count3= diceThrow.match(/3/g) || "".length; 
const count4= diceThrow.match(/4/g) || "".length; 
const count5= diceThrow.match(/5/g) || "".length; 
const count6= diceThrow.match(/6/g) || "".length; 

let diceCount= ""; 
diceCount += d1.toString()+ ",";
diceCount += d2.toString()+ ",";
diceCount += d3.toString()+ ",";
diceCount += d4.toString()+ ",";
diceCount += d5.toString()+ ",";
diceCount += d6.toString();
 printOut("DiceCount: "+ diceCount);

const equals1 = (diceCount.match(/1/g)||"").length
const equals6 = (diceCount.match(/6/g)||"").length
printOut("Equals1"+ equals1.toString());
printOut("equals6" + equals6.toString()); 

if(equals1===6){
    printOut("Full straight")
} else if (equals6===1){
    printOut("Yatzy!!");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
