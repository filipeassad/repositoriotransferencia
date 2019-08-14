import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {UtilBuscaCep} from "../models/to/util-busca-cep.model";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UtilService{

    private apiUrlBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlBeneficiario = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrlBeneficiario = environment.apiUrlBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar os dados do cep
     *
     * @author Anderson Friaca
     * @param cep
     * @returns {Observable<UtilBuscaCep[]>}
     */
    buscarCep(cep: string): Observable<UtilBuscaCep[]>{
        return this.http.get<UtilBuscaCep[]>(this.apiUrlBeneficiario+'busca-cep/'+cep);
    }
}