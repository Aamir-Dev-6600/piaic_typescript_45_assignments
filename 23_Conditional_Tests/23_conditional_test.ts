/**
 * Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

 * let car = 'subaru';
 * console.log("Is car == 'subaru'? I predict True.")
 * console.log(car == 'subaru')
 * • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 * • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

// wrong values list to read from later based on index
const wrongValues: [string, string, boolean, boolean, string] = ['Nitro 54', 'Oppo', true, true, 'Hd'];
const mobile: { model: string, brand: string, fast_charging: boolean, notch_display: boolean, screen: string } = {
    model: 'Galaxy A7 2018',
    brand: 'Samsung',
    fast_charging: false,
    notch_display: false,
    screen: "Full Hd"
};


// iterate over the object entries [(key, value), (key, value), /* rest of key values **/]
// every time print the prompt with key and the value and compare value with value at key 
Object.entries(mobile).forEach(([key, value]) => {
    console.log(`Is ${key} == '${value}' ? I predict Ture.`);
    console.log(mobile[key] == value);
});

console.log('\n\n');

// iterate over the object entries [(key, value), (key, value), /* rest of key values **/]
// every time, print the prompt with key value and compare the value at key with wrongValues
Object.entries(mobile).forEach(([key, value], index) => {
    console.log(`Is ${key} == '${wrongValues[index]}' ? I predict False.`);
    console.log(mobile[key] == wrongValues[index]);
}); 
