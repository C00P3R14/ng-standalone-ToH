import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  
  heroes:Hero[] = HEROES

  selectedHero?:Hero

  onSelect(hero:Hero) {
    this.selectedHero = hero
  }
}
