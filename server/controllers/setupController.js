var game = require('../controllers/gameController')

//FUNCTION USED TO CREATE OUR PLAYERS AND SET THEM AS ALIVE
exports.assignPlayerName = function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    var player = {name:"", alive: Boolean};
    player.alive = true;
    player.name = req.body.name;
    game.getData().players.push(player);
    res.send(game.getGameData);
}

//FUNCTION USED TO ASSIGN OUR JOB AND MONEY
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

//FUNCTION USED TO ASIGN OUR START MONTH
exports.startMonth = function (req, res) {
    startMonth = ["February","April","June","August"]; 
    game.getData().startMonth = startMonth[req.body.choice];
    res.setHeader('Content-Type', 'text/plain');
    res.send(game.getGameData);
}

//************************************************************************************************

exports.getGameScreen = function (req, res) {
    var gameScreen = exports.gameScreens[req.body.id];
    res.setHeader('content-type', 'text/plain');
    res.send(gameScreen);
}

var screen0 = "<div class = \"choice\">" + "Which Will You Choose?" + "</div>" +
                 "<div class= \"banker\">" + "1. Be A Banker From Boston" + "</div>" +
                 "<div class= \"carpenter\">" + "2. Be A Carpenter From Ohio" + "</div>" +
                 "<div class= \"farmer\">" + "3. Be A Farmer From Illinois" + "</div>" +
                 "<div class= \"differences\">" + "4. Find Out The Differences Between The Choices" + "</div>";

var screen1;//START MONTH HTML

var screen2;//LEADER NAME HTML

var screen3;//PARTY NAMES HTML

var screen4;//REVIEW OF CHOICES HTML

exports.gameScreens = [];

exports.gameScreens.push(screen0);
exports.gameScreens.push(screen1);
exports.gameScreens.push(screen2);
exports.gameScreens.push(screen3);
exports.gameScreens.push(screen4);