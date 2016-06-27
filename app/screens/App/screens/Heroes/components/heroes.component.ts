import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../../../shared/utils/hero';
import { HeroService } from '../../../shared/servicies/hero.service';
import { HeroDetailComponent } from '../screens/HeroDetail/components/hero-detail.component';
import { HeroPartComponent } from './hero-part.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.template.html',
    styleUrls: ['app/styles/heroes.component.css'],
    directives: [HeroDetailComponent, HeroPartComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;
    constructor(
        private router: Router,
        private heroService: HeroService) {
            this.heroes = this.heroService.all;
         }
    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error); // TODO: Display error message
    }
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }
    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }
    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
            if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message 
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
