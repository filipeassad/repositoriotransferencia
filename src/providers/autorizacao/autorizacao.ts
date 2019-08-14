import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Autorizacao } from '../../models/autorizacao.model';

/*
  Generated class for the AutorizacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutorizacaoProvider {

    private readonly apiUrlPortalBeneficiario: string;
    private readonly urlRpConsultaAutorizacao = "RpConsultaStatusAutorizacao/lista?handleBeneficiario=";

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    buscarAutoriazacao(handleTitular: number): Observable<Autorizacao[]> {
        return this.http.get<any>(`${this.apiUrlPortalBeneficiario}${this.urlRpConsultaAutorizacao}${handleTitular}`);
    }

}
