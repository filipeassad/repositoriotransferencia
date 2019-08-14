import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
    transform(valor: any): any {
        if (valor !== null && valor !== '') {
            let valorString: string = valor.toString().replace(/\D/g, '');
            if (valorString.length === 8 || valorString.length === 9) {
                return valorString.replace(/^(\d{4,5})(\d{4})$/, '$1-$2');
            }
            if (valorString.length === 10 || valorString.length === 11) {
                return valorString.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
            }
            if (valorString.length === 12 || valorString.length === 13) {
                return valorString.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, '+$1 ($2) $3-$4');
            }
            return valorString;
        }
        return valor;
    }

}