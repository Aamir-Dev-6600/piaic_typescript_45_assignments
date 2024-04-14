"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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
