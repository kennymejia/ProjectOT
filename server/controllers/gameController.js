var gameData = require('../models/gameData');

exports.changePace = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //SET CURRENTPACE EQUAL TO THE CHOICE OF THE USER
    var currentPace = gameData.getPace(req.body.userID);
    //ONE WE GET CURRENTPACE OBJECT WE SEND IT
    res.send(currentPace);
}

exports.updateGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //CALLING OUR NEXT DAY FUNCTION WHEN REQUESTED
    res.send(gameData.nextDay);
}

exports.resetGame = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    //TO RESET THE GAME WE MERELY SET GAMESETTINGS AGAIN
    var gameSettings = gameData.createGameSettings;
    res.send(gameSettings);
}

exports.getGameData = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(gameData);
}

