import inquirer from "inquirer";
let allGood = true;
const inputs = await inquirer.prompt([
    { message: "First Number: ", type: "number", name: "first_number" },
    { message: "Second Number: ", type: "number", name: "second_number" },
    { message: "Please Select the operation: ", type: "list", name: "operation", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
Object.entries(inputs).forEach(([name, value]) => {
    if (['first_number', 'second_number'].includes(name) && Number.isNaN(value)) {
        allGood = false;
    }
});
console.log('\n\n\n');
if (!allGood) {
    console.log("Can't proceed further. please provide valid numbers in both number prompts");
}
else {
    const [first_number, second_number, operation] = [inputs.first_number, inputs.second_number, inputs.operation];
    switch (operation) {
        case 'Addition':
            console.log(`(${first_number}) + (${second_number}) = ${first_number + second_number}`);
            break;
        case 'Subtraction':
            console.log(`(${first_number}) - (${second_number}) = ${first_number - second_number}`);
            break;
        case 'Multiplication':
            console.log(`(${first_number}) * (${second_number}) = ${first_number * second_number}`);
            break;
        case 'Division':
            if (!second_number) {
                console.log("Can't divide a number by 0");
                break;
            }
            console.log(`(${first_number}) / (${second_number}) = ${first_number / second_number}`);
            break;
        default:
            console.log(`Invalid Operation. Aborted ....`);
    }
}
