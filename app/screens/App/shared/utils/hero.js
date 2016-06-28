"use strict";
var Hero = (function () {
    function Hero() {
    }
    Object.defineProperty(Hero.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "skills", {
        get: function () {
            return this._skills;
        },
        set: function (skills) {
            this._skills = skills;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map