var allPaces = [
    {choice: 0, pace: "Steady", miles: 20, healthChange: 0},
    {choice: 1, pace: "Strenuous", miles: 25, healthChange: -3},
    {choice: 2, pace: "Grueling", miles: 35, healthChange: -8},
    {choice: 3, pace: "Resting", miles: 0, healthChange: 5}
];

exports.getPaceArray = function () {
    return allPaces;
}