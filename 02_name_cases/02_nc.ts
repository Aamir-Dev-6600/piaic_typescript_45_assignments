// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const person :string = "sAlMaN AhMEd"; 

console.log(`In Lowercase: ${person.toLowerCase()}`); 
console.log(`In Uppercase: ${person.toUpperCase()}`); 
// convert the name to array, then for each string in the array, convert the firt letter to upper case and rest to lower case. 
console.log(`In TItlecase: ${person.split(" ").map(word => `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`).join(' ')}`);