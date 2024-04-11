/**
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
 * The function should have one parameter that collects as many items as the function call provides, 
 * and it should print a summary of the sandwich that is being ordered. 
 * 
 * Call the function three times, using a different number of arguments each time.
 */

const burgerSpecials = (burger : string, ...specials : string[]) : void => {
    console.log(`\n`);
    if (!specials.length) {
        console.log(`No specials ordered for the ${burger} burger.`);
        return; 
    }

    console.log(`Here is the list of specials for ${burger} burger: `);
    specials.forEach(item => console.log(`\t -> ${item}`)); 
    console.log(`\n`);
}

burgerSpecials('Cheesy', 'Mozzarella Cheese', 'Flavored Cheese', 'Goat Cheese'); 
burgerSpecials('Beaf-loaded', 'Brisket', 'Corn-Fed'); 
burgerSpecials('Fat-less', 'Lettus'); 
burgerSpecials('Plain'); 

export {}
