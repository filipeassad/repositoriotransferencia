export class RedefinirSenhaTO{

    private _matriculaCassems: string;


    get matriculaCassems(): string {
        return this._matriculaCassems;
    }

    set matriculaCassems(value: string) {
        this._matriculaCassems = value;
    }
}