//array of weather objects holding our weather possibilities 
//each object holds ID healthchange milechange probability MIN+MAX

var weather = [
    //VERY HOT
    {id: "Very Hot", healthChange: -8, mileChange: .7, probabilityMin: 0, probabilityMax: 9},
    //HOT
    {id: "Hot", healthChange: -3, mileChange: .9, probabilityMin: 10, probabilityMax: 19},
    //WARM
    {id: "Warm", healthChange: 1, mileChange: .7, probabilityMin: 20, probabilityMax: 39},
    //COOL
    {id: "Cool", healthChange: 1, mileChange: .7, probabilityMin: 40, probabilityMax: 49},
    //COLD
    {id: "Cold", healthChange: -5, mileChange: .7, probabilityMin: 50, probabilityMax: 59},
    //VERY COLD
    {id: "Very Cold", healthChange: -12, mileChange: .7, probabilityMin: 60, probabilityMax: 69},
    //RAIN
    {id: "Rain", healthChange: -4, mileChange: .7, probabilityMin: 70, probabilityMax: 79},
    //HEAVY RAIN
    {id: "Heavy Rain", healthChange: -8, mileChange: .7, probabilityMin: 80, probabilityMax: 84},
    //SNOW
    {id: "Snow", healthChange: -15, mileChange: .7, probabilityMin: 85, probabilityMax: 89},
    //BLIZZARD
    {id: "Blizzard", healthChange: -30, mileChange: .7, probabilityMin: 90, probabilityMax: 94},
    //HEAVY FOG
    {id: "Fog", healthChange: -3, mileChange: .7, probabilityMin: 95, probabilityMax: 99}
];

//OUR GET WEATHER FUNCTION
exports.getWeatherArray = function() {
    return weather;
}
