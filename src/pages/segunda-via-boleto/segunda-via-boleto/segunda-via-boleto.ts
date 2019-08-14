import {Component} from "@angular/core";
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {Clipboard} from "@ionic-native/clipboard";
import {BoletoSapiens} from "../../../models/boleto-sapiens.model";
import {SegundaViaBoletoService} from "../../../providers/segunda-via-boleto.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-segunda-via-boleto',
    templateUrl: 'segunda-via-boleto.html'
})
export class SegundaViaBoletoPage {

    boleto: BoletoSapiens = new BoletoSapiens();
    private beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();

    constructor(private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private clipboard: Clipboard,
                private segundaViaBoletoService: SegundaViaBoletoService,
                private toastHelper: ToastHelper,
                private alertCtrl: AlertController,
                private storageService: StorageService,
                private navCtrl: NavController
    ) {

    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        this.boleto = this.navParams.get('boleto');
        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.beneficiario = beneficiario;
                loader.dismiss();
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
            });
    }

    copiarLinhaDigitavel() {
        this.clipboard.copy(this.boleto.numeroDigitavel).then(() => {
            this.toastHelper.notificacaoMensagem('Linha digitável copiada com sucesso');
        }, error => {
            this.toastHelper.notificacaoMensagem('Ocorreu um erro ao copiar a linha digitável, por favor tente novamente mais tarde');
        });
    }

    abrirAlertOpcaoEmail() {
        let inputs = [];
        if (this.beneficiario.emailPortal != null) {
            inputs.push({
                type: 'radio',
                label: this.beneficiario.emailPortal,
                value: this.beneficiario.emailPortal,
                checked: true
            });
        }
        inputs.push({
            type: 'radio',
            label: 'Outro',
            value: 'Outro',
            checked: false
        });

        let alert = this.alertCtrl.create({
            title: 'E-mail',
            message: 'Selecione para qual e-mail deseja enviar',
            inputs: inputs,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Selecionar',
                    handler: data => {
                        if (data == this.beneficiario.emailPortal && this.beneficiario.emailPortal != null) {
                            alert.dismiss().then(() => {
                                this.enviarBoletoEmail(this.beneficiario.emailPortal);
                            });
                        } else {
                            alert.dismiss().then(() => {
                                this.abrirAlertDigitarEmailEnvioBoleto();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    }

    abrirAlertDigitarEmailEnvioBoleto() {
        let alert = this.alertCtrl.create({
            title: 'E-mail',
            message: 'Digite o e-mail que deseja receber a segunda via do boleto',
            cssClass: 'category-prompt',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'E-mail'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Enviar',
                    handler: data => {
                        if (this.validarEmail(data.email)) {
                            alert.dismiss().then(() => {
                                this.enviarBoletoEmail(data.email);
                            });
                        } else {
                            this.toastHelper.notificacaoMensagem('E-mail inválido');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    }

    enviarBoletoEmail(email: string) {
        if (this.boleto.numTitulo) {
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            let numTitulo = this.boleto.numTitulo.replace('/', '-');
            this.segundaViaBoletoService.enviarBoletoEmail(numTitulo, email).subscribe(() => {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem('O e-mail foi enviado com sucesso');
            }, error => {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao enviar o e-mail, por favor tente novamente mais tarde');
            });
        } else {
            this.toastHelper.notificacaoErroCarregarDados();
        }
    }

    abrirExtratoCabespBoleto() {
        this.navCtrl.push('ExtratoCabespBoletoPage', {
            'BoletoSapiens': this.boleto
        });
    }


    private validarEmail(email: string): boolean {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}