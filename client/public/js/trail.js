document.body.addEventListener("keydown", function (event) {
    //'LISTENS' FOR THE SHIFT KEY
    if (event.keyCode === 16) {
        window.location.replace("http://localhost:1337/mainmenu.html");
    }
    //'LISTENS' FOR THE SPACE KEY
    else if (event.keyCode === 32) {
        updatePace();
    }
    else if (event.keyCode === 13) {
        nextDay();
    }

    
});

function updatePace(choice) {
    fetch('/api/game/pace', {
        method:'get', headers: {
        "Content-type": "application/json; charset=UTF-8" }
    }).then(function(response) {
        if(response.status !== 200) {
            console.log('There Was A Problem With The AJAX Call');
            return;
        }
        response.text().then(function(data) {
            console.log("Data Received: " + data);
            var pace = JSON.parse(data);
            insertPace(pace);
        });
    });
}

function nextDay() {
    fetch('/api/game/update', {
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

function insertData(data) {
    document.getElementById('days').innerHTML = "1. Days On Trail: " + data.daysOnTrail;
    document.getElementById('miles').innerHTML = "2. Miles Traveled: " + data.totalMiles;
    document.getElementById('health').innerHTML = "3. Party Health: " + data.currentHealth;
    document.getElementById('weather').innerHTML = "4. Current Weather: " + data.currentWeather.id;
    document.getElementById('pace').innerHTML = "5. Current Pace: " + data.currentPace.pace;
    document.getElementById('terrain').innerHTML = "6. Current Terrain: " + data.currentTerrain.type;
    document.getElementById('alive').innerHTML = "7. Party Alive Status";
    document.getElementById('alive1').innerHTML = data.players[0].name + ": " + data.players[0].alive;
    document.getElementById('alive2').innerHTML = data.players[1].name + ": " + data.players[1].alive;
    document.getElementById('alive3').innerHTML = data.players[2].name + ": " + data.players[2].alive;
    document.getElementById('alive4').innerHTML = data.players[3].name + ": " + data.players[3].alive;
    document.getElementById('alive5').innerHTML = data.players[4].name + ": " + data.players[4].alive;
    document.getElementById('terrainwall').innerHTML = data.currentTerrain.url;
    document.getElementById('message').innerHTML = "Message: " + data.message;
}

function insertPace(data) {
    document.getElementById('pace').innerHTML = "5. Current Pace: " + data.pace;
}

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