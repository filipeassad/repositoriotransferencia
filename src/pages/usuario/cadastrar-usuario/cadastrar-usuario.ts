import {Component} from "@angular/core";
import {IonicPage, LoadingController, ModalController, NavController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioCadastroTO} from "../../../models/to/usuario-cadastro-to.model";
import {UsuarioService} from "../../../providers/usuario.service";
import {ToastHelper} from "../../../helpers/toast.helper";
import {CustomValidatorsHelper} from "../../../helpers/custom-validators.helper";
import {UtilHelper} from "../../../helpers/util.helper";

@IonicPage()
@Component({
    selector: 'page-cadastrar-usuario',
    templateUrl: 'cadastrar-usuario.html'
})
export class CadastrarUsuarioPage {

    usuarioCadastro: UsuarioCadastroTO = new UsuarioCadastroTO();
    cadastroForm: FormGroup;
    private customValidatorsHelper: CustomValidatorsHelper = new CustomValidatorsHelper();
    private utilHelper: UtilHelper = new UtilHelper();

    constructor(private usuarioService: UsuarioService,
                private modal: ModalController,
                private toastHelper: ToastHelper,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController
                ) {
        this.cadastroForm = new FormGroup({
            matricula: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
            cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
            email: new FormControl('', [Validators.required, this.customValidatorsHelper.validEmail]),
            'confirmar-email': new FormControl('', [Validators.required, this.customValidatorsHelper.equals.bind(this.customValidatorsHelper), this.customValidatorsHelper.validEmail]),
            'data-nascimento': new FormControl('', Validators.required),
            'aceite-termo': new FormControl(false, Validators.requiredTrue)
        });
    }

    cadastrarUsuario() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        if(this.utilHelper.calcularIdade(this.usuarioCadastro.dataNascimento) >= 18) {
            this.usuarioService.realizarCadastroUsuario(this.usuarioCadastro).subscribe(response => {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem('O cadastro foi realizado com sucesso, por favor verifique seu e-mail para poder ativar sua conta');
                this.navCtrl.setRoot('CodigoAtivacaoUsuarioPage');

            }, error => {
                loader.dismiss();
                if (error.status == 400) {
                    this.toastHelper.notificacaoMensagem('Dados Inválidos');
                } else {
                    if (error.status == 401) {
                        this.toastHelper.notificacaoMensagem('Beneficiário já cadastrado');
                    } else {
                        if (error.status == 403) {
                            this.toastHelper.notificacaoMensagem('Cadastro permitido apenas para beneficiários maiores de idade');
                        } else {
                            this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar seu cadastro, por favor tente novamente mais tarde');
                        }
                    }
                }
            });
        }else{
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Cadastro permitido apenas para beneficiários maiores de idade');
        }
    }

    modalTermosECondicoes() {
        this.modal.create('ModalTermosECondicoesPage').present();
    }

    aceitarTermo(e) {
        this.usuarioCadastro.aceiteTermo = e.checked;
    }

    alterarValorComparacaoEmail() {
        this.customValidatorsHelper.valorAComparar = this.usuarioCadastro.email;
        this.cadastroForm.controls['confirmar-email'].updateValueAndValidity();
    }
}