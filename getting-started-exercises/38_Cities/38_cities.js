"use strict";
/**
 * Cities: Write a function called describe_city() that accepts the name of a city and its country.
 * The function should print a simple sentence, such as Karachi is in Pakistan.
 * Give the parameter for the country a default value.
 * Call your function for three different cities, at least one of which is not in the default country.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var describe_city = function (city_name, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city_name, " is in ").concat(country));
};
describe_city('Faisalabad');
describe_city('Islamabad');
describe_city('Makkah', 'Saudi Arabia');
