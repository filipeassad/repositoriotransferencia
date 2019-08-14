export class TipoPrestador{
    private _codigo: number;
    private _descricao: string;
    private _conselho: string;
    private _profissao: string;
    private _exibivelAuditor: string;
    private _prestadores: string;


    get codigo(): number {
        return this._codigo;
    }

    set codigo(value: number) {
        this._codigo = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get conselho(): string {
        return this._conselho;
    }

    set conselho(value: string) {
        this._conselho = value;
    }

    get profissao(): string {
        return this._profissao;
    }

    set profissao(value: string) {
        this._profissao = value;
    }

    get exibivelAuditor(): string {
        return this._exibivelAuditor;
    }

    set exibivelAuditor(value: string) {
        this._exibivelAuditor = value;
    }

    get prestadores(): string {
        return this._prestadores;
    }

    set prestadores(value: string) {
        this._prestadores = value;
    }
}