"use strict";
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log('distance in meters = ' + distanceInMeters);
        return null;
    };
    Animal.prototype.behave = function (trait) {
        console.log(name + trait);
    };
    return Animal;
}());
//# sourceMappingURL=zadatak2Marko.js.map