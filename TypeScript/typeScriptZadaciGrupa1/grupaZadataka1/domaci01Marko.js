"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// zadatak 1
// tslint:disable: no-inferrable-types
var string1 = 'This is my stringy';
var broj1 = 1;
var boolean = true;
var boolean2 = false;
var test = function (param1, param2, param3) {
    if (param3 === true) {
        // tslint:disable-next-line:max-line-length
        return console.log('zadatak 1: ----boolean-prosledjen-true------ \n' + 'vrednost stringa = ' + param1 + '\n' + 'vrednost broja =' + broj1 + '\n' + 'vrednost booleana = ' + boolean);
    }
    else {
        return 'boolean koji ste prosledili je false';
    }
};
// zadatak 2
var nizbrojeva1 = [1, 5, 10, 15, 20];
var nizBrojeva2 = [3, 7, 113, 145, 200];
var rows = function (row1, row2) {
    console.log('this is the number row 1 before spread ' + row1);
    console.log('this is the number row 2 before spread ' + row2);
    var nizSpread = [-10, -5].concat(row1, [9], row2);
    console.log('Made a new row and added some extra numbers');
    console.log('this is the final number row with spread = ' + nizSpread);
    return null;
};
// zadatak 3
function hranaFunckija(hranaObj) {
    console.log('ovo je naziv hrane: ' + hranaObj.naziv + '\n' + 'ovo je kalorijska vrednost hrane ' + hranaObj.kalorije);
}
var Hrana = /** @class */ (function () {
    function Hrana(hranaN, nb1) {
        this.nazivHrane = hranaN;
        this.brojStrane = nb1;
    }
    Hrana.prototype.listAll = function () {
        return console.log('this is the return form the function + \n' + this.nazivHrane + this.brojStrane);
    };
    return Hrana;
}());
var NovaHrana = /** @class */ (function (_super) {
    __extends(NovaHrana, _super);
    function NovaHrana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NovaHrana;
}(Hrana));
// pozivi funkcija
console.log(test(string1, broj1, boolean)); // sa boolean = true
console.log(test(string1, broj1, boolean2)); // false
console.log('----------------Pocetak-Zadatka-2---------------- \n');
rows(nizbrojeva1, nizBrojeva2);
console.log('----------------kraj-zadatka-2------------------- \n');
console.log('----------------Pocetak-Zadataka-3--------------- \n');
var mojaHrana = { naziv: 'Sarma je moja omiljena hrana', kalorije: 100, energetskaVrednost: 200 };
// tslint:disable-next-line: max-line-length
hranaFunckija(mojaHrana); // funckciji interfacu je prosledjen objekat
/* napomena kada imam vise parametara ne pravi problem, kada imam manjak parametara javlja mi gresku kao undefined za tak parametar */
console.log('----------------kraj-Zadataka-3--------------- \n');
console.log('----------------pocetak-Zadataka-4--------------- \n');
var hrana = new Hrana(['this is my food 1', 'this is my food 2', 'this is my food 3'], 10);
console.log(hrana);
// klasi i njenim konstruktoru su prosledjeni parametri izgleda ok
console.log('----------------kraj-Zadataka-4--------------- \n');
console.log('----------------pocetak-Zadataka-5--------------- \n');
var extendovanaKlasa = new NovaHrana(['this is my new food 1', 'this is my new food 2', 'this is my new food 3'], 69);
console.log(extendovanaKlasa);
console.log('----------------kraj-Zadataka-5--------------- \n');
//# sourceMappingURL=domaci01Marko.js.map