"use strict";
/**
 * Unchanged Magicians: Start with your work from Exercise 40.
 * Call the function make_great() with a copy of the array of magicians’ names.
 * Because the original array will be unchanged, return the new array and store it in a separate array.
 * Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// called with a deep copy of magicians array
var great_magicians = make_great(__spreadArray([], magicians, true));
// since it was a copy on previous line, orignal array is not passed by reference, so it's unchanged
show_magicians(magicians);
// obviously this is the changed array 
show_magicians(great_magicians);
