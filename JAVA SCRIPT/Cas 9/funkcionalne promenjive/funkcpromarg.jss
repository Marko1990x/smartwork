//Primer funkcionalne promenljive kao argument
//primer 1
function primer1() {
  //funckija kao argument prima drugu funkciju
  alert("Primer funkcije koja kao argument prima drugu funkciju");
  izvrsi (3,6, saberi);
  
}

//primer 2
function primer2() {
  //funkcija kao argument prima funkcionalnu promenljivu
  alert("Primer funkcije koja kao argument prima funkcionalnu promenljivu");
  izvrsi (3,6, f1);
  
}

//primer 3
function primer3(){
  //funkcija kao argument prima globalnu funkciju Math
  alert("Primer funkcije koja kao argument prima globalnu promenljivu Math");
  izvrsi (3,6, Math.min);
}

//primer 4
function primer4(){
  //funkcija kao argument prima drugu funkciju odmah definisanu
  alert("Primer funkcije koja kao argument prima drugu funkciju odmah definisanu");
  izvrsi (3,6, function(x,y) {return x*y; });
}

function izvrsi (x,y, funkcija){
    var rezultat = funkcija(x,y);
    alert ("Rezultat je "+ rezultat);
}

function saberi (x1,y1){
    return x1+y1;
}

var f1 = function oduzmi (x2,y2){//funkcionalna promenljiva
    return x2-y2;
}

