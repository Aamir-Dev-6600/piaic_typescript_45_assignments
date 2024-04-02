// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner

const guests : string[] = [
    'Aamir', 
    'Kashif', 
    'Jidran'
];

// invite to dinner message 
guests.forEach(guest => console.log(`Hey ${guest}! You're invited to dinner this sunday`));

console.log(`\n\n We have reserved a table for ${guests.length + 1}. I can invite ${guests.length} guests, so we will be ${guests.length + 1} together`); 
export {}; 