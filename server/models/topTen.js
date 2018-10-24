//data
//var player1 = {name:"Kenny",score:950,date:"9/27/2018"};

function player(name, score, date) {
    this.name = name;
    this.score = score;
    this.date = new Date();
}

exports.addTopTen = function(name, score, date) {
    return new player (name, score, date);
}