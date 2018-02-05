import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
    imports:[
        HeroRoutingModule
    ],
    declarations:[
        HeroListComponent,
        HeroDetailComponent
    ],
    providers:[
        
    ]
})

export class HeroesModule { }