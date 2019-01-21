$(document).ready(function () {
 $('#mojeDugme').click(function () {
    //saljemo upit stranici CustomerJson za id=5 i cekamo odgovor           
    $.getJSON('http://doitfred.somee.com/jQuery/CustomerJson.aspx', //URL
          {id:5},                                                   //data
          function(data,status, xhr) {                              //callback
               alert('ID: ' + data.ID + ' ' + data.FirstName + ' ' + data.LastName);
          })                                                        //nema datatype
          .done(function(data,status, xhr){    //metoda koja se okida ako je sve ok
            console.log('Status je: ' + status);
            console.log(xhr);
            console.log('Response je : ',data);
          })
          .fail(function(data,status, xhr){    //metoda koja se okida ako se desila greska
            console.log('Status je: ' + status);
            console.log(xhr);
            console.log('Response je : ',data);
            alert('Greska: ' + xhr.statusText);
          })
 });
});


