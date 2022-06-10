import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destination'
})
export class DestinationPipe implements PipeTransform {

  transform(value: any,destinationFilter : string ):any {
    if(!value) return null;
    if(!destinationFilter) return value;
    destinationFilter = destinationFilter.toLowerCase();
    return value.filter((f:any) => JSON.stringify(f).toLocaleLowerCase().includes(destinationFilter))
  }

}
