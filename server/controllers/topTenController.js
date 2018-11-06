var player = require ('../models/topTen');

exports.playerList = [];

var player1 = {name:"Kenny",score:950,date:"9/27/2018"};
var player2 = {name:"Kenny",score:800,date:"9/27/2018"};

exports.playerList.push(player1);
exports.playerList.push(player2);

exports.getCurrentScores = function(req,res) {
    res.setHeader('Content-Type', 'application/json');
    exports.playerList.sort(compare);
    function compare(a, b) {
        if (a.score === b.score) {
            return 0;
        }
        else {
            return (a.score < b.score) ? -1 : 1;
        }
    }
    res.send(exports.playerList);
}

exports.saveCurrentScore = function(req, res) {
    var newPlayer = new player.addTopTen (req.body.name, req.body.score, req.body.date);
    exports.playerList.push(newPlayer);
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
}
