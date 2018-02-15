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

  collegues:UnCollegueComponent[];
  @Input() infos:AppComponent;
  constructor(){
    this.collegues=this.infos.collegues.map(collegue=>new UnCollegueComponent());
  }

  ngOnInit() {
  }

}
