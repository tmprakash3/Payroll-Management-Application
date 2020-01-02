import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name: 'imgString', 
        pure: false
    })

export class ImgStringPipe implements PipeTransform {
  transform(value: string ): any {
    if(value) {
        return value.charAt(0).toUpperCase();
    }
  }
}