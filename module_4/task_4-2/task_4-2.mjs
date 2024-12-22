"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

// Const empty=[],(En tom tabell) const primes = [2, 3, 5, 7, 11],(En tabell som viser 5 numeriske elementer) const misc = [1.1, true, "a"] (EN tabell med 3 forskjellige elementer )
printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const arrayPart1 = Array.from({ length: 20 }, (_, i) => i + 1);

arrayPart1.forEach((num) => printOut(num.toString()));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(arrayPart1.join(" $ "));
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const textPart3 = "Hei på deg, det er salg på kebab";

const wordsArray = textPart3.split(" ");

wordsArray.forEach((word, index) => printOut("Word " + index + ": " + word));


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const names = ["Anne", "Inger", "Kari", "Kebab", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", 
    "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

    function removeElement(array, text) {
        const index = array.indexOf(text);
        printOut("Index of " + text + ": " + index);  
        if (index !== -1) {
            array.splice(index, 1);
            printOut(text + " was removed.");
        } else {
            printOut(text + " does not exist in the array.");
        }
    }
    

removeElement(names, "Kebab");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", 
    "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", 
   "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];


const Names = girlNames.concat(boyNames);


printOut(Names.toString());

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString() {
        return this.title + " by " + this.author + ", ISBN: " + this.isbn;
    }
}
const books = [
    new TBook("Book One", "Mathias", "123-456"),
    new TBook("Book Two", "Adrian", "234-567"),
    new TBook("Book Three", "Sander", "345-678")
];

books.forEach((book) => printOut(book.toString()));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keysArray = Object.keys(EWeekDays);
keysArray.forEach((key) => {
    const element = EWeekDays[key];
    printOut("Key: " + key + ", Value: " + element.value + ", Name: " + element.name);
});

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
const ascendingOrder = [...randomNumbers].sort((a, b) => a - b);
const descendingOrder = [...randomNumbers].sort((a, b) => b - a);

printOut("Ascending Order: " + ascendingOrder);
printOut("Descending Order: " + descendingOrder);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const frequencyMap = {};
randomNumbers.forEach(num => frequencyMap[num] = (frequencyMap[num] || 0) + 1);

const sortedByFrequency = Object.entries(frequencyMap)
    .map(([num, freq]) => ({ number: parseInt(num), frequency: freq }))
    .sort((a, b) => b.frequency - a.frequency || a.number - b.number);

sortedByFrequency.forEach(entry => 
    printOut("Frequency: " + entry.frequency + ", Number: " + entry.number)
);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const array = [];

for (let row = 0; row < 5; row++) {
    const currentRow = [];
    for (let col = 0; col < 9; col++) {
        currentRow.push("Row " + row + ", Col " + col);
    }
    array.push(currentRow);
}

for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
        printOut(array[row][col]);
    }
}

printOut(newLine);
