export class ExtratoCabesp {

    private _tipo: string;
    private _dataAtendimento: Date;
    private _numero: number;
    private _nome: string;
    private _descTuss: string;
    private _descricao: string;
    private _valor: number;


    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get dataAtendimento(): Date {
        return this._dataAtendimento;
    }

    set dataAtendimento(value: Date) {
        this._dataAtendimento = new Date(value.toString().replace(/-/g, '\/'));
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get descTuss(): string {
        return this._descTuss;
    }

    set descTuss(value: string) {
        this._descTuss = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(value: number) {
        this._valor = value;
    }
}