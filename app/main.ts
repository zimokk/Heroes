import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './servicies/in-memory-data/in-memory-data.service';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './components/app.component/app.component';

bootstrap(AppComponent, [ HTTP_PROVIDERS,
    {
        provide: XHRBackend, useClass: InMemoryBackendService
    },
    {
        provide: SEED_DATA, useClass: InMemoryDataService
    }
]);
