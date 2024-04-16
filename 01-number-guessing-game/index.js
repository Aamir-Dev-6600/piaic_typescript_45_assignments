#!/usr/bin/env node
import inquirer from "inquirer";
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
// choose default number of iterations if the user ignores to provide the iteration count
let iterations = !Number.isNaN(inputIterations.iterations)
    ? inputIterations.iterations
    : maxChances;
console.log(`\nYou have ${iterations} chances to make the guess. Let's have FUN!`);
console.log("If you want to QUIT the game, input 0 in the guess\n\n");
// iterate until all the chances are exhausted
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
    // quit if the user wants to quit
    if (guessed === 0) {
        console.log(`Wait! What, C'mon. You still had ${iterations - counter} chances.`);
        break;
    }
    // if guessed is NaN or outside the expected range, do not wate the chance
    else if (Number.isNaN(guessed) || guessed < 1 || guessed > 100) {
        console.log(`Rejected Input! Please always input a number in range 01-100 (Both Inclusive).\n`);
        continue;
    }
    // break the loop, no more guesses when guessed correctly
    else if (guessed === numGenerated) {
        console.log(`Congratulations! You guessed correctly in ${counter} chances.\n`);
        break;
        // in all other cases, provide heptic feedback to help the guess better in next chance, or 
    }
    else {
        const message = counter == iterations ? `Gosh!!! You Lost. Want to play again?` : guessed > numGenerated ? `Unhn! That's higher than my number` : `Unhn! That's less than my number`;
        console.log(`${message}\n`);
        counter++;
    }
}
