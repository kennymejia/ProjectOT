//array of weather objects holding our weather possibilities 
//each object holds ID healthchange milechange probability MIN+MAX

var weather = [
    //VERY HOT
    {id: 1, healthChange: -8, mileChange: .7, probabilityMin: 0, probabilityMax: 9},
    //HOT
    {id: 2, healthChange: -3, mileChange: .9, probabilityMin: 10, probabilityMax: 19},
    //WARM
    {id: 3, healthChange: 1, mileChange: .7, probabilityMin: 20, probabilityMax: 39},
    //COOL
    {id: 4, healthChange: 1, mileChange: .7, probabilityMin: 40, probabilityMax: 49},
    //COLD
    {id: 5, healthChange: -5, mileChange: .7, probabilityMin: 50, probabilityMax: 59},
    //VERY COLD
    {id: 6, healthChange: -12, mileChange: .7, probabilityMin: 60, probabilityMax: 69},
    //RAIN
    {id: 7, healthChange: -4, mileChange: .7, probabilityMin: 70, probabilityMax: 79},
    //HEAVY RAIN
    {id: 8, healthChange: -8, mileChange: .7, probabilityMin: 80, probabilityMax: 84},
    //SNOW
    {id: 9, healthChange: -15, mileChange: .7, probabilityMin: 85, probabilityMax: 89},
    //BLIZZARD
    {id: 10, healthChange: -30, mileChange: .7, probabilityMin: 90, probabilityMax: 94},
    //HEAVY FOG
    {id: 11, healthChange: -3, mileChange: .7, probabilityMin: 95, probabilityMax: 99}
];

//OUR GET WEATHER FUNCTION
exports.getWeather = function() {
    while (currentPace != resting ) {
        
        //getting a randon number between 0 and 99
        var randomProb = Math.floor(Math.random() * 100);
        
        //FOR LOOP TO ITERATE TROUGH THE WEATHER ARRAY
        for (var x = 0; x < 12; ++x) {
           
            //IF THE RANDOM NUMBER IS BETWEEN THE PROBABILITIES OF A CERTAIN WEATHER
            //THEN RANDOMWEATHER IS EQUAL TO WEATHER ARRAY AT POSITION X
            if (randomProb > weather[x].probabilityMin && randomProb < weather[x].probabilityMax) {
                
               return weather[x];
               
            }
        }
    }
}
