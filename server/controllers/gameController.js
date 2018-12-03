var game = require('../models/gameData');
var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');
var gameData = game.newGameData();
var weatherArray = weather.getWeatherArray(); 
var terrainArray = terrain.getTerrainArray();
var paceArray = pace.getPaceArray();
gameData.currentPace = paceArray[0];
var messages = [
    {message: "A Member Of Your Team Has Died"},
    {message: "You Are Out Of Time...GAME OVER "},
    {message: "Your Entire Party Is Dead...GAME OVER"},
    {message: "You Have Reached The End Of Your Journey"},
    {message: "Your Health Has Reached 0...GAME OVER"}
];
//FUNCTION TO UPDATE THE PACE USING USER CHOICE
exports.changePace = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    gameData.currentPace = paceArray[req.body.choice];
    var pace = gameData.currentPace;
    res.send(pace);
}
//FUNCTION TO SIMULATE ONE DAY
exports.updateGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    gameData.message = " ";
    gameData.daysOnTrail++;
    gameData.currentTerrain = getRandomTerrain();
    gameData.currentWeather = getRandomWeather();
    gameData.totalMiles = gameData.totalMiles + gameData.currentWeather.mileChange * gameData.currentPace.miles;
    gameData.currentHealth = gameData.currentHealth + gameData.currentWeather.healthChange;
    gameData.currentHealth = gameData.currentHealth + gameData.currentPace.healthChange;
    deathUpdate();
    gameOver();
    res.send(gameData);
}
//FUNCTION TO HARD RESET THE GAME
exports.resetGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //TO RESET THE GAME WE MERELY SET GAMESETTINGS AGAIN
    var gameData = game.newGameData();
    res.send(gameData);
}
//FUNCTION USED TO SEND OUR GAME DATA
exports.getGameData = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(gameData);

}
//FUNCTION USED TO RETURN OUR GAME DATA
exports.getData = function () {
    return gameData;
}
//FUNCTION USED TO GET OUR RANDOM WEATHER
//WE CHECK TO SEE IF OUR CURRENT PACE IS RESTING AND IF IT IS WE RETURN THE SAME WEATHER
//OTHERWISE WE GET A RANDOM NUMBER BETWEEN 0 AND 99 AND SEE WHICH WEATHER IT FALLS UNDER
//NEW IMPLEMENTATION 
//FUNCTION ALSO CHECKS IS WEATHER CONDITION MAKES SENSE FOR THE CURRENT TERRAIN
//IF IT DOES NOT WE CALL THE FUNCTION AGAIN TO GET A CORRECT WEATHER CONDITION FOR THE LOCATION
function getRandomWeather () {
    if (gameData.currentPace.pace != "Resting" ) {
        do{
            var randomProb = Math.floor(Math.random() * 100);
            for (var x = 0; x < 11; ++x) {
                console.log(x + weatherArray[x].id);
                if (randomProb <= weatherArray[x].probabilityMax && randomProb >= weatherArray[x].probabilityMin) {
                    var checkWeather = weatherArray[x];
                    if (gameData.currentTerrain.type == "forest") {
                        if (checkWeather.id == "Blizzard") {
                            var flag = false;
                        }
                        else {
                            return weatherArray[x];
                        }
                    }
                    if (gameData.currentTerrain.type == "plains") {
                        if (checkWeather.id == "Blizzard" || checkWeather == "Snow") {
                            var flag = false;
                        }
                        else {
                            return weatherArray[x];
                        }
                    }
                    if (gameData.currentTerrain.type == "mountains") {
                        if (checkWeather.id == "Very Hot" || checkWeather == "Hot") {
                            var flag = false;
                        }
                        else {
                            return weatherArray[x];
                        }
                    }
                    if (gameData.currentTerrain.type == "desert") {
                        if (checkWeather.id == "Blizzard" || checkWeather == "Snow" || checkWeather == "Heavy Rain" || checkWeather == "Heavy Fog") {
                            var flag = false;
                        }
                        else {
                            return weatherArray[x];
                        }
                    }
                }
            }
        }while(flag == false)
    }
    else {
        return gameData.currentWeather;
    }
}
//FUNCTION USED TO GET OUR RANDOM TERRAIN
function getRandomTerrain () {
    if (gameData.currentPace.pace != "Resting" ) {
           
        //WE SET RANDOM TERRAIN TO A RANDOM TERRAIN FROM THE ARRAY
        var randomTerrain = terrainArray[Math.floor(Math.random() * terrainArray.length)];
        return randomTerrain;
    }
    else {
        return gameData.currentTerrain;
    }  
}
/*FUNCTION USED TO CHECK OUR HEALTH
WE HAVE A VARIABLE CALLED PLACE USED TO SEND THE POSITION OF THE PLAYER THAT DIED 
IF OUR HEALTH IS BELOW 50 WE ITERATE THROUGH OUR ARRAY, UPDATE PLACE, AND GET A RANDOM NUMBER
A PLAYER HAS A 3%/10% CHANCE OF DYING SO WE SET CHANCE TO A RANDOM NUMBER 3/10 TIMES
IF CHANCE AND RANDOM NUMBER ARE EQUAL WHEN COMPARED THEN WE CALL OUR FUNCTION PLAYER DEATH 
AND SEND THE POSITION OF THE PLAYER THAT HAS DIED*/
function deathUpdate () {
    var place = -1;
    
    if (gameData.currentHealth >= 20 && gameData.currentHealth < 50) {
        for (var i = 0; i < 5; ++i) {
            
            place++;
            var randomNumber =  Math.floor(Math.random() * 100);
            
            for (var x = 0; x < 3; ++x) {
                
                var chance = Math.floor(Math.random() * 100);
                
                if (chance == randomNumber) {
                    playerDeath(place);
                }
            }
        }  
    }
    else if (gameData.currentHealth < 20) {
        for (var i = 0; i < 5; ++i) {
            
            place++;
            var randomNumber =  Math.floor(Math.random() * 100);
            
            for (var x = 0; x < 10; ++x) {
                
                var chance = Math.floor(Math.random() * 100);
                
                if (chance == randomNumber) {
                    playerDeath(place);
                }
            }
        }
    }
}
//FUNCTION USED TO SET ALIVE FROM TRUE TO FALSE
function playerDeath(place) {
    if (exports.getData().players[place].alive === true) {
        exports.getData().players[place].alive = false;
        gameData.message = messages[0].message;
    }
}
//FUNCTION USED TO CHECK IF THE GAME HAS ENDED
//WE CHECK TO SEE IF ALL PLAYERS ARE NO LONGER ALIVE
//WE CHECK TO SEE IF WE HAVE REACHED OUR DESTINATION
//WE CHECK TO SEE IF WE HAVE MET OUR DAY LIMIT
//WE CHECK TO SEE IF OUR CURRENT HEALTH IS 0 OR BELOW
//IF ANY OF THESE CONDITIONS ARE MET WE CALL SOFT RESET
function gameOver () {
    if (exports.getData().players[0].alive === false && 
        exports.getData().players[1].alive === false &&
        exports.getData().players[2].alive === false &&
        exports.getData().players[3].alive === false &&
        exports.getData().players[4].alive === false) {
        gameData.message = messages[2].message;
        softReset();
    }
    else if (exports.getData().totalMiles >= 500) {
        gameData.message = messages[3].message;
        //var score = calculateScore(exports.getData().currentHealth, exports.getData().daysOnTrail);
        //sendScore(gameData.players[0].name, score);
        softReset();
    }
    else if (exports.getData().daysOnTrail == 46) {
        gameData.message = messages[1].message;
        softReset();
    }
    else if (exports.getData().currentHealth <= 0) {
        gameData.message = messages[4].message;
        softReset();
    }
}
//FUNCTION USED TO RESET MOST OF OUR SETTINGS
//WE DONT RESET PLAYERS, JOB, OR MONTH
function softReset () {
    exports.getData().players[0].alive = true;
    exports.getData().players[1].alive = true;
    exports.getData().players[2].alive = true;
    exports.getData().players[3].alive = true;
    exports.getData().players[4].alive = true;
    gameData.daysOnTrail = 0;
    gameData.totalMiles = 0;
    gameData.currentHealth = 100;
    gameData.currentPace = paceArray[0] ;
}
