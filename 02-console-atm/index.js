#! usr/bin/env node
import inquirer from "inquirer";
const account = { pin_code: 5901, attempts: 5, balance: 80500 };
const operationsList = ["Balance Inquiry", "Cash Withdrawl", "Fast Cash"];
const fastCashOptions = ["$50", "$100", "$500", "$1000"];
const helperShwoBalance = () => {
    console.log(`You Remaining Account Balance is: $${account.balance}`);
};
const helperWithdrawAmount = (amount) => {
    if (account.balance < amount) {
        console.log(`Insufficient Funds! You can't withdraw more than what you have`);
        return;
    }
    account.balance = account.balance - amount;
    console.log(`\t\t***Thank You For Banking With Us!***`);
    console.log(`Please collect your cash of $${amount}, be safe if you're in Karachi.`);
    helperShwoBalance();
};
const helperLoginAuthorizer = (pin) => {
    if (!(account.pin_code === pin)) {
        account.attempts--;
        const message = account.attempts === 0 ? `Your Card has been Blocked! Please Contact The Relevant Officer at Your Branch.` : `Invalid Pin Code: Please try again you have ${account.attempts} attempts left.`;
        console.log(message);
        return false;
    }
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
            console.log('Invalid Fast-Cash Option: Aborted.');
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
                } while (Number.isNaN(inputObject.amount) || inputObject.amount === 0);
                helperWithdrawAmount(inputObject.amount);
                break;
            case operationsList[2]:
                inputObject = await inquirer.prompt([{ name: "option", type: "list", message: "Please Select Your Desired Fast-Cash Operation: ", choices: fastCashOptions }]);
                helperFastCashOperation(inputObject.option);
                break;
            default:
                console.log('Invalid Operation! Process Aborted');
        }
    }
};
do {
    await initiateTransaction();
    inputObject = await inquirer.prompt([{ name: "another_transaction", type: "list", message: "Would You Like To Make Another Transaction: ", choices: ["Yes", "No"] }]);
} while (inputObject?.another_transaction === 'Yes');