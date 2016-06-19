import {Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls:['app/app.style.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit{
    title = 'Tour of Heroes';
    public heroes: Hero[];
    selectedHero: Hero;
    ngOnInit(){
        this.getHeroes();
    }
    constructor(private heroService: HeroService){

    }
    getHeroes(){
        this.heroService.getHeroes()
            .then( 
                heroes=>this.heroes = heroes
            );
    }
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
 }
