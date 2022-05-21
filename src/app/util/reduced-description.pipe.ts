import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reducedDescription'})
export class ReducedDescription implements PipeTransform {
    transform(text: string, truncIn: number): string {
        if (text.length > truncIn) {
            return (text.substr(0, truncIn) + '...')
        }
        else {
            return text
        }
    }
}