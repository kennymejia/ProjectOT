var isPlaying = false;
sound.innerHTML = "4. Turn Sound OFF";

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
