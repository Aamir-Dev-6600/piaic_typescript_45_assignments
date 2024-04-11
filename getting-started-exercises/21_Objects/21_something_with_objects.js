// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var jeap = {
    name: "Mercedes G63",
    model: 63,
    class: "G",
    manufracturer: "Mercedes-Benz",
    price: 87157000,
    modified_by: "Barbus"
};
console.log('Here is the Vehicle details: ');
Object.entries(jeap).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    console.log("".concat(key, " : ").concat(value));
});
