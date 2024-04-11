/**
 * Unchanged Magicians: Start with your work from Exercise 40. 
 * Call the function make_great() with a copy of the array of magicians’ names. 
 * Because the original array will be unchanged, return the new array and store it in a separate array. 
 * Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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

// called with a deep copy of magicians array
const great_magicians = make_great([...magicians]);

// since it was a copy on previous line, orignal array is not passed by reference, so it's unchanged
show_magicians(magicians);

// obviously this is the changed array 
show_magicians(great_magicians); 

export { };

