import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {ToastHelper} from "../../helpers/toast.helper";
import {Usuario} from "../../models/usuario.model";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {UsuarioService} from "../../providers/usuario.service";
import {StorageService} from "../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-pre-home-redes-sociais',
    templateUrl: 'pre-home-redes-sociais.html'
})
export class PreHomeRedesSociaisPage {

    private usuario: Usuario;

    constructor(private storageService: StorageService,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private toastHelper: ToastHelper,
                private navParams: NavParams,
                private facebook: Facebook,
                private usuarioService: UsuarioService) {

    }

    ionViewDidLoad() {
        this.usuario = this.navParams.get('Usuario') as Usuario;
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
                        this.redirecionarPaginaHome();
                    }, () => {
                        loader.dismiss();
                        this.redirecionarPaginaHome();
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
        }, error => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Não foi possível realizar o login pelo Facebook, por favor tente novamente mais tarde');
        });
    }

    /**
     * @TODO
     */
    vincularUsuarioGooglePlus() {

    }

    redirecionarPaginaHome() {
        this.navCtrl.setRoot('HomePage');
    }
}