import {Component, ViewChild} from '@angular/core';
import {Events, LoadingController, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {ToastHelper} from "../helpers/toast.helper";
import {Facebook} from "@ionic-native/facebook";
import {HeaderColor} from "@ionic-native/header-color";
import {StorageService} from "../providers/storage.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    paginasNaoAutenticado: Array<{ title: string, component: any, icon: string }>;
    paginasTitular: Array<{ title: string, component: any, icon: string }>;
    paginasDependente: Array<{ title: string, component: any, icon: string }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private menuCtrl: MenuController,
                private loadingCtrl: LoadingController,
                private toastHelper: ToastHelper,
                private facebook: Facebook,
                private events: Events,
                private headerColor: HeaderColor,
                private storageService: StorageService,
                private inAppBrowser: InAppBrowser
    ) {

        this.paginasNaoAutenticado = [
            {title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search'},
            {title: 'Login', component: 'LoginPage', icon: 'log-in'}
        ];

        this.paginasTitular = [
            {title: 'Início', component: 'HomePage', icon: 'home'},
            {title: 'Agendamento', component: 'MeusAgendamentosPage', icon: 'calendar'},
            {title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search'}, 
            {title: 'Consultar Autorização', component: 'ListagemAutorizacaoPage', icon: 'clipboard'},
            {title: 'Demonstrativo Pagamento', component: 'BuscarDemonstrativoPagamentoPage', icon: 'document'},
            {title: 'Extrato Beneficiário', component: 'BuscarExtratoBeneficiarioTitularPage', icon: 'paper'},
            {title: 'Grupo Familiar', component: 'GrupoFamiliarTitularPage', icon: 'people'},
            {title: 'Segunda Via Boleto', component: 'ListaSegundaViaBoletoPage', icon: 'barcode'},
            {title: 'Perfil', component: 'PerfilPage', icon: 'person'}
        ];

        this.paginasDependente = [
            {title: 'Início', component: 'HomePage', icon: 'home'},
            {title: 'Agendamento', component: 'MeusAgendamentosPage', icon: 'calendar'},
            {title: 'Buscar Prestador', component: 'BuscaPrestadorPage', icon: 'search'},
            {title: 'Extrato Beneficiário', component: 'BuscarExtratoBeneficiarioDependentePage', icon: 'paper'},
            {title: 'Grupo Familiar', component: 'GrupoFamiliarDependentePage', icon: 'people'},
            {title: 'Perfil', component: 'PerfilPage', icon: 'person'}
        ];

        this.initializeApp();

        this.events.subscribe('user:logout', () => {
            this.logout();
        });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.headerColor.tint('#005D87');

            this.menuCtrl.enable(true, 'nao_autenticado');
            this.menuCtrl.enable(false, 'titular');
            this.menuCtrl.enable(false, 'dependente');


            Promise.all([
                this.storageService.getUsuario(),
                this.storageService.getBeneficiario()
            ])
                .then(result => {
                    if (result[0]) {
                        this.menuCtrl.enable(false, 'nao_autenticado');
                        if (result[1].titular === 'S') {
                            this.menuCtrl.enable(true, 'titular');
                            this.menuCtrl.enable(false, 'dependente');
                        } else {
                            this.menuCtrl.enable(true, 'dependente');
                            this.menuCtrl.enable(false, 'titular');
                        }
                        this.nav.setRoot('HomePage').then(() => {
                            this.splashScreen.hide();
                        });
                    } else {
                        this.splashScreen.hide();
                    }
                }, () => {
                    this.splashScreen.hide();
                });
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    logout() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.removeUsuario()
            .then(() => {
                this.toastHelper.notificacaoMensagem('Até mais');
                this.menuCtrl.enable(true, 'nao_autenticado');
                this.menuCtrl.enable(false, 'titular');
                this.menuCtrl.enable(false, 'dependente');
                this.facebook.logout();
                loader.dismiss();
                this.nav.setRoot('LoginPage');
            }, () => {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao sair, por favor tente novamente mais tarde');
            });
    }

    laudosWebRedirect() {
        this.inAppBrowser.create("http://laudosweb.cassems.com.br/portal-laudos");
    }
}
