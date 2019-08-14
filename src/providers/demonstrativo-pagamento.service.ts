import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";
import {UtilHelper} from "../helpers/util.helper";
import {DemonstrativoPagamento} from "../models/demonstrativo-pagamento.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DemonstrativoPagamentoService {

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    buscarDemonstrativoPagamento(cpf: string, ano: number): Observable<DemonstrativoPagamento[]>{
        return this.http.get<DemonstrativoPagamento[]>(this.apiUrl + 'demonstrativo-pagamento/'+cpf+','+ano, {headers: this.utilHelper.montarHeaders()});
    }

}