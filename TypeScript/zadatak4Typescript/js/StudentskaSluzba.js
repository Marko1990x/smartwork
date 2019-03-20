"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/*
public brojIndexa: number;
    public imeStudenta: string;
    public prezimeStudenta: string;
    public sifraPredmeta: number;
    public nazivPredmeta: string;
*/
var Printy = /** @class */ (function () {
    function Printy() {
    }
    Printy.prototype.printStudents = function () {
        var student1 = new index_1.IspitniRok(1111, "Pera", "Peric", 1, "Osnove Programiranja");
        var student2 = new index_1.IspitniRok(1212, "Branka", "Beric", 2, "filozofija");
        var student3 = new index_1.IspitniRok(1311, "Zoran", "Zoric", 2, "Fizika");
        var x = [student1, student2, student3];
        console.log(x);
    };
    return Printy;
}());
exports.Printy = Printy;

//# sourceMappingURL=StudentskaSluzba.js.map
