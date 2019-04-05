"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(user, _pass) {
        this.user = user;
        this._pass = _pass;
    }
    ;
    Object.defineProperty(User.prototype, "pass", {
        get: function () {
            return this._pass;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
