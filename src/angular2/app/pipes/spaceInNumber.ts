import { Pipe } from '@angular/core';

// This pipe is primarily for screenreaders to 
// acount number as individual numbers instead the number as a whole
// for example
// 123 should be read as 1 2 3 NOT one hundred and twenty three

@Pipe({
    name: 'spaceInNumber'
})
export class SpaceInNumber {

    transform(value: string): any {
        if (!value) return value;
        return value.toString().split('').join(' ');
    }
}