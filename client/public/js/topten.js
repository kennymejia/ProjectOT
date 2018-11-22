var playerList = [];

function topTenList() {
    fetch('/api/topTen/list', {
        method:'get', headers: {
        "Content-type": "application/json; charset=UTF-8" }
    }).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {				
            console.log("Data Received:" + data);
            var list = JSON.parse(data);
            playerList = list;
            populate(list);
        });
    });
}

function populate (playerList) {
    //COLUMN THAT LAYS OUT THE NUMBERS FOR THE PLAYERS ON LEADERBOARD
    leaders.innerHTML += '1) ' + '<br /><br />' + '2) ' + '<br /><br />' + 
    '3) ' + '<br /><br />' + '4) ' + '<br /><br />' +
    '5) ' + '<br /><br />' + '6) ' + '<br /><br />' +
    '7) ' + '<br /><br />' + '8) ' + '<br /><br />' +
    '9) ' + '<br /><br />' + '10) ' + '<br /><br />';

    //COLUMN THAT LISTS THE PLAYERS NAME			
    names.innerHTML = playerList[9].name + '<br /><br />' + playerList[8].name + '<br /><br />' + 
    playerList[7].name + '<br /><br />' + playerList[6].name + '<br /><br />' +
    playerList[5].name + '<br /><br />' + playerList[4].name + '<br /><br />' +
    playerList[3].name + '<br /><br />' + playerList[2].name + '<br /><br />' +
    playerList[1].name + '<br /><br />' + playerList[0].name + '<br /><br />';

    //COLUMN THAT LISTS THE PLAYERS SCORE
    score.innerHTML = playerList[9].score + '<br /><br />' + playerList[8].score + '<br /><br />' + 
    playerList[7].score + '<br /><br />' + playerList[6].score + '<br /><br />' +
    playerList[5].score + '<br /><br />' + playerList[4].score + '<br /><br />' +
    playerList[3].score + '<br /><br />' + playerList[2].score + '<br /><br />' +
    playerList[1].score + '<br /><br />' + playerList[0].score + '<br /><br />';

    //COLUMN THAT LISTS THE PLAYERS SCORE DATE
    date.innerHTML =  playerList[9].ttDate + '<br /><br />' + playerList[8].ttDate + '<br /><br />' + 
    playerList[7].ttDate + '<br /><br />' + playerList[6].ttDate + '<br /><br />' +
    playerList[5].ttDate + '<br /><br />' + playerList[4].ttDate + '<br /><br />' +
    playerList[3].ttDate + '<br /><br />' + playerList[2].ttDate + '<br /><br />' +
    playerList[1].ttDate + '<br /><br />' + playerList[0].ttDate + '<br /><br />';
}

window.addEventListener("load", function(event){
	topTenList();
});

//'LISTENS' FOR THE SPACEBAR
document.body.addEventListener("keydown", function (event) {
   
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu.html");
    }
    
});

//FUNCTION FOR THE FADE ON TEXT REFERENCING QUOTES			  
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