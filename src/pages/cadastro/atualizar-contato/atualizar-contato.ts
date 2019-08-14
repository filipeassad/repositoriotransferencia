import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Events, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {ToastHelper} from "../../../helpers/toast.helper";
import {CustomValidatorsHelper} from "../../../helpers/custom-validators.helper";
import {DtoAuxiliarBooleano} from "../../../models/dto/dto-auxiliar-booleano";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {BeneficiarioCadastroBennerService} from "../../../providers/beneficiario/cadastro/benner/beneficiario-cadastro-benner.service";

@IonicPage()
@Component({
    selector: 'page-atualizar-contato',
    templateUrl: 'atualizar-contato.html'
})
export class AtualizarContatoPage {

    private beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();
    form: FormGroup;
    private customValidatorsHelper: CustomValidatorsHelper = new CustomValidatorsHelper();

    private email: string;
    private celular: string;

    constructor(
        private navParams: NavParams,
        private loadingCtrl: LoadingController,
        private toastHelper: ToastHelper,
        private navCtrl: NavController,
        private beneficiarioCadastroBennerService: BeneficiarioCadastroBennerService,
        private events: Events,
        private storageService: StorageService
    ) {
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, this.customValidatorsHelper.validEmail, Validators.maxLength(40)]),
            celular: new FormControl('', [Validators.required, this.customValidatorsHelper.validCelularMasked])
        });
    }

    atualizarContato() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        let dtoCelular = this.getDtoCelular();
        if (dtoCelular !== null) {
            this.beneficiarioCadastroBennerService.atualizarContato(
                this.beneficiario.benId,
                dtoCelular.ddd,
                dtoCelular.phone,
                this.email
            )
                .subscribe((dtoAuxiliarBooleano: DtoAuxiliarBooleano) => {
                    if (dtoAuxiliarBooleano.resposta) {
                        this.storageService.refreshBeneficiarioEGrupoFamiliar()
                            .then(() => {
                                loader.dismiss();
                                this.toastHelper.notificacaoMensagem('Contato atualizado com sucesso');
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
                        this.toastHelper.notificacaoMensagem('Não foi possível atualizar o contato, por favor tente novamente mais tarde');
                    }
                }, error => {
                    if (error.status === 400) {
                        this.toastHelper.notificacaoMensagem(error.error.mensagem);
                    } else {
                        this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                    }
                    loader.dismiss();
                });
        } else {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Não foi possível atualizar o contato, por favor tente novamente mais tarde');
        }
    }


    private getDtoCelular(): DtoPhone {
        let regexCelular = /^\((\d{2})\)\s(\d{4,5})-(\d{4})$/g;
        let matchsCelular = regexCelular.exec(this.celular);
        if (matchsCelular !== null && matchsCelular.length === 4) {
            return {
                ddd: matchsCelular[1],
                phone: `${matchsCelular[2]}${matchsCelular[3]}`
            };
        }
        return null;
    }
}

interface DtoPhone {
    ddd: string;
    phone: string;
}