$(document).ready(function () {
 $('#mojeDugme').click(function () {
    //dohvati stranicu i prikazi je  
    $.get('http://doitfred.somee.com/jQuery/HelpDetails.html', //URL
        function(data) {   //callback
          console.log(data);
          $('#OutputDiv').html(data);
        });
 });
});


