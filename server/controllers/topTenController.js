var player = require ('../models/topTen');

exports.playerList = [];

//var player1 = {name:"Kenny",score:950,date:"9/27/2018"};
//var player2 = {name:"Kenny",score:800,date:"9/27/2018"};

//exports.playerList.push(player1);
//exports.playerList.push(player2);

//FUNTION TO GET OUR LIST OF TOP TEN PLAYERS SORTED
//IF THE LIST HAS 11 PLAYERS WE POP THE LAST ONE
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
    if (exports.playerList.length > 10) {
        exports.playerList.pop();
    }
    res.send(exports.playerList);
}

//FUNCTION USED TO PUSH A NEW PLAYER IN THE TOP TEN LIST
exports.saveCurrentScore = function(req, res) {
    var newPlayer = player.addTopTen(req.body[0].name, req.body[1].score, req.body[2].date);
    exports.playerList.push(newPlayer);
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.playerList);
}
