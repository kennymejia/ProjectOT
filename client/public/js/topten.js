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

leaders.innerHTML += '1) ' + '<br /><br />' + '2) ' + '<br /><br />' + 
				  '3) ' + '<br /><br />' + '4) ' + '<br /><br />' +
				  '5) ' + '<br /><br />' + '6) ' + '<br /><br />' +
				  '7) ' + '<br /><br />' + '8) ' + '<br /><br />' +
				  '9) ' + '<br /><br />' + '10) ' + '<br /><br />';
					
names.innerHTML = playerList[9].name + '<br /><br />' + playerList[8].name + '<br /><br />' + 
				  playerList[7].name + '<br /><br />' + playerList[6].name + '<br /><br />' +
				  playerList[5].name + '<br /><br />' + playerList[4].name + '<br /><br />' +
				  playerList[3].name + '<br /><br />' + playerList[2].name + '<br /><br />' +
				  playerList[1].name + '<br /><br />' + playerList[0].name + '<br /><br />';
				  
score.innerHTML = playerList[9].score + '<br /><br />' + playerList[8].score + '<br /><br />' + 
				  playerList[7].score + '<br /><br />' + playerList[6].score + '<br /><br />' +
				  playerList[5].score + '<br /><br />' + playerList[4].score + '<br /><br />' +
				  playerList[3].score + '<br /><br />' + playerList[2].score + '<br /><br />' +
				  playerList[1].score + '<br /><br />' + playerList[0].score + '<br /><br />';
				  
date.innerHTML = playerList[9].date + '<br /><br />' + playerList[8].date + '<br /><br />' + 
				  playerList[7].date + '<br /><br />' + playerList[6].date + '<br /><br />' +
				  playerList[5].date + '<br /><br />' + playerList[4].date + '<br /><br />' +
				  playerList[3].date + '<br /><br />' + playerList[2].date + '<br /><br />' +
				  playerList[1].date + '<br /><br />' + playerList[0].date + '<br /><br />';
				  
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();
document.body.addEventListener("keydown", function (event) {
     if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu.html");
    }
});