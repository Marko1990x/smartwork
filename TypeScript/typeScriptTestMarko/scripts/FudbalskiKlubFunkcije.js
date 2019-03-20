"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
/*   ovaj deo je vezan za igraca posto njega moram da ubacim u fudbalski klub
registarskaOznaka: number;
    imeIgraca: string;
    prezimeIgraca: string;
    godisteIgraca: number;
    prvaPostava: boolean; */
exports.newIgrac1 = new index_1.Igrac(13, "Nikola", "Nikolic", 1991, true);
exports.newIgrac2 = new index_1.Igrac(14, "Petar", "Petrovic", 1989, true);
exports.newIgrac3 = new index_1.Igrac(15, "Damjan", "Nikolic", 1800, false);
exports.x3 = [exports.newIgrac1, exports.newIgrac2, exports.newIgrac3];
//listaIG: [IIgrac] to listaIG: IIgrac[]
/*  ovaj deo je vezan za fudbalski klub gde ubacujem 3 intance igraca jej
public registarskaOznaka: number;
    public nazivKluba: string;
    public krazakOpis: string;
    public listaIgraca: [IIgrac];
*/
// tslint:disable-next-line:max-line-length
exports.newFudbalskiKlub = new index_2.FudbalskiKlub(1002, "My Sports Club", "Best Club In The Whole World", [exports.newIgrac1, exports.newIgrac2, exports.newIgrac3]);
// jedna instanca fudbalskog kluba

//# sourceMappingURL=FudbalskiKlubFunkcije.js.map
