/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 * • Make a array of your three favorite fruits and call it favorite_fruits.
 * • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

const favorite_fruits : string[] = ['Khataki', 'Eindwana', 'Strawbri'];

if (favorite_fruits.includes('bananas')) {
    console.log('Print - Bananas to console'); 
}

if (favorite_fruits.includes('Eindwana')) {
    console.log('Print - Eindwana to console'); 
}

if (favorite_fruits.includes('Strawbri')) {
    console.log('Print - Strawbri to console'); 
}

if (favorite_fruits.includes('Khataki')) {
    console.log('Print - Khataki to console'); 
}

if (favorite_fruits.includes('apple')) {
    console.log('Print - apple to console'); 
}

