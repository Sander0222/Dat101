"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 6;
if (wakeUpTime===7) {
  printOut("I can take the bus to school.")
}else if(wakeUpTime===8) {


  printOut ("I can take the train to school") 
}else if (wakeUpTime===6){
  printOut("I have to take the car to school")
}
  

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number= 6 
if (number <6){
  printOut("positive")
} else if (number>6){
  printOut("False")
} else {
  printOut("zero")
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imagesize= Math.floor(Math.random()*8)+1;
printOut("image size"+ imagesize +"MP");
const minimumsize=4
if (imagesize>minimumsize){
  printOut("Tank you!")
}else {
  printOut("image to small  :(");
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("image size"+ imagesize +"MP");

const maximagesize=6
if (imagesize>=minimumsize && imagesize<=maximagesize){
  printOut("Tank you!")
}else if(imagesize>maximagesize){
  printOut("image to big  :(");
}else if (imagesize<minimumsizephoto){
  printOut("Image to small :(")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
  const monthindex= Math.floor(Math.random() * noOfMonth);
  const monthname= monthList[monthindex]
  const days= daysInMonth[monthindex]
  printOut("Selected month" +monthname);
  if (monthname.toLowerCase().includes("r")){
    printOut("You need vitamin D")

  } else
  printOut("You dont need vitamin D")
  printOut("There are"+days+ "days in"+ monthname)
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthname==="March"|| monthname==="Mai"){
  printOut("the gallery is closed")
}else if (monthname==="April"){
  printOut("Gallery is temporarily open in a nearby bulding")
}else {
  printOut("Gallery is open")
}

printOut(newLine);
