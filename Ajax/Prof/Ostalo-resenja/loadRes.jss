$(document).ready(function () {
    //na klik dugmeta ucitaj kursnu listu koristeci sledeci link
    //
  $('#mojeDugme').click(function(){
      $('#kursnaLista').load('http://www.nbs.rs/kursnaListaModul/srednjiKurs.faces?lang=cir #index\\:srednjiKursLista');
  });
  
  $('#mojeDugme1').click(function(){
      $('#kursnaLista').load('http://www.nbs.rs/kursnaListaModul/srednjiKurs.faces?lang=cir .form_napomena');
  });
});
