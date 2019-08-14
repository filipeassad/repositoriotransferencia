import {Injectable, isDevMode} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BeneficiarioBennerService {

    private readonly apiUrlPortalBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar os dados de uma determinada matricula do beneficiario
     *
     * @author Anderson Friaca
     * @param matricula
     */
    buscarBeneficiarioMatriculaCassems(matricula: string): Observable<EnViPortalBeneficiario> {
        return this.http.get<EnViPortalBeneficiario>(`${this.apiUrlPortalBeneficiario}RpBennerBeneficiario/matricula/${matricula}`);
    }

    /**
     * Metodo utilizado para buscar os dados do grupo familiar (portal) atraves do handle do titular
     *
     * @author Anderson Friaca
     * @param handleTitular
     */
    buscarBeneficiariosGrupoFamiliarPortal(handleTitular: number): Observable<EnViPortalBeneficiario[]> {
        return this.http.get<EnViPortalBeneficiario[]>(`${this.apiUrlPortalBeneficiario}RpBennerBeneficiario/grupo_familiar/${handleTitular}`);
    }

    /**
     * Metodo utilizado parabuscar os dados do beneficiairo atraves do cpf
     *
     * @author Anderson Friaca
     * @param cpf
     */
    buscarBeneficiarioCpf(cpf: string): Observable<EnViPortalBeneficiario> {
        return this.http.get<EnViPortalBeneficiario>(`${this.apiUrlPortalBeneficiario}RpBennerBeneficiario/cpf/${cpf}`);
    }
}