"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType= {
    NORMAL: "Brukskonto",
    SAVING: "Sparekonto",
    CREDIT: "Kredittkonto",
    PENSION: "Pensionskonto",
}
const CurrencyTypes = {
    

     NOK:("Norske kroner", 1.0000, "kr"),
     EUR:("Europeiske euro", 0.8985, "€"),
     USD:("United States dollar", 0.1891, "$"),
     GBP:("Pound sterling", 0.8847, "£"),
     INR:("Indiske rupee", 7.8309, "₹"),
     AUD:("Australienske dollar", 0.1581, "A$"),
     PHP:("Filippinske peso", 6.5189, "₱"),
     SEK:("Svenske kroner", 1.0580, "kr"),
     CAD:("Canadiske dollar", 0.1435, "C$"),
     THB:("Thai baht", 3.3289, "฿"),
    
}

class TAccount{
    #type;
    #balance; 
    #withdrawCount
    #currencyType
    constructor(aType){
        this.#type = aType;
        this.#balance = 0
        this.#withdrawCount = 0
        this.#currencyType = "NOK"
        const convertCurrency = (amount, fromCurrency, toCurrency) => {
            const fromRate = CurrencyTypes[fromCurrency][1];
            const toRate = CurrencyTypes[toCurrency][1];
            return amount * fromRate / toRate;
        };
       
    }
   
    toString(){
        return this.#type
    }
 
  setType(aType){
    let text = "Account is changed from Brukskonto to Sparekonto"
    this.#type = aType;
    this.#withdrawCount = 0
    text += " to " + this.#type;
    printOut(text) 
 }

 getBalance(){
    return this.#balance;

 }
deposit(aAmount){
    this.#balance += aAmount;
    let currencySymbol = CurrencyTypes.NOK
    printOut("Deposit of " + aAmount + currencySymbol + " , new balance is " + this.#balance + currencySymbol);

}
 withdraw(aAmount) {
   let canWithdraw = true;
   let text = "";
    switch(this.#type){
        case AccountType.SAVING:
    if(this.#withdrawCount <=3 ){
        this.#withdrawCount++;
        canWithdraw = true;
     } else {
canWithdraw = false;
text = "cannot withdraw more than 3 times from a " + AccountType.SAVING + " account "
}
break; 
case AccountType.PENSION:
canWithdraw = false;
text = "Cannot withdraw from a " + this.#type + " account ";
break; 
}
    if (canWithdraw){
        this.#balance -= aAmount;
        printOut(" Withdraw of " + aAmount + ", new balance is " + this.#balance);
        } else {
    printOut(text)
    }
  }
  setCurrencyType(aType) {
    const convertCurrency = (amount, fromCurrency, toCurrency) => {
      const fromRate = CurrencyTypes[fromCurrency][1];
      const toRate = CurrencyTypes[toCurrency][1];
      return amount * fromRate / toRate;
    };
    
  

}
  }
 


printOut("--- Part 1 -------------------------------O____O------------------------------------------------------------");
/* Put your code below here!*/

printOut(Object.values(AccountType).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let myAccount = new TAccount(AccountType.NORMAL); 
printOut("myAccount:" + myAccount.toString());
myAccount.setType(AccountType.SAVING);
printOut("myAccount: "+ myAccount.toString())
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
  myAccount.deposit(100);
  myAccount.withdraw(25);
  printOut("My account balance is " + myAccount.getBalance())
  
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25)
myAccount.withdraw(30)
myAccount.withdraw(30)
myAccount.withdraw(30)
myAccount.withdraw(30)
myAccount.setType(AccountType.PENSION)
myAccount.withdraw(10)
myAccount.setType(AccountType.SAVING)
myAccount.withdraw(10)


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType("EUR")
myAccount.deposit(150)

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType("EUR")

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
