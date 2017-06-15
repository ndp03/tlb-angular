import { Pipe } from '@angular/core';

@Pipe({
    name: 'pascalcase'
})
export class PascalCasePipe {

    transform(value: string): any {
        
        if (!value) return value;
        
        let result = "";
        let arr = value.split(' ');
        if (arr && arr.length > 0) {
            for(var i = 0; i < arr.length; i++) {
                result += this.toPascalCase(arr[i]) + " ";
            }
        }

        return result.trim();
    }

    private toPascalCase(value: string) {
        if (!value) return value;

        value = value.toLowerCase();

        if (value.length > 1) {
            value = value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
        }

        return value;
    }
}