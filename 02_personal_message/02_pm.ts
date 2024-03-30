/**
 * Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
 */

// Solution 01 - I prefer this one, always like to code this way
const person : string = "Aamir"; 
console.log(`Hey ${person}! How long will it take you to complete all 45 assignments?`); 

// Solution 02 - naive and I hate concatinating strings in js with '+'
console.log('Hey ' + person + '! How long will it take you to complete all 45 assignments?'); 