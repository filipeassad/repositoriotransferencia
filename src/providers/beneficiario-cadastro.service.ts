import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DtoAuxiliarBooleano} from "../models/dto/dto-auxiliar-booleano";

@Injectable()
export class BeneficiarioCadastroService {

    private apiUrlPortalBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para atualizar o contato do gestao de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {string} email
     * @param {string} dddTelefone
     * @param {string} telefone
     * @param {string} dddCelular
     * @param {string} celular
     * @return {Observable<DtoAuxiliarBooleano>}
     */
    atualizarContatoGestao(benId: number, email: string, dddTelefone: string, telefone: string, dddCelular: string, celular: string): Observable<DtoAuxiliarBooleano> {
        return this.http.post<DtoAuxiliarBooleano>(`${this.apiUrlPortalBeneficiario}RpCassemsBeneficiarioCadastro/atualizar_contato_gestao`, {
            benId,
            email,
            dddTelefone,
            telefone,
            dddCelular,
            celular
        });
    }

    /**
     * Metodo utilizado para atualizar o endereco do beneficiario no sistema gestao
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {number} codLocal
     * @param {string} cep
     * @param {string} logradouro
     * @param {number} numero
     * @param {string} complemento
     * @param {string} bairro
     * @return {Observable<DtoAuxiliarBooleano>}
     */
    atualizarEnderecoGestao(benId: number, codLocal: number, cep: string, logradouro: string, numero: number, complemento: string, bairro: string): Observable<DtoAuxiliarBooleano> {
        return this.http.post<DtoAuxiliarBooleano>(`${this.apiUrlPortalBeneficiario}RpCassemsBeneficiarioCadastro/atualizar_endereco_gestao`, {
            benId,
            codLocal,
            cep,
            logradouro,
            numero,
            complemento,
            bairro
        });
    }
}