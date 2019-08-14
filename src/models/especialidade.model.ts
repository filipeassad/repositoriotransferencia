export class Especialidade{

    private _codEspecialidade: number;
    private _descricao: string;
    private _sexoPermitido: string;
    private _idadeMinima: number;
    private _idadeMaxima: number;
    private _codCbos: number;
    private _exibivelPrestador: string;
    private _divulgaInternet: string;
    private _quantidadeGuiaPorEspecialidade: number;
    private _unidadeGuiaPorEspecialidade: string;


    get codEspecialidade(): number {
        return this._codEspecialidade;
    }

    set codEspecialidade(value: number) {
        this._codEspecialidade = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get sexoPermitido(): string {
        return this._sexoPermitido;
    }

    set sexoPermitido(value: string) {
        this._sexoPermitido = value;
    }

    get idadeMinima(): number {
        return this._idadeMinima;
    }

    set idadeMinima(value: number) {
        this._idadeMinima = value;
    }

    get idadeMaxima(): number {
        return this._idadeMaxima;
    }

    set idadeMaxima(value: number) {
        this._idadeMaxima = value;
    }

    get codCbos(): number {
        return this._codCbos;
    }

    set codCbos(value: number) {
        this._codCbos = value;
    }

    get exibivelPrestador(): string {
        return this._exibivelPrestador;
    }

    set exibivelPrestador(value: string) {
        this._exibivelPrestador = value;
    }

    get divulgaInternet(): string {
        return this._divulgaInternet;
    }

    set divulgaInternet(value: string) {
        this._divulgaInternet = value;
    }

    get quantidadeGuiaPorEspecialidade(): number {
        return this._quantidadeGuiaPorEspecialidade;
    }

    set quantidadeGuiaPorEspecialidade(value: number) {
        this._quantidadeGuiaPorEspecialidade = value;
    }

    get unidadeGuiaPorEspecialidade(): string {
        return this._unidadeGuiaPorEspecialidade;
    }

    set unidadeGuiaPorEspecialidade(value: string) {
        this._unidadeGuiaPorEspecialidade = value;
    }
}