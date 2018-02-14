import { Component,Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { AppComponent } from '../app.component';
@Component({
  selector: 'liste-collegues',
  template:`<un-collegue *ngFor="let collegue of collegues" [collegue]="col"></un-collegue>`
})
export class Liste{
    
    @Input() collegues:Collegue[];

    constructor(){

    }

}
