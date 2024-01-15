import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    }
    
    let newValue= value.substring(0,length);
    return `${newValue}...`;
  }

}
