import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Hero } from '../utils/hero';

@Injectable()
export class HeroService {
    public  all: Hero[];
    private heroesUrl = 'app/heroes';
    constructor(private http: Http) {
        this.getHeroes();
    };
    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => this.all = response.json().data)
                    .catch(this.handleError);
    };
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0] )
    }
    save(hero: Hero): Promise<void>  {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }
    private post(hero: Hero){
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(res => {
                 res.json().data;
                 this.all.push(
                     new Hero(
                         res.json().data.id,
                          res.json().data.name )
                    );
             })
             .catch(this.handleError);
    }
    private put(hero: Hero) {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                .put(url, JSON.stringify(hero), {headers: headers})
                .toPromise()
                .then((response) => {
                    debugger
                    hero;
                })
                .catch(this.handleError);
    }
    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
                .delete(url, headers)
                .toPromise()
                .catch(this.handleError)
                .then(response => {
                    this.all.splice(
                        this.all.findIndex(h => h === hero),
                        1);
                });
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}