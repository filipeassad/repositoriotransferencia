export class BuscaPrestadorTO{

    private _nome: String;
    private _tipoPrestador: number;
    private _especialidade: number;
    private _bairro: String;
    private _municipio: number;


    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get tipoPrestador(): number {
        return this._tipoPrestador;
    }

    set tipoPrestador(value: number) {
        this._tipoPrestador = value;
    }

    get especialidade(): number {
        return this._especialidade;
    }

    set especialidade(value: number) {
        this._especialidade = value;
    }

    get bairro(): String {
        return this._bairro;
    }

    set bairro(value: String) {
        this._bairro = value;
    }

    get municipio(): number {
        return this._municipio;
    }

    set municipio(value: number) {
        this._municipio = value;
    }
}