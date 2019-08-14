import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {RedefinirSenhaTO} from "../../../models/redefinir-senha.to.model";
import {UsuarioService} from "../../../providers/usuario.service";
import {ToastHelper} from "../../../helpers/toast.helper";

@IonicPage()
@Component({
    selector: 'page-redefinir-senha-usuario',
    templateUrl: 'redefinir-senha-usuario.html'
})
export class RedefinirSenhaUsuarioPage {

    redefinirSenhaTO: RedefinirSenhaTO = new RedefinirSenhaTO();
    redefinirSenhaForm: FormGroup;

    constructor(private usuarioService: UsuarioService,
                private toastHelper: ToastHelper,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController) {
        this.redefinirSenhaForm = new FormGroup({
            cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
        });
    }


    realizarRedefinicaoSenha() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.realizarPedidoReenvioSenha(this.redefinirSenhaTO.cpf).subscribe(response => {
            this.toastHelper.notificacaoMensagem('Foi lhe enviado um e-mail para a redefinição de sua senha');
            loader.dismiss();
            this.navCtrl.setRoot('CodigoAtivacaoUsuarioPage');
        }, error => {
            if (error.status == 400) {
                this.toastHelper.notificacaoMensagem('CPF inválido');
            } else {
                if(error.status == 401){
                    this.toastHelper.notificacaoMensagem('Não existe cadastro para o CPF desejado');
                }else {
                    this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o pedido de redefinição de senha, por favor tente novamente mais tarde');
                }
            }
            loader.dismiss();
        });
    }

}