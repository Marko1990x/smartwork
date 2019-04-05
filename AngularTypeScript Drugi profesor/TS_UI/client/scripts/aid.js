"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AID = (function () {
    function AID(_title, _category, _price) {
        this._title = _title;
        this._category = _category;
        this._price = _price;
    }
    Object.defineProperty(AID.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AID.prototype, "category", {
        get: function () {
            return this._category;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AID.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    return AID;
}());
exports.AID = AID;
