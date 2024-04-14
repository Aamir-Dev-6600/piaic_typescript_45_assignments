"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
Object.defineProperty(exports, "__esModule", { value: true });
var guests = [
    'Aamir',
    'Kashif',
    'Jidran'
];
// invite to dinner message 
guests.forEach(function (guest) { return console.log("Hey ".concat(guest, "! You're invited to dinner this sunday")); });
console.log("\n\n We have reserved a table for ".concat(guests.length + 1, ". I can invite ").concat(guests.length, " guests, so we will be ").concat(guests.length + 1, " together"));
