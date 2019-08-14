import {Observable} from "rxjs/Observable";
import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {UtilHelper} from "../helpers/util.helper";
import {BoletoSapiens} from "../models/boleto-sapiens.model";
import {ExtratoCabesp} from "../models/extrato-cabesp.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SegundaViaBoletoService{

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarListaBoletosEmAberto(handleTitular: number): Observable<BoletoSapiens[]>{
        return this.http.get<BoletoSapiens[]>(this.apiUrl + 'busca-boletos-aberto/'+handleTitular, {headers: this.utilHelper.montarHeaders()});
    }

    enviarBoletoEmail(numTitulo: string, email: string): Observable<any>{
        return this.http.get(this.apiUrl+'envio-segunda-via-boleto?numtit='+numTitulo+'&&emailBeneficiario='+email, {headers: this.utilHelper.montarHeaders()});
    }

    /**
     * Metodo utilizado para buscar o extrato cabesp de determinado boleto reciprocidade
     *
     * @author Anderson Friaca
     * @since 17/08/2017
     * @param {string} numeroTitulo
     * @returns {Observable<ExtratoCabesp[]>}
     */
    buscarExtratoCabesp(numeroTitulo: string): Observable<ExtratoCabesp[]> {
        return this.http.get<ExtratoCabesp[]>(this.apiUrl + 'extrato-reciprocidade?numRlc='+numeroTitulo);
    }

}
