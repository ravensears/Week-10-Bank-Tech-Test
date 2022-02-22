class Bank {
    constructor(date = new Date("February 22, 2022"), deposit = 0, withdraw = 0, balance = 0) {
        this.date = date,
        this.deposit = deposit,
        this.withdraw = withdraw, 
        this.balance = balance
    }

    statement() {
        return "date || credit || debit || balance " + this.date + " || " + this.deposit + " || " + this.withdraw + " || " + this.balance; 
    } 

    transactionDate() {
        return this.date;
    }

    showBalance() {
        return this.balance;
    }

    fundsDeposit(money) {
        this.balance += money;
    }

    fundsWithdraw(money) {
        this.balance -= money;
    }

}
module.exports = Bank;