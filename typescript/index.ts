import { BankAccount } from "./encapsulation/index";

const bankAccount = new BankAccount(2500);
bankAccount.deposit(500);
bankAccount.withdraw(200);
console.log("Current balance: ", bankAccount.balance);
