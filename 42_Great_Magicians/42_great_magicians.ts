/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 * Call show_magicians() to see that the list has actually been modified.
 */

const show_magicians = (magicians: string[]): void => {
    magicians = magicians.map(magician => `The Great ${magician}`); 
    
    console.log('Here is the list of magicians: ');
    console.log(`[${magicians.join(', ')}]`);
}

const magicians: string[] = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];

show_magicians(magicians);

export { };

