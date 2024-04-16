#!/usr/bin/env node

import inquirer from "inquirer";

const account: { pin_code: number, balance: number, attempts: number } = { pin_code: 5901, attempts: 5, balance: 80500 }
const operationsList = ["Balance Inquiry", "Cash Withdrawl", "Fast Cash"];
const fastCashOptions = ["$50", "$100", "$500", "$1000"];

const helperShwoBalance = (isRemaining?: boolean): void => {
    const message = isRemaining ? `Your Remaining Account Balance is: ${account.balance}\n\n` : `\n\n\t\t*** Your Account Balance is: ${account.balance} ***\n\n`;
    console.log(message);
}

const helperWithdrawAmount = (amount: number): void => {
    if (account.balance < amount) {
        console.log(`\n\n\t\t*** Insufficient Funds! You can't withdraw more than what you have. *** \n\n`);
        return;
    }

    account.balance = account.balance - amount;
    console.log(`\n\n\t\t***Thank You For Banking With Us!***`);
    console.log(`Please collect your cash of $${amount}, be safe if you're in Karachi.`);
    helperShwoBalance(true);
}

const helperLoginAuthorizer = (pin: number): boolean => {
    if (!(account.pin_code === pin)) {
        account.attempts--;
        const message = account.attempts === 0 ? `Your Card has been Blocked! Please Contact The Relevant Officer at Your Branch.` : `Invalid Pin Code: Please try again you have ${account.attempts} attempts left.`;
        console.log(`\n\n\t\t***${message}***\n\n`);

        return false;
    }

    console.log(`\n\t\t*** You're Logged In, What Operation Would You Proceed To Next ***\n\n`);

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
            console.log('\n\n***Invalid Fast-Cash Option: Aborted.***\n\n');
    }
}


let isAuthorized: boolean = false;
let inputObject: { [key: string]: any };

const initiateTransaction = async () => {
    // break the loop if attempts are exhausted or the user is authenticated
    while (!isAuthorized) {
        if (account.attempts === 0) break;
        const inputObject = await inquirer.prompt([{ name: "pin_code", type: "number", message: "Please Enter Your 4 Digit Pin Code: " }]);
        isAuthorized = helperLoginAuthorizer(inputObject.pin_code);
    }

    if (isAuthorized) {
        inputObject = await inquirer.prompt([{ name: "operation", type: "list", message: "Please Select Your Desired Operation Below:", choices: operationsList }]);
        switch (inputObject.operation) {
            case operationsList[0]:
                helperShwoBalance();
                break;

            case operationsList[1]:
                do {
                    inputObject = await inquirer.prompt([{ name: "amount", type: "number", message: "Please Enter The Amount: " }]);
                } while (Number.isNaN(inputObject.amount) || inputObject.amount === 0)

                helperWithdrawAmount(inputObject.amount);
                break;

            case operationsList[2]:
                inputObject = await inquirer.prompt([{ name: "option", type: "list", message: "Please Select Your Desired Fast-Cash Operation: ", choices: fastCashOptions }]);
                helperFastCashOperation(inputObject.option);

                break;
            default:
                console.log('\n\n***Invalid Operation! Process Aborted***\n\n');
        }
    }
}


do {
    console.log('\n\t\t*** WELCOME TO CONSOLE ATM BY AAMIR ***');
    console.log('Please Follow the On-Screen Instructions, and Provide the Expected Inputs\n\n');

    await initiateTransaction();
    if (isAuthorized) {
        inputObject = await inquirer.prompt([{ name: "another_transaction", type: "list", message: "Would You Like To Make Another Transaction: ", choices: ["Yes", "No"] }]);
    }
    else {
        inputObject = { another_transaction: 'No' }
    }
} while (inputObject?.another_transaction === 'Yes'); 
