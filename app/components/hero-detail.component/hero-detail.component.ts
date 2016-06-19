import { Component, Input } from '@angular/core' ;

import { Hero } from '../../entity/hero/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.template.html'
})


export class HeroDetailComponent {
@Input()
    hero: Hero;
}