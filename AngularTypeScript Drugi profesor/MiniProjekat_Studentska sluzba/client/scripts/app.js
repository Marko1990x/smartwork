"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IspitniRok_1 = require("./classes/IspitniRok");
var StudentskaSluzba = require("./StudentskaSluzba");
var display = document.getElementById('display');
var kraj = document.getElementById('kraj');
var zarok = document.getElementById('zarok');
var nadji = document.getElementById('nadji');
var izmeni = document.getElementById('izmeni');
var brisi = document.getElementById('brisi');
var unos = document.getElementById('unos');
display.innerHTML = StudentskaSluzba.prikaziSveRokove();
nadji.addEventListener('click', function () {
    display.innerHTML = StudentskaSluzba.prikaziSveRokove();
});
function checkInputs() {
    var inputs = document.getElementsByTagName('input');
    if (!(inputs[0] instanceof HTMLInputElement)) {
        throw new Error('Expected "inputs" to be HTMLInputElement, it wasn\'t!');
    }
    for (var i in inputs) {
        if (inputs[i].value === '') {
            return false;
        }
    }
    return true;
}
izmeni.addEventListener('click', function () {
    var prep = '<div><p>Nadji studenta:</p><input type="number" id="staroindeks" placeholder="Broj Indeksa.." />';
    prep += '<input type="text" id="staroime" placeholder="Ime.." />';
    prep += '<input type="text" id="staroprezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="staropredmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="text" id="staropredmets" placeholder="Naziv Predmeta.." /></div>';
    prep += '<div><p>Izmenjeni podatci:</p><input type="number" id="novoindeks" placeholder="Broj Indeksa.." />';
    prep += '<input type="text" id="novoime" placeholder="Ime.." />';
    prep += '<input type="text" id="novoprezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="novopredmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="string" id="novopredmets" placeholder="Naziv Predmeta.." /></div>';
    prep += '<input type="button" id="btnUnesi" value="Izmeni" /></div>';
    display.innerHTML = prep;
    var unesi = document.getElementById('btnUnesi');
    unesi.addEventListener('click', function () {
        if (!checkInputs()) {
            alert('Please fill in all fields!');
        }
        else {
            var staroindeks = document.getElementById('staroindeks');
            var staroime = document.getElementById('staroime');
            var staroprezime = document.getElementById('staroprezime');
            var staropredmetn = document.getElementById('staropredmetn');
            var staropredmets = document.getElementById('staropredmets');
            var novoindeks = document.getElementById('novoindeks');
            var novoime = document.getElementById('novoime');
            var novoprezime = document.getElementById('novoprezime');
            var novopredmetn = document.getElementById('novopredmetn');
            var novopredmets = document.getElementById('novopredmets');
            display.innerHTML = StudentskaSluzba.izmeniIspitniRok(new IspitniRok_1.IspitniRok(Number(staroindeks.value), staroime.value, staroprezime.value, Number(staropredmetn.value), staropredmets.value), new IspitniRok_1.IspitniRok(Number(novoindeks.value), novoime.value, novoprezime.value, Number(novopredmetn.value), novopredmets.value));
            setTimeout(function () {
                display.innerHTML = StudentskaSluzba.prikaziSveRokove();
            }, 2500);
        }
    });
});
brisi.addEventListener('click', function () {
    var prep = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="predmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;
    var unesi = document.getElementById('btnUnesi');
    unesi.addEventListener('click', function () {
        var ime = document.getElementById('ime');
        var prezime = document.getElementById('prezime');
        var predmetn = document.getElementById('predmetn');
        display.innerHTML = StudentskaSluzba.obrisiIspitniRok(ime.value, prezime.value, Number(predmetn.value));
        setTimeout(function () {
            display.innerHTML = StudentskaSluzba.prikaziSveRokove();
        }, 2500);
    });
});
unos.addEventListener('click', function () {
    var prep = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="number" id="index" placeholder="Index.." />';
    prep += '<input type="number" id="predmetn" placeholder="Sifra Predmeta.." />';
    prep += '<input type="text" id="predmets" placeholder="Predmet.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;
    var unesi = document.getElementById('btnUnesi');
    unesi.addEventListener('click', function () {
        var ime = document.getElementById('ime');
        var prezime = document.getElementById('prezime');
        var index = document.getElementById('index');
        var predmetn = document.getElementById('predmetn');
        var predmets = document.getElementById('predmets');
        StudentskaSluzba.unesiIspitniRok(new IspitniRok_1.IspitniRok(Number(index.value), ime.value, prezime.value, Number(predmetn.value), predmets.value));
        alert('Uspesan Unos!');
        display.innerHTML = StudentskaSluzba.prikaziSveRokove();
    });
});
zarok.addEventListener('click', function () {
    var prep = '<input type="text" id="ime" placeholder="Ime.." />';
    prep += '<input type="text" id="prezime" placeholder="Prezime.." />';
    prep += '<input type="button" id="btnUnesi" value="Prikazi" />';
    display.innerHTML = prep;
    var unesi = document.getElementById('btnUnesi');
    unesi.addEventListener('click', function () {
        var ime = document.getElementById('ime');
        var prezime = document.getElementById('prezime');
        display.innerHTML = StudentskaSluzba.prikaziIspitniRok(ime.value, prezime.value);
    });
});
kraj.addEventListener('click', function () {
    alert('Kraj');
});
