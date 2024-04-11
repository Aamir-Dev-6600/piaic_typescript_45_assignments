"use strict";
/**
 * Cars: Write a function that stores information about a car in a Object.
 *
 * The function should always receive a manufacturer and a model name.
 * It should then accept an arbitrary number of keyword arguments.
 *
 * Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 *
 * Print the Object that’s returned to make sure all the information was stored correctly.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var getCar = function (manufacturer, model) {
    var additionals = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionals[_i - 2] = arguments[_i];
    }
    var thisCar = {
        manufacturer: manufacturer,
        model: model
    };
    additionals.forEach(function (additional) {
        thisCar = __assign(__assign({}, thisCar), additional);
    });
    return thisCar;
};
var honda = getCar('honda', 'civic', { color: 'black', engine_cc: 2000 }, { seats_made_of: 'leather' });
var mercedes = getCar('Mercedes', 'Benz', { class: 'C-Class' });
var bmw = getCar('BMW', 'M4 Coupe');
console.log(honda);
console.log(mercedes);
console.log(bmw);
