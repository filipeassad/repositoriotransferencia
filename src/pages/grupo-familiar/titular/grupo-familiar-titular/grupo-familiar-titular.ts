import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {ToastHelper} from "../../../../helpers/toast.helper";
import {EnViPortalBeneficiario} from "../../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {StorageService} from "../../../../providers/storage.service";
import {BeneficiarioBennerService} from "../../../../providers/beneficiario/benner/beneficiario-benner.service";

@IonicPage()
@Component({
    selector: 'page-grupo-familiar-titular',
    templateUrl: 'grupo-familiar-titular.html'
})
export class GrupoFamiliarTitularPage {

    listaBeneficiarios: EnViPortalBeneficiario[] = [];
    _listaBeneficiarios: EnViPortalBeneficiario[] = [];


    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private beneficiarioBennerService: BeneficiarioBennerService,
                private toastHelper: ToastHelper
    ) {

    }

    ionViewDidLoad(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getGrupoFamiliar()
            .then(grupoFamiliar => {
                this.listaBeneficiarios = grupoFamiliar;
                this._listaBeneficiarios = grupoFamiliar;
                loader.dismiss();
            }, () => {
                loader.dismiss();
            });
    }

    visualizarBeneficiario(beneficiario: EnViPortalBeneficiario) {
        this.navCtrl.push('BeneficiarioPage', {'beneficiario': beneficiario});
    }

    buscarBeneficiario(event: any) {
        this.listaBeneficiarios = this._listaBeneficiarios;
        let val = event.target.value;
        if (val && val.trim() != '') {
            this.listaBeneficiarios = this.listaBeneficiarios.filter((beneficiario: EnViPortalBeneficiario) => {
                return (beneficiario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    recarregarDados(refresher) {
        this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(this.listaBeneficiarios[0].handleTitular)
            .subscribe((grupoFamiliar: EnViPortalBeneficiario[]) => {
                this.storageService.setGrupoFamiliar(grupoFamiliar)
                    .then(() => {
                        this.listaBeneficiarios = grupoFamiliar;
                        this._listaBeneficiarios = grupoFamiliar;
                        refresher.complete();
                    }, () => {
                        this.toastHelper.notificacaoErroCarregarDados();
                        refresher.complete();
                    })
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
            });
    }

}