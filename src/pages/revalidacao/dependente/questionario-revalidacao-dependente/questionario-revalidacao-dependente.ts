import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {QuestionarioRevalidacao} from "../../../../models/questionario-revalidacao.model";
import {ToastHelper} from "../../../../helpers/toast.helper";
import {RevalidacaoService} from "../../../../providers/revalidacao.service";
import {EnViPortalBeneficiario} from "../../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";

@IonicPage()
@Component({
    selector: 'page-questionario-revalidacao-dependente',
    templateUrl: 'questionario-revalidacao-dependente.html'
})
export class QuestionarioRevalidacaoDependentePage {

    private beneficiario: EnViPortalBeneficiario;
    public questionario: QuestionarioRevalidacao = new QuestionarioRevalidacao();
    public form: FormGroup;
    public opcoesQuestao1: {} = QuestionarioRevalidacao.opcoesQuestao1();
    public opcoesQuestao2: {} = QuestionarioRevalidacao.opcoesQuestao2();
    public opcoesQuestao3: {} = QuestionarioRevalidacao.opcoesQuestao3();

    constructor(private toastHelper: ToastHelper,
                private navCtrl: NavController,
                private navParams: NavParams,
                private loadingCtrl: LoadingController,
                private revalidacaoService: RevalidacaoService
    ) {
        this.beneficiario = this.navParams.get('Beneficiario');
        this.form = new FormGroup({
            'questao1': new FormControl('', Validators.required),
            'questao2': new FormControl('', Validators.required),
            'questao3': new FormControl('', Validators.required),
            'prefeitura': new FormControl({value: '', disabled: true}, Validators.required),
        });
    }

    /**
     * Metodo utilizado para resetar o valor da prefeitura no questionario
     *
     * @author Anderson Friaca
     * @since v2.2.0 24/05/2017
     */
    resetValorPrefeitura() {
        this.questionario.prefeitura = null;
        if (this.questionario.questao3 == QuestionarioRevalidacao.opcaoQuestao3Prefeitura.toString()) {
            this.form.get('prefeitura').enable();
        } else {
            this.form.get('prefeitura').disable();
        }
    }

    /**
     * Metodo utilizado para revalidar o beneficiario dependente
     *
     * @author Anderson Friaca
     * @since v2.2.0 24/05/2017
     */
    revalidar() {
        let loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.revalidacaoService.revalidarBeneficiario(
            this.beneficiario.matriculaCassems
        ).subscribe(response => {
            loader.dismiss();
            this.toastHelper.notificacaoMensagem('Revalidação realizada com sucesso');
            this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
        }, error => {
            if (error.status == 400) {
                this.toastHelper.notificacaoMensagem(error.error.descricaoCompleta);
            } else {
                this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
            }
            loader.dismiss();
        });
    }
}
