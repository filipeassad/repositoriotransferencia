import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UsuarioService} from "../providers/usuario.service";
import {IonicStorageModule} from "@ionic/storage";
import {MunicipioService} from "../providers/municipio.service";
import {EspecialidadeService} from "../providers/especialidade.service";
import {TipoPrestadorService} from "../providers/tipo-prestador.service";
import {ToastHelper} from "../helpers/toast.helper";
import {IosHelper} from "../helpers/ios.helper";
import {ExtratoBeneficiarioService} from "../providers/extrato-beneficiario.service";
import {AgendamentoService} from "../providers/agendamento.service";
import {DemonstrativoPagamentoService} from "../providers/demonstrativo-pagamento.service";
import {LocalAtendimentoService} from "../providers/local-atendimento.service";
import {PrestadorService} from "../providers/prestador.service";
import {RevalidacaoService} from "../providers/revalidacao.service";
import {SegundaViaBoletoService} from "../providers/segunda-via-boleto.service";
import {UtilService} from "../providers/util.service";
import {HomeModule} from "../pages/home/home.module";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {CallNumber} from "@ionic-native/call-number";
import {Clipboard} from "@ionic-native/clipboard";
import {Toast} from "@ionic-native/toast";
import {Facebook} from "@ionic-native/facebook";
import {HttpClientModule} from "@angular/common/http";
import {BeneficiarioCadastroService} from "../providers/beneficiario-cadastro.service";
import {StorageService} from "../providers/storage.service";
import {EnderecoService} from "../providers/endereco.service";
import {HeaderColor} from "@ionic-native/header-color";
import {BeneficiarioBennerService} from "../providers/beneficiario/benner/beneficiario-benner.service";
import {BeneficiarioCadastroBennerService} from "../providers/beneficiario/cadastro/benner/beneficiario-cadastro-benner.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import { AutorizacaoProvider } from '../providers/autorizacao/autorizacao';
import { NegociacaoService } from '../providers/negociacao.service';
import { CondicaoPagamentoService } from '../providers/condicoes-pagamento.service';
import { NegociacaoItemEstaticoService } from '../providers/negociacao-item-estatico.service';

@NgModule({
    declarations: [
        MyApp,
    ],
    exports: [],
    imports: [
        HomeModule,
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            platforms: {
                ios: {
                    backButtonText: ''
                }
            }
        }),
        IonicStorageModule.forRoot({
            name: '__cassems_beneficiario-1.1.0',
            driverOrder: ['sqlite', 'websql', 'indexeddb']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        LaunchNavigator,
        InAppBrowser,
        CallNumber,
        Clipboard,
        Facebook,
        Toast,
        StatusBar,
        SplashScreen,
        AgendamentoService,
        BeneficiarioBennerService,
        BeneficiarioCadastroService,
        BeneficiarioCadastroBennerService,
        DemonstrativoPagamentoService,
        EspecialidadeService,
        EnderecoService,
        ExtratoBeneficiarioService,
        LocalAtendimentoService,
        MunicipioService,
        PrestadorService,
        RevalidacaoService,
        SegundaViaBoletoService,
        TipoPrestadorService,
        UsuarioService,
        UtilService,
        ToastHelper,
        IosHelper,
        StorageService,
        HeaderColor,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AutorizacaoProvider,
        NegociacaoService,
        CondicaoPagamentoService,
        NegociacaoItemEstaticoService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
