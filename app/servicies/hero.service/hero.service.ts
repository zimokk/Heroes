import { Injectable } from '@angular/core';

import { Hero } from '../../entity/hero/hero';
import { HEROES } from '../../data/mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    };
    getHero(id: number){
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0] )
    }
}