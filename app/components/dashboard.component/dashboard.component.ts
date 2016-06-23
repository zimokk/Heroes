import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from '../../entity/hero/hero';
import { HeroService } from '../../servicies/hero.service/hero.service';
import { DashboardPartComponent } from '../dashboard-part.component/dashboard-part.component';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.template.html',
    styleUrls: ['app/styles/dashboard.component.css'],
    directives: [DashboardPartComponent]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private router: Router, private heroService: HeroService){

    }

    ngOnInit(){
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero){
        let link = ['HeroDetail',{ id:hero.id }];
        this.router.navigate(link);
    }
}