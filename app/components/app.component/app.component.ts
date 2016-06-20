import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } 
    from '@angular/router-deprecated';

import { HeroesComponent } from '../heroes.component/heroes.component';
import { DashboardComponent } from '../dashboard.component/dashboard.component';
import { HeroDetailComponent } from '../hero-detail.component/hero-detail.component';
import { HeroService } from '../../servicies/hero.service/hero.service';

@Component({
    selector : 'my-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent{
    title: String = 'Tout of Heroes';
}
