var game = require('../controllers/gameController')

exports.assignPlayerName = function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    var player = {name:"", alive: true};
    player.name = req.body.name;
    game.getData().players.push(player);
    res.send(game.getGameData);
}

exports.assignProfession = function (req, res) {
    var profession = [{job: "Banker", money: 4000},
                      {job: "Carpenter", money: 3000},
                      {job: "Farmer", money: 2000}
    ];
    game.getData().profession= profession[req.body.choice].job;
    game.getData().money = profession[req.body.choice].money;
    res.setHeader('Content-Type', 'text/plain');
    res.send(game.getGameData);
}

exports.startMonth = function (req, res) {
    startMonth = ["February","April","June","August"]; 
    game.getData().startMonth = startMonth[req.body.choice];
    res.setHeader('Content-Type', 'text/plain');
    res.send(game.getGameData);
}
