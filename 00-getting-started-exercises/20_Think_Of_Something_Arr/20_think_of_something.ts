// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// initialize empyt at time of declaration and push elements to it later
const citiesList : string[] = []; 
citiesList.push('Karachi'); 
citiesList.push('Dubai'); 
citiesList.push('Makkah'); 
citiesList.push('London'); 
citiesList.push('Peshawar'); 


// initialize with values at time of declaration
const famous : string[] = ['Daakoo', 'Burj Khalifa', 'Masjid-e-Haram', 'Cool Atmosphare', 'Rich Taste in Food']; 
citiesList.forEach((city, index) => {
    console.log(`${city} has ${famous[index]}`); 
}); 
