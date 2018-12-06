//funkcija bez parametara
function ispisiIme(){
  alert("Moje ime je Nenad");
}

//ako imamo isti naziv funkcije poziva se ona koja je poslednja napisana
//jako losa praksa
/*
function ispisiIme(){
  alert("Moje ime je Pera");
}
*/

//funkcija sa parametrom 
function ispisiImeSaPar(ime){
  alert("Moje ime je "+ ime);
}

//funkcija koja vraca vrednost
function vratiZbir(prviBroj,drugiBroj){
  var zbir = prviBroj + drugiBroj;
  return zbir;
}

//poziv funckije bez parametra
//ispisiIme();

//poziv funckije sa parametrom
//ispisiImeSaPar("Pera");   ---- prosledjivanje parametara

//pozovi funkciju i smesti rezltat u promenljivu
//var rezultat = vratiZbir(3,12); //15
//alert("ukupan zbir je "+rezultat);
