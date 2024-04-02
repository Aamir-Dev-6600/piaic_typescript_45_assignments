// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const junk: string[] = [
    'Intentional',
    'Error',
    'Recieved',
    'Program',
    'Fix before closing'
]

console.log(`Ok! I can access element at index: 1 -- ${junk[1]}`);
console.log(`That will be actually the second element, 0-indexed`);
console.log(`But I can't access the 10th element, it doesn't exist`);
console.log(`If I do, it will not be error, but the value is undefined`);
console.log(junk[9]);

// let's prevent this. 
const indexToRead: number = 3;

// this is just a smart if-else 
indexToRead >= junk.length ?
    console.log(`Index Error: Can't read ${indexToRead} from list of length ${junk.length}`) :
    console.log(`Value at ${indexToRead} : ${junk[indexToRead]}`);
