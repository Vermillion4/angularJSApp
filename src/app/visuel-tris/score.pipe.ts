import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'

})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value>0?`+ ${value}`:value<0?`${value.toString().replace("-","- ")}`:value;
  }

}