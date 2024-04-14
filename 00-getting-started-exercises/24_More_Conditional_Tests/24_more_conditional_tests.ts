/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 * • Tests using "and" and "or" operators
 * • Test whether an item is in a array
 * • Test whether an item is not in a array
 */

const str1: string = 'It is str1'; 
console.log('String Comparisions: ')
console.log(`str1 == 'It is str1' (Prediction: True): ${str1 == 'It is str1'}`)
console.log(`str1 == 'It is str2' (Prediction: False): ${str1 == 'It is str2'}`)
console.log(`str1 lowercase is equal to 'it is str1' (Prediction: True): ${str1.toLowerCase() == 'it is str1'}`); 
console.log(`str1 lowercase is equal to 'It Is str1' (Prediction: False): ${str1.toLowerCase() == 'It Is str1'}`); 
console.log('\n');


const num1: number = 4; 
console.log('Number Comparisions: ')
console.log(`num1 == 4 (Prediction: True): ${num1 == 4}`); 
console.log(`num1 != 4 (Prediction: False): ${num1 != 4}`);
console.log(`num1 > 3 (Prediction: True): ${num1 > 3}`);
console.log(`num1 > 5 (Prediction: False): ${num1 > 5}`);
console.log(`num1 < 5 (Prediction: True): ${num1 < 5}`);
console.log(`num1 < 3 (Prediction: False): ${num1 < 3}`); 
console.log(`num1 >= 4 (Prediction: True): ${num1 >= 4}`); 
console.log(`num1 <= 1 (Prediction: False): ${num1 <= 1}`); 
console.log('\n');


const bool1 : boolean = true; 
const bool2 : boolean = false;
console.log('Boolean Comparisions: ')
console.log(`bool1 && bool2 (Prediction: False): ${bool1 && bool2}`); 
console.log(`bool1 && not bool2 (Prediction: True): ${bool1 && !bool2}`);
console.log(`bool1 || bool2 (Prediction: True): ${bool1 || bool2}`); 
console.log(`not bool1 || bool2 (Prediction: False): ${!bool1 || bool2}`); 
console.log('\n');


const thisIsArray : string[] = ['one', 'two', 'three'];
console.log('In array, not in array:'); 
console.log(`'three' is in array (Prediction: True): ${thisIsArray.includes('three')}`);
console.log(`'one' is not in array (Prediction: False): ${!thisIsArray.includes('one')}`);
console.log(`'six' is not in array (Prediction: True): ${!thisIsArray.includes('six')}`);
console.log(`'two' is not in array (Prediction: False): ${!thisIsArray.includes('two')}`);






