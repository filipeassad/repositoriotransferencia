import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {UtilHelper} from "../helpers/util.helper";
import {Especialidade} from "../models/especialidade.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EspecialidadeService {

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarListaEspecialidades(): Observable<Especialidade[]>{
        return this.http.get<Especialidade[]>(this.apiUrl + 'busca-especialidade', {headers: this.utilHelper.montarHeaders()});
    }
}