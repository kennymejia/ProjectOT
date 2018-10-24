var player = require ('../models/topTen');

exports.playerList = [];

var player1 = {name:"Kenny",score:950,date:"9/27/2018"};
var player2 = {name:"Kenny",score:950,date:"9/27/2018"};

exports.playerList.push(player1);
exports.playerList.push(player2);

exports.getCurrentScores = function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerList);
}

exports.getCurrentScore = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerList[req.params.userID]);
}

exports.saveCurrentScore = function(req, res) {
    var newPlayer = new player (req.body.name, req.body,score, req.body.date);
    exports.playerList.push(newPlayer);
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
}

exports.deleteCurrentScore = function(req, res) {
	users.splice(req.params.userId);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}