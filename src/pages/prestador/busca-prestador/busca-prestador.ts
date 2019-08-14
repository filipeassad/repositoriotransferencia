import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {BuscaPrestadorTO} from "../../../models/to/busca-prestador.to.model";
import {Especialidade} from "../../../models/especialidade.model";
import {TipoPrestador} from "../../../models/tipo-prestador.model";
import {Municipio} from "../../../models/municipio.model";
import {TipoPrestadorService} from "../../../providers/tipo-prestador.service";
import {EspecialidadeService} from "../../../providers/especialidade.service";
import {MunicipioService} from "../../../providers/municipio.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {Observable} from "rxjs/Observable";
import {StorageService} from "../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-busca-prestador',
    templateUrl: 'busca-prestador.html'
})
export class BuscaPrestadorPage {

    buscaPrestadorTO: BuscaPrestadorTO = new BuscaPrestadorTO();
    listaEspecialidades: Especialidade[] = [];
    listaTipoPrestadores: TipoPrestador[] = [];
    listaMunicipios: Municipio[] = [];

    habilitarEnvioFormulario: boolean = false;

    constructor(private especialidadeService: EspecialidadeService,
                private tipoPrestadorService: TipoPrestadorService,
                private municipioService: MunicipioService,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private storageService: StorageService,
                private toastHelper: ToastHelper
    ) {

    }

    ionViewDidLoad(): void {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();

        Promise.all([
            this.storageService.getEspecialidades(),
            this.storageService.getTipoPrestadores(),
            this.storageService.getMunicipios()
        ])
            .then(result => {
                this.listaEspecialidades = result[0];
                this.listaTipoPrestadores = result[1];
                this.listaMunicipios = result[2];
                if (!this.listaEspecialidades || !this.listaTipoPrestadores || !this.listaMunicipios) {
                    Observable.forkJoin(
                        this.especialidadeService.buscarListaEspecialidades(),
                        this.tipoPrestadorService.buscarListaTipoPrestadores(),
                        this.municipioService.buscarListaMunicipios()
                    ).subscribe(result => {
                        this.listaEspecialidades = result[0];
                        this.listaTipoPrestadores = result[1];
                        this.listaMunicipios = result[2];
                        Promise.all([
                            this.storageService.setEspecialidades(this.listaEspecialidades),
                            this.storageService.setTipoPrestadores(this.listaTipoPrestadores),
                            this.storageService.setMunicipios(this.listaMunicipios)
                        ])
                            .then(() => {
                                loader.dismiss();
                            }, () => {
                                loader.dismiss();
                                this.toastHelper.notificacaoErroCarregarDados();
                            });
                    }, () => {
                        loader.dismiss();
                        this.toastHelper.notificacaoErroCarregarDados();
                    });
                } else {
                    loader.dismiss();
                }
            }, () => {
                loader.dismiss();
                this.toastHelper.notificacaoErroCarregarDados();
            });
    }

    buscarPrestadorForm() {
        this.navCtrl.push('BuscaPrestadorListaPage', {'BuscaPrestadorTO': this.buscaPrestadorTO});
    }

    recarregarDados(refresher) {
        Observable.forkJoin(
            this.especialidadeService.buscarListaEspecialidades(),
            this.tipoPrestadorService.buscarListaTipoPrestadores(),
            this.municipioService.buscarListaMunicipios()
        ).subscribe(result => {
            this.listaEspecialidades = result[0];
            this.listaTipoPrestadores = result[1];
            this.listaMunicipios = result[2];
            Promise.all([
                this.storageService.setEspecialidades(this.listaEspecialidades),
                this.storageService.setTipoPrestadores(this.listaTipoPrestadores),
                this.storageService.setMunicipios(this.listaMunicipios)
            ])
                .then(() => {
                    refresher.complete();
                }, () => {
                    refresher.complete();
                });
        }, () => {
            this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    }

    habilitarEnvio() {
        let habilitar = false;
        if (this.buscaPrestadorTO.nome != '') {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.especialidade != null) {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.tipoPrestador != null) {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.municipio != null) {
            habilitar = true;
        }
        this.habilitarEnvioFormulario = habilitar;
    }

    limparCamposBusca() {
        this.buscaPrestadorTO.nome = '';
        this.buscaPrestadorTO.tipoPrestador = null;
        this.buscaPrestadorTO.especialidade = null;
        this.buscaPrestadorTO.municipio = null;
        this.buscaPrestadorTO.bairro = null;
        this.habilitarEnvioFormulario = false;
    }


}