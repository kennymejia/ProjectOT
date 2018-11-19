//FUNCTIONS USED TO CREATE OUR GAME DATA OBJECT

function gameData (){
    this.players = [];
    this.profession = "";
    this.startMonth = "";
    this.daysOnTrail = 0;
    this.totalMiles = 0;
    this.currentHealth = 100;
    this.money = 0;
    this.currentWeather = {id: 0, healthChange: 0, mileChange: 0, probabilityMin: 0, probabilityMax: 0};
    this.currentTerrain = {type: '', url: ('')};
    this.currentPace = {choice: 0, pace: "", miles: 0, healthChange: 0};
    this.message = "";
}

exports.newGameData = function() {
    return new gameData();
}