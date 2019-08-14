export class UtilBuscaCep{

    private _cep: string;
    private _codCidade: number;
    private _cidade: string;
    private _uf: string;
    private _bairro: string;
    private _endereco: string;


    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get codCidade(): number {
        return this._codCidade;
    }

    set codCidade(value: number) {
        this._codCidade = value;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    get uf(): string {
        return this._uf;
    }

    set uf(value: string) {
        this._uf = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(value: string) {
        this._endereco = value;
    }
}