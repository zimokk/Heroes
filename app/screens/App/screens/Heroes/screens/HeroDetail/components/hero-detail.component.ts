import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core' ;
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from '../../../../../shared/utils/hero';
import { HeroService } from '../../../../../shared/servicies/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.template.html',
    styleUrls: ['app/styles/hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams
    ) {}

    ngOnInit(){
        if (this.routeParams.get('id') !== null) {
        let id = +this.routeParams.get('id');
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        }
        else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }

    goBack(savedHero: Hero = null){
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }

    save() {
        this.heroService
        .save(this.hero)
        .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
    }
}