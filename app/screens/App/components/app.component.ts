import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
    from '@angular/router-deprecated';

import { HeroesComponent } from '../screens/Heroes/components/heroes.component';
import { DashboardComponent } from '../screens/Dashboard/components/dashboard.component';
import { HeroDetailComponent } from '../screens/Heroes/screens/HeroDetail/components/hero-detail.component';
import { HeroService } from '../shared/servicies/hero.service';

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
