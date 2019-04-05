"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IspitniRok_1 = require("./classes/IspitniRok");
var rokovi = [];
rokovi.push(new IspitniRok_1.IspitniRok(1111, 'Pera', 'Perić', 1, 'Osnove programiranja'));
rokovi.push(new IspitniRok_1.IspitniRok(1212, 'Branka', 'Berić', 2, 'Fizika'));
rokovi.push(new IspitniRok_1.IspitniRok(1311, 'Zoran', 'Zorić', 2, 'Fizika'));
function nadjiStudenta(ime, prezime, predmet) {
    for (var i in rokovi) {
        if (rokovi[i].imeStudenta === ime
            && rokovi[i].prezimeStudenta === prezime) {
            if (predmet) {
                if (rokovi[i].sifraPredmeta === predmet) {
                    return Number(i);
                }
            }
            else {
                return Number(i);
            }
        }
    }
    return -1;
}
function unesiIspitniRok(noviRok) {
    rokovi.push(new IspitniRok_1.IspitniRok(noviRok.brojIndeksa, noviRok.imeStudenta, noviRok.prezimeStudenta, noviRok.sifraPredmeta, noviRok.nazivPredmeta));
}
exports.unesiIspitniRok = unesiIspitniRok;
function obrisiIspitniRok(ime, prezime, predmet) {
    var findMeh = nadjiStudenta(ime, prezime, predmet);
    if (findMeh !== -1) {
        rokovi.splice(findMeh, 1);
        return '<p>Uspesno brisanje!</p>';
    }
    else {
        return '<p>Ne postoji student sa zadatim parametrima.</p>';
    }
}
exports.obrisiIspitniRok = obrisiIspitniRok;
function izmeniIspitniRok(oldStudent, newStudent) {
    var findMeh = nadjiStudenta(oldStudent.imeStudenta, oldStudent.prezimeStudenta, oldStudent.sifraPredmeta);
    if (findMeh !== -1) {
        rokovi[findMeh] = newStudent;
        return '<p>Uspesna izmena</p>';
    }
    else {
        return '<p>Ne postoji student sa zadatim parametrima.</p>';
    }
}
exports.izmeniIspitniRok = izmeniIspitniRok;
function prikaziIspitniRok(ime, prezime) {
    var findMeh = nadjiStudenta(ime, prezime);
    if (findMeh !== -1) {
        var prep = '<table><thead><tr><th>Broj Indeksa</th><th>Ime</th><th>Prezime</th><th>Predmet</th></tr></thead><tbody><tr>';
        prep += '<td>' + rokovi[findMeh].brojIndeksa + '</td>';
        prep += '<td>' + rokovi[findMeh].imeStudenta + '</td>';
        prep += '<td>' + rokovi[findMeh].prezimeStudenta + '</td>';
        prep += '<td>' + rokovi[findMeh].nazivPredmeta + '</td>';
        prep += '</tr></tbody></table>';
        return prep;
    }
    else {
        return '<p>Ne postoji student sa zadatim parametrima.<p>';
    }
}
exports.prikaziIspitniRok = prikaziIspitniRok;
function prikaziSveRokove() {
    var prep = '<table><thead><tr><th>Broj Indeksa</th><th>Ime</th><th>Prezime</th><th>Predmet</th></tr></thead><tbody>';
    for (var i in rokovi) {
        prep += '<tr>';
        prep += '<td>' + rokovi[i].brojIndeksa + '</td>';
        prep += '<td>' + rokovi[i].imeStudenta + '</td>';
        prep += '<td>' + rokovi[i].prezimeStudenta + '</td>';
        prep += '<td>' + rokovi[i].nazivPredmeta + '</td>';
        prep += '</tr>';
    }
    prep += '</tbody></table>';
    return prep;
}
exports.prikaziSveRokove = prikaziSveRokove;
