/**
 * Great Magicians: Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 * Call show_magicians() to see that the list has actually been modified.
 */

const make_great = (magicians: string[]) : string[] => {
    for (let index in magicians){
        magicians[index] = `The Great Magician: ${magicians[index]}`; 
    }

    return magicians; 
}

const show_magicians = (magicians: string[]): void => {    
    console.log('Here is the list of magicians: ');
    console.log(`[${magicians.join(', ')}]`);
}

let magicians: string[] = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];

make_great(magicians);
show_magicians(magicians);

export { };

