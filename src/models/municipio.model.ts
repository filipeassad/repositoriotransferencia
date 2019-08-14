export class Municipio{

    private _codLocal: number;
    private _descricao: String;
    private _uf: String;
    private _codCentroCusto: number;
    private _regional: string;


    get codLocal(): number {
        return this._codLocal;
    }

    set codLocal(value: number) {
        this._codLocal = value;
    }

    get descricao(): String {
        return this._descricao;
    }

    set descricao(value: String) {
        this._descricao = value;
    }

    get uf(): String {
        return this._uf;
    }

    set uf(value: String) {
        this._uf = value;
    }

    get codCentroCusto(): number {
        return this._codCentroCusto;
    }

    set codCentroCusto(value: number) {
        this._codCentroCusto = value;
    }

    get regional(): string {
        return this._regional;
    }

    set regional(value: string) {
        this._regional = value;
    }
}