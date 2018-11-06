var allPaces = [
    {choice: 0, pace: "paceSteady", miles: 20, healthChange: 0},
    {choice: 1, pace: "strenuous", miles: 25, healthChange: -3},
    {choice: 2, pace: "grueling", miles: 35, healthChange: -8},
    {choice: 3, pace: "resting", miles: 0, healthChange: 5}
];

exports.getPaceArray = function () {
    return allPaces;
}