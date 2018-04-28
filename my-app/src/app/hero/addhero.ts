import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'add-hero',
    templateUrl: './addhero.html'
})
export class AddHeroComponent {
    
    @Input()
    heroes;

    addHero(newHero: string) {
        if (newHero) {
            length = this.heroes.length;
            console.log(length);
            this.heroes.push(new Hero(length + 1, newHero));
        }
    }
}