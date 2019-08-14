export class DtoAuxiliar {

    private _id: string;
    private _descricaoPrincipal: string;
    private _descricaoCompleta: string;
    private _observacao: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get descricaoPrincipal(): string {
        return this._descricaoPrincipal;
    }

    set descricaoPrincipal(value: string) {
        this._descricaoPrincipal = value;
    }

    get descricaoCompleta(): string {
        return this._descricaoCompleta;
    }

    set descricaoCompleta(value: string) {
        this._descricaoCompleta = value;
    }

    get observacao(): string {
        return this._observacao;
    }

    set observacao(value: string) {
        this._observacao = value;
    }
}
