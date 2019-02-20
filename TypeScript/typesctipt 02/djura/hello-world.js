"use strict";
var fn = function () {
    return 'response';
};
// arrow function
// obicna funkcija radi isto
var fn1 = function () {
    return 'response';
};
var fn_1 = function () { return 'response'; };
var fn_2 = function () {
    var test = 'asd';
    test = '1';
    return 'response';
};
/**
 *
 * @param a broj 1
 * @param b broj 2
 * @param c broj 3
 * @param d broj 4
 */
var cetiri = function (a, b, c, d) {
    if (c === void 0) { c = 0; }
    if (d === void 0) { d = 0; }
    return a + b + c + d;
};
//# sourceMappingURL=hello-world.js.map