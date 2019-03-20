"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentskaSluzba_1 = require("./StudentskaSluzba");
function printSsluzba(IssObj) {
    console.log(IssObj);
}
var myInterface = {
    brojIndexa: 10, imeStudenta: "Marko", prezimeStudenta: "markovic",
    sifraPredmeta: 1001, nazivPredmeta: "programing",
};
printSsluzba(myInterface);
var IspitniRok = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function IspitniRok(brojInd, imeStudenta, prezimeStudenta, sifraPredmeta, nazivPredmeta) {
        this.brojIndexa = brojInd;
        this.imeStudenta = imeStudenta;
        this.prezimeStudenta = prezimeStudenta;
        this.sifraPredmeta = sifraPredmeta;
        this.nazivPredmeta = nazivPredmeta;
    }
    return IspitniRok;
}());
exports.IspitniRok = IspitniRok;
var x = new StudentskaSluzba_1.Printy();
x.printStudents();

//# sourceMappingURL=index.js.map
