import {Injectable, isDevMode} from "@angular/core";
import {environment} from "../environments/environment";
import {Beneficiario} from "../models/beneficiario.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BeneficiarioService {

    private apiUrl: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrl = environment.apiUrlBeneficiarioDev;
        } else {
            this.apiUrl = environment.apiUrlBeneficiarioProd;
        }
    }


    buscarBeneficiarioPorGrupo(grupo: number): Observable<Beneficiario[]> {
        return this.http.get<Beneficiario[]>(this.apiUrl + 'grupo/' + grupo);
    }


    buscarBeneficiarioPorMatriculaCassems(matriculaCassems: string): Observable<Beneficiario> {
        return this.http.get<Beneficiario>(this.apiUrl + 'matricula/' + matriculaCassems);
    }
}