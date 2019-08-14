import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {ToastHelper} from "../../helpers/toast.helper";
import {StorageService} from "../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-beneficiario',
    templateUrl: 'beneficiario.html'
})
export class BeneficiarioPage {

    private beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();

    private beneficiarioLogado: EnViPortalBeneficiario = null;

    isTitular: boolean = false;


    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private loadingCtrl: LoadingController,
        private toastHelper: ToastHelper,
        private storageService: StorageService
    ) {
        this.beneficiario = this.navParams.get('beneficiario');
    }


    ionViewWillEnter(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        Promise.all([
            this.storageService.getBeneficiario(),
            this.storageService.getBeneficiarioFromGrupoFamiliar(this.beneficiario.handle)
        ])
            .then(beneficiario => {
                this.beneficiarioLogado = beneficiario[0];
                if (this.beneficiarioLogado.titular === 'S') {
                    this.isTitular = true;
                }
                this.beneficiario = beneficiario[1];
                loader.dismiss();
            }, () => {
                loader.dismiss();
                this.toastHelper.notificacaoErroCarregarDados();
            });
    }

    atualizarEndereco(): void {
        this.navCtrl.push('AtualizarEnderecoPage', {'Beneficiario': this.beneficiario});
    }

    atualizarContato(): void {
        this.navCtrl.push('AtualizarContatoPage', {'Beneficiario': this.beneficiario});
    }

}