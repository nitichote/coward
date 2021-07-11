import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ampfilter'
})
export class AmpPipe implements PipeTransform {
  transform(items:any[], pvcode:string=""): any {
    return items.filter(x =>String(x.code).substr(0,2)==pvcode );
  }

}


@Pipe({
  name: 'tambonfilter'
})
export class TambonPipe implements PipeTransform {
  transform(items:any[], ampcode:string=""): any {
    return items.filter(x =>String(x.code).substr(0,4)==ampcode );
  }

}
