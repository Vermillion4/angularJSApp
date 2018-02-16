import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../../shared/service/collegue.service';

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
    this.service.aimerUnCollegue(this.pseudo);
  }

  jedeteste(){
    this.service.detesterUnCollegue(this.pseudo);
  }

}
