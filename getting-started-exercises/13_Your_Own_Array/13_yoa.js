var vehicles = [
    'Honda Motercycle',
    'Barbus G63',
    'Suzuki Motercycle',
    'Honda Civic'
];
vehicles.forEach(function (vehicle) {
    vehicle.toLowerCase().includes('motercycle') ?
        console.log("I would like to ride ".concat(vehicle)) :
        console.log("I would like to drive ".concat(vehicle));
});
