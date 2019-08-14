import { Injectable, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Negociacao } from "../models/negociacao.model";

@Injectable()
export class NegociacaoService {

    private apiUrlPortalNegociacao: string;
    private readonly urlRpConsultaNegociacao = "RpConsultaStatusAutorizacao/lista_negociar?handleAutorizacao=";

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalNegociacao = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalNegociacao = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    buscarNegociacoes(autorizacaoId: number): Observable<Negociacao[]> {
        return this.http.get<any>(this.apiUrlPortalNegociacao + this.urlRpConsultaNegociacao + autorizacaoId, {});
    }

    confirmarNegociacao(handleNegociacao: number): Observable<any> {
      console.log(handleNegociacao)
        return this.http.get(this.apiUrlPortalNegociacao + "RpConsultaStatusAutorizacao/confirmar_negociacao?solNegociacao=" + handleNegociacao, {});
    }

    rejeitarNegociacao(handleNegociacao: number): Observable<any> {
        return this.http.get(this.apiUrlPortalNegociacao + "RpConsultaStatusAutorizacao/rejeitar_negociacao?solNegociacao=" + handleNegociacao, {});
    }
//05344927118
//3.10.02.218
//010016447601
}
