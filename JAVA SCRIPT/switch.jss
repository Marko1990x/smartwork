//Primer 1
function primer1(){
   var a = 2 + 2;

  switch (a) {
    case 3:
      alert( 'Premali broj' );
      break;
    case 4:
      alert( 'Pogodak!' );
      break;
    case 5:
      alert( 'Prevelik broj' );
      break;
    default:
      alert( "Ne prepoznajem takav broj" );
  }
}

//Primer 2 - bez break ,ispisace sve posle case 4, sva izvrsenja

function primer2(){
  var a = 2 + 2;

  switch (a) {
      case 3:
        alert( 'Premali broj' );

      case 4:
        alert( 'Pogodak!' );

      case 5:
        alert( 'Prevelik broj' );

      default:
        alert( "Ne prepoznajem takav broj" );
  }
}

//Primer 3 - argument moze da bude bilo koji izraz,eksplicitna konverzija stringa u number sa +a
function primer3(){
    var a = "1";
    var b = 0;

    switch (+a) {
      case b + 1:
        alert("ovo se pokrene ,zato sto +a je 1, isto kao i b+1");
        break;

      default:
        alert("ovo se ne pokrene");
    }
}


//primer 4 - grupisanje case-ova

function primer4(){
  var a = 2 + 2;

  switch (a) {
    case 4:
      alert('Tacno 4 !');
      break;

    case 3:                    // (*) grouped two cases
    case 5:
      alert('Pogresno!');
      alert("Zasto ne korisitimo math klasu?");
      break;

    default:
      alert('Rezultat ne odgovara ni jednoj opciji');
  }
}

//Primer 5 - tipovi argumenta
function primer5(){
  var arg = prompt("Unesi vrednost?")
  switch (arg) {
    case '0':
    case '1':
      alert( 'Nula ili jedan' );
break;
    case '2':
      alert( 'Dva' );
      break;

    case 3:
      alert( 'Nikad se ne izvrsi!' );
break;
    default:
      alert( 'Nepoznata vrednost' )
  }
}

