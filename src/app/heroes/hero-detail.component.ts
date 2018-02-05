import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
    template: `
        <h1>Hello Hero Detail Component.</h1>
    `
})
export class HeroDetailComponent implements OnInit{
    
    constructor(
        private route:ActivatedRoute,
        private router:Router,        
    ){}
    ngOnInit(){
        
    }
}