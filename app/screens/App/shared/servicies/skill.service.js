"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var skill_1 = require('../utils/skill');
var SkillService = (function () {
    function SkillService() {
        var skill = new skill_1.Skill(1, 'SuperPower', 20);
        var skill1 = new skill_1.Skill(2, 'Invisability', 15);
        var skill2 = new skill_1.Skill(3, 'SuperSpeed', 15);
        this.all.push(skill, skill1, skill2);
    }
    SkillService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SkillService);
    return SkillService;
}());
exports.SkillService = SkillService;
//# sourceMappingURL=skill.service.js.map