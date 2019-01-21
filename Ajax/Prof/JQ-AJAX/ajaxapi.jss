$(document).ready(function(){
    
    $('#btn').on('click', function(){
         
        $('.text').text('učitavanje podataka...');
        //odredujemo tip zahteva i ne saljemo podatke
        $.ajax({
            type: 'GET',
            url: 'https://api.meetup.com/2/cities',
            dataType: 'jsonp',
            success: function(data, status, xhr) {
                $('#text').text(JSON.stringify(data));
            },
            error: function(xhr, status, error) {
                alert('Desila se greška: ' + status);
            }
            
        });
    });
});