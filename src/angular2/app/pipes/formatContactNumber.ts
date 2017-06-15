import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'formatContactNumber'
})
export class FormatContactNumber {

  transform(value: string) {
    if (!value) {
      return value;
    }
    else {
      if(value.length < 10 ) return value;

        if(value.substring(0, 3) === '+61'){
          return value.substring(0, 3) + " " + value.substring(3, 4) + " " + value.substring(4, 8) + " " + value.substring(8);
        }
        else if(value.substring(0,2) === '04'){
          return value.substring(0, 4) + " " + value.substring(4, 7) + " " + value.substring(7);
        }
        else if(value.substring(0,1) === '0'){
          return value.substring(0, 2) + " " + value.substring(2, 6) + " " + value.substring(6);
        }
        else{
          return value;
        }
    }

  }
}