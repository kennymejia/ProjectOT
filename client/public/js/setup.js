var choice;
var currentGameScreen;

//FUNCTION FOR THE FADE ON TEXT REFERENCING QUOTES
/*(function() {

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

})();*/

//'LISTENS' FOR THE USER INPUT THROUGHT THE ASYNC CALLS
document.body.addEventListener("keydown", function (event) {
    if (currentGameScreen === 0) {
        if (event.keyCode === 32) {
            window.location.replace("http://localhost:1337/mainmenu.html");
        }	
        //Check for 1 keypress
        if (event.keyCode === 49) {
            choice = 0;
            professionChoice(choice);
        }
        //Check for 2 keypress
        if (event.keyCode === 50) {
            choice = 1;
            professionChoice(choice);
        }
        //Check for 3 keypress
        if (event.keyCode === 51) {
            choice = 2;
            professionChoice(choice);
        }
        if (event.keyCode === 52) {
            choice = 3;
            professionChoice(choice);
        }			
    }
    if (currentGameScreen === 1) {
        if (event.keyCode === 13) {
            var player1 = document.getElementById('playerName1').value;
            var player2 = document.getElementById('playerName2').value;
            var player3 = document.getElementById('playerName3').value;
            var player4 = document.getElementById('playerName4').value;
            var player5 = document.getElementById('playerName5').value;
            playerName(player1);
            playerName(player2);
            playerName(player3);
            playerName(player4);
            playerName(player5);
            gameScreen(2);
			currentGameScreen++;
        }
    }
    if (currentGameScreen === 2) {
        if (event.keyCode === 49) {
            choice = 0;
            monthChoice(choice);
            displayData();
        }
        if (event.keyCode === 50) {
            choice = 1;
            monthChoice(choice);
            displayData();
        }
        if (event.keyCode === 51) {
            choice = 2;
            monthChoice(choice);
            displayData();
        }
        if (event.keyCode === 52) {
            choice = 3;
            monthChoice(choice);
            displayData();
        }
    }
    if(currentGameScreen === 3) {
        //PRESSING ENTER TO CONTINUE
        if(event.keyCode === 13){
            trail();
        }
    }
});

window.addEventListener("load", function(event){
	gameScreen(0);
	currentGameScreen = 0;
});
//GETTING OUR HTML GAMESCREENS
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
//CHOOSING A PROFESSION
function professionChoice(choice) {
    fetch('/api/setup/profession', {
        method:'post', headers: {
        "Content-type": "application/json; charset=UTF-8" },
        body: '{"choice": "' + choice + '"}' 
    }).then(function(resonse) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {				
            console.log("Data Received:" + data);
        });
    });		
    gameScreen(1);
    currentGameScreen++;
}
//CHOOSING A MONTH
function monthChoice(choice) {
    fetch('/api/setup/month', {
        method:'post', headers: {
        "Content-type": "application/json; charset=UTF-8" },
        body: '{"choice": "' + choice + '"}' 
    }).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {				
            console.log("Data Received: " + data);
        });
    });		
    gameScreen(3);
    currentGameScreen++;
}
//SETTING THE PLAYER NAMES
function playerName(name) {
    fetch('/api/setup/player', {
        method:'post', headers: {
        "Content-type": "application/json; charset=UTF-8" },
        body: '{"name": "' + name + '"}' 
    }).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {				
            console.log("Data Received: " + data);
        });
    });
}
//GETTING THE TRAIL HTML TO START THE GAME
function trail() {
    window.location.replace("http://localhost:1337/trail.html");;
}
//GETTING OUR DATA THROUGH ASYNC CALL
function displayData() {
    fetch('/api/setup/data', {
        method:'get', headers: {
        "Content-type": "application/json; charset=UTF-8" }
    }).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {
            console.log("Data Received: " + data);
            var userData = JSON.parse(data);
            insertData(userData);
        });
    });	
}
//INSERTING OUR DATA INTO OUR HTML // NOT DONE YET, HAS TO MATCH HTML
function insertData(data) {
    document.getElementById('rev').innerHTML = "Lets Review Your Choices" + '<br /><br />';
    document.getElementById('member0').innerHTML = "Leader: " + data.players[0].name;
    document.getElementById('member1').innerHTML = "Member 1: " + data.players[1].name;
    document.getElementById('member2').innerHTML = "Member 2: " + data.players[2].name;
    document.getElementById('member3').innerHTML = "Member 3: " + data.players[3].name;
    document.getElementById('member4').innerHTML = "Member 4: " + data.players[4].name;
    document.getElementById('profession').innerHTML = "Profession: " + data.profession;
    document.getElementById('money').innerHTML = "Starting Money: " + data.money;
    document.getElementById('month').innerHTML = "Month Leaving: " + data.startMonth;	
}

//********************************************************************************************** */
