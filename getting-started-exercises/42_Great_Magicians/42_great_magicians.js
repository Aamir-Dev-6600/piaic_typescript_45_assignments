"use strict";
/**
 * Great Magicians: Start with a copy of your program from Exercise 39.
 * Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var make_great = function (magicians) {
    for (var index in magicians) {
        magicians[index] = "The Great Magician: ".concat(magicians[index]);
    }
    return magicians;
};
var show_magicians = function (magicians) {
    console.log('Here is the list of magicians: ');
    console.log("[".concat(magicians.join(', '), "]"));
};
var magicians = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];
make_great(magicians);
show_magicians(magicians);
