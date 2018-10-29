var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');

var players = [
    {name: '', alive: Yes},
    {name: '', alive: Yes},
    {name: '', alive: Yes},
    {name: '', alive: Yes},
    {name: '', alive: Yes}
];

var money;
var startMonth;
var profession;
var currentPace = pace.getPace(choice);
var currentWeather = weather.getWeather;
var currentTerrain = terrain.getTerrain;
var currentHealth = 100;
var totalMiles = 0;
var daysOnTrail = 0;

var messages = [
    {message: "A Member Of Your Team Has Died"},
];

exports.deathUpdate = function () {
    
    if (currentHealth >= 80) {
        break;
    }
    
    else if (currentHealth >= 50 && currentHealth < 80) {
        break;
    }
    
    else if (currentHealth >= 20 && currentHealth < 50) {
        
        var randomNumber =  Math.floor(Math.random() * 100);
        
        for (var x = 0; x < 3; ++x) {

            var chance = Math.floor(Math.random() * 100);

            if (chance == randomNumber) {

                players.playerDeath;

                return players;
            }
        }
    }
    
    else {
        var randomNumber = Math.floor(Math.random() * 100);

        for (var x = 0; x < 10; ++x) {
            
            var chance = Math.floor(Math.random() * 100);

            if (chance == randomNumber) {
                
                players.playerDeath;
                
                return players;
            }
        }
    }
}

function playerDeath() {

    var randomPlayer = players[Math.floor(Math.random() * players.length)];
    
    if (randomPlayer.alive == yes) {
        randomPlayer.alive = false;
        alert(messages[0]);
    }
    
    else {
        players.playerDeath;
    }
}

