import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {ExtratoBeneficiario} from "../../models/extrato-beneficiario.model";
import {ExtratoBeneficiarioService} from "../../providers/extrato-beneficiario.service";
import {ToastHelper} from "../../helpers/toast.helper";
import {StorageService} from "../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();
    listaExtratoBeneficiario: ExtratoBeneficiario[] = [];

    constructor(
        private storageService: StorageService,
        private loadingCtrl: LoadingController,
        private extratoBeneficiarioService: ExtratoBeneficiarioService,
        private navCtrl: NavController,
        private toastHelper: ToastHelper
    ) {

    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        let ativarBuscaExtratoBeneficiario = false;

        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.beneficiario = beneficiario;
                if(ativarBuscaExtratoBeneficiario){
                    this.extratoBeneficiarioService.buscarExtratoBeneficiarioLimitadoIndividual(this.beneficiario.matriculaCassems).subscribe((lista: ExtratoBeneficiario[]) => {
                        if (lista != null) {
                            this.listaExtratoBeneficiario = lista;
                        }
                        loader.dismiss();
                    }, () => {
                        loader.dismiss();
                        this.toastHelper.notificacaoErroCarregarDados();
                    });
                }
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
            });
        loader.dismiss();
    }

    visualizarExtratoBeneficiario(extratoBeneficiario: ExtratoBeneficiario) {
        this.navCtrl.push('ExtratoBeneficiarioPage', {'ExtratoBeneficiario': extratoBeneficiario});
    }

    recarregarDados(refresher) {
        this.extratoBeneficiarioService.buscarExtratoBeneficiarioLimitadoIndividual(this.beneficiario.matriculaCassems).subscribe((lista: ExtratoBeneficiario[]) => {
            this.listaExtratoBeneficiario = lista;
            refresher.complete();
        }, () => {
            refresher.complete();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }
}