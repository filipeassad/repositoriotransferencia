import {Component} from "@angular/core";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilBuscaCep} from "../../../models/to/util-busca-cep.model";
import {ToastHelper} from "../../../helpers/toast.helper";
import {RevalidacaoService} from "../../../providers/revalidacao.service";
import {UtilService} from "../../../providers/util.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {DtoAuxiliar} from "../../../models/dto/dto-auxiliar";

@IonicPage()
@Component({
    selector: 'page-revalidacao-atualizar-endereco',
    templateUrl: 'revalidacao-atualizar-endereco.html'
})
export class RevalidacaoAtualizarEnderecoPage {
    public beneficiario: EnViPortalBeneficiario;
    public buscaCep: UtilBuscaCep = new UtilBuscaCep();
    public numero: number = null;
    public complemento: string = null;
    public form: FormGroup;


    constructor(private toastHelper: ToastHelper,
                private navCtrl: NavController,
                private navParams: NavParams,
                private loadingCtrl: LoadingController,
                private revalidacaoService: RevalidacaoService,
                private utilService: UtilService
    ) {
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new FormGroup({
            'cep': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]*$')]),
            'cidade': new FormControl({value: '', disabled: true}),
            'uf': new FormControl({value: '', disabled: true}),
            'bairro': new FormControl({value: '', disabled: true}),
            'endereco': new FormControl({value: '', disabled: true}),
            'numero': new FormControl({
                value: null,
                disabled: true
            }, [Validators.required, Validators.pattern('^[0-9]*$')]),
            'complemento': new FormControl({value: null, disabled: true})
        });
    }

    buscarCep() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.utilService.buscarCep(this.buscaCep.cep).subscribe((buscaCep: UtilBuscaCep[]) => {
            if (buscaCep.length) {
                this.buscaCep = buscaCep[0];
                this.form.get('cep').disable();
                this.form.get('cep').markAsPending();
                this.form.get('numero').enable();
                this.form.get('numero').markAsTouched();
                this.form.get('complemento').enable();
            } else {
                this.toastHelper.notificacaoErroCarregarDados();
            }
            loader.dismiss();
        }, error => {
            if (error.status == 400) {
                this.toastHelper.notificacaoMensagem('CEP não encontrado, revalidação permitida somente na unidade CASSEMS');
            } else {
                this.toastHelper.notificacaoErroCarregarDados();
            }
            loader.dismiss();
        });
    }

    revalidar() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.revalidacaoService.revalidarBeneficiario(
            this.beneficiario.matriculaCassems,
            this.buscaCep.cep,
            this.buscaCep.endereco,
            this.numero,
            this.complemento,
            this.buscaCep.bairro,
            1
        ).subscribe((auxiliar: DtoAuxiliar) => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
            this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
        }, error => {
            if (error.status == 400) {
                this.toastHelper.notificacaoMensagem(error.error.mensagem);
            } else {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    }
}
