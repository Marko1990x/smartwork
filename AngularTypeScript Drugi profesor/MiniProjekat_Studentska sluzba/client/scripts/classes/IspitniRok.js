"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IspitniRok = (function () {
    function IspitniRok(brojIndeksa, imeStudenta, prezimeStudenta, sifraPredmeta, nazivPredmeta) {
        this.brojIndeksa = brojIndeksa;
        this.imeStudenta = imeStudenta;
        this.prezimeStudenta = prezimeStudenta;
        this.sifraPredmeta = sifraPredmeta;
        this.nazivPredmeta = nazivPredmeta;
    }
    IspitniRok.prototype.ispisSvePodatke = function () {
        throw new Error("Method not implemented.");
    };
    return IspitniRok;
}());
exports.IspitniRok = IspitniRok;
