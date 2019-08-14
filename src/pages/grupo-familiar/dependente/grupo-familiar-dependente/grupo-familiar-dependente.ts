import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {ToastHelper} from "../../../../helpers/toast.helper";
import {EnViPortalBeneficiario} from "../../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {StorageService} from "../../../../providers/storage.service";
import {BeneficiarioBennerService} from "../../../../providers/beneficiario/benner/beneficiario-benner.service";

@IonicPage()
@Component({
    selector: 'page-grupo-familiar-dependente',
    templateUrl: 'grupo-familiar-dependente.html'
})
export class GrupoFamiliarDependentePage {

    listaBeneficiarios: EnViPortalBeneficiario[] = [];
    _listaBeneficiarios: EnViPortalBeneficiario[] = [];
    private beneficiario: EnViPortalBeneficiario;


    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private beneficiarioBennerService: BeneficiarioBennerService,
                private toastHelper: ToastHelper) {

    }

    ionViewDidLoad(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.beneficiario = beneficiario;
                this.listaBeneficiarios = [this.beneficiario];
                this._listaBeneficiarios = this.listaBeneficiarios;
                loader.dismiss();
            }, () => {
                loader.dismiss();
                this.toastHelper.notificacaoErroCarregarDados();
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
        this.beneficiarioBennerService.buscarBeneficiarioCpf(this.beneficiario.cpf)
            .subscribe(beneficiario => {
                if (beneficiario) {
                    this.storageService.setBeneficiario(beneficiario)
                        .then(() => {
                            this.beneficiario = beneficiario;
                            this.listaBeneficiarios = [this.beneficiario];
                            this._listaBeneficiarios = this.listaBeneficiarios;
                            refresher.complete();
                        }, () => {
                            this.toastHelper.notificacaoErroCarregarDados();
                            refresher.complete();
                        });
                } else {
                    this.toastHelper.notificacaoErroCarregarDados();
                    refresher.complete();
                }
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
            });
    }

}