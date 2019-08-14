import {EnViPortalBeneficiario} from "../beneficiario/benner/en-vi-portal-beneficiario.model";

export class BuscarExtratoBeneficiarioTO {

    private _dataInicial: string;
    private _dataFinal: string;
    private _tipoBusca: number;
    private _beneficiario: EnViPortalBeneficiario;


    get dataInicial(): string {
        return this._dataInicial;
    }

    set dataInicial(value: string) {
        this._dataInicial = value;
    }

    get dataFinal(): string {
        return this._dataFinal;
    }

    set dataFinal(value: string) {
        this._dataFinal = value;
    }

    get tipoBusca(): number {
        return this._tipoBusca;
    }

    set tipoBusca(value: number) {
        this._tipoBusca = value;
    }

    get beneficiario(): EnViPortalBeneficiario {
        return this._beneficiario;
    }

    set beneficiario(value: EnViPortalBeneficiario) {
        this._beneficiario = value;
    }
}