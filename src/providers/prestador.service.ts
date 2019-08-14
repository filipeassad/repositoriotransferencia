import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {UtilHelper} from "../helpers/util.helper";
import {Prestador} from "../models/prestador.model";
import {PrestadorEspecialidade} from "../models/prestador-especialidade.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PrestadorService {

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarPrestador(nomePrestador: String = '', codMunicipio: number = null, codCategoria: number = null, codEspecialidade: number = null): Observable<Prestador[]> {
        let query = this.montarQueryBuscarPrestador(nomePrestador, codMunicipio, codCategoria, codEspecialidade);
        return this.http.get<Prestador[]>(this.apiUrl + 'busca-prestador' + query, {headers: this.utilHelper.montarHeaders([])});
    }

    buscarEspecialidadesPrestador(codCredenciado: string): Observable<PrestadorEspecialidade[]>{
        return this.http.get<PrestadorEspecialidade[]>(this.apiUrl + 'busca-espec-prestador/' + codCredenciado, {headers: this.utilHelper.montarHeaders([])});
    }

    private montarQueryBuscarPrestador(nomePrestador: String = '', codMunicipio: number = null, codCategoria: number = null, codEspecialidade: number = null): String {
        let query: String = '?';
        if (nomePrestador != '') {
            query = query.concat('nome=' + nomePrestador);
        }
        if (codMunicipio != null) {
            query = query.concat('&&codMunicipio=');
            query = query.concat(codMunicipio.toString());
        }
        if (codCategoria != null) {
            query = query.concat('&&codCategoria=');
            query = query.concat(codCategoria.toString());
        }
        if (codEspecialidade != null) {
            query = query.concat('&&codEspecialidade=');
            query = query.concat(codEspecialidade.toString());
        }
        return query;
    }

}