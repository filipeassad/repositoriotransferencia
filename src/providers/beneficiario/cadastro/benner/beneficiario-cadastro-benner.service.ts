import {Injectable, isDevMode} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {DtoSamEndereco} from "../../../../models/dto/dto-sam-endereco";
import {Observable} from "rxjs";
import {DtoAuxiliarBooleano} from "../../../../models/dto/dto-auxiliar-booleano";

@Injectable()
export class BeneficiarioCadastroBennerService {

    private readonly apiUrlPortalBeneficiario: string;

    constructor(private http: HttpClient) {
        if (isDevMode()) {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioDev;
        } else {
            this.apiUrlPortalBeneficiario = environment.apiUrlPortalBeneficiarioProd;
        }
    }

    /**
     * Metodo utilizado para atualizar um determinado endereco
     *
     * @author Anderson Friaca
     * @param idEndereco
     * @param dtoSamEndereco
     */
    atualizarEndereco(idEndereco: number, dtoSamEndereco: DtoSamEndereco): Observable<DtoAuxiliarBooleano> {
        return this.http.put<DtoAuxiliarBooleano>(`${this.apiUrlPortalBeneficiario}RpBennerBeneficiarioCadastro/atualizar_endereco/${idEndereco}`, {
            logradouro: dtoSamEndereco.logradouro,
            numero: dtoSamEndereco.numero,
            complemento: dtoSamEndereco.complemento,
            bairro: dtoSamEndereco.bairro,
            cep: dtoSamEndereco.cep,
            idTipoLogradouro: dtoSamEndereco.tipoLogradouro,
            idMunicipio: dtoSamEndereco.municipio,
            idEstado: dtoSamEndereco.estado,
            telefone: dtoSamEndereco.telefone1,
            celular: dtoSamEndereco.celular
        });
    }

    /**
     * Metodo utilizado para atualizar o contato de um determinado beneficiario
     *
     * @author Anderson Friaca
     * @param idBeneficiario
     * @param ddd
     * @param celular
     * @param email
     */
    atualizarContato(idBeneficiario: number, ddd: string, celular: string, email: string): Observable<DtoAuxiliarBooleano> {
        return this.http.put<DtoAuxiliarBooleano>(`${this.apiUrlPortalBeneficiario}RpBennerBeneficiarioCadastro/atualizar_contato/${idBeneficiario}`, {
            ddd,
            celular,
            email
        });
    }
}

