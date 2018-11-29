var mysql = require('mysql');
var player = require ('../models/topTen');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'ttUser',
    password: '12345',
    insecureAuth: true
});

con.connect(function(err) {
    if (err) console.log("Something Went Wrong");
    console.log("MYSQL DB Connected")
    var sql = "use otTopTen";
    con.query(sql, function(err, result) {
        if (err) throw err;
    })
});

//FUNTION TO GET OUR LIST OF TOP TEN PLAYERS SORTED
exports.getCurrentScores = function(req,res) {
    var currentTopScores = [];
    var sql = "SELECT playerName, playerScore, ttDate FROM otTopTen ORDER BY playerScore DESC LIMIT 10;";
    con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
        var javaDate = new Date(rows[i].ttDate);
        var myDate = javaDate.getMonth() + "/"+ javaDate.getDate() + "/" + javaDate.getFullYear();
        currentTopScores[i] = player.addTopTen(rows[i].playerName, rows[i].playerScore, myDate);
        console.log(currentTopScores[i]);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(currentTopScores);
    console.log("Database Succesfully Queried");
    console.log(fields);
});
}

//FUNCTION USED TO PUSH A NEW PLAYER IN THE TOP TEN LIST
exports.saveCurrentScore = function(req, res) {
    var newPlayer = player.addTopTen(req.body.name, req.body.score, req.body.date);
    console.log(newPlayer);
    var name = newPlayer.name;
    var score = newPlayer.score;
    var date = newPlayer.ttDate;
    var sql = "INSERT INTO otTopTen (playerName, playerScore, ttDate) VALUES ('" + newPlayer.name + "', " + newPlayer.score + ", '" + newPlayer.ttDate + "');"
    console.log(sql);
    con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    console.log("One Row Inserted");
    res.setHeader('Content-Type', 'application/json');
    res.send(newPlayer);
})
}
