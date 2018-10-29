var paceSteady = {miles: 20, healthChange: 0};
var paceStrenuous = {miles: 25, healthChange: -3};
var paceGrueling = {miles: 35, healthChange: -8};
var paceResting = {miles: 0, healthChange: 5};

var allPaces = [];
allPaces.push(paceSteady);
allPaces.push(paceStrenuous);
allPaces.push(paceGrueling);
allPaces.push(paceResting);

exports.getPace = function(choice) {
    
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
    else if (choice == 52) {
        return paceResting;
    }
    else {
        return alert("That Was Not One Of The Choices");
    }
}