import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, LoadingController, NavController} from "ionic-angular";
import {CodigoAtivacaoTO} from "../../../models/to/codigo-ativacao.to.model";
import {TipoCodigoAtivacaoEnum} from "../../../enums/tipo-codigo-ativacao.enum";
import {UsuarioService} from "../../../providers/usuario.service";
import {ToastHelper} from "../../../helpers/toast.helper";

@IonicPage()
@Component({
    selector: 'page-codigo-ativacao-usuario',
    templateUrl: 'codigo-ativacao-usuario.html'
})
export class CodigoAtivacaoUsuarioPage {

    codigoAtivacaoTO: CodigoAtivacaoTO = new CodigoAtivacaoTO();
    codigoAtivacaoForm: FormGroup;
    listaTipoCodigoAtivacao: any = TipoCodigoAtivacaoEnum;

    constructor(private usuarioService: UsuarioService,
                private toastHelper: ToastHelper,
                private loadingCtrl: LoadingController,
                private navCtrl: NavController
                ) {
        this.codigoAtivacaoForm = new FormGroup({
            cpf: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
            codigo: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]*$')]),
            'tipo-codigo': new FormControl('', [Validators.required])
        });
    }

    realizarEnvioCodigoAtivacao() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.usuarioService.validarCodigoAtivacao(this.codigoAtivacaoTO.cpf, this.codigoAtivacaoTO.codigoAtivacao.toString(), this.codigoAtivacaoTO.tipoCodigoAtivacao).subscribe(response => {
            if (this.codigoAtivacaoTO.tipoCodigoAtivacao == this.listaTipoCodigoAtivacao['Novo Cadastro']) {
                this.toastHelper.notificacaoMensagem('Sua conta foi ativada com sucesso');
            }else{
                this.toastHelper.notificacaoMensagem('A senha de sua conta foi redefinida com sucesso');
            }
            loader.dismiss();
            this.navCtrl.setRoot('LoginPage');
        }, error => {
            if(error.status == 400){
                this.toastHelper.notificacaoMensagem('Dados inválidos');
            }else {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro ao verificar seu código, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    }

}