
function promenaBoje(){
    document.body.style.background = document.getElementById("boja").value;
}

var timesClicked = 0;
document.getElementById("zum").addEventListener("click",function(){
    timesClicked++;
    zumiranje();
});

function zumiranje(){

if (timesClicked%2==1) {
var velicinaSlova = document.querySelectorAll(".panel");
    for ( var i = 0; velicinaSlova.length; i++) {
        velicinaSlova[i].style.fontSize = "20px";
    }
} else {
    var velicinaSlova = document.querySelectorAll(".panel");
    for ( var i = 0; velicinaSlova.length; i++) {
        velicinaSlova[i].style.fontSize = "14px";
    }
    }
}
    
    


var ukupnaCena = [];
function korpa(){
    var ukupno = 0;
    document.getElementById("ispis").innerHTML = " ";
    for(var x in ukupnaCena){ 
        document.getElementById("ispis").innerHTML += "Naziv: " + x + " " + " Cena: " + ukupnaCena[x] + "dinara" + "</br>";
        ukupno += parseInt(ukupnaCena[x]);
    }   
    document.getElementById("ispis2").innerHTML = "Ukupna cena je: " + ukupno + " dinara";
}
