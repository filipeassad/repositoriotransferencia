import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {EnViPortalBeneficiario} from "../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@Injectable()
export class RevalidacaoService {
    private apiUrlBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar a lista dos beneficiarios aptos para revalidacao da carteira,
     * conforme o grupo familiar
     *
     * @author Anderson Friaca
     * @since v2.2.0 22/05/2017
     * @returns {Observable<EnViPortalBeneficiario[]>}
     * @param handleTitular
     */
    listaGrupoFamiliarAptoRevalidacao(handleTitular: number): Observable<EnViPortalBeneficiario[]> {
        return this.http.get<EnViPortalBeneficiario[]>(`${this.apiUrlBeneficiario}RpBennerBeneficiarioCadastro/grupo_revalidacao/${handleTitular}`);
    }


    /**
     * Metodo utilizado para revalidar um determinado beneficiario
     *
     * @author Anderson Friaca
     * @since v2.2.0 23/05/2017
     *
     * @param matricula
     * @param cep
     * @param endereco
     * @param numero
     * @param complemento
     * @param bairro
     * @param atualizaEndereco
     * @returns {Observable<{}>}
     */
    revalidarBeneficiario(matricula: string, cep: string = null, endereco: string = null,
                          numero: number = null, complemento: string = null, bairro: string = null,
                          atualizaEndereco: number = 0): Observable<{}> {
        let bodyParams = {
            "cep": cep,
            "endereco": endereco,
            "numero": numero,
            "complemento": complemento,
            "bairro": bairro,
            "atualizaEndereco": atualizaEndereco
        };

        return this.http.post(`${this.apiUrlBeneficiario}RpBennerBeneficiarioCadastro/revalida_cartao_benner/${matricula}`, bodyParams);
    }
}
