import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'cnpj'
})
export class CnpjPipe implements PipeTransform{
    transform(valor: any): any {
        if(valor){
            if (valor.length <= 14) {
                valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");

                valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

                valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");

                valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            }
        }
        return valor;
    }

}