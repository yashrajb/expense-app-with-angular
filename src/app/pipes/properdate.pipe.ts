import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properdate'
})
export class ProperdatePipe implements PipeTransform {

  transform(value: string): any {
    return value.split("-").reverse().join("-");
  }

}
