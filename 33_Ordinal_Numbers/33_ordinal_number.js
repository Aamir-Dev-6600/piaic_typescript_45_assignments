/**
 * Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
 * • Store the numbers 1 through 9 in a array.
 * • Loop through the array.
 * • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 */
var cardianl_numbers = Array.from({ length: 9 }, function (val, index) { return index + 1; });
cardianl_numbers.push(3.2);
cardianl_numbers.forEach(function (number) {
    if (number === 1) {
        console.log("1st");
    }
    else if (number == 2) {
        console.log('2nd');
    }
    else if (number == 3) {
        console.log('3rd');
    }
    else if (Number.isInteger(number)) {
        console.log("".concat(number, "th"));
    }
    else {
        console.log('Not a number');
    }
});
