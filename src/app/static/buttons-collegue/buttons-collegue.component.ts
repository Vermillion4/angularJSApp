import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../../shared/service/collegue.service';
import {  AppComponent } from '../../app.component';
@Component({
  selector: 'buttonsCollegue',
  templateUrl: './buttons-collegue.component.html',
  styleUrls: ['./buttons-collegue.component.css']
})
export class ButtonsCollegueComponent implements OnInit {

  @Input() pseudo:string;

  constructor(private service:CollegueService) { }

  ngOnInit() {
  }

  jaime(){
    //this.service.aimerUnCollegue(this.pseudo);
    //Sans acces a localhost:8080
    AppComponent.collegues.filter((col)=>{
      if(col.nom==this.pseudo){
        col.changeNote(10);
      }
    });
  }

  jedeteste(){
    //this.service.detesterUnCollegue(this.pseudo);
    //Sans acces au serveur http.
    AppComponent.collegues.filter((col)=>{
      if(col.nom==this.pseudo){
        col.changeNote(-5);
      }
    });
  }

}
