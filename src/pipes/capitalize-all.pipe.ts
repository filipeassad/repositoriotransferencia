import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'capitalizeAll'
})
export class CapitalizeAllPipe implements PipeTransform{
    transform(valor: any): any {
        if(valor != '' && valor != null) {
            return valor.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        }else{
            return valor;
        }
    }

}