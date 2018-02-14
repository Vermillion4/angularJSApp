import { Component,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent{

  @Input() collegue:Collegue;

  constructor() { }

  jaime() {
    this.collegue.changeNote(10);
  }
  jedeteste() {
    this.collegue.changeNote(-5);
  }
}
