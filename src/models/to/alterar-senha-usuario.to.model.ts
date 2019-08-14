export class AlterarSenhaUsuarioTO{

    private _login: string;
    private _senhaAtual: string;
    private _novaSenha: string;
    private _confirmarNovaSenha: string;


    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get senhaAtual(): string {
        return this._senhaAtual;
    }

    set senhaAtual(value: string) {
        this._senhaAtual = value;
    }

    get novaSenha(): string {
        return this._novaSenha;
    }

    set novaSenha(value: string) {
        this._novaSenha = value;
    }

    get confirmarNovaSenha(): string {
        return this._confirmarNovaSenha;
    }

    set confirmarNovaSenha(value: string) {
        this._confirmarNovaSenha = value;
    }
}