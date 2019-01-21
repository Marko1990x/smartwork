/*
ovo je pocetak zadatka tri
*/

$(document).ready(function () {
    $("body").css("background-color", "burlywood"); //ok
    $("body").css("font-family", "Tahoma"); //ok
});

/*
prosto kaze, da kada se ucita dom objekat iz browsera u jquerry da radi funkciju
na element body telo dokumenta gadjam ga sa css metodom i prosto 
prosledjujem parametre kao sto su background color i font family da bi promenio
na ono sto ja hocu
ovo je kraj zadatka tri
*/


/*
ovo je pocetak zadatka cetiri
*/

$(document).ready(function () {
    $("form").addClass("stilForme"); // ok
});

/*
isti fazon kao i prethodni zadatak dovucem dom objekat dovucem nad cime radim 
sa selektorom u ovom slucaju to je forma inace ovo bi vuklo sve forma 
ali posto imam samo jedno formu nema veze koristim metodu addClass da bi 
dodao novu klasu na moj element.
ovo je kraj zadatka cetiri
*/

/*
Ovo je pocetak zadatka pet
*/
$(document).ready(function () {
    $("#sakrij").click(function () {
        $("#kontakt").hide(1500); // radi ok 1.5 sekundi je 
        // 1500 milisekundi.
    });
});
/*
koristim metodu hide nad selektovnim elementom preko id koji se zove kontakt
prosledjuem parametar na hide() koji je u milisekundama po zadataku je 1.5 sekundi
pa je to 1500ms
ovo je kraj zadatka pet
*/

/*
ovo je pocetak sestog zadatka
*/
$(document).ready(function () {
    var x = $("#label1ime").html();
    console.log(x);
    var y = $("#label2prez").html();
    console.log(y);

    x1 = (x+" Putnika:");
    console.log(x1);
    y2 = (y+" Putnika:");
    console.log(y2);

    $("#label1ime").html(x1);   // radi ok vrednosti su promenjenje
    $("#label2prez").html(y2);  // rado ok vrednosti su promenjenje
});

/*
zadatak je bio da se doda vrednost putnik na ime i prezime u labeli
ja sam prostu dovukao vrednosti pre promene u x i y promenjivu 
zalepio sam im string "putnik" na kraj u novo promenjivoj 
x1 y2
proverio sam u console log i prosto sam dodelio te vrednosti mojim poljima
koji su u ovom slucaju labele.
ovo je kraj sestog zadatka
*/

/*
ovo je pocetak sedmog zadataka
*/

$(document).ready(function(){
    $("#slika").prepend('<img src="ns.jpg" />');   //radi ok
    //$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
});

/*
gadjam element nad kojim treba da izvrsim preapend metodu 
preko id kazem preapend sto mu znaci dodaj na pocetak, 
kazem da je to slika i odakle da je vuce kraj filozofije :)
ovo je kraj sedmog zadatka
*/

/*
ovo je pocetak osmog zadatka
*/

$(document).ready(function(){
    $("#prikazi").click(function(){
      $("#kontakt").toggle(1500);
    });
  });

/*
veoma jednostavna funkcija toggle gadjam element koji  mi treba
pozivam metodu toggle prosledjujem vreme kao parametar po zadataku
na prvi klik sakriva na drugi klik otkriva element
ovo je kraj osmog zadatka
*/


/*
ovo je pocetak devetog zadatka
*/
$(document).ready(function(){
    $("#evriIzracunaj").click(function(){
        var evriAll = $("#evriUkupno").val();
        var kursEvra = $("#evriKurs").val();
        console.log(evriAll, kursEvra); // vuce ok

        var xxx = (evriAll*kursEvra);
        console.log(xxx); // mislim ovo je samo mnozenje 

        if (xxx >= 24000) {
            var xxx1 = xxx-2000;
            console.log(xxx1);
            $("#rezultatEvri").val("Cena sa popustom: "+xxx1);
        } else if (xxx < 24000){
            $("#rezultatEvri").val("cena bez popusta: "+xxx);
        } else{
            console.log("nesto nije kako treba");
            alert("uspeli ste da napravite gresku svaka cast.");
        }
    });
});
/*
ok prvo sam napravio 2 dugmeta za evro i za kurs evra 
dovuka osam te 2 vrednosti u promenjive
prosto sam ih pomnozio 
dobio sam rezultat na osnovu njega sam napravio if else petlju 
po zadatku
ako mi je vise od 24000 smanjujem za 2000 i ispisujem rezultat u trece polje
ako je manje samo ispisuje rezultat u trece polje
dodao sam i else i ako ne treba 
funckcija se izvrsava kada se klikne dugme izracunaj evre.
ovo je kraj devetog zadatka
*/