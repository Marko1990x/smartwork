var korpa = [];
var ukupnaCena = 0;
var modalIspis = document.getElementById("ispis");

var dugmadDodaj = document.getElementsByClassName("dugmeDodaj");
for (var i=0, imax=dugmadDodaj.length; i < imax; i++) {

    dugmadDodaj[i].addEventListener("click", function(event) {
        
        var dugme = event.target;
        
        var naziv = dugme.parentNode.getAttribute("data-naziv");
        var cena = dugme.parentNode.getAttribute("data-cena");
        ukupnaCena = ukupnaCena + parseInt(cena);
        korpa.push([naziv, cena]);
        
        dugme.textContent = "PROIZVOD DODAT U KORPU";
        var footer = dugme.parentNode;
        var staraBoja = footer.style.backgroundColor;
        var startBojaTeksta = footer.style.color;
        footer.style.backgroundColor = "black";
        footer.style.color = "white";
        setTimeout(function() {
            dugme.textContent = "DODAJ U KORPU";
            footer.style.backgroundColor = staraBoja;
            footer.style.color = startBojaTeksta;
        }, 1000);
        
    });

}

var dugmeKorpa = document.getElementById("dugmeKorpa");
dugmeKorpa.addEventListener("click", function() {
    var modalTekst = "";
    if (korpa.length === 0) {
        modalTekst = "Nemate ništa u korpi";
    } else {
        for(var i=0, imax=korpa.length; i<imax; i++) {
            var proizvod = korpa[i];
            modalTekst = modalTekst + "Naziv: " + proizvod[0] + " - Cena: " + proizvod[1] + "dinara<br>";
        }
        modalTekst = modalTekst + "<br><br>Ukupna cena je: " + ukupnaCena + "dinara";
    }
    modalIspis.innerHTML = modalTekst;   
});


function zoom() {
  var zumiraj = document.querySelectorAll(".div-cena");
  for (var i=0; i<zumiraj.length; i++){
      if(zumiraj[i].style.fontSize == "20px"){
          zumiraj[i].style.fontSize = "14px";
      }
      else{
          zumiraj[i].style.fontSize = "20px";
      }

  }

}
var dugmeZumiraj = document.getElementById("dugmeZumiraj");
dugmeZumiraj.addEventListener("click", zoom);


var colorChange = document.getElementById("color");
function changeColor(){
   document.body.style.backgroundColor = colorChange.value;
}
colorChange.addEventListener("change", changeColor);