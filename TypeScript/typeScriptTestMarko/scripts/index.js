"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { prikaziFudbalskiKlub } from "./app";
var FudbalskiKlubFunkcije_1 = require("./FudbalskiKlubFunkcije"); // to su 3 instance classe igrac po zadatku iz drugog ts fajla
var FudbalskiKlubFunkcije_2 = require("./FudbalskiKlubFunkcije");
var FudbalskiKlub = /** @class */ (function () {
    function FudbalskiKlub(ID, nazivK, kratakOP, listaIG) {
        this.registarskaOznaka = ID;
        this.nazivKluba = nazivK;
        this.krazakOpis = kratakOP;
        this.listaIgraca = listaIG;
    }
    return FudbalskiKlub;
}());
exports.FudbalskiKlub = FudbalskiKlub;
// klasa igrac po zadatku
// tslint:disable-next-line:max-classes-per-file
var Igrac = /** @class */ (function () {
    function Igrac(iDIgrac, imeIg, prezimeIg, godisteIg, prvaPo) {
        this.registarskaOznaka = iDIgrac;
        this.imeIgraca = imeIg;
        this.prezimeIgraca = prezimeIg;
        this.godisteIgraca = godisteIg;
        this.prvaPostava = prvaPo;
    }
    return Igrac;
}());
exports.Igrac = Igrac;
// pozivanje konstrucktora da napravi objekat u memoriji
var constIgrac = new Igrac(1, "Marko", "Markovic", 1990, true);
console.log("constIgrac");
console.log(constIgrac);
/*
public registarskaOznaka: number;
    public nazivKluba: string;
    public krazakOpis: string;
    public listaIgraca: [IIgrac];
 */
var constFudbalskiKlub = new FudbalskiKlub(1, "partizan klub", "best sports club", [constIgrac]);
console.log("constFudbalskiKlub" + "this is the fully instanced version of one player");
console.log(constFudbalskiKlub);
console.log("this is the 3 instanced igrac from other ts file");
console.log(FudbalskiKlubFunkcije_1.x3);
console.log("this is the one instance of fudbalski klub");
console.log(FudbalskiKlubFunkcije_2.newFudbalskiKlub);
/*
 registarskaOznaka: number;
    imeIgraca: string;
    prezimeIgraca: string;
    godisteIgraca: number;
    prvaPostava: boolean; */
document.getElementById("prikazi").addEventListener("click", function () {
    console.log(FudbalskiKlubFunkcije_2.newFudbalskiKlub);
});
document.getElementById("dodaj").addEventListener("click", function () {
    /*
    public registarskaOznaka: number;
    public imeIgraca: string;
    public prezimeIgraca: string;
    public godisteIgraca: number;
    public prvaPostava: boolean; */
    var regID = (document.getElementById("ID").valueAsNumber);
    var imeIgraca = (document.getElementById("imeIG").value);
    var prezimeIgraca = (document.getElementById("prezIG").value);
    var godisteIgraca = (document.getElementById("godisteIG").valueAsNumber);
    var prvaPostava = (document.getElementById("booleanValue").value);
    if (prvaPostava === "true") {
        var xxx = true;
        console.log("regID +imeIgraca + prezimeIgraca + godisteIgraca + prvaPostava");
        // tslint:disable-next-line:max-line-length
        console.log(regID + " sent by the add function" + "\n" + imeIgraca + " sent by the add function" + "\n" + prezimeIgraca + " sent by the add function" + "\n" + godisteIgraca + " sent by the add function" + "\n" + prvaPostava);
        var xNew = new Igrac(regID, imeIgraca, prezimeIgraca, godisteIgraca, xxx);
        console.log("xNew ovo je novi igrac prosledjen konstruktoru ako je vrednost booleana true");
        console.log(xNew);
    }
    else if (prvaPostava === "false") {
        var xxx = false;
        console.log("regID +imeIgraca + prezimeIgraca + godisteIgraca + prvaPostava");
        // tslint:disable-next-line:max-line-length
        console.log(regID + " sent by the add function" + "\n" + imeIgraca + " sent by the add function" + "\n" + prezimeIgraca + " sent by the add function" + "\n" + godisteIgraca + " sent by the add function" + "\n" + prvaPostava);
        var xNew = new Igrac(regID, imeIgraca, prezimeIgraca, godisteIgraca, xxx);
        console.log("xNew ovo je novi igrac prosledjen konstruktoru ako je vrednost booleana false");
        console.log(xNew);
    }
    else {
        console.log("niste uneli boolean vrednost unesite ili true ili false");
    }
});
document.getElementById("obrisi").addEventListener("click", function () {
    for (var i = 0; i < FudbalskiKlubFunkcije_1.x3.length; i++) {
        var igrac = FudbalskiKlubFunkcije_1.x3[i];
        // console.log("this is the value sent by the for loop");
        // console.log(igrac); 
        var regID = (document.getElementById("ID").valueAsNumber);
        var prvaPostava = (document.getElementById("booleanValue").value);
        if (prvaPostava === "true") {
            console.log("uneti korisnik ne moze da se brise");
        }
        if (prvaPostava === "false") {
            console.log("uklonjen je korisnik sa Id om i sa prvom postavom koja je false");
            FudbalskiKlubFunkcije_1.x3.pop();
            console.log(igrac);
        }
    }
});
var xxxx = (document.getElementById("ID").valueAsNumber);
var value = document.getElementById("ID");
document.getElementById("izmeni").addEventListener("click", function () {
    for (var i = 0; i < FudbalskiKlubFunkcije_1.x3.length; i++) {
        var igrac = FudbalskiKlubFunkcije_1.x3[i];
        console.log(igrac.registarskaOznaka + " " + console.log(xxxx));
        if (igrac.registarskaOznaka === xxxx) {
            var imeIgraca = (document.getElementById("imeIG").value);
            var prezimeIgraca = (document.getElementById("prezIG").value);
            var x = new Igrac(xxxx, imeIgraca, prezimeIgraca, igrac.godisteIgraca, igrac.prvaPostava);
            console.log("igrac je izmenjen");
            console.log(x + " this is the new player");
        }
        else {
            console.log("the user id doesnt math those in memory");
        }
    }
});

//# sourceMappingURL=index.js.map
