import {Beneficiario} from "./beneficiario.model";
export class Usuario{

    private _username: string;
    private _password: string;
    private _beneficiario: Beneficiario;
    private _idFacebook: string;
    private _idGooglePlus: string;
    private _matricula: string;


    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get beneficiario(): Beneficiario {
        return this._beneficiario;
    }

    set beneficiario(value: Beneficiario) {
        this._beneficiario = value;
    }

    get idFacebook(): string {
        return this._idFacebook;
    }

    set idFacebook(value: string) {
        this._idFacebook = value;
    }

    get idGooglePlus(): string {
        return this._idGooglePlus;
    }

    set idGooglePlus(value: string) {
        this._idGooglePlus = value;
    }

    get matricula(): string {
        return this._matricula;
    }

    set matricula(value: string) {
        this._matricula = value;
    }
}