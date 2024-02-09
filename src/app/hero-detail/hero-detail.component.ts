import { Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
@Input() hero?:Hero
constructor(
  private route:ActivatedRoute,
  private heroService:HeroService,
  private location:Location
) {}

ngOnInit(): void {
  this.getHero()
}

getHero(): void {
  const id:number = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(
    (hero) => this.hero = hero
  )
}
}
