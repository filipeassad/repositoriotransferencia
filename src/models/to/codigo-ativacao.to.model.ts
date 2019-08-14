export class CodigoAtivacaoTO{

    private _cpf: string;
    private _codigoAtivacao: number;
    private _tipoCodigoAtivacao: number;


    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get codigoAtivacao(): number {
        return this._codigoAtivacao;
    }

    set codigoAtivacao(value: number) {
        this._codigoAtivacao = value;
    }

    get tipoCodigoAtivacao(): number {
        return this._tipoCodigoAtivacao;
    }

    set tipoCodigoAtivacao(value: number) {
        this._tipoCodigoAtivacao = value;
    }
}