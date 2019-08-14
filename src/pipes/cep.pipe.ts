import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'cep'
})
export class CepPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            value = value.toString().replace(/\D/g, '');
            return value.substr(0, 5) + '-' + value.substr(5, 3);
        } else {
            return '';
        }
    }
}