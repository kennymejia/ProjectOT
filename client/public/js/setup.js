var setupController = require('../../../server/controllers/setupController')

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

//'LISTENS' FOR THE SPACEBAR
document.body.addEventListener("keydown", function (event) {
     
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu.html");
    }
    
});

//********************************************************************************************** */
var currentGameScreen;
window.addEventListener("load", function(event){
	gameScreen(0);
	currentGameScreen = 0;
});

function gameScreen(currentScreen) {
    var gameContainer = document.getElementById("gameContainer");
    //GET REQUESTED HTML
    fetch('/api/setup/screen/' + currentScreen).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call')
            return;
        }
        response.text().then(function(data) {
            //SEND HTML 
            console.log("Data Received: " + data);
            gameContainer.innerHTML = data;
        });
    });			
}	

fetch('/api/setup/assignProfession', {
    method:'post', headers: {
    "Content-type": "application/json; charset=UTF-8" },
    body: '{"profession": "' + profession + '"}' 
}).then(function(response) {
        if (response.status !== 200) {
        console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
        return;
    }
    console.log("profession" + profession + " saved!"); 
});

