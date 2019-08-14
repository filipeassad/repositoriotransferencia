export class UsuarioCadastroTO{

    private _matriculaCassems: string;
    private _cpf: string;
    private _email: string;
    private _emailConfirmar: string;
    private _dataNascimento: string;
    private _aceiteTermo: boolean;


    get matriculaCassems(): string {
        return this._matriculaCassems;
    }

    set matriculaCassems(value: string) {
        this._matriculaCassems = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get emailConfirmar(): string {
        return this._emailConfirmar;
    }

    set emailConfirmar(value: string) {
        this._emailConfirmar = value;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }

    set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    get aceiteTermo(): boolean {
        return this._aceiteTermo;
    }

    set aceiteTermo(value: boolean) {
        this._aceiteTermo = value;
    }
}