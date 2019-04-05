"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = (function () {
    function Category(_name, _img) {
        this._name = _name;
        this._img = _img;
    }
    Object.defineProperty(Category.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "img", {
        get: function () {
            return this._img;
        },
        enumerable: true,
        configurable: true
    });
    return Category;
}());
exports.Category = Category;
