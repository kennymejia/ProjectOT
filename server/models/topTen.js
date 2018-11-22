//FUNCTIONS USED TO CREATE A NEW PLAYER

function player (name, score, ttDate) {
    this.name = name;
    this.score = score;
    this.ttDate = ttDate;
}

exports.addTopTen = function(name, score, ttDate) {
    return new player(name, score, ttDate);
}