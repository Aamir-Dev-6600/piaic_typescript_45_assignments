"use strict";
/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var show_magicians = function (magicians) {
    console.log('Here is the list of magicians: ');
    console.log("[".concat(magicians.join(', '), "]"));
};
var magicians = ['Jidran', 'Kashif', 'Saeed', 'Bin-Soban'];
show_magicians(magicians);
