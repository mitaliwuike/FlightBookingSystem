import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'origins'
})
export class OriginsPipe implements PipeTransform {

  transform(value: any,OriginFilter : string ):any {
    if(!value) return null;
    if(!OriginFilter) return value;
    OriginFilter = OriginFilter.toLowerCase();
    return value.filter((f:any) => JSON.stringify(f).toLocaleLowerCase().includes(OriginFilter))
    
  }
  

}
