import { Component, Output } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  templateUrl: './hero/hero.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado')
  ];
  myHero = this.heroes[0];

}
