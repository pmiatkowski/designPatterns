/**
 * https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/
 */
const MoneyStack = function(billSize: number): void {
    this.billSize = billSize;
    this.next = null;
}

MoneyStack.prototype = {
    setNextStack: function(stack) {
        this.next = stack;
    },
    withdraw: function(amount: number): void {
        const numberOfBills = Math.floor(amount / this.billSize);

        if(numberOfBills > 0) {
            this._ejectMoney(numberOfBills);
            amount = amount - (this.billSize * numberOfBills);
        }

        amount > 0 && this.next && this.next.withdraw(amount);
    },
    _ejectMoney: function(numberOfBills: number) {
        console.log(`Example: ${numberOfBills} ${this.billSize} bills have been spit out`)
    }
}

/** Implementation */
const ATM = function(): void {
    this.moneyStacks = null;

    /** Create available money stacks */
    const stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    /** Create hierarchy - top wins */
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    this.moneyStacks = stack100;
}

ATM.prototype.withdrawMoney = function(amount: number): void {
    this.moenyStacks.withdraw(amount);
}

/** Usage */
const atm = new ATM();
atm.withdrawMoney(186);
/* outputs:
    1 $100 bills have been spit out
    1 $50 bills have been spit out
    1 $20 bills have been spit out
    1 $10 bills have been spit out
    1 $5 bills have been spit out
    1 $1 bills have been spit out
*/
atm.withdraw(72);
/* outputs:
    1 $50 bills have been spit out
    1 $20 bills have been spit out
    2 $1 bills have been spit out
*/