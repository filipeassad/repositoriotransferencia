import {Injectable} from "@angular/core";
import {Toast} from "@ionic-native/toast";
import {Platform, ToastController} from "ionic-angular";

@Injectable()
export class ToastHelper {

    constructor(private toast: Toast,
                private platform: Platform,
                private toastCtrl: ToastController) {
    }

    notificacaoErroCarregarDados() {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: 'Ocorreu um erro ao buscar os dados, por favor tente novamente mais tarde',
                duration: 3000,
                position: 'bottom'
            }).present();
        } else {
            this.toast.show(
                'Ocorreu um erro ao buscar os dados, por favor tente novamente mais tarde',
                '3000',
                'bottom'
            ).subscribe();
        }
    }

    notificacaoPreencherTodosCamposBusca() {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: 'Por favor preencha todos os campos para buscar',
                duration: 3000,
                position: 'bottom'
            }).present();
        } else {
            this.toast.show(
                'Por favor preencha todos os campos para buscar',
                '3000',
                'bottom'
            ).subscribe();
        }
    }

    notificacaoMensagem(mensagem: string) {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.toastCtrl.create({
                message: mensagem,
                duration: 3000,
                position: 'bottom'
            }).present();
        } else {
            this.toast.show(
                mensagem,
                '3000',
                'bottom'
            ).subscribe();
        }
    }

}