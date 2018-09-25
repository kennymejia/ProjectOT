var player1 = {name:"Kenny",score:1500,date:"9/27/2018"};
var player2 = {name:"Ninja",score:700,date:"8/23/2017"};
var player3 = {name:"Myth",score:500,date:"7/12/2012"};
var player4 = {name:"F0X",score:100,date:"6/21/2012"};
var player5 = {name:"b4b33",score:400,date:"9/29/2011"};
var player6 = {name:"Tektonik",score:300,date:"6/30/2015"};
var player7 = {name:"d3m0",score:800,date:"4/23/1988"};
var player8 = {name:"ch13f",score:200,date:"12/12/1998"};
var player9 = {name:"m3m3r",score:600,date:"11/21/1995"};
var player10 = {name:"c00ln1ght",score:900,date:"4/11/1972"};
var playerList = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10];

playerList.sort(compare);

function compare(a, b) {
    if (a.score === b.score) {
        return 0;
    }
    else {
        return (a.score < b.score) ? -1 : 1;
    }
}

scores.innerHTML = playerList[9].score;