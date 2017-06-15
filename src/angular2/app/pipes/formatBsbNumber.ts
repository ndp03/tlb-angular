import { Pipe } from '@angular/core';

@Pipe({
    name: 'formatBsb'
})
export class FormatBsbNumber {

    transform(value: string, args: string[]): any {
        if (!value) return value;

        // return all value string if the value
        // has a character
        //[^\w\s]
        if(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-]+/.test(value)){
            return value;
        }
        
        return value.toString().substring(0, 3) + '-' + value.substring(3);
    }
}