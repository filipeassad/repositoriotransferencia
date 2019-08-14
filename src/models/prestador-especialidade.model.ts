export class PrestadorEspecialidade {

    private _codCredenciado: string;
    private _codEspecialidade: string;
    private _descricaoEspecialidade: string;


    get codCredenciado(): string {
        return this._codCredenciado;
    }

    set codCredenciado(value: string) {
        this._codCredenciado = value;
    }

    get codEspecialidade(): string {
        return this._codEspecialidade;
    }

    set codEspecialidade(value: string) {
        this._codEspecialidade = value;
    }

    get descricaoEspecialidade(): string {
        return this._descricaoEspecialidade;
    }

    set descricaoEspecialidade(value: string) {
        this._descricaoEspecialidade = value;
    }
}