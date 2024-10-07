"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* 2 + 3 * 2 - 4 * 6*/
const answer_part1= 2+3*(2-4)*6 
printOut("svaret er"+ answer_part1)


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer*/
/* (25.4/1000) *25.34*/
const mm_inch= 25.4
const answer = (25.34 * 1000) / mm_inch;  
const answerExact = answer.toFixed(2);
printOut("answerExact=" + answerExact.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives*/
const SecInMinute = 60;
const MinuteInHour = 60;
const HourInDay = 24;
const part_2Answer= 
(3* HourInDay * MinuteInHour) + 
(12* MinuteInHour) +
14 +
(45/SecInMinute);

printOut("answer="+part_2Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives*/
const numberOfMinutes=6322.52;
let part_4_Calc = numberOfMinutes/(60*24);
const part4_days= Math.floor(part_4_Calc); /* Math.floor runder tallet slik at vi ikke får med desimaler, primitives betyr at det ikke er desimaler tror jeg*/ 
printOut("Days="+ part4_days );

part_4_Calc= part_4_Calc-part4_days;
part_4_Calc= part_4_Calc*HourInDay;
const part_4_Hours= Math.floor(part_4_Calc);
printOut("Hours="+ part_4_Hours)  

part_4_Calc=part_4_Calc-part_4_Hours;
part_4_Calc= part_4_Calc*MinuteInHour; 
const part_4_Minutes= Math.floor(part_4_Calc) 

printOut("Minutes=" + part_4_Minutes)

part_4_Calc=part_4_Calc-part_4_Minutes;
part_4_Calc=part_4_Calc*SecInMinute;
const part_4_secounds= Math.floor(part_4_Calc);

printOut("Secounds=" + part_4_secounds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars"*/
const NOK= 76/8.6;
const USD = 8.6/76; 
let amountUSD= 54;

const amountNOK= Math.round(amountUSD*NOK);

printOut(amountUSD+"dollars is"+amountNOK+"kroner");
printOut(amountNOK+"Nok is"+ amountUSD+"Usd");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text*/
let text = "there is much between heaven and earth that we do not understand"
let length = text.length;
printOut("there is "+ length + " characters in the sentence");
let char = text.charAt(19);
printOut("the character in position 19 is the letter "+char)
const sub= text.substring(35,44);
printOut("the characters from letter 35 to 44 is "+sub)
const earth_word= text.indexOf("earth");
printOut(earth_word.toString())

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*
Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?*/
printOut("Is 5 bigger than 3?")
if (5 > 3){
    printOut("True!");
} else {
    printOut("false")
}
printOut("is 7 greater than or equal to 7?")
if (7>=7){
    printOut("7 has the same value as 7: True!")
}

if ("a">"b"){
    printOut(" True!")
}else{
    printOut("False!")
}
printOut("is 1 less than a?")
if (1>"a"){
    printOut("True!")
}else{
    printOut("False!")
}
printOut("is 2500 less than abcd?")

if(2500<"abcd"){
    printOut("True!")
}else{
    printOut("False!")
}
printOut("arne is not equal to thomas")
if ("arne"<"thomas"){
    printOut("True!")
}else{
    printOut("False!")
}
printOut("2 equals 5, is this statement true? ")
if (2===5){
    printOut("true!")
}else{
    printOut("False!")
}
printOut("abcd is greater than bcd, is this statement false?")
if ("abcd">"bcd"){
    printOut("True!")
}else{
    printOut("False!")
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number*/
const num1 = Number("254");
const num2 = parseFloat("57.23");
const num3 = parseInt("25 kroner");
printOut(num1.toString());
printOut(num2.toString());
printOut(num3.toString());
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)*/
let r= Math.floor(Math.random()*360)+1;
printOut("Random nummber = "+ r.toString());
printOut(r.toString())
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Use modulus (%) to calculate how many weeks and days are in 131 days*/
let totaldays= 131
let weeks= Math.floor(totaldays/7)
let days= totaldays%7
printOut(weeks + "Weeks and" +  days  + "days") 
printOut("Replace this with you answer!");
printOut(newLine);