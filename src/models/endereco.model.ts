export class Endereco {

    private _cep: string;
    private _endereco: string;
    private _numero: number;
    private _complemento: string;
    private _bairro: string;

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(value: string) {
        this._endereco = value;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }

    get complemento(): string {
        return this._complemento;
    }

    set complemento(value: string) {
        this._complemento = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }
}
