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

//'LISTENS' FOR THE SPACEBAR
document.body.addEventListener("keydown", function (event) {
     
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu.html");
    }
    
});
