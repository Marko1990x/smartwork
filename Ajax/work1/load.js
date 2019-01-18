$(document).ready(function () {
    $('#mojeDugme').click(function () {   // ucitava celu stranu
           /*---Ucitavanje html sa URL---*/
           //$('#OutputDiv').load('http://www.doitfred.somee.com/jQuery/HelpDetails.html');  
           /*---Ucitavanje dela html sa URL ---*/
           $('#mojeDugme').load('http://www.nbs.rs/kursnaListaModul/srednjiKurs.faces?/lang=cir #index\\:srednjiKursLista');

           // \\ dve kose crte su escape karakter koje mi resavaju problem sa pseudoklasama
   
    });
   });


   $(document).ready(function () {   // ucitava klasu 
    $('#mojeDugme1').click(function () {
     
           $('#OutputDiv').load('http://www.nbs.rs/kursnaListaModul/srednjiKurs.faces?/lang=cir .form_napomena');
   
    });
   });
   
   