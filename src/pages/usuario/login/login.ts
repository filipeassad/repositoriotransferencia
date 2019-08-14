import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, MenuController, NavController} from 'ionic-angular';
import {Usuario} from "../../../models/usuario.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CapitalizeAllPipe} from "../../../pipes/capitalize-all.pipe";
import {UsuarioService} from "../../../providers/usuario.service";
import {EspecialidadeService} from "../../../providers/especialidade.service";
import {MunicipioService} from "../../../providers/municipio.service";
import {TipoPrestadorService} from "../../../providers/tipo-prestador.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {IosHelper} from "../../../helpers/ios.helper";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {BeneficiarioBennerService} from "../../../providers/beneficiario/benner/beneficiario-benner.service";
import {StorageService} from "../../../providers/storage.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    usuario: Usuario = new Usuario();
    loginForm: FormGroup;
    private capitalizeAllPipe: CapitalizeAllPipe = new CapitalizeAllPipe();

    constructor(private usuarioService: UsuarioService,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private menuCtrl: MenuController,
                private especialidadeService: EspecialidadeService,
                private municipioService: MunicipioService,
                private tipoPrestadorService: TipoPrestadorService,
                private toastHelper: ToastHelper,
                private iosHelper: IosHelper,
                private facebook: Facebook,
                private alertCtrl: AlertController,
                private beneficiarioBennerService: BeneficiarioBennerService,
                private storageService: StorageService,
                private inAppBrowser: InAppBrowser
    ) {

        this.loginForm = new FormGroup({
            cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
            senha: new FormControl('', Validators.required)
        });
    }

    ionViewDidLoad() {
        this.iosHelper.mostrarLoaderTemporario();
    }

    realizarLogin() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.realizarLogin(this.usuario).subscribe(result => {
            if (!result) {
                this.toastHelper.notificacaoMensagem('CPF ou senha inválidos');
                loader.dismiss();
            } else {
                this.buscarDadosBeneficiarioERedirecionarHome(loader, this.usuario);
            }
        }, error => {
            if (error.status == 401) {
                this.toastHelper.notificacaoMensagem('CPF ou senha inválidos');
            } else {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o login, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    }

    realizarCadastro() {
        this.navCtrl.push('CadastrarUsuarioPage');
    }

    realizarRecuperacaoDeSenha() {
        this.navCtrl.push('RedefinirSenhaUsuarioPage');
    }

    realizarInsercaoCodigoAtivacao() {
        this.navCtrl.push('CodigoAtivacaoUsuarioPage');
    }

    realizarLoginFacebook() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.facebook.login(['public_profile']).then((response: FacebookLoginResponse) => {
            this.usuarioService.buscarUsuario(null, response.authResponse.userID).subscribe((usuario: Usuario) => {
                if (usuario) {
                    this.buscarDadosBeneficiarioERedirecionarHome(loader, usuario);
                } else {
                    loader.dismiss().then(() => {
                        this.abrirAlertaPossuiContaPortal();
                    });
                }
            }, error => {
                loader.dismiss().then(() => {
                    if (error.status == '400') {
                        this.abrirAlertaPossuiContaPortal();
                    } else {
                        this.toastHelper.notificacaoErroCarregarDados();
                    }
                });
            });
        }, error => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    }

    /**
     * @TODO
     */
    realizarLoginGooglePlus() {

    }


    private abrirAlertaPossuiContaPortal() {
        let alert = this.alertCtrl.create({
            title: 'Você já possui conta no portal do beneficiário?',
            message: '',
            buttons: [
                {
                    text: 'Não',
                    handler: () => {
                        alert.dismiss();
                        this.navCtrl.push('CadastrarUsuarioPage');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        alert.dismiss();
                        this.toastHelper.notificacaoMensagem('Por favor realize o login');
                    }
                }
            ]
        });
        alert.present();
    }

    private buscarDadosBeneficiarioERedirecionarHome(loader, usuario: Usuario) {
        Observable.forkJoin(
            this.beneficiarioBennerService.buscarBeneficiarioCpf(usuario.username),
            this.usuarioService.buscarUsuario(usuario.username),
            this.tipoPrestadorService.buscarListaTipoPrestadores(),
            this.especialidadeService.buscarListaEspecialidades(),
            this.municipioService.buscarListaMunicipios()
        ).subscribe(result => {
            this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(result[0].handleTitular)
                .subscribe(grupoFamiliar => {
                    Promise.all([
                        this.storageService.setBeneficiario(result[0]),
                        this.storageService.setGrupoFamiliar(grupoFamiliar),
                        this.storageService.setUsuario(result[1]),
                        this.storageService.setTipoPrestadores(result[2]),
                        this.storageService.setEspecialidades(result[3]),
                        this.storageService.setMunicipios(result[4])
                    ]).then(() => {
                        this.menuCtrl.enable(false, 'nao_autenticado');
                        if (result[0].titular === 'S') {
                            this.menuCtrl.enable(true, 'titular');
                        } else {
                            this.menuCtrl.enable(true, 'dependente');
                        }
                        loader.dismiss();
                        this.toastHelper.notificacaoMensagem('Seja bem vindo ' + this.capitalizeAllPipe.transform(result[0].nome));
                        if (result[1].idFacebook == null && result[1].idGooglePlus == null) {
                            this.navCtrl.setRoot('PreHomeRedesSociaisPage', {'Usuario': result[1]});
                        } else {
                            this.navCtrl.setRoot('HomePage');
                        }
                    }).catch(() => {
                        loader.dismiss();
                        this.toastHelper.notificacaoErroCarregarDados();
                    });
                }, () => {
                    loader.dismiss();
                    this.toastHelper.notificacaoErroCarregarDados();
                });
        }, () => {
            loader.dismiss();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }

    laudosWebRedirect() {
        this.inAppBrowser.create("http://laudosweb.cassems.com.br/portal-laudos");
    }

}
