import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'monetarioBrasil'
})
export class MonetarioBrasilPipe implements PipeTransform {

    transform(value: number): string {
        let currencySign: string = 'R$ ';
        let decimalLength: number = 2;
        let chunkDelimiter: string = '.';
        let decimalDelimiter: string = ',';
        let chunkLength: number = 3;

        let result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        let num = Number(value).toFixed(Math.max(0, ~~decimalLength));

        return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    }
}