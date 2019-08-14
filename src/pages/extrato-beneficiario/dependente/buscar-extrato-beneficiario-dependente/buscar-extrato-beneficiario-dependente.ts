import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BuscarExtratoBeneficiarioTO} from "../../../../models/to/buscar-extrato-beneficiario.to.model";
import {ToastHelper} from "../../../../helpers/toast.helper";
import {TipoBuscaExtratoBeneficiarioEnum} from "../../../../enums/tipo-busca-extrato-beneficiario.enum";
import {StorageService} from "../../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-buscar-extrato-beneficiario-dependente',
    templateUrl: 'buscar-extrato-beneficiario-dependente.html'
})
export class BuscarExtratoBeneficiarioDependentePage {

    buscarExtratoBeneficiarioTO: BuscarExtratoBeneficiarioTO = new BuscarExtratoBeneficiarioTO();
    buscaForm: FormGroup;

    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private toastHelper: ToastHelper) {

        this.buscaForm = new FormGroup({
            'data-inicial': new FormControl('', Validators.required),
            'data-final': new FormControl('', Validators.required)
        });
    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.buscarExtratoBeneficiarioTO.beneficiario = beneficiario;
                loader.dismiss();
            }, () => {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
            });
        this.buscarExtratoBeneficiarioTO.tipoBusca = TipoBuscaExtratoBeneficiarioEnum.Individual;
    }

    buscarExtratoBeneficiario() {
        if (this.buscarExtratoBeneficiarioTO.dataInicial != null && this.buscarExtratoBeneficiarioTO.dataInicial != null) {
            this.navCtrl.push('ListaExtratoBeneficiarioPage', {'buscarExtratoBeneficiarioTO': this.buscarExtratoBeneficiarioTO});
        } else {
            this.toastHelper.notificacaoPreencherTodosCamposBusca();
        }
    }

}