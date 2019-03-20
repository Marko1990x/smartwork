"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FudbalskiKlubFunkcije_1 = require("./FudbalskiKlubFunkcije");
function prikaziFudbalskiKlub() {
    document.getElementById("prikazi").addEventListener("click", function () {
        console.log(FudbalskiKlubFunkcije_1.newFudbalskiKlub);
    });
}
exports.prikaziFudbalskiKlub = prikaziFudbalskiKlub;

//# sourceMappingURL=app.js.map
