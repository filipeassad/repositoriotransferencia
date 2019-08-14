export class EnPrestadorListaMensagemAppPortalModel {

    private _id: number;
    private _idPrestadorMensagem: number;
    private _mensagem: string;
    private _situacao: number;
    private _dataCadastro: string;
    private _usuarioCadastro: string;
    private _dataInativacao: string;
    private _usuarioInativacao: string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idPrestadorMensagem(): number {
        return this._idPrestadorMensagem;
    }

    set idPrestadorMensagem(value: number) {
        this._idPrestadorMensagem = value;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    set mensagem(value: string) {
        this._mensagem = value;
    }

    get situacao(): number {
        return this._situacao;
    }

    set situacao(value: number) {
        this._situacao = value;
    }

    get dataCadastro(): string {
        return this._dataCadastro;
    }

    set dataCadastro(value: string) {
        this._dataCadastro = value;
    }

    get usuarioCadastro(): string {
        return this._usuarioCadastro;
    }

    set usuarioCadastro(value: string) {
        this._usuarioCadastro = value;
    }

    get dataInativacao(): string {
        return this._dataInativacao;
    }

    set dataInativacao(value: string) {
        this._dataInativacao = value;
    }

    get usuarioInativacao(): string {
        return this._usuarioInativacao;
    }

    set usuarioInativacao(value: string) {
        this._usuarioInativacao = value;
    }
}