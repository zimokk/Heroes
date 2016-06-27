import { Component, Input, trigger, state, style, transition, animate} from '@angular/core' ;

import { Hero } from '../../../shared/utils/hero';

@Component({
    selector: 'dashboard-part',
    templateUrl: 'app/templates/dashboard-part.template.html',
    styleUrls: ['app/styles/dashboard.component.css'],
})

export class DashboardPartComponent {
    @Input() hero: Hero;
}