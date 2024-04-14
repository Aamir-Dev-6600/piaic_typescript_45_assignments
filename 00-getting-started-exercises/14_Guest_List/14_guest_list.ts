// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guests : string[] = [
    'Aamir', 
    'Kashif', 
    'Jidran'
];

// invite to dinner message 
guests.forEach(guest => console.log(`Hey ${guest}! You're invited to dinner this sunday`));

export {}; 