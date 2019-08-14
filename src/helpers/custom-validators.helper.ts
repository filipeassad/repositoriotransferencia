import {FormControl} from "@angular/forms";

export class CustomValidatorsHelper {

    private _valorAComparar: string;

    get valorAComparar(): string {
        return this._valorAComparar;
    }

    set valorAComparar(value: string) {
        this._valorAComparar = value;
    }

    equals(field: FormControl){
        return (field.value == this._valorAComparar)? null : {
            equals: false
        }
    }

    validEmail(field: FormControl){
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value))? null : {
            validEmail: false
        }
    }

    validTelefoneMasked(field: FormControl){
        return (/^\(\d{2}\)\s\d{4}-\d{4}$/.test(field.value))? null : {
            validTelefoneMasked: false
        }
    }

    validCelularMasked(field: FormControl){
        return (/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(field.value))? null : {
            validCelularMasked: false
        }
    }

    validCepMasked(field: FormControl){
        return (/^\d{5}-\d{3}$/.test(field.value))? null : {
            validCepMasked: false
        }
    }

}