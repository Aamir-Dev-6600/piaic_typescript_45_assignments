/**
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
 * • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
 * • Add one new guest to the beginning of your array.
 * • Add one new guest to the middle of your array. 
 * • Use append() to add one new guest to the end of your list. 
 * • Print a new set of invitation messages, one for each person in your list.
 */

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


console.log('We have a bigger table now'); 
guests.unshift('Sohail'); 
guests.splice(Math.floor(guests.length / 2), 0, 'Salman'); 
guests.push('Sahal'); 

console.log('\n'); 
guests.forEach(guest => console.log(`Hey ${guest}! You're invited to dinner this sunday`));

export {}; 
