import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../../entity/hero/hero';
import { HeroService } from '../../servicies/hero.service/hero.service';
import { HeroDetailComponent } from '../hero-detail.component/hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.template.html',
    styleUrls:['app/styles/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{
    public heroes: Hero[];
    selectedHero: Hero;
    ngOnInit(){
        this.getHeroes();
    }
    constructor(private heroService: HeroService, private router:Router){

    }
    getHeroes(){
        this.heroService.getHeroes()
            .then( 
                heroes => this.heroes = heroes
            );
    }
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
    gotoDetail(){
        this.router.navigate(['HeroDetail', {
             id: this.selectedHero.id
            }]
        )
    }
 }
