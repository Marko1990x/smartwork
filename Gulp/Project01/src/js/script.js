function racunaj(a, b) { // zadatak 1

    var treca = 5; // treca promenjiva po zadataku 
    var c = (a + b);
    var d = c * 5;
    console.log("rezultat je " + d);
    //alert("rezultat je: " +d);

}

racunaj(4, 6); // prosledjivanje parametara za prvu funkciju ispisuje se u konzoli.

// kraj zadatka 1 // 

// zadatak 2 pocinje //

function newWinow() {
    myWindow = window.open("reklama.html", "myWindow", "width=320,height=250");
}

document.getElementById("newWindow").addEventListener("click", newWinow);

// otvara prozor sa trazenom sirinom i visinom 


// pocetka dela sa for petljom i if uslovima
// provera je funkcija koja mi radi submit dugme radi kako treba proverio sam :)
function provera() {
    var imeX = document.getElementById("imeA").value;
    var prezimeX = document.getElementById("prezimeA").value;
    var adressaX = document.getElementById("adresaA").value;
    var telefonX = document.getElementById("telefonA").value;
    var rezervacijaX = document.getElementById("rezervacijaA").value;

    //console.log(imeX+prezimeX+adressaX+telefonX+rezervacijaX);

    if (imeX != "" && prezimeX != "" && adressaX != "" && telefonX != "" &&
        rezervacijaX != "") {
        alert("Vrednosti su unete, nema praznih stringova sta je uneto ispisano je u konzoli.");
        console.log("podatak I " + imeX + " podatak II " + prezimeX + " podatak III " + adressaX +
            " podatak IV " + telefonX + " podatak V " + rezervacijaX);
    } else {
        alert("Niste Uneli Vrednost, na nekom od polja ispis prosledjenog u konzoli!");
        console.log("podatak I " + imeX + " podatak II " + prezimeX + " podatak III " + adressaX +
            " podatak IV " + telefonX + " podatak V " + rezervacijaX);

    }
    if (imeX == "") {
        imeA.style.backgroundColor = "red";
    }
    if (prezimeX == "") {
        prezimeA.style.backgroundColor = "red";
    }
    if (adressaX == "") {
        adresaA.style.backgroundColor = "red";
    }
    if (telefonX == "") {
        telefonA.style.backgroundColor = "red";
    }
    if (rezervacijaX == "") {
        rezervacijaA.style.backgroundColor = "red";
    }

    // boji stringove koji su prazno koji su uneti u input polje.
}

document.getElementById("send").addEventListener("click", provera); // poziv za submit za formu
// provereno radi kako treba.



// for petlja za brisanje input polja // brise se samo ime i prezime jer sam ogranicio
// brojac na samo 2 iteracije :) radilo bi i za sva polja.

document.getElementById('brisanjeIMe').onclick = function (event) {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < 2; i++) {
        if (inputs[i].type == "text") {
            inputs[i].value = "";
        }
    }
}

// kraj dela sa brisanjem imena i prezimena

// document.getElementById("brisanjeIMe").addEventListener("click", obrisiImePrezime); 



// dodavanje klasu u bodi 

function dodavanjeKlase() {
    document.body.classList.add("pozadina");

} // kod je proveren body dobija klasu pozadina na klick dugmeta promene pozadine.

document.getElementById("pozadinaX").addEventListener("click", dodavanjeKlase);


// deo za stampu 

function stampaj(params) {
    window.print();
}

document.getElementById("stampajX").addEventListener("click", stampaj);

// deo za stampu gotov radi kako treba.

// deo vezan za ispis ID-Korisnika

// kod je proveren radi kako treba for petlja daje vrednsoti mojim promenjivima to jest daje im id tog input polja
// pa ih ispod for petlje samo pozivam :) nije mi se svideo ovaj deo zadatka.

document.getElementById('lstIDX').onclick = function (event) {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
            var x0 = document.getElementsByClassName("lst")[0].id;
            var x1 = document.getElementsByClassName("lst")[1].id;
            var x2 = document.getElementsByClassName("lst")[2].id;
            var x3 = document.getElementsByClassName("lst")[3].id;
            var x4 = document.getElementsByClassName("lst")[4].id;
            var x5 = document.getElementsByClassName("lst")[5].id;
        }
    }
    console.log("Id nultog input polja je: " + x0);
    console.log("Id prvog input polja je: " + x1);
    console.log("Id drugog input polja je: " + x2);
    console.log("Id treceg input polja je: " + x3);
    console.log("Id cetvrtog input polja je: " + x4);
    console.log("Id petog input polja je: " + x5);
}




// kraj dela sa id-ovima.

function popustFunction() {
    var popust = prompt("Da li vas zanima koliki vam je popust", "popust");

    if (popust == "Da") {
        var popust2 = parseInt(prompt("Unesite cenu rezervacije bice vam smanjena za 200 dinara", "popust2"));
        var popust3 = popust2 - 200;
        alert("vasa nova cena je: " +popust3);
    } else if (popust == "Ne") {
        console.log("izabrali ste ne nista se nece desiti prozor se ugasio");
    } else {
        console.log("kliknuli ste cancel nista se nece desiti prozor se ugasio");
    }
}

document.getElementById("zePopust").addEventListener("click", popustFunction);



// deo za datum 

// sat ima jedni promenju koja se zove datum i vuce trenutni datum
// sat dalje ima 3 primenjive koje vuku pojedinacne vrednosti datuma 
// pretpostavljam da je datum objekat
// te vrednosti stavljam u 3 promenjive koje onda lepim u span element posle h1
// isto kao i u javi

function datum() {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();

    document.getElementById("TheBlastedClock").innerHTML = ("Hours " +hh +" Minutes " +mm +" Seconds " +ss);

}

datum();