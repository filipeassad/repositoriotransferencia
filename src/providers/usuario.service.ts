import {Injectable, isDevMode} from "@angular/core";
import {Observable} from "rxjs/Observable";
import * as Hashes from 'jshashes';
import {environment} from "../environments/environment";
import {Usuario} from "../models/usuario.model";
import {UsuarioCadastroTO} from "../models/to/usuario-cadastro-to.model";
import {UtilHelper} from "../helpers/util.helper";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {

    private apiUrl: string;
    private utilHelper: UtilHelper = new UtilHelper();
    private sha1 = new Hashes.SHA1;
    private salt = 'b0facef43eecc67fd8a4a0c93aa7056f1e0f584d';

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }

    realizarLogin(usuario: Usuario): Observable<any> {
        let password = this.sha1.hex(this.salt + usuario.password);
        return this.http.post(this.apiUrl + 'validar-login-senha', {
            matricula: usuario.username,
            senha: password
        }, {headers: this.utilHelper.montarHeaders([])});
    }

    realizarCadastroUsuario(usuario: UsuarioCadastroTO): Observable<any> {
        let dataNascimento = new Date(usuario.dataNascimento.toString().replace(/-/g, '\/'));
        return this.http.post(`${this.apiUrl}cadastrar-novo-usuario?matricula=${usuario.matriculaCassems.trim()}&&cpf=${usuario.cpf.trim()}&&email=${usuario.email.trim()}&&data-nascimento=${dataNascimento.getDate()}-${("0" + (dataNascimento.getMonth() + 1)).slice(-2)}-${dataNascimento.getFullYear()}`, {}, {headers: this.utilHelper.montarHeaders()});
    }

    validarCodigoAtivacao(cpf: string, codigoAtivacao: string, tipoValidacao: number): Observable<any> {
        return this.http.get(`${this.apiUrl}validar-cadastro-novo-usuario/${tipoValidacao},${cpf},${codigoAtivacao}`, {headers: this.utilHelper.montarHeaders()});
    }

    realizarPedidoReenvioSenha(cpf: string): Observable<any> {
        return this.http.get(`${this.apiUrl}esqueci-minha-senha/${cpf}`, {headers: this.utilHelper.montarHeaders()});
    }

    alterarSenha(cpf: string, senha: string, novaSenha: string): Observable<any> {
        return this.http.post(this.apiUrl + 'alterar-senha', {
            matricula: cpf,
            senha: this.sha1.hex(this.salt + senha),
            novaSenha: this.sha1.hex(this.salt + novaSenha)
        }, {headers: this.utilHelper.montarHeaders([])});
    }

    /**
     * Metodo utilizado para buscar o usuario pelo id da rede social
     *
     * @author Anderson Friaca
     *
     * @param {string} username
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<Usuario>}
     */
    buscarUsuario(username: string = null, idFacebook: string = null, idGooglePlus: string = null): Observable<Usuario> {
        let params: string = '';
        if (username != null) {
            params = params + 'username=' + username;
        } else {
            if (idFacebook != null) {
                params = params + 'id_facebook=' + idFacebook;
            } else {
                params = params + 'id_google=' + idGooglePlus;
            }
        }
        return this.http.get<Usuario>(`${this.apiUrl}buscar-usuario?${params}`);
    }

    /**
     * Metodo utilizado para vincular um determinado usuario com uma rede social atraves da matricula
     *
     * @author Anderson Friaca
     *
     * @param {string} matricula
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<any>}
     */
    vincularUsuarioRedeSocial(matricula: string, idFacebook: string = null, idGooglePlus: string = null): Observable<any> {
        let params: string = '';
        if (idFacebook != null) {
            params = params + 'id_facebook=' + idFacebook;
        } else {
            params = params + 'id_google=' + idGooglePlus;
        }
        return this.http.post(`${this.apiUrl}vincular-rede-social/${matricula}?${params}`, []);
    }

    /**
     * Metodo utilizado para desvincular um determinado id da rede social a algum usuario
     *
     * @author Anderson Friaca
     *
     * @param {string} idFacebook
     * @param {string} idGooglePlus
     * @returns {Observable<any>}
     */
    desvincularUsuarioRedeSocial(idFacebook: string = null, idGooglePlus: string = null): Observable<any> {
        let params: string = '';
        if (idFacebook != null) {
            params = params + 'id_facebook=' + idFacebook;
        } else {
            params = params + 'id_google=' + idGooglePlus;
        }
        return this.http.post(`${this.apiUrl}desvincular-rede-social?${params}`, []);
    }

}