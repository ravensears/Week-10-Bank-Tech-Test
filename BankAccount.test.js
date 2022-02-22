const Bank = require('./BankAccount');

const bank = new Bank();

describe('Bank Account', () => {
    it('prints statement', () => {
        expect(bank.statement()).toEqual(0);
    });

    it('prints balance', () => {
        expect(bank.showBalance()).toEqual(0);
    });

    it('adds deposit to balance', () => {
        bank.fundsDeposit(3);
        expect(bank.showBalance()).toEqual(3);
    });

    it('withdraws money from balance', () => {
        bank.fundsDeposit(10);
        bank.fundsWithdraw(10);
        expect(bank.showBalance()).toEqual(3);
    });
});