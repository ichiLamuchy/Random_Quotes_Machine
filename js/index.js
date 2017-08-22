$(document).ready(function() {
    $("#quote-button").on("click", function getData(quote, author){
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
            var quote = json.quoteText; 
            var author = json.quoteAuthor;
            $("#quote-itself").html("<p>"+ quote+"<p>" );
            $("#quote-author").html( "- "+ author +" -" );
        });
    });
});