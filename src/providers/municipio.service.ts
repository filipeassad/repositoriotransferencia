import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {UtilHelper} from "../helpers/util.helper";
import {Municipio} from "../models/municipio.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MunicipioService{


    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarListaMunicipios(): Observable<Municipio[]>{
        return this.http.get<Municipio[]>(this.apiUrl + 'busca-municipio', {headers: this.utilHelper.montarHeaders()});
    }

}