//REMEMBER TO LINK ALL FILES TOGETHER ESPECIALLY FOR NPC HEALTH

var currentPace = 'steady';
var totalMiles = 0;

//'LISTENS' FOR THE SPACEBAR
document.body.addEventListener("keydown", function (event) {
   
    if (event.keyCode === 32 && currentPace == 'resting' ) {
        currentPace = 'steady';
        paceMiles = 10;
        healthImpact = 0;
        pace.innerHTML = '5. Current Pace: Steady';
    }
    else if (event.keyCode === 32 && currentPace == 'steady' ) {
        currentPace = 'strenuous';
        paceMiles = 15;
        healthImpact = -3;
        pace.innerHTML = '5. Current Pace: strenuous';
    }
    else if (event.keyCode === 32 && currentPace == 'strenuous' ) {
        currentPace = 'grueling';
        paceMiles = 20;
        healthImpact = -8;
        pace.innerHTML = '5. Current Pace: grueling';
    }
    else if (event.keyCode === 32 && currentPace == 'grueling' ) {
        currentPace = 'resting';
        paceMiles = 0;
        healthImpact = 5;
        pace.innerHTML = '5. Current Pace: resting';
    }
    
    totalMiles += paceMiles;
    
    if (npc1.health != 0 ) {
        npc1.health += healthImpact;
    }
    if (npc2.helth != 0 ) {
        npc2.health += healthImpact;
    }
    if (npc3.helth != 0 ) {
        npc3.health += healthImpact;
    }
    if (npc4.helth != 0 ) {
        npc4.health += healthImpact;
    }
    if (npc5.helth != 0 ) {
        npc5.health += healthImpact;
    }
});