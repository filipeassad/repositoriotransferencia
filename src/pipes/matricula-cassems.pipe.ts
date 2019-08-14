import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'matriculaCassems'
})
export class MatriculaCassemsPipe implements PipeTransform {
    transform(valor: string): string {
        if (valor !== '' && valor !== null && valor !== undefined) {
            let valorFinal = '';
            if (valor.length === 11) {
                valorFinal = valor.substring(0, 7) + '-';
                valorFinal += valor.substring(7, 8) + '.';
                valorFinal += valor.substring(8, 10) + '-';
                valorFinal += valor.substring(10, 11);
                return valorFinal;
            } else {
                if (valor.length === 12) {
                    //XXX.XXXXXXX.XX
                    valorFinal = valor.substring(0, 3) + '.';
                    valorFinal += valor.substring(3, 10) + '.';
                    valorFinal += valor.substring(10, 12) + '.';
                    return valorFinal;
                } else {
                    if (valor.length === 16) {
                        //XXX.XXXXXXX.XX.XX.XX
                        valorFinal = valor.substring(0, 3) + '.';
                        valorFinal += valor.substring(3, 10) + '.';
                        valorFinal += valor.substring(10, 12) + '.';
                        valorFinal += valor.substring(12, 14) + '.';
                        valorFinal += valor.substring(14, 16);
                        return valorFinal;
                    }
                }
            }
        }
        return valor;
    }
}