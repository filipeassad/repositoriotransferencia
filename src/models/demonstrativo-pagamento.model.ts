export class DemonstrativoPagamento{

    private _sequencia: number;

    private _ano: number;

    private _cpfCnpj: string;

    private _cpfTit: string;

    private _dataNascimento: Date;

    private _nome: string;

    private _pfjIdTitular: number;

    private _sigla: string;

    private _tipoDependencia: string;

    private _valor: number;


    get sequencia(): number {
        return this._sequencia;
    }

    set sequencia(value: number) {
        this._sequencia = value;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(value: number) {
        this._ano = value;
    }

    get cpfCnpj(): string {
        return this._cpfCnpj;
    }

    set cpfCnpj(value: string) {
        this._cpfCnpj = value;
    }

    get cpfTit(): string {
        return this._cpfTit;
    }

    set cpfTit(value: string) {
        this._cpfTit = value;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(value: Date) {
        this._dataNascimento = new Date(value.toString().replace(/-/g, '\/'));
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get pfjIdTitular(): number {
        return this._pfjIdTitular;
    }

    set pfjIdTitular(value: number) {
        this._pfjIdTitular = value;
    }

    get sigla(): string {
        return this._sigla;
    }

    set sigla(value: string) {
        this._sigla = value;
    }

    get tipoDependencia(): string {
        return this._tipoDependencia;
    }

    set tipoDependencia(value: string) {
        this._tipoDependencia = value;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(value: number) {
        this._valor = value;
    }
}