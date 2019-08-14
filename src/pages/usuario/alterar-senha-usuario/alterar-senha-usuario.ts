import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlterarSenhaUsuarioTO} from "../../../models/to/alterar-senha-usuario.to.model";
import {UsuarioService} from "../../../providers/usuario.service";
import {CustomValidatorsHelper} from "../../../helpers/custom-validators.helper";
import {ToastHelper} from "../../../helpers/toast.helper";
import {StorageService} from "../../../providers/storage.service";

@IonicPage()
@Component({
    selector: 'page-alterar-senha-usuario',
    templateUrl: 'alterar-senha-usuario.html'
})
export class AlterarSenhaUsuarioPage {

    alterarSenhaUsuarioTO: AlterarSenhaUsuarioTO = new AlterarSenhaUsuarioTO();
    alterarSenhaForm: FormGroup;
    private customValidatorsHelper: CustomValidatorsHelper = new CustomValidatorsHelper();

    constructor(private usuarioService: UsuarioService,
                private toastHelper: ToastHelper,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController,
                private storageService: StorageService
    ) {

        this.alterarSenhaForm = new FormGroup({
            senhaAtual: new FormControl('', Validators.required),
            novaSenha: new FormControl('', Validators.required),
            confirmarNovaSenha: new FormControl('', [Validators.required, this.customValidatorsHelper.equals.bind(this.customValidatorsHelper)])
        });
    }


    alterarSenha() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(beneficiario => {
                this.usuarioService.alterarSenha(beneficiario.cpf, this.alterarSenhaUsuarioTO.senhaAtual, this.alterarSenhaUsuarioTO.novaSenha).subscribe(() => {
                    this.toastHelper.notificacaoMensagem('Senha alterada com sucesso');
                    loader.dismiss();
                    this.navCtrl.setRoot('HomePage');
                }, error => {
                    if (error.status == 400) {
                        this.toastHelper.notificacaoMensagem('A senha atual não confere com a cadastrada');
                    } else {
                        this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar a troca de sua senha, por favor tente novamente mais tarde');
                    }
                    loader.dismiss();
                });
            }, () => {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar a troca de sua senha, por favor tente novamente mais tarde');
                loader.dismiss()
            });
    }


    alterarValorComparacaoSenha() {
        this.customValidatorsHelper.valorAComparar = this.alterarSenhaUsuarioTO.novaSenha;
        this.alterarSenhaForm.controls['confirmarNovaSenha'].updateValueAndValidity();
    }
}