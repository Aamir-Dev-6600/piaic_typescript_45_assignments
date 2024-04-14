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

/**
 * function that creates car object from two string parameters and unknown number of rest parameters
 * @param manufacturer : string value
 * @param model : string value
 * @param additionals : Rest parameters, array of objects, each object has they key as string and value any
 * @returns thisCar : contains the maufacturer, model and rest parameters 
 */
const getCar = (manufacturer: string, model: string, ...additionals: { [index: string]: any }[]): any => {

    let thisCar: { manufacturer: string, model: string } = {
        manufacturer: manufacturer,
        model: model
    }

    additionals.forEach(additional => {
        thisCar = { ...thisCar, ...additional }
    });

    return thisCar;
}

const honda = getCar('honda', 'civic', { color: 'black', engine_cc: 2000 }, { seats_made_of: 'leather' });
const mercedes = getCar('Mercedes', 'Benz', {class: 'C-Class'});
const bmw = getCar('BMW', 'M4 Coupe'); 

console.log(honda);
console.log(mercedes);
console.log(bmw);

export { }