import { Component } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: 'hero-form',
    templateUrl: './hero.form.html'
})
export class HeroFormComponent {

    //defaults
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    //after pushing buttons
    onSubmit() { this.submitted = true; }
    newHero() {
        this.model = new Hero(42, '', '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model, null, 4); }
}