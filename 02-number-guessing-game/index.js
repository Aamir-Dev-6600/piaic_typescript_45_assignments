#!/usr/bin/env node
import inquirer from "inquirer";
// Computer guesses a number
// User selects number of iterations
// User provides number until the end is reached or the number is guessed.
const numGenerated = Math.floor(Math.random() * 100);
const maxChances = 8;
console.log("\n\n\t\t**** Welcome To Guess The Number *****\n\n");
console.log("I have a number between 01-100 (Inclusive). Can you guess? Let's paly!");
console.log(`Fun Part: You can decide the level of difficulty by choosing the number \nof choices you have, default number of chances are ${maxChances}.\n\n`);
const inputIterations = await inquirer.prompt([
    {
        message: `How many chances would you like to have? (no more than ${maxChances}): `,
        type: "number",
        name: "iterations",
    },
]);
let iterations = !Number.isNaN(inputIterations.iterations)
    ? inputIterations.iterations
    : maxChances;
console.log(`\nYou have ${iterations} chances to make the guess. Let's have FUN!\n\n`);
console.log("If you want to QUIT the game, type 'Q' or 'q'");
let counter = 1;
while (counter <= iterations) {
    const inputGuessed = await inquirer.prompt([
        {
            message: `What's Your Guess? (Chance ${counter}/${iterations}): `,
            type: "number",
            name: "user_number",
        },
    ]);
    const guessed = inputGuessed.user_number;
    if (Number.isNaN(guessed) || guessed < 1 || guessed > 100) {
        console.log(`Rejected Input! Please always input a number in range 01-100 (Both Inclusive).\n`);
        continue;
    }
    else if (guessed === numGenerated) {
        console.log(`Congratulations! You guessed correctly in ${counter} chances.\n`);
        break;
    }
    else {
        const message = counter == iterations ? `You Lost! Let's play again` : guessed > numGenerated ? `Unhn! That's higher than my number` : `Unhn! That's less than my number`;
        console.log(`${message}\n`);
        counter++;
    }
}
if (counter > iterations) {
    console.log();
}
