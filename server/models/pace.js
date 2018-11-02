var allPaces = [
    {id: 0, pace: "paceSteady", miles: 20, healthChange: 0},
    {id: 1, pace: "strenuous", miles: 25, healthChange: -3},
    {id: 2, pace: "grueling", miles: 35, healthChange: -8},
    {id: 3, pace: "resting", miles: 0, healthChange: 5}
];

exports.getAllPaces = function() {
    return allPaces;
}