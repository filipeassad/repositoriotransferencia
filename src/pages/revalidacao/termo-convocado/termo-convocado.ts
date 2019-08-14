import {Component} from "@angular/core";
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from "ionic-angular";
import {ToastHelper} from "../../../helpers/toast.helper";
import {RevalidacaoService} from "../../../providers/revalidacao.service";
import {EnViPortalBeneficiario} from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import {DtoAuxiliar} from "../../../models/dto/dto-auxiliar";

@IonicPage()
@Component({
  selector: 'page-termo-convocado',
  templateUrl: 'termo-convocado.html'
})
export class TermoConvocadoPage {
  private beneficiario: EnViPortalBeneficiario;


  constructor(private alertCtrl: AlertController,
              private toastHelper: ToastHelper,
              private navCtrl: NavController,
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              private revalidacaoService: RevalidacaoService) {
  }

  ionViewDidLoad() {
    this.beneficiario = this.navParams.get('Beneficiario');
  }

  /**
   * Metodo utilizado para realizar o direcionamento das revalidacoes
   *
   * @author Anderson Friaca
   */
  revalidar() {
    if (this.beneficiario.titular === 'S') {
      let confirm = this.alertCtrl.create({
        title: 'Deseja atualizar o seu endereço?',
        buttons: [
          {
            text: 'Não',
            handler: () => {
              let loader = this.loadingCtrl.create({
                content: "Por favor aguarde...",
              });
              loader.present();
              this.revalidacaoService.revalidarBeneficiario(
                this.beneficiario.matriculaCassems
              ).subscribe((auxiliar: DtoAuxiliar) => {
                loader.dismiss();
                this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
                this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
              }, error => {
                loader.dismiss();
                if (error.status == 400) {
                  this.toastHelper.notificacaoMensagem(error.error.descricaoCompleta);
                } else {
                  this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                }
              });
            }
          },
          {
            text: 'Sim',
            handler: () => {
              this.navCtrl.push('RevalidacaoAtualizarEnderecoPage', {'Beneficiario': this.beneficiario});
            }
          }
        ]
      });
      confirm.present();
    } else {
      let loader = this.loadingCtrl.create({
        content: "Por favor aguarde...",
      });
      loader.present();
      this.revalidacaoService.revalidarBeneficiario(
        this.beneficiario.matriculaCassems
      ).subscribe((auxiliar: DtoAuxiliar) => {
        loader.dismiss();
        this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
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

  rejeitar() {
    this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
  }
}
