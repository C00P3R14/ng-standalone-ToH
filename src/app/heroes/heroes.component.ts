import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) {}
  
  heroes:Hero[] = []

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes
    )
  }

  selectedHero?:Hero

  onSelect(hero:Hero) {
    this.selectedHero = hero
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}
