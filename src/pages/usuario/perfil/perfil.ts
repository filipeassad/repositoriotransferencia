import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {ToastHelper} from "../../../helpers/toast.helper";
import {UsuarioService} from "../../../providers/usuario.service";
import {Usuario} from "../../../models/usuario.model";
import {Observable} from "rxjs/Observable";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {StorageService} from "../../../providers/storage.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {BeneficiarioBennerService} from "../../../providers/beneficiario/benner/beneficiario-benner.service";

@IonicPage()
@Component({
    selector: 'page-perfil',
    templateUrl: 'perfil.html'
})
export class PerfilPage {

    beneficiario: EnViPortalBeneficiario = new EnViPortalBeneficiario();
    usuario: Usuario = new Usuario();

    constructor(private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private toastHelper: ToastHelper,
                private usuarioService: UsuarioService,
                private facebook: Facebook,
                private storageService: StorageService,
                private beneficiarioBennerService: BeneficiarioBennerService
    ) {

    }

    ionViewDidLoad() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        Promise.all([
            this.storageService.getUsuario(),
            this.storageService.getBeneficiario()
        ]).then(result => {
            this.usuario = result[0];
            this.beneficiario = result[1];
            loader.dismiss();
        }, () => {
            loader.dismiss();
            this.toastHelper.notificacaoErroCarregarDados();
        });
    }

    alterarSenha() {
        this.navCtrl.push('AlterarSenhaUsuarioPage');
    }

    recarregarDados(refresher) {
        Observable.forkJoin(
            this.usuarioService.buscarUsuario(this.usuario.username),
            this.beneficiarioBennerService.buscarBeneficiarioCpf(this.beneficiario.cpf)
        ).subscribe(result => {
            Promise.all([
                this.storageService.setUsuario(result[0]),
                this.storageService.setBeneficiario(result[1])
            ])
                .then(() => {
                    refresher.complete();
                }, () => {
                    this.toastHelper.notificacaoErroCarregarDados();
                    refresher.complete();
                });
        }, () => {
            this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    }

    /**
     * Metodo utilizado para vincular o usuario atual a uma conta do Facebook
     *
     * @author Anderson Friaca
     */
    vincularUsuarioFacebook() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.facebook.login(['public_profile']).then((response: FacebookLoginResponse) => {
            this.usuarioService.vincularUsuarioRedeSocial(this.usuario.username, response.authResponse.userID).subscribe(() => {
                this.usuario.idFacebook = response.authResponse.userID;
                this.storageService.setUsuario(this.usuario)
                    .then(() => {
                        loader.dismiss();
                    }, () => {
                        loader.dismiss();
                    });
            }, error => {
                let mensagemErro = 'Ocorreu um erro ao vincular sua conta do Facebook, por favor tente novamente mais tarde';
                if (error.status == 400) {
                    mensagemErro = 'Esta conta do Facebook já possui vinculação';
                }
                this.facebook.logout().then(() => {
                    loader.dismiss();
                    this.toastHelper.notificacaoMensagem(mensagemErro);
                }, () => {
                    loader.dismiss();
                    this.toastHelper.notificacaoMensagem(mensagemErro);
                });
            });
        }, () => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    }

    /**
     * @TODO
     */
    vincularUsuarioGooglePlus() {

    }

}