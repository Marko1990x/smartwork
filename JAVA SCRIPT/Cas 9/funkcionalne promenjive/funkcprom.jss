//Primer funkcionalne promenljive
//primer 1
function primer1() {
  function saberi(x, y) {
    return x + y;
  }
  //Primer funkcionalne prmenljive
  var f = saberi; //promenljivoj f je dodeljena referenca na funkciju saberi tj. po nazivu(saberi nije poziv funkcije vec referenca na funkciju)
  alert("Primer 1 poziv funkcije saberi daje rezultat: " + f(5, 3)); //sa promenlivom f smo pozvali ustvari funkciju saberi i 
  //proslediili smo argumente 5 i 3
}

//primer 2
function primer2() {
  
  //promenljivoj f je dodeljena  anonimna funkcija 
  //koja nema naziv
  var f = function (x, y) {
    return x - y;
  }
  alert("Primer 2 poziv anonimne funkcije daje rezultat: "+f(5, 3));//poziv anonimne funkcije preko promenljive f -2
  
  var f2 = f;//dodela reference na anonimnu funkciju promenljivoj f2
  alert("Primer 2 poziv anonimne funkcije kroz promenljivu f2 daje rezultat: "+f2(3, 2,));//1
  
  f2 = Math.max;//promenljivoj f2 dodeljujemo drugu funkciju 
  alert("Primer 2 poziv druge funkcije kroz promenljivu f2 daje rezultat: "+f2(5, 3));//5
  alert("Primer 2 poziv anonimne funkcije kroz promenljivu f daje rezultat: "+f(5, 3));//2
  
  
}

