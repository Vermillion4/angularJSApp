import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../../shared/domain/collegue';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  collegues:Collegue[];//@Input() 
  constructor() {
    this.collegues=AppComponent.collegues;
  }

  ngOnInit() {
    
  }

}
