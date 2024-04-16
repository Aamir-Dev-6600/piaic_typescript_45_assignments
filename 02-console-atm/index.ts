#! usr/bin/env node

import inquirer from "inquirer";

const account: { pin_code: number, balance: number, attempts: number } = { pin_code: 5901, attempts: 5, balance: 80500 }
const operationsList = ["Balance Inquiry", "Cash Withdrawl", "Fast Cash"];
const fastCashOptions = ["$50", "$100", "$500", "$1000"];

const helperShwoBalance = (): void => {
    console.log(`You Remaining Account Balance is: $${account.balance}`);
}

const helperWithdrawAmount = (amount: number): void => {
    if (account.balance < amount) {
        console.log(`Insufficient Funds! You can't withdraw more than what you have`);
        return;
    }

    account.balance = account.balance - amount;
    console.log(`\t\t***Thank You For Banking With Us!***`);
    console.log(`Please collect your cash of $${amount}, be safe if you're in Karachi.`);
    helperShwoBalance();
}

const helperLoginAuthorizer = (pin: number): boolean => {
    if (!(account.pin_code === pin)) {
        account.attempts--;
        const message = account.attempts === 0 ? `Your Card has been Blocked! Please Contact The Relevant Officer at Your Branch.` : `Invalid Pin Code: Please try again you have ${account.attempts} attempts left.`;
        console.log(message);

        return false;
    }

    return true;
}

const helperFastCashOperation = (operation: string) => {
    let amount: number;

    switch (operation) {
        case fastCashOptions[0]:
            amount = parseInt(operation.substring(1));
            helperWithdrawAmount(amount);
            break;
        case fastCashOptions[1]:
            amount = parseInt(operation.substring(1));
            helperWithdrawAmount(amount);
            break;
        case fastCashOptions[2]:
            amount = parseInt(operation.substring(1));
            helperWithdrawAmount(amount);
            break;
        case fastCashOptions[3]:
            amount = parseInt(operation.substring(1));
            helperWithdrawAmount(amount);
            break;
        default:
            console.log('Invalid Fast-Cash Option: Aborted.');
    }
}

