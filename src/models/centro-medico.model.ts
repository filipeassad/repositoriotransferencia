export class CentroMedico {
    private _codCentroMedico: number;
    private _descricao: string;


    get codCentroMedico(): number {
        return this._codCentroMedico;
    }

    set codCentroMedico(value: number) {
        this._codCentroMedico = value;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }
}