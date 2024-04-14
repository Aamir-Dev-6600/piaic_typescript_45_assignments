"use strict";
/**
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 *
 * • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 * • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 * • Print a message to each of the two people still on your list, letting them know they’re still invited.
 * • Remove the last two names from your list, so you have an empty list.
 *
 * Print your list to make sure you actually have an empty list at the end of your program.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var guests = [
    'Aamir',
    'Kashif',
    'Jidran'
];
// invite to dinner message 
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, "! You're invited to dinner this sunday")); });
// replace the person who can't make it 
console.log('\n');
guests.splice(0, 1, 'Waqar');
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, "! You're invited to dinner this sunday")); });
console.log('We have a bigger table now');
guests.unshift('Sohail');
guests.splice(Math.floor(guests.length / 2), 0, 'Salman');
guests.push('Sahal');
console.log('\n');
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, "! You're invited to dinner this sunday")); });
console.log('\nWe can only invite two persons to the dinner.');
while (guests.length > 2) {
    console.log("Sorry ".concat(guests.pop(), ", change of plans. Let us send you another invitation soon, the dinner for sunday is cancelled."));
}
console.log('\nTwo persons left, sending invitation to them: ');
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, "! You're invited to dinner this sunday")); });
guests.splice(0, guests.length);
console.log("No elements on the list - List length: ".concat(guests.length));
