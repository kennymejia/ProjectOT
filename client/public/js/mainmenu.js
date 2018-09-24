var isPlaying = false;

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
			var ed = document.getElementByID("sound");
			ed.innerHTML = ed.innerHTML.replace("4. Turn Sound Off","4. Turn Sound On");
		}		
		else{
			theme.play();
			var ed = document.getElementByID("sound");
			ed.innerHTML = ed.innerHTML.replace("4. Turn Sound On","4. Turn Sound On");
		}
    }
    else if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/");
    }
});
