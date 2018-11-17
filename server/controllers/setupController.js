var game = require('../controllers/gameController')

var screen0 = "<div class = \"choice\">" + "Which Will You Choose?" + "</div>" +
                "<div class= \"banker\">" + "1. Be A Banker From Boston" + "</div>" +
                "<div class= \"carpenter\">" + "2. Be A Carpenter From Ohio" + "</div>" +
                "<div class= \"farmer\">" + "3. Be A Farmer From Illinois" + "</div>" +
                "<div class= \"differences\">" + "4. Find Out The Differences Between The Choices" + "</div>";

var screen1 = "<div class = \"choice\">" + "<p>What Is Your Name ?</p>" + "<br>" +
                "Leader: <input type=\"text\" id=\"playerName1\">" +
                "<p>What Are Your Teammates Names ?</p>" +
                "Member 1: <input type=\"text\" id=\"playerName2\"><br>" +
                "Member 2: <input type=\"text\" id=\"playerName3\"><br>" +
                "Member 3: <input type=\"text\" id=\"playerName4\"><br>" +
                "Member 4: <input type=\"text\" id=\"playerName5\"><br>" + "</div>";


var screen2 = "<div class = \"choice\">" + "What Month Will You Set Off On?" + "</div>" +
                "<div class= \"february\">" + "1. February" + "</div>" +
                "<div class= \"april\">" + "2. April" + "</div>" +
                "<div class= \"june\">" + "3. June" + "</div>" +
                "<div class= \"august\">" + "4. August" + "</div>";

var screen3;//REVIEW OF CHOICES HTML

var gameScreens = [];

gameScreens.push(screen0);
gameScreens.push(screen1);
gameScreens.push(screen2);
gameScreens.push(screen3);

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

exports.getGameScreen = function (req, res) {
    var gameScreen = gameScreens[req.params.id];
    res.setHeader('content-type', 'text/plain');
    res.send(gameScreen);
}

function getData() {
    this.players = [];
    this.profession = "";
    this.startMonth = "";
    this.money = 0;
}

exports.userData = function (req,res) {
    var data = new getData();
    data.players = game.getData().players;
    data.profession = game.getData().profession;
    data.startMonth = game.getData().startMonth;
    data.money = game.getData().money;
    res.send(data);
}

