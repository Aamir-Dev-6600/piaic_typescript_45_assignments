// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "sAlMaN AhMEd";
console.log("In Lowercase: ".concat(person.toLowerCase()));
console.log("In Uppercase: ".concat(person.toUpperCase()));
console.log("In TItlecase: ".concat(person.split(" ").map(function (word) { return "".concat(word.charAt(0).toUpperCase()).concat(word.substring(1).toLowerCase()); }).join(' ')));
