#!/usr/bin/env node
import inquirer from "inquirer";
const account = { pin_code: 5901, attempts: 5, balance: 80500 };
const operationsList = ["Balance Inquiry", "Cash Withdrawl", "Fast Cash"];
const fastCashOptions = ["$50", "$100", "$500", "$1000"];
const helperShwoBalance = (isRemaining) => {
    const message = isRemaining ? `Your Remaining Account Balance is: $${account.balance}\n\n` : `\n\n\t\t*** Your Account Balance is: $${account.balance} ***\n\n`;
    console.log(message);
};
const helperWithdrawAmount = (amount) => {
    if (Number.isNaN(amount) || amount === 0) {
        console.log(`\n\n\t\t*** Invalid Amount! Please provide a valid numebr greater than 0. *** \n\n`);
        return;
    }
    if (account.balance < amount) {
        console.log(`\n\n\t\t*** Insufficient Funds! You can't withdraw more than what you have. *** \n\n`);
        return;
    }
    account.balance = account.balance - amount;
    console.log(`\n\n\t\t***Thank You For Banking With Us!***`);
    console.log(`Please collect your cash of $${amount}, be safe if you're in Karachi.`);
    helperShwoBalance(true);
};
const helperLoginAuthorizer = (pin) => {
    if (!(account.pin_code === pin)) {
        account.attempts--;
        const message = account.attempts === 0 ? `Your Card has been Blocked! Please Contact The Relevant Officer at Your Branch.` : `Invalid Pin Code: Please try again you have ${account.attempts} attempts left.`;
        console.log(`\n\n\t\t***${message}***\n\n`);
        return false;
    }
    console.log(`\n\t\t*** You're Logged In, What Operation Would You Proceed To Next ***\n\n`);
    return true;
};
const helperFastCashOperation = (operation) => {
    let amount;
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
};
let isAuthorized = false;
let inputObject;
const initiateTransaction = async () => {
    // break the loop if attempts are exhausted or the user is authenticated
    while (!isAuthorized) {
        if (account.attempts === 0)
            break;
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
                    helperWithdrawAmount(inputObject.amount);
                } while (Number.isNaN(inputObject.amount) || inputObject.amount === 0);
                break;
            case operationsList[2]:
                inputObject = await inquirer.prompt([{ name: "option", type: "list", message: "Please Select Your Desired Fast-Cash Operation: ", choices: fastCashOptions }]);
                helperFastCashOperation(inputObject.option);
                break;
            default:
                console.log('\n\n***Invalid Operation! Process Aborted***\n\n');
        }
    }
};
do {
    console.log('\n\t\t*** WELCOME TO CONSOLE ATM BY AAMIR ***');
    console.log('Please Follow the On-Screen Instructions, and Provide the Expected Inputs\n\n');
    await initiateTransaction();
    if (isAuthorized) {
        inputObject = await inquirer.prompt([{ name: "make_another_trnx", type: "confirm", message: "Would You Like To Make Another Transaction: " }]);
    }
    else {
        inputObject = { make_another_trnx: false };
    }
} while (inputObject?.make_another_trnx);
