/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */

const show_magicians = (magicians: string[]): void => {
    console.log('Here is the list of magicians: ');
    console.log(`[${magicians.join(', ')}]`);
}

const magicians: string[] = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];

show_magicians(magicians);

export { };

