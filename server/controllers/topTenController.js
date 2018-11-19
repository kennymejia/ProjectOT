var player = require ('../models/topTen');

exports.playerList = [];

var player1 = {name:"Kenny",score:950,date:"9/27/2018"};
var player2 = {name:"Ninja",score:700,date:"8/23/2017"};
var player3 = {name:"Myth",score:500,date:"7/12/2012"};
var player4 = {name:"F0X",score:100,date:"6/21/2012"};
var player5 = {name:"b4b33",score:400,date:"9/29/2011"};
var player6 = {name:"Tektonik",score:300,date:"6/30/2015"};
var player7 = {name:"d3m0",score:800,date:"4/23/1988"};
var player8 = {name:"ch13f",score:200,date:"12/12/1998"};
var player9 = {name:"m3m3r",score:600,date:"11/21/1995"};
var player10 = {name:"c00ln1ght",score:900,date:"4/11/1972"};

exports.playerList.push(player1);
exports.playerList.push(player2);
exports.playerList.push(player3);
exports.playerList.push(player4);
exports.playerList.push(player5);
exports.playerList.push(player6);
exports.playerList.push(player7);
exports.playerList.push(player8);
exports.playerList.push(player9);
exports.playerList.push(player10);

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
    res.send(newPlayer);
}
