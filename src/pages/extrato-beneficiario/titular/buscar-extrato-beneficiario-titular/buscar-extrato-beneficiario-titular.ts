import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BuscarExtratoBeneficiarioTO} from "../../../../models/to/buscar-extrato-beneficiario.to.model";
import {TipoBuscaExtratoBeneficiarioEnum} from "../../../../enums/tipo-busca-extrato-beneficiario.enum";
import {ToastHelper} from "../../../../helpers/toast.helper";
import {IosHelper} from "../../../../helpers/ios.helper";
import {EnViPortalBeneficiario} from "../../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {StorageService} from "../../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-buscar-extrato-beneficiario-titular',
    templateUrl: 'buscar-extrato-beneficiario-titular.html'
})
export class BuscarExtratoBeneficiarioTitularPage {

    buscarExtratoBeneficiarioTO: BuscarExtratoBeneficiarioTO = new BuscarExtratoBeneficiarioTO();
    listaTipoBusca = TipoBuscaExtratoBeneficiarioEnum;
    listaGrupoFamiliar: EnViPortalBeneficiario[] = [];
    buscaForm: FormGroup;

    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private storageService: StorageService,
                private toastHelper: ToastHelper,
                private iosHelper: IosHelper
    ) {

        this.buscaForm = new FormGroup({
            'data-inicial': new FormControl('', Validators.required),
            'data-final': new FormControl('', Validators.required),
            'tipo-busca': new FormControl('', Validators.required)
        });
    }

    ionViewDidLoad() {
        this.iosHelper.mostrarLoaderTemporario();
    }

    alternarValidacaoTipoBusca() {
        if (this.buscaForm.contains('beneficiario')) {
            this.buscaForm.removeControl('beneficiario');
        }
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == TipoBuscaExtratoBeneficiarioEnum.Individual) {
            this.buscaForm.addControl('beneficiario', new FormControl('', Validators.required));
        }
        this.buscaForm.updateValueAndValidity();
    }

    buscarExtratoBeneficiario() {
        if (this.buscarExtratoBeneficiarioTO.dataInicial != null && this.buscarExtratoBeneficiarioTO.dataInicial != null && this.buscarExtratoBeneficiarioTO.tipoBusca != null) {
            if (this.buscarExtratoBeneficiarioTO.tipoBusca == TipoBuscaExtratoBeneficiarioEnum.Individual && this.buscarExtratoBeneficiarioTO.beneficiario == null) {
                this.toastHelper.notificacaoPreencherTodosCamposBusca();
            } else {
                this.navCtrl.push('ListaExtratoBeneficiarioPage', {'buscarExtratoBeneficiarioTO': this.buscarExtratoBeneficiarioTO});
            }
        } else {
            this.toastHelper.notificacaoPreencherTodosCamposBusca();
        }
    }

    buscarGrupoFamiliar() {
        this.buscarExtratoBeneficiarioTO.beneficiario = null;
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == TipoBuscaExtratoBeneficiarioEnum.Individual) {
            let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader.present();
            this.storageService.getGrupoFamiliar()
                .then(grupoFamiliar => {
                    this.listaGrupoFamiliar = grupoFamiliar;
                    loader.dismiss();
                }, () => {
                    this.toastHelper.notificacaoErroCarregarDados();
                    this.buscarExtratoBeneficiarioTO.tipoBusca = null;
                    loader.dismiss();
                });
        }
    }

}