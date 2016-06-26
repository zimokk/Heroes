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
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_1 = require('../../entity/hero/hero');
var hero_service_1 = require('../../servicies/hero.service/hero.service');
var HeroPartComponent = (function () {
    function HeroPartComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroPartComponent.prototype.delete = function (hero, event) {
        var _this = this;
        debugger;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            console.dir(res);
        })
            .catch(function (error) { return _this.error = error; });
    };
    HeroPartComponent.prototype.onSelect = function (hero) {
    };
    HeroPartComponent.prototype.gotoDetail = function () {
        this.router.navigate(['HeroDetail', { id: this.hero.id }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroPartComponent.prototype, "hero", void 0);
    HeroPartComponent = __decorate([
        core_1.Component({
            selector: 'hero-part',
            templateUrl: 'app/templates/hero-part.template.html',
            styleUrls: ['app/styles/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroPartComponent);
    return HeroPartComponent;
}());
exports.HeroPartComponent = HeroPartComponent;
//# sourceMappingURL=hero-part.component.js.map