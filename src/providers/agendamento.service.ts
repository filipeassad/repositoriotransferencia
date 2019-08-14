import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {Observable} from "rxjs/Observable";
import {Especialidade} from "../models/especialidade.model";
import {CentroMedico} from "../models/centro-medico.model";
import {Prestador} from "../models/prestador.model";
import {Agendamento} from "../models/agendamento.model";
import {HttpClient} from "@angular/common/http";
import {ValidaAgendamentoTO} from "../models/to/valida-agendamento.to.model";

@Injectable()
export class AgendamentoService {

    private apiUrl: string;
    private apiUrlPortalBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlAgendamentoDev;
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlAgendamentoProd;
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para buscar a lista de especialidades de agendamento
     *
     * @author Anderson Friaca
     * @param centroMedico
     * @param codCrecenciado
     * @returns {Observable<Especialidade[]>}
     */
    buscarListaEspecialidade(centroMedico: number = null, codCrecenciado: number = null): Observable<Especialidade[]> {
        let parametros: string = '';
        if (centroMedico) {
            parametros = '?centroMedico=' + centroMedico;
        }
        if (codCrecenciado) {
            if (parametros.length) {
                parametros += '&codCredenciado=' + codCrecenciado;
            } else {
                parametros += '?codCredenciado=' + codCrecenciado;
            }
        }
        return this.http.get<Especialidade[]>(this.apiUrl + 'listar-especialidades' + parametros);
    }

    /**
     * Metodo utilizado para buscar a lista de centros medicos para agendamento
     *
     * @author Anderson Friaca
     * @param codEspecialidade
     * @param codCredenciado
     * @returns {Observable<CentroMedico[]>}
     */
    buscarListaCentroMedico(codEspecialidade: number = null, codCredenciado: number = null): Observable<CentroMedico[]> {
        let parametros: string = '';
        if (codEspecialidade) {
            parametros = '?codEspecialidade=' + codEspecialidade;
        }
        if (codCredenciado) {
            if (parametros.length) {
                parametros += '&codCredenciado=' + codCredenciado;
            } else {
                parametros += '?codCredenciado=' + codCredenciado;
            }
        }
        return this.http.get<CentroMedico[]>(this.apiUrl + 'listar-centros-medicos' + parametros);
    }


    /**
     * Metodo utilizado para buscar a lista de prestadores para agendamento
     *
     * @author Anderson Friaca
     * @param centroMedico
     * @param codEspecialidade
     * @param nome
     * @returns {Observable<Prestador[]>}
     */
    buscarListaCredenciado(centroMedico: number = null, codEspecialidade: number = null, nome: string = ''): Observable<Prestador[]> {
        let parametros: string = '';
        if (centroMedico) {
            parametros = '?centroMedico=' + centroMedico;
        }
        if (codEspecialidade) {
            if (parametros.length) {
                parametros += '&codEspecialidade=' + codEspecialidade;
            } else {
                parametros = '?codEspecialidade=' + codEspecialidade;
            }
        }
        if (nome.length) {
            if (parametros.length) {
                parametros = '&nome=' + nome;
            } else {
                parametros = '?nome=' + nome;
            }
        }
        return this.http.get<Prestador[]>(this.apiUrl + 'listar-credenciados' + parametros);
    }

    /**
     * Metodo utilizado para buscar a agenda de determinado prestador
     *
     * @author Anderson Friaca
     * @param codigoCredenciado
     * @param centroMedico
     * @returns {Observable<[]>}
     */
    buscarAgendaPrestador(codigoCredenciado: number = null, centroMedico: number = null): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl + 'buscar-agenda-prestador/' + codigoCredenciado + ',' + centroMedico);
    }

    /**
     * Metodo utilizado para listar a agenda de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param matricula
     * @returns {Observable<Agendamento[]>}
     */
    listarAgendaBeneficiario(matricula: string): Observable<Agendamento[]> {
        return this.http.get<Agendamento[]>(this.apiUrl + 'listar-agenda-beneficiario/' + matricula);
    }

    /**
     * Metodo utilizado para realizar um agendamento
     *
     * @author Anderson Friaca
     * @param matricula
     * @param dataAgendamento
     * @param horaAgendamento
     * @param codigoEspecialidade
     * @param codigoCentroMedico
     * @param codigoCredenciado
     * @returns {Observable<{}>}
     */
    agendar(matricula: string, dataAgendamento: string, horaAgendamento: string, codigoEspecialidade: number, codigoCentroMedico: number,
            codigoCredenciado: number): Observable<any> {
        return this.http.post(`${this.apiUrl}agendar?codigoBeneficiario=${matricula}&dataAgendamento=${dataAgendamento}&horaAgendamento=${horaAgendamento}&codigoEspecialidade=${codigoEspecialidade}&codigoCentroMedico=${codigoCentroMedico}&codigoPrestador=${codigoCredenciado}&tipoRequisicao=0`, {});
    }

    /**
     * Metodo utilizado para cancelar um agendamento
     *
     * @author Anderson Friaca
     * @since 19/07/2017
     * @param {number} idGuia
     * @param {string} motivoCancelamento
     * @returns {Observable<{}>}
     */
    cancelarAgendamento(idGuia: number, motivoCancelamento: string): Observable<any> {
        return this.http.post(`${this.apiUrl}cancelar-agendamento?idGuia=${idGuia}&motivo=${motivoCancelamento}&idRequisicao=0`, {});
    }

    /**
     * Metodo utilizado para validar os parametros de um determinado agendamento,
     * assim obtendo a lista de avisos/mensagens
     *
     * @author Anderson Friaca
     * @param {number} benId
     * @param {number} codEspecialidade
     * @param {string} codPrestador
     * @param {number} codCentroMedico
     * @return {Observable<ValidaAgendamentoTO>}
     */
    validarParametrosAgendamento(benId: number, codEspecialidade: number, codPrestador: string, codCentroMedico: number): Observable<ValidaAgendamentoTO> {
        return this.http.get<ValidaAgendamentoTO>(`${this.apiUrlPortalBeneficiario}RpAgendamento/validar_parametros_agendamento?benId=${benId}&codEspecialidade=${codEspecialidade}&codPrestador=${codPrestador}&codCentroMedico=${codCentroMedico}`);
    }

}