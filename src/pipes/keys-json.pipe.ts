import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'keysJson'
})
export class KeysJsonPipe implements PipeTransform {
    transform(lista: any): any {
        let keys = [];
        Object.keys(lista).forEach(value => {
            keys.push({key: value, value: lista[value]});
        });
        return keys;
    }
}