// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const jeap: { name: string, model: number, class: string, manufracturer: string, price: number, modified_by: string } = {
    name: "Mercedes G63",
    model: 63,
    class: "G",
    manufracturer: "Mercedes-Benz",
    price: 87157000,
    modified_by: "Barbus"
}


console.log('Here is the Vehicle details: ');


Object.entries(jeap).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});

