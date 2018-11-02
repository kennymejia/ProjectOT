var pace = require('../models/pace');
var weather = require('../models/weather');
var terrain = require('../models/terrain');

var money = 0;
var currentWeather = {id: 0, healthChange: 0, mileChange: 0, probabilityMin: 0, probabilityMax: 0};
var currentTerrain = {type: '', url: ('')};
var currentHealth;
var totalMiles;
var daysOnTrail;

var messages = [
    {message: "A Member Of Your Team Has Died"},
    {message: "You Are Out Of Time...GAME OVER "}
];

function dayLimit (daysOnTrail) {
    
    var daysOnTrail = this.daysOnTrail;
    
    if (daysOnTrail = 46) {
        alert(messages[1].message);
    }
    else {
        break;
    }
}

function deathUpdate (currentHealth) {
    
    currentHealth = this.currentHealth;
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

function gameSettings(players,profession,starMonth) {

    this.players = [
        {userID: 1, name: '', alive: Yes},
        {userID: 2, name: '', alive: Yes},
        {userID: 3, name: '', alive: Yes},
        {userID: 4, name: '', alive: Yes},
        {userID: 5, name: '', alive: Yes}
    ];

    this.profession = [   {job: "Banker", money: 4000},
                          {job: "Carpenter", money: 3000},
                          {job: "Farmer", money: 2000}
    ];

    this.startMonth = ["February","April","June"];
}

exports.gameSettings = function (players,profession,starMonth) {

    this.players = [
        {userID: 1, name: '', alive: Yes},
        {userID: 2, name: '', alive: Yes},
        {userID: 3, name: '', alive: Yes},
        {userID: 4, name: '', alive: Yes},
        {userID: 5, name: '', alive: Yes}
    ];

    this.profession = [   {job: "Banker", money: 4000},
                          {job: "Carpenter", money: 3000},
                          {job: "Farmer", money: 2000}
    ];

    this.startMonth = ["February","April","June"];
}

exports.createGameSettings = function (players,profession,starMonth) {
    return new gameData(players,profession,starMonth);
}

exports.nextDay = function () {
    
    dayLimit(daysOnTrail);
    daysOnTrail = daysOnTrail + 1;
    currentTerrain = terrain.getTerrain;
    currentWeather = weather.getWeather;
    totalMiles = currentWeather.mileChange * pace.allPaces.miles; //FIX ME SOON
    currentHealth = currentHealth + currentWeather.healthChange;
    currentHealth = currentHealth + pace; //FIX ME SOON
    deathUpdate(currentHealth);
    
}

exports.getPace = function (choice) {
    var choice = this.choice;
    var allPaces = pace.getAllPaces;
    var currentPace;
    
    if (choice == allPaces[0].id) {
        currentPace = allPaces[0];
        return currentPace;
    }
    else if (choice == allPaces[1].id) {
        currentPace = allPaces[1];
        return currentPace;
    }
    else if (choice == allPaces[2].id) {
        currentPace = allPaces[2];
        return currentPace;
    }
    else if (choice == allPaces[3].id) {
        currentPace = allPaces[3];
        return currentPace;
    }
    else {
        break;
    }
}


/*function gameSettings(players,profession,starMonth) {
    this.players = players;
    this.profession = profession;
    this.starMonth = starMonth;
}

exports.createGameSettings = function (players,profession,starMonth) {
    return new gameSettings(players,profession,starMonth);
}*/