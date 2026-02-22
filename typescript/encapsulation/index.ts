// Encapsulation
// Balance (hidden / encapsulated)
// You can't access directly the bank.balance and set to 100

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter to get the balance of the bank account
  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount.");
      return;
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid withdraw amount.");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }
}

export { BankAccount };
