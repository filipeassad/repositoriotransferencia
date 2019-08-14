import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {LocalAtendimento} from "../models/local-atendimento.model";
import {UtilHelper} from "../helpers/util.helper";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LocalAtendimentoService{


    private apiUrl: string;

    private chaveGeocoder = 'AIzaSyCjn7LBjBjmVqlYcZgiYXhjLARMRrhiIuE';

    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarLocaisAtendimento(codCredenciado): Observable<LocalAtendimento[]> {
        return this.http.get<LocalAtendimento[]>(this.apiUrl+'busca-local-prestador/'+ codCredenciado, {headers: this.utilHelper.montarHeaders([])});
    }

    buscarGeoLocation(endereco: string): Observable<any[]>{
        return this.http.get<any[]>('https://maps.googleapis.com/maps/api/geocode/json?address='+endereco+'&key='+this.chaveGeocoder);
    }
}