import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'FormatMobileNumber'
})
export class FormatMobileNumber {

  transform(value: string) {
    if (!value) {
      return value;
    }
    else {
      if(value.length < 10 ) return value;
      return value.substring(0, 4) + " " + value.substring(4, 7) + " " + value.substring(7);
    }

  }
}