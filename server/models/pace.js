var paceSteady = {miles: 20, healthChange: 0};
var paceStrenuous = {miles: 25, healthChange: -3};
var paceGrueling = {miles: 35, healthChange: -8};
var paceResting = {miles: 0, healthChange: 5};

exports.getCurrentPace = function(choice) {
    
    var choice = this.choice; //NOT SURE IF THIS WILL SET IT TOT HE USERS CHOICE 

    if(choice == 49) {
        return paceSteady;
    }
    else if(choice == 50) {
        return paceStrenuous;
    }
    else if(choice == 51) {
        return paceGrueling;
    }
    else {
        return paceResting;
    }
}