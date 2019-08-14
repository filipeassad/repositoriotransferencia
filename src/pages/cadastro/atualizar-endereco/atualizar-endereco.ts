import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Events, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {ToastHelper} from "../../../helpers/toast.helper";
import {CustomValidatorsHelper} from "../../../helpers/custom-validators.helper";
import {DtoLogradouro} from "../../../models/dto/dto-logradouro";
import {EnderecoService} from "../../../providers/endereco.service";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {BeneficiarioCadastroBennerService} from "../../../providers/beneficiario/cadastro/benner/beneficiario-cadastro-benner.service";
import {DtoSamEndereco} from "../../../models/dto/dto-sam-endereco";

@IonicPage()
@Component({
    selector: 'page-atualizar-endereco',
    templateUrl: 'atualizar-endereco.html'
})
export class AtualizarEnderecoPage {

    private beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();
    private form: FormGroup;
    private customValidatorsHelper: CustomValidatorsHelper = new CustomValidatorsHelper();
    private dtoLogradouro: DtoLogradouro = null;

    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    telefone: string;
    celular: string;

    constructor(
        private navParams: NavParams,
        private loadingCtrl: LoadingController,
        private toastHelper: ToastHelper,
        private navCtrl: NavController,
        private enderecoService: EnderecoService,
        private beneficiarioCadastroBennerService: BeneficiarioCadastroBennerService,
        private events: Events,
        private storageService: StorageService
    ) {
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new FormGroup({
            cep: new FormControl('', [Validators.required, this.customValidatorsHelper.validCepMasked, Validators.maxLength(9)]),
            logradouro: new FormControl('', [Validators.required]),
            numero: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
            complemento: new FormControl('', []),
            bairro: new FormControl('', [Validators.required]),
            cidade: new FormControl('', [Validators.required]),
            uf: new FormControl('', [Validators.required]),
            telefone: new FormControl('', [Validators.required, this.customValidatorsHelper.validTelefoneMasked]),
            celular: new FormControl('', [Validators.required, this.customValidatorsHelper.validCelularMasked])
        });
    }

    buscarCep() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.enderecoService.buscarCep(this.cep)
            .subscribe(dtoLogradouro => {
                this.dtoLogradouro = dtoLogradouro;
                this.logradouro = this.dtoLogradouro.logradouro;
                this.numero = null;
                this.complemento = '';
                this.bairro = this.dtoLogradouro.bairro;
                this.cidade = this.dtoLogradouro.zNomeMunicipio;
                this.uf = this.dtoLogradouro.nomeEstado;
                loader.dismiss();
            }, error => {
                if (error.status === 400) {
                    this.toastHelper.notificacaoMensagem(error.error.mensagem);
                } else {
                    this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                }
                loader.dismiss();
            });
    }

    atualizarEndereco() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        let dtoSamEndereco = new DtoSamEndereco();
        dtoSamEndereco.logradouro = this.dtoLogradouro.logradouro;
        dtoSamEndereco.numero = this.numero;
        dtoSamEndereco.complemento = this.complemento;
        dtoSamEndereco.bairro = this.dtoLogradouro.bairro;
        dtoSamEndereco.cep = this.cep.replace(/\D/g, '');
        dtoSamEndereco.tipoLogradouro = this.dtoLogradouro.tipoLogradouroId;
        dtoSamEndereco.municipio = this.dtoLogradouro.idMunicipio;
        dtoSamEndereco.estado = this.dtoLogradouro.idEstado;
        dtoSamEndereco.telefone1 = this.telefone;
        dtoSamEndereco.celular = this.celular;

        this.beneficiarioCadastroBennerService.atualizarEndereco(this.beneficiario.codEndereco, dtoSamEndereco)
            .subscribe(dtoAuxiliarBooleano => {
                if (dtoAuxiliarBooleano.resposta) {
                    this.storageService.refreshBeneficiarioEGrupoFamiliar()
                        .then(() => {
                            loader.dismiss();
                            this.toastHelper.notificacaoMensagem('Endereço atualizado com sucesso');
                            this.navCtrl.pop();
                        }, () => {
                            loader.dismiss();
                            this.toastHelper.notificacaoMensagem('Por favor realize o login novamente');
                            setTimeout(() => {
                                this.events.publish('user:logout');
                            }, 1500);
                        });
                } else {
                    loader.dismiss();
                    this.toastHelper.notificacaoMensagem('Não foi possível atualizar o endereço, por favor tente novamente mais tarde');
                }
            }, error => {
                if (error.status === 400) {
                    this.toastHelper.notificacaoMensagem(error.error.mensagem);
                } else {
                    this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                }
                loader.dismiss();
            });
    }

    limpar() {
        this.cep = null;
        this.dtoLogradouro = null;
        this.logradouro = null;
        this.numero = null;
        this.complemento = null;
        this.bairro = null;
        this.cidade = null;
        this.uf = null;
        this.telefone = null;
        this.celular = null;
        this.form.get('numero').markAsUntouched();
    }
}