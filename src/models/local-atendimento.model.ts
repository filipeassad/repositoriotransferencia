export class LocalAtendimento{
    private _codLocalAtendimento: number;
    private _codCredenciado: number;
    private _endereco: string;
    private _bairro: string;
    private _cep: string;
    private _fone: string;
    private _codMunicipio: number;
    private _descricaoMunicipio: string;
    private _uf: string;


    get codLocalAtendimento(): number {
        return this._codLocalAtendimento;
    }

    set codLocalAtendimento(value: number) {
        this._codLocalAtendimento = value;
    }

    get codCredenciado(): number {
        return this._codCredenciado;
    }

    set codCredenciado(value: number) {
        this._codCredenciado = value;
    }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(value: string) {
        this._endereco = value;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get fone(): string {
        return this._fone;
    }

    set fone(value: string) {
        this._fone = value;
    }

    get codMunicipio(): number {
        return this._codMunicipio;
    }

    set codMunicipio(value: number) {
        this._codMunicipio = value;
    }

    get descricaoMunicipio(): string {
        return this._descricaoMunicipio;
    }

    set descricaoMunicipio(value: string) {
        this._descricaoMunicipio = value;
    }

    get uf(): string {
        return this._uf;
    }

    set uf(value: string) {
        this._uf = value;
    }
}