//FUNCTIONS USED TO CREATE A NEW PLAYER

function player (name, score, date) {
    this.name = name;
    this.score = score;
    this.date = date;
}

exports.addTopTen = function(name, score, date) {
    return new player(name, score, date);
}