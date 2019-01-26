/*
ovo je pocetak zadatka 4
*/
var poslovnica1 = {
    Grad: "Novi Sad",
    Adressa: "Bulevar Oslobodjenja 5",
    Telefon: "021-333-444",
};
// stavio sam promenjivu i izvukao podatke iz objekta sa dodatim stringovima isto i za druge.
var prikazi1 = "Addresa poslovnice " + poslovnica1.Grad + " nalazi se na adresi " + poslovnica1.Adressa + " .Kontakt telefon: " + poslovnica1.Telefon;
//console.log(prikazi1); iskljuceno posle testiranja
var poslovnica2 = {
    Grad: "Beograd",
    Adressa: "Terazije 25",
    Telefon: "011-1313-234",

};
var prikazi2 = "Addresa poslovnice " + poslovnica2.Grad + " nalazi se na adresi " + poslovnica2.Adressa + " .Kontakt telefon: " + poslovnica2.Telefon;
//console.log(prikazi2);
var poslovnica3 = {
    Grad: "Nis",
    Adressa: "Konstantina Velikog 45",
    Telefon: "018-22-555",
};
var prikazi3 = "Addresa poslovnice " + poslovnica3.Grad + " nalazi se na adresi " + poslovnica3.Adressa + " .Kontakt telefon: " + poslovnica3.Telefon;
//console.log(prikazi3);

var prikazi = function () {
    console.log(prikazi1);
    console.log(prikazi2);
    console.log(prikazi3);
}
prikazi();

/*
ovo je kraj zadatka 4
*/

//document.getElementsByTagName("beograd").setAttribute("mobilniTel", "063-333-444");

/*
ovo je pocetak zadatka 5
*/
try {
    document.getElementById("NoviSad").addEventListener("click", function () {
        var noviSad = prikazi1;
        console.log(noviSad);
        document.getElementById("DodajNS").innerHTML = noviSad;
        document.getElementById("contentId").style.backgroundColor = "lightblue";
    });
} catch (error) {
    console.log("this is the current error" + error);
}

/*
ovo je kraj zadatka 5
*/

/*
zadatak 6 je u index.html
*/

/*
ovo je pocetak zadatka 7
*/
try {
    document.getElementById("posaljiDugme").addEventListener("click", function () {
        var prezime = document.getElementById("prezime").value;
        if (prezime == "") {
            console.log(prezime);
            alert("Morate Uneti Prezime")
            document.getElementById("prezime").value = ""; // cisti na prazan string ako se nesto pogresno unese ovde je 
            //ovaj deo nepotreban jer proverava prazan string
        }
        if (!/^[a-zA-Z," "]*$/g.test(document.getElementById("prezime").value)) {
            alert("molimo vas ne unesite brojeve");
            document.getElementById("prezime").value = ""; // cisti na prazan string ako se nesto pogresno unese
    
        }
    });
} catch (error) {
    console.log("this is the current error " + error);
}

/*
ovo je kraj zadatka 7
*/

/*
ovo je pocetak zadatka 8
*/
$(document).ready(function () {
    $("#aranzJS").click(function () {
        $("#grcka").empty(); // brise kontent diva grcka
        $("#turska").empty(); // brise kontent diva grcka
        $("#spanija").empty(); // brise kontent diva grcka
        $("#grcka").append('<a href="#"> <img src="img/grcka.jpg" alt="Aranzman Grcka"></a>');
        $("#turska").append('<a href="#"> <img src="img/turska.jpg" alt="Aranzman turska"></a>');
        $("#spanija").append('<a href="#"> <img src="img/spanija.jpg" alt="Aranzman spanija"></a>');

        /*  bio sam napisao u html-u radi kopiranja
          <a href="#"> <img src="img/grcka.jpg" alt="Aranzman Grcka"></a>
          <a href="#"> <img src="img/turska.jpg" alt="Aranzman Turska"></a>
          <a href="#"> <img src="img/spanija.jpg" alt="Aranzman Spanija"></a>
        */
    });
});
$(document).ready(function () {
    $("#grcka").click(function () {
        $("#grcka").empty();
        $("#grcka").append('<p>Aranzmani Grcka 2017</p>');
        $("#grcka").append('<p>Vise Informacija o aranzmanima....</p>');
    });
});

$(document).ready(function () {
    $("#turska").click(function () {
        $("#turska").empty();
        $("#turska").append('<p>Aranzmani Turska 2017</p>');
        $("#turska").append('<p>Vise Informacija o aranzmanima....</p>');
    });
});

$(document).ready(function () {
    $("#spanija").click(function () {
        $("#spanija").empty();
        $("#spanija").append('<p>Aranzmani Turska 2017</p>');
        $("#spanija").append('<p>Vise Informacija o aranzmanima....</p>');
    });
});

/*
ovo je kraj zadatka 8
*/

/*
ovo je pocetak 9 zadatka 
*/

$(document).ready(function () {
    $('#blogbutton').click(function () { // ucitava celu stranu
        /*---Ucitavanje html sa URL---*/
        //$('#OutputDiv').load('http://www.doitfred.somee.com/jQuery/HelpDetails.html');  
        /*---Ucitavanje dela html sa URL ---*/
        $('#loadApi').load('https://api.joind.in/v2.1/events');
        // dodao sam div u html da ucitava ovaj api ....

        // \\ dve kose crte su escape karakter koje mi resavaju problem sa pseudoklasama
    });
});

/* 
kraz zadatak 9
*/
// ovo ne radi kako treba nezman
$(document).ready(function () { // ucitava klasu  
    $('#blogbutton1').click(function () {

      var x  = $.ajax({
          type: "GET",
          url: "https://api.joind.in/v2.1/events",
          data: "data",
          dataType: "dataType",
          success: function (response) {
              if(response.status == 200){
                  alert("uspesno je ucitana strana");
              };
              $('#loadApi').load('https://api.joind.in/v2.1/events');
          }
          
      });
      console.log(x);
    });
});



/*
ovo je kraj 9 tog zadatka
*/

/*
Prva poslovnica
grad � Novi Sad � String vrednost
adresa � Bulevar Oslobodenja 5 - String vrednost
telefon � 021-333-444 - String vrednost

Druga poslovnica
grad � Beograd - String vrednost
adresa � Terazije 25 - String vrednost
telefon � 011-1333-234 - String vrednost

Treca poslovnica 
grad � Ni� - String vrednost
adresa � Konstantina Velikog 45 - String vrednost
telefon � 018-22-555 - String vrednost

"Adresa poslovnice Novi Sad nalazi se na adresi Bulevar Oslobodenja 5 .Kontakt telefon 021-333-444�

*/