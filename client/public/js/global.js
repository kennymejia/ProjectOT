if ( Storage !== void(0) ) {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}

var theme = document.getElementsByTagName('audio')[0];

var tillPlayed = sessionStorage.getItem('timePlayed');

var isPlaying = false;

function update(){
    if(!isPlaying){
        if(tillPlayed){
            theme.currentTime = tillPlayed;
            theme.play();
            isPlaying = true;
        }
        else  {
            theme.play();
            isPlaying = true;
        }
    }
    else{
        sessionStorage.setItem('timePlayed', theme.currentTime);
    }
}
setInterval(update,500);