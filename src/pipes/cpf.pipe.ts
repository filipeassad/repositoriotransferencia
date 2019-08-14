import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'cpf'
})
export class CpfPipe implements PipeTransform{
    transform(valor: any): any {
        if(valor){
            if (valor.length <= 14) {
                valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

                valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

                valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            }
        }
        return valor;
    }

}