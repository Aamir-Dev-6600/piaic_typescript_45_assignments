"use strict";
/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 * Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var make_shirt = function (size, text) {
    if (size === void 0) { size = 'L'; }
    if (text === void 0) { text = 'I love TypesScript'; }
    console.log("Size: ".concat(size, " should have \"").concat(text, "\" as print text.\n"));
};
make_shirt();
make_shirt('M');
make_shirt('S', 'Life is Fun');
