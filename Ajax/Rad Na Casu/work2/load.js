$(document).ready(function () {
    $('#btn').click(function () { // ucitava celu stranu
        $.get( "https://api.meetup.com/2/cities", function( data ) {
            $( "#text" ).html(data);
            var x = data; 

            var zip = [x.results.zip];
            console.log(zip);

            for(var i = 0; x.results.lenght; i++){
                console.log(i);
            }

            console.log(x.results);
          });
    });
});


// koristi json formater