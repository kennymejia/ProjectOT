var gameController = require('../controllers/gameController');
var gameData = gameController.getGameData;

exports.assignPlayerName = function (req, res) {
    gameData.gameSettings.players[req.body.userID] = req.body.playerName
    res.setHeader('Content-Type', 'text/plain');
    res.send(gameData.gameSettings.players);
}

exports.assignProfession = function (req, res) {
    var profession = gameData.profession[req.body.userID];
    res.setHeader('Content-Type', 'text/plain');
    res.send(profession);
}

exports.startMonth = function (req, res) {
    var startMonth = gameData.startMonth[req.body.userID];
    res.setHeader('Content-Type', 'text/plain');
    res.send(startMonth);
}