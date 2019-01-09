//Primer 1 - bez gresaka ,
function primer1() {
  try {
    alert('Usao sam u try blok'); // (1) <--
    // ...ovde nema greske
    var a = 2 + 2;
    alert("Sabrani broj je " + a);
    alert('Kraj try bloka'); // (2) <--
  }
  catch (err) {
    alert('Catch je ignorisan , zato sto u try nije bilo gresaka'); // (3)
  }
  alert("...i izvrsenje se nastavlja dalje");
}
//Primer 2 - sa greskama 
function primer2() {//kada imamo try catch blok onda se kada u try delu dodje do greske izvrsi catch i nastavi izvrsenje ispod catch dela u ovom slucaju alert na kraju funkcije, da nisam imala try catch pukao bi na liniji 20
  try {
    alert('Usao sam u try blok'); // (1) <--
    // ...ovde nema greske
    llsallsalsl;
    var a = 2 + 2;
    alert("Sabrani broj je " + a);
    alert('Kraj try bloka'); // (2) 
  }
  catch (err) {
    alert('Desila se greska u try bloku pa se izvrsio catch'); // (3) <--
    alert("A ovo je opis greske koja se desila " + err);
  }
  alert("...i izvrsenje se nastavlja dalje");
}
//Primer 3 - prikaz propertija error objekta
function primer3() {
  try {
    lalala; // greska, promenljiva nije definsiana !
  }
    //umesto err moze da stoji bilo koji naziv to je lokalna promenjiva, ona cuva objekat pod imenom ERROR. NAME I MESSAGE SU NJEGOVI PROPERTIJI.
  catch (err) {
    alert(err.name); //Name ispisuje naziv greske Ispisace se > ReferenceError -nije definisana referenca na koju promenjivu
    alert(err.message); // Ispisace se > lalala is not defined 
    alert(err); // Ispisace se  > ReferenceError: lalala is not defined 
  }
}