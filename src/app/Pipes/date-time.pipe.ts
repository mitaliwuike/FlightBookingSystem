import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: any,datetimeFilter : string ):any {
    if(!value) return null;
    if(!datetimeFilter) return value;
    datetimeFilter = datetimeFilter.toLowerCase();
    return value.filter((f:any) => JSON.stringify(f).toLocaleLowerCase().includes(datetimeFilter))
  }

}
