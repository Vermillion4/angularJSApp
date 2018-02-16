import { Component,Input, OnInit } from '@angular/core';
import { Collegue } from '../../shared/domain/collegue';
import { AppComponent } from '../../app.component';
import { UnCollegueComponent } from '../../un-collegue/un-collegue.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

   collegues:Collegue[];//@Input()
  
  constructor(){
    this.collegues=AppComponent.collegues;
  }

  ngOnInit() {
  }

  afficheRow(index:number):boolean{
    return index==0%3;
  }
}
