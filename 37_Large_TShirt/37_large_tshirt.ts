/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
 * Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

const make_shirt = (size: string = 'L', text: string = 'I love TypesScript') => {
    console.log(`Size: ${size} should have "${text}" as print text.\n`);
}

make_shirt();
make_shirt('M');
make_shirt('S', 'Life is Fun');

export { }; 