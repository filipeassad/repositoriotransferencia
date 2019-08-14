import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'keysEnum'
})
export class KeysEnumPipe implements PipeTransform {
    transform(lista: any): any {
        let keys = [];
        Object.keys(lista).forEach(value => {
            if (!isNaN(parseInt(value, 10))) {
                keys.push({key: lista[value], value: value});
            }
        });
        return keys;
    }
}