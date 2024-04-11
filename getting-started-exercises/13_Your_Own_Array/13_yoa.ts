const vehicles: string[] = [
    'Honda Motercycle',
    'Barbus G63',
    'Suzuki Motercycle',
    'Honda Civic'
];

vehicles.forEach(vehicle => {
    vehicle.toLowerCase().includes('motercycle') ? 
    console.log(`I would like to ride ${vehicle}`) :
    console.log(`I would like to drive ${vehicle}`);
});

