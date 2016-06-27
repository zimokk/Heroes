import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../../../shared/utils/hero';
import { HeroService } from '../../../shared/servicies/hero.service';

@Component({
    selector: 'hero-part',
    templateUrl: 'app/templates/hero-part.template.html',
    styleUrls: ['app/styles/heroes.component.css']
})

export class HeroPartComponent {
    @Input() hero: Hero;
    error: any;
    constructor(
        private router: Router,
        private heroService: HeroService) { }
    delete(hero: Hero, event: any) {
        debugger;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                console.dir(res);
            })
            .catch(error => this.error = error);
    }
    onSelect(hero: Hero) {
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.hero.id }]);
    }
}
