import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from "./hero/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero/hero-detail.component";

const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CustomRouters { }