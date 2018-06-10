import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiLinesEllipsis'
})
export class MultiLinesEllipsisPipe implements PipeTransform {

  transform(value: string, characters: number): string {
    if (value.length > characters) {
      let i: number = 0;
      while ( !value.slice(0, characters - i).endsWith(' '||'.') ) { i ++; }
      return value.slice(0, characters - i) + ' ...'
    } else return value;
  }

}
