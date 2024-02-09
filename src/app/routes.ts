import { Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


export const routes:Routes = [
    {path:'dashboard', component:DashboardComponent},
    {path:'heroes', component:HeroesComponent}
]