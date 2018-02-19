import { Pipe, PipeTransform } from '@angular/core';
import { ScorePipe } from './score.pipe';
import { ParseSpan } from '@angular/compiler';

@Pipe({
  name: 'colorScore'
})
export class ColorScorePipe extends ScorePipe {

  transform(value: any, args?: any): any {
    value=(super.transform(Number.parseInt(value),args));
   
    if(value == undefined){
      return value;
    }
    if(value==0){
      return value;
    }
    if(value.match("[+]")){
      let color="success";
      if(args!=undefined && args[0]!=undefined){
        color=args[0];
      }
      return `<span class='text-${color}'>${value}</span>`;
    }
    if(value.match('[-]')){
      let colorBis="danger";
      if(args!=undefined && args.length>=2){
        colorBis=args[1];
      }
      return `<span class='text-${colorBis}'>${value}</span>`;
    }
    
  }

}
