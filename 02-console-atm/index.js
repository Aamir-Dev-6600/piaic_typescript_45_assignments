#! usr/bin/env node
import inquirer from "inquirer";
const account = { pin_code: 5901, attempts: 5, balance: 80500 };
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
let isAuthorized = false;
do {
    if (account.attempts === 0)
        break;
    const inputObject = await inquirer.prompt([{ name: "pin_code", type: "number", message: "Please Enter Your 4 Digit Pin Code: " }]);
    isAuthorized = helperLoginAuthorizer(inputObject.pin_code);
} while (!isAuthorized); // break the loop if attempts are exhausted or the user is authenticated
if (isAuthorized) {
    const inputObject = await inquirer.prompt([{ name: "operation", type: "list", message: "Please Select Your Desired Operation Below:", choices: ["Cash Withdrawl", "Balance Inquiry"] }]);
}
