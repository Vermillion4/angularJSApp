import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../../app.component';
import { Collegue } from '../../shared/domain/collegue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  providers:[NgbCarouselConfig]
})
export class CarrouselComponent implements OnInit{

  collegues:Collegue[];
  constructor(config: NgbCarouselConfig,private route:ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.collegues=AppComponent.collegues;
  }

  ngOnInit() {
  }

  /*@ViewChild(AppComponent)
  set formCollegue(collegues: Collegue[]) {
    this.collegues = collegues;
  };*/
}
