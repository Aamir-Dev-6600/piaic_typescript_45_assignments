// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const guests : string[] = [
    'Aamir', 
    'Kashif', 
    'Jidran'
];

// invite to dinner message 
guests.forEach(guest => console.log(`Hey ${guest}! You're invited to dinner this sunday`));

// replace the person who can't make it 
console.log('\n'); 
guests.splice(0, 1, 'Waqar'); 
guests.forEach(guest => console.log(`Hey ${guest}! You're invited to dinner this sunday`));

export {}; 