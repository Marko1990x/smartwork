$(document).ready(function(){
    
    $('#btn').on('click', function(){
         
        $('.text').text('učitavanje podataka...');
        //odredujemo tip zahteva i ne saljemo podatke
        $.ajax({
            type: 'GET',
            url: 'https://api.meetup.com/2/cities',
            dataType: 'jsonp',
            success: function(data, status, xhr) {
                //results je deo data objekta pogledati sa console.log(data) strukturu
                console.log(data);
                
                $('#text').append('<p>MEETUP MESTO I BROJ ČLANOVA</p>')
               
                for(var i = 0; i<data.results.length;i++){
                  var mesto = data.results[i].city + ", " + data.results[i].member_count;
                  $('#text').append('<p>'+mesto+'</p>');
                } 
                
                //ako hocu sve sto se nalazi u objektu da prikazem
                /*
                for(var i = 0; i<data.results.length;i++){
                   var ceoObjekat = data.results[i];
                   var mesto = "";
                   for(var kljuc in ceoObjekat){
                       if(ceoObjekat.hasOwnProperty(kljuc)){
                          mesto+=mesto + "-" + ceoObjekat[kljuc] + " ";
                       }
                   }
                   $('#text').append('<p>'+mesto+'</p>');
                }
                */
            },
            error: function(xhr, status, error) {
                alert('Desila se greška: ' + status);
            }
            
        });
    });
});