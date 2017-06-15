import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trunc30Chars'})
export class Trunc30Chars implements PipeTransform {
  constructor() {
  }

  transform(content:any) {
    var first = (content.length <= 30)? content : content.substr(0, 30);
    var trunc = (content.length > 30)? '&hellip;' : '';
   
    return '<span role="presentation">' + first + trunc + '</span>' + '<span class="ScreenReader">'+ content +'</span>';
  }
}