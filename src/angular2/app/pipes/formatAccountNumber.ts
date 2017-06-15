import { Pipe } from '@angular/core';

@Pipe({
    name: 'formatAccountNumber'
})
export class FormatAccountNumber {

    transform(value: string): any {
        if (!value) return value;

        // TODO : have to confirm this logic for account bank account ? e.g. how many digits ?
        return value.toString().substring(0, 4) + ' ' + value.substring(4);
    }
}