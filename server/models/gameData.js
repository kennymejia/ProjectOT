var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');

var players = [
    {name: '', alive: Boolean},
    {name: '', alive: Boolean},
    {name: '', alive: Boolean},
    {name: '', alive: Boolean},
    {name: '', alive: Boolean}
];

var money;
var startMonth;
var profession;
var currentPace;
var currentWeather;
var currentTerrain;
var currentHealth;
var totalMiles;
var daysOnTrail;
var messages = [
    {deathMessage: "A Member Of Your Team Has Died"},
];

exports.healthUpdate = function () {
    if (currentHealth >= 80) {
        break;
    }
    else if (currentHealth >= 50 && currentHealth < 80) {
        break;
    }
    else if (currentHealth >= 20 && currentHealth < 50) {
        
        var randomNumber =  Math.floor(Math.random() * 10);
        
        for (var x = 0; x < 3; ++x) {

            var chance = Math.floor(Math.random() * 10);

            if (chance == randomNumber) {

                players.playerDeath;

                return players;
            }
        }
    }
    
    else {
        var randomNumber = Math.floor(Math.random() * 10);

        for (var x = 0; x < 3; ++x) {
            var chance = Math.floor(Math.random() * 10);

            if (chance == randomNumber) {
                
                players.playerDeath;
                
                return players;
            }
        }
    }
}

function playerDeath() {

    var randomPlayer = players[Math.floor(Math.random() * players.length)];
    randomPlayer.status = false;
}

exports.totalMiles;
exports.currentHealth;
exports.currentWeather;
exports.currentPace;
exports.currentTerrain;