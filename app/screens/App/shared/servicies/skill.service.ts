import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Skill } from '../utils/skill';

@Injectable()
export class SkillService {
    public all: Skill[];
    constructor() {
        let skill: Skill = new Skill(1, 'SuperPower', 20);
        let skill1: Skill = new Skill(2, 'Invisability', 15);
        let skill2: Skill = new Skill(3, 'SuperSpeed', 15);
        this.all.push(skill, skill1, skill2);
    }
}
