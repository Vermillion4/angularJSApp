import { Component, OnInit, Injectable } from '@angular/core';
import { Collegue } from '../../shared/domain/collegue';

import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../../shared/service/collegue.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
@Injectable()
export class DetailComponent implements OnInit {
col:Collegue = new Collegue("Undefined","https://img.newatlas.com/20-ufo-houseboat-1.jpg?auto=format%2Ccompress&fit=max&h=670&q=60&w=1000&s=03d926c344b71572315527b357c396c3",10);
 
  constructor(private route:ActivatedRoute,private service:CollegueService) { }

  ngOnInit() {
    let collegue:Promise<Collegue>=this.service.trouverCollegue(this.route.params['pseudo']);
    collegue.then(col=>{this.col = col;});
  }
/*
  selected():Collegue{
    let collegueSelected:Collegue ;
    let collegue:Promise<Collegue>=this.service.trouverCollegue(this.route.params['pseudo']);
    collegue.then(col=>{collegueSelected = col;});
    if(collegueSelected==undefined){
      collegueSelected=   }
    return collegueSelected;
    
  }*/

}
