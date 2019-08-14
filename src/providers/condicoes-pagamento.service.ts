import { Injectable, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Negociacao } from "../models/negociacao.model";
import { CondicaoPagamento } from "../models/condicao-pagamento.model";

@Injectable()
export class CondicaoPagamentoService {

    private apiUrl: string;
    private readonly urlRpConsultaCondicaoPagamento = "RpConsultaStatusAutorizacao/condicoes_pagamento?tipoTitulo=";

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlPortalBeneficiarioProd;
        }     
    }
    
    // se avista = 1 ---> não precisa de entrada nem parcelas
    buscarCondicaoPagamento(sniTipoTitulo: string): Observable<CondicaoPagamento[]> {
        return this.http.get<any>(this.apiUrl + this.urlRpConsultaCondicaoPagamento + sniTipoTitulo, {});
    }

    confirmarCondicaoNegociacao(itemSolNegociacao: number, condPagamento: string, valorEntrada :number, valorParcelas: number, qtdParcelas: number): Observable<any> {
        return this.http.get(this.apiUrl   + "RpConsultaStatusAutorizacao/confirmar_condicao_pagamento_ajax?itemSolNegociacao=" + itemSolNegociacao
                                            + "&condPagamento=" + condPagamento
                                            + "&valorEntrada=" + valorEntrada
                                            + "&valorParcelas=" + valorParcelas
                                            + "&qtdParcelas=" + qtdParcelas, {});
    }

}