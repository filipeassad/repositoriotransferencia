import {Component} from "@angular/core";
import {NavParams, LoadingController, Platform, ActionSheetController, IonicPage} from "ionic-angular";
import {Prestador} from "../../../models/prestador.model";
import {LocalAtendimento} from "../../../models/local-atendimento.model";
import {PrestadorService} from "../../../providers/prestador.service";
import {LocalAtendimentoService} from "../../../providers/local-atendimento.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {PrestadorEspecialidade} from "../../../models/prestador-especialidade.model";
import {
    AppSelectionOptions, LaunchNavigator, LaunchNavigatorOptions, RememberChoiceOptions
} from "@ionic-native/launch-navigator";
import {CallNumber} from "@ionic-native/call-number";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
    selector: 'page-prestador',
    templateUrl: 'prestador.html'
})
export class PrestadorPage {

    prestador: Prestador = new Prestador();
    listaLocaisAtendimento: LocalAtendimento[] = [];
    stringEspecialidadesPrestador: string = '';


    constructor(private navParams: NavParams,
                private prestadorService: PrestadorService,
                private loadingCtrl: LoadingController,
                private locaisAtendimentoService: LocalAtendimentoService,
                private platform: Platform,
                private actionSheetCtrl: ActionSheetController,
                private toastHelper: ToastHelper,
                private launchNavigator: LaunchNavigator,
                private callNumber: CallNumber) {

    }

    ionViewDidLoad() {
        this.prestador = this.navParams.get('Prestador');
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        Observable.forkJoin(this.locaisAtendimentoService.buscarLocaisAtendimento(this.prestador.codCredenciado),
            this.prestadorService.buscarEspecialidadesPrestador(this.prestador.codCredenciado.toString())).subscribe((result: any[]) => {
            this.listaLocaisAtendimento = result[0] as LocalAtendimento[];
            this.prestador.especialidades = result[1] as PrestadorEspecialidade[];
            this.stringEspecialidadesPrestador = result[1].map(array => array.descricaoEspecialidade.trim()).join(', ');
            loader.dismiss();
        }, error => {
            loader.dismiss();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }

    abrirOpcoesLocalAtendimento(localAtendimento: LocalAtendimento) {
        if (this.platform.is('windows') || localAtendimento.fone == '') {
            this.abrirNavegacao(localAtendimento);
        } else {
            this.actionSheetCtrl.create({
                title: 'O que deseja fazer?',
                buttons: [
                    {
                        text: 'Ligar',
                        handler: () => {
                            this.abrirLigacao(localAtendimento);
                        }
                    },
                    {
                        text: 'Visualizar no mapa',
                        handler: () => {
                            this.abrirNavegacao(localAtendimento);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    }
                ]
            }).present();
        }
    }

    private abrirLigacao(localAtendimento: LocalAtendimento) {
        this.callNumber.callNumber('+55' + localAtendimento.fone, true);
    }

    private abrirNavegacao(localAtendimento: LocalAtendimento) {
        this.launchNavigator.availableApps().then(apps => {
            let possuiAppPromissor = false;
            Object.keys(apps).forEach(valor => {
                if (apps[valor] == true) {
                    possuiAppPromissor = true;
                }
            });
            if (possuiAppPromissor) {
                let options: LaunchNavigatorOptions = {};
                let appSelectionOptions: AppSelectionOptions = {};
                let rememberChoiceOptions: RememberChoiceOptions = {};
                rememberChoiceOptions.enabled = false;
                appSelectionOptions.rememberChoice = rememberChoiceOptions;
                appSelectionOptions.cancelButtonText = 'Fechar';
                appSelectionOptions.dialogHeaderText = 'Selecione um aplicativo de navegação/mapa';
                options.destinationName = this.prestador.nome;
                options.appSelection = appSelectionOptions;
                this.launchNavigator.navigate(localAtendimento.endereco + ', ' + localAtendimento.descricaoMunicipio + ' - ' + localAtendimento.uf, options).then(success => 'ok', error => {
                    if (error !== 'cancelled') {
                        this.toastHelper.notificacaoMensagem('Ocorreu um erro ao abrir o aplicativo de nagevação/mapa, tente novamente mais tarde');
                    }
                });
            } else {
                this.toastHelper.notificacaoMensagem('Você não possui nenhum app de navegação/mapa disponível');
            }
        }, error => {
            this.toastHelper.notificacaoMensagem('Ocorreu um erro ao localizar os aplicativos de nagevação/mapas, tente novamente mais tarde');
        });
    }

}