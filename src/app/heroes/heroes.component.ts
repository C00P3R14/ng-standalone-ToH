import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
    ) {}
  
  heroes:Hero[] = []

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes
    )
  }

  selectedHero?:Hero

  onSelect(hero:Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}
