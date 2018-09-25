var isPlaying = false;//VARIABLE THAT SHOWS FUTURE STATUS OF PLAYER
sound.innerHTML = "4. Turn Sound OFF";//VARIABLE THAT SHOWS TEXT FOR FUTURE STATUS OF PLAYER
//FUNCTION THAT LISTENS FOR SPECIFIC KEYCODES 1 + 2 + 3 + 4 AND SPACE
//FUNCTION ALSO PLAYS AND PAUSES AUDIO AS WELL AS UPDATES TEXT FOR CHOICE 4 
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        window.location.replace("http://localhost:1337/trail.html");
    }
    else if (event.keyCode === 50) {
        window.location.replace(" WHAT GOES HERE ? ");
    }
    else if (event.keyCode === 51) {
        window.location.replace("http://localhost:1337/topten.html");
    }
    else if (event.keyCode === 52) {
		isPlaying = !isPlaying; 
		if(isPlaying){
			theme.pause();
			sound.innerHTML = "4. Turn Sound ON";
		}		
		else{
			theme.play();
			sound.innerHTML = "4. Turn Sound OFF";
		}
    }
    else if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/");
    }
});
