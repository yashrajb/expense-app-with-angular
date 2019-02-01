import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
@Pipe({
  name: 'showampm'
})
export class ShowampmPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value,"hh:mm").format("hh:mm a");
  }

}
