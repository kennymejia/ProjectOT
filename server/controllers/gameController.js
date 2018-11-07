var game = require('../models/gameData');
var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');
var gameData = game.newGameData();
var weatherArray = weather.getWeatherArray(); 
var terrainArray = terrain.getTerrainArray();
var paceArray = pace.getPaceArray();
gameData.currentPace = paceArray[1];
var messages = [
    {message: "A Member Of Your Team Has Died"},
    {message: "You Are Out Of Time...GAME OVER "},
    {message: "Your Entire Party Is Dead...GAME OVER"},
    {message: "You Have Reached The End Of Your Journey"},
    {message: "Your Health Has Reached 0...GAME OVER"}
];

exports.changePace = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    gameData.currentPace = paceArray[req.body.choice];
    res.send(gameData);
}

exports.updateGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    gameData.daysOnTrail++;
    gameData.currentTerrain = getRandomTerrain();
    gameData.currentWeather = getRandomWeather();
    gameData.totalMiles = gameData.totalMiles + gameData.currentWeather.mileChange * gameData.currentPace.miles;
    gameData.currentHealth = gameData.currentHealth + gameData.currentWeather.healthChange;
    gameData.currentHealth = gameData.currentHealth + gameData.currentPace.healthChange;
    deathUpdate();
    gameOver();

    console.log(gameData);
    
    res.send(gameData);
}

exports.resetGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //TO RESET THE GAME WE MERELY SET GAMESETTINGS AGAIN
    var gameData = game.newGameData();
    res.send(gameData);
}

exports.getGameData = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(gameData);

}

exports.getData = function () {
    return gameData;
}

function getRandomWeather () {
    if (gameData.currentPace.pace != "resting" ) {
        //getting a randon number between 0 and 99
        var randomProb = Math.floor(Math.random() * 100);
        //FOR LOOP TO ITERATE TROUGH THE WEATHER ARRAY
        for (var x = 0; x < 12; ++x) {
           
            //IF THE RANDOM NUMBER IS BETWEEN THE PROBABILITIES OF A CERTAIN WEATHER
            //THEN RANDOMWEATHER IS EQUAL TO WEATHER ARRAY AT POSITION X
            if (randomProb <= weatherArray[x].probabilityMax && randomProb >= weatherArray[x].probabilityMin) {
               return weatherArray[x];
            }
        }
    }
    else {
        return gameData.currentWeather;
    }
}

function getRandomTerrain () {
    if (gameData.currentPace.pace != "resting" ) {
           
        //WE SET RANDOM TERRAIN TO A RANDOM TERRAIN FROM THE ARRAY
        var randomTerrain = terrainArray[Math.floor(Math.random() * terrainArray.length)];
        return randomTerrain;
    }
    else {
        return gameData.currentTerrain;
    }  
}

function deathUpdate () {
    if (gameData.currentHealth >= 20 && gameData.currentHealth < 50) {
        for (var i = 0; i < 5; ++i) {
            var randomNumber =  Math.floor(Math.random() * 100);
            for (var x = 0; x < 3; ++i) {
                var chance = Math.floor(Math.random() * 100);
                if (chance == randomNumber) {
                    playerDeath(i);
                }
            }
        }  
    }
    else {
        for (var i = 0; i < 5; ++i) {
            var randomNumber =  Math.floor(Math.random() * 100);
            for (var x = 0; x < 3; ++i) {
                var chance = Math.floor(Math.random() * 100);
                if (chance == randomNumber) {
                    playerDeath(i);
                }
            }
        }
    }
}

function playerDeath(i) {
    if (exports.getData().players[i].alive === true) {
        exports.getData().players[i].alive = false;
        console.log(messages[0].message);//Console log for now
    }
}

function gameOver () {
    if (exports.getData().players[0].alive === false && 
        exports.getData().players[1].alive === false &&
        exports.getData().players[2].alive === false &&
        exports.getData().players[3].alive === false &&
        exports.getData().players[4].alive === false) {
        console.log(messages[2].message);//Console log for now
        var gameData = game.newGameData();
    }
    else if (exports.getData().totalMiles == 500) {
        console.log(messages[4].message);
        var gameData = game.newGameData();
    }
    else if (exports.getData().daysOnTrail == 46) {
        console.log(messages[1].message);//FOR NOW WE PRINT TO CONSOLE
        var gameData = game.newGameData();
    }
    else if (exports.getData().currentHealth <= 0) {
        console.log(messages[5].message);
        var gameData = game.newGameData();
    }
}