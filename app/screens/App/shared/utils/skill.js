"use strict";
var Skill = (function () {
    function Skill(id, name, cost) {
        this._id = id;
        this._cost = cost;
        this._name = name;
    }
    Object.defineProperty(Skill.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (cost) {
            this._cost = cost;
        },
        enumerable: true,
        configurable: true
    });
    return Skill;
}());
exports.Skill = Skill;
//# sourceMappingURL=skill.js.map