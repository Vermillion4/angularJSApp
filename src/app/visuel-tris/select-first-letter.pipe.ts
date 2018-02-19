import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Pipe({
  name: 'selectFirstLetter'
})
export class SelectFirstLetterPipe implements PipeTransform {

  transform(value: Collegue[], args?: any): any {
    if(args == undefined){
      return value;
    }
    let result:Collegue[]=[];
    value.filter(collegue=>{
      if(collegue.nom.startsWith(args)){
        result.push(collegue);
        return true;
      }   
      return false;
    }, result);
    
    return result;
  }
}
