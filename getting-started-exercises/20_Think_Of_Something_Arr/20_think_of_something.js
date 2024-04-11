// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// initialize empyt at time of declaration and push elements to it later
var citiesList = [];
citiesList.push('Karachi');
citiesList.push('Dubai');
citiesList.push('Makkah');
citiesList.push('London');
citiesList.push('Peshawar');
// initialize with values at time of declaration
var famous = ['Daakoo', 'Burj Khalifa', 'Masjid-e-Haram', 'Cool Atmosphare', 'Rich Taste in Food'];
citiesList.forEach(function (city, index) {
    console.log("".concat(city, " has ").concat(famous[index]));
});
