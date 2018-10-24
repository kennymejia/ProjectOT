var paceSteady = 20;
var paceStrenuous = 30;
var paceGrueling = 35;
var paceResting = 0;

exports.getCurrentPace = function(choice) {
    if(choice == 49) {
        return paceSteady;
    }
    else if(choice == 50) {
        return paceStrenuous;
    }
    else if(choice == 51) {
        return paceGrueling;
    }
    else(choice == 52) {
        return paceResting;
    }
}

