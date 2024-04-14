"use strict";
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
var names = ['Waqar', 'Abdur Raziq', 'Jidran', 'Kashif'];
console.log('naive method:\n');
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log('\n');
// with forEach method
console.log('With foreach:\n');
names.forEach(function (name) {
    console.log(name);
});
console.log('\n');
// with for loop 
console.log('With For Loop:\n');
for (var ii = 0; ii < names.length; ii++) {
    console.log(names[ii]);
}
console.log('\n');
// with map, this returns null but I'm not interested in the return value in this example
console.log('With map method:\n');
names.map(function (name) { return console.log(name); });
