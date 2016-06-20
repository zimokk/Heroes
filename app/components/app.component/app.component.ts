import { Component } from '@angular/core';

import { HeroesComponent } from '../heroes.component/heroes.component';
import { HeroService } from '../../servicies/hero.service/hero.service';

@Component({
    selector : 'my-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [HeroesComponent],
    providers: [HeroService]
})

export class AppComponent{
    title: String = 'Tout of Heroes';
}
