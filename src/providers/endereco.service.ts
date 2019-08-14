import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DtoLogradouro} from "../models/dto/dto-logradouro";

@Injectable()
export class EnderecoService {

    private apiUrlPortalBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar um endereco atraves do cep
     *
     * @author Anderson Friaca
     * @param {string} cep
     * @return {Observable<DtoLogradouro>}
     */
    buscarCep(cep: string): Observable<DtoLogradouro>{
        return this.http.get<DtoLogradouro>(`${this.apiUrlPortalBeneficiario}RpBennerEndereco/cep/${cep}`);
    }
}