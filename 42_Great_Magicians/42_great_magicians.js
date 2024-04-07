"use strict";
/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var show_magicians = function (magicians) {
    magicians = magicians.map(function (magician) { return "The Great ".concat(magician); });
    console.log('Here is the list of magicians: ');
    console.log("[".concat(magicians.join(', '), "]"));
};
var magicians = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];
show_magicians(magicians);
