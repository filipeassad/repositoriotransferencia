import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {TipoPrestador} from "../models/tipo-prestador.model";
import {UtilHelper} from "../helpers/util.helper";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TipoPrestadorService{

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarListaTipoPrestadores(): Observable<TipoPrestador[]>{
        return this.http.get<TipoPrestador[]>(this.apiUrl + 'busca-categoria', {headers: this.utilHelper.montarHeaders()});
    }

}