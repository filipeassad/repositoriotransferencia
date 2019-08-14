export class RedefinirSenhaTO{

   private _cpf: string;


    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }
}