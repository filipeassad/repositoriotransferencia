import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {ExtratoBeneficiario} from "../models/extrato-beneficiario.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ExtratoBeneficiarioService{

    private apiUrl: string;

    constructor(private http: HttpClient){
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar os extratos dos beneficiarios do grupo relacionado a matricula
     *
     * @author Anderson Friaca
     * @since v1.0.0 23/03/2017
     * @param cpf
     * @param dataInicial deve ser no formato: dd-mm-yyyy
     * @param dataFinal deve ser no formato: dd-mm-yyyy
     */
    buscarExtratoBeneficiarioGrupo(cpf: string, dataInicial: string, dataFinal: string): Observable<ExtratoBeneficiario[]>{
        return this.http.get<ExtratoBeneficiario[]>(`${this.apiUrl}RpExtratoMedico/lista?tipoExtratoMedico=2&matricula=${cpf}&dataInicial=${dataInicial}&dataFinal=${dataFinal}`);
    }

    /**
     * Metodo utilizado para buscar os extratos do beneficiario relacionado a matricula
     *
     * @author Anderson Friaca
     * @since v1.0.0 23/03/2017
     * @param matricula
     * @param dataInicial deve ser no formato: dd-mm-yyyy
     * @param dataFinal deve ser no formato: dd-mm-yyyy
     */
    buscarExtratoBeneficiarioIndividual(matricula: string, dataInicial: string, dataFinal: string): Observable<ExtratoBeneficiario[]>{
        return this.http.get<ExtratoBeneficiario[]>(`${this.apiUrl}RpExtratoMedico/lista?tipoExtratoMedico=1&matricula=${matricula}&dataInicial=${dataInicial}&dataFinal=${dataFinal}`);
    }


    /**
     * Metodo utilizado para buscar os ultimos extratos do beneficiario
     *
     * @author Anderson Friaca
     * @since v1.1.0 30/03/2017
     * @param matricula
     * @return Observable<ExtratoBeneficiario[]>
     */
    buscarExtratoBeneficiarioLimitadoIndividual(matricula: string): Observable<ExtratoBeneficiario[]>{
        return this.http.get<ExtratoBeneficiario[]>(`${this.apiUrl}RpExtratoMedico/lista_limitado?matricula=${matricula}`);
    }
}