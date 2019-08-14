import { Component } from "@angular/core";
import { AlertController, IonicPage, LoadingController, NavController } from "ionic-angular";
import { ToastHelper } from "../../../helpers/toast.helper";
import { RevalidacaoService } from "../../../providers/revalidacao.service";
import { EnViPortalBeneficiario } from "../../../models/beneficiario/benner/en-vi-portal-beneficiario.model";
import { StorageService } from "../../../providers/storage.service";
import { DtoAuxiliar } from "../../../models/dto/dto-auxiliar";

@IonicPage()
@Component({
	selector: 'page-lista-grupo-familiar-revalidacao',
	templateUrl: 'lista-grupo-familiar-revalidacao.html'
})
export class ListaGrupoFamiliarRevalidacaoPage {
	listaBeneficiarios: EnViPortalBeneficiario[] = [];
	private beneficiario: EnViPortalBeneficiario;


	constructor(private alertCtrl: AlertController,
		private toastHelper: ToastHelper,
		private navCtrl: NavController,
		private loadingCtrl: LoadingController,
		private revalidacaoService: RevalidacaoService,
		private storageService: StorageService) {
	}

	ionViewDidLoad() {
		let loader = this.loadingCtrl.create({
			content: "Por favor aguarde...",
		});
		loader.present();
		this.storageService.getBeneficiario()
			.then(beneficiario => {
				this.beneficiario = beneficiario;
				this.revalidacaoService.listaGrupoFamiliarAptoRevalidacao(this.beneficiario.handleTitular).subscribe((lista: EnViPortalBeneficiario[]) => {
					this.listaBeneficiarios = lista.map(beneficiario => {
						return beneficiario;
					});
					loader.dismiss();
				}, error => {
					loader.dismiss();
					this.toastHelper.notificacaoErroCarregarDados();
				});
			}, error => {
				loader.dismiss();
				this.toastHelper.notificacaoErroCarregarDados();
			});
	}

	/**
	 * Metodo utilizado para recarregar a lista de beneficiarios aptos para revalidacao
	 *
	 * @author Anderson Friaca
	 * @since v2.2.0 22/05/2017
	 * @param refresher
	 */
	recarregarDados(refresher = null) {
		this.revalidacaoService.listaGrupoFamiliarAptoRevalidacao(this.beneficiario.handleTitular).subscribe((lista: EnViPortalBeneficiario[]) => {
			this.listaBeneficiarios = lista.map(beneficiario => {
				return beneficiario;
			});
			if (refresher != null) {
				refresher.complete();
			}
		}, () => {
			if (refresher != null) {
				refresher.complete();
			}
			this.toastHelper.notificacaoErroCarregarDados();
		});
	}

	/**
	 * Metodo utilizado para realizar o direcionamento das revalidacoes
	 *
	 * @author Anderson Friaca
	 * @since v2.2.0 22/05/2017
	 * @param beneficiario
	 */
	revalidar(beneficiario: EnViPortalBeneficiario) {
		if (beneficiario.titular === 'S') {
			if (parseInt(beneficiario.codVinculo) === 103) {
				return this.navCtrl.push('TermoConvocadoPage', { 'Beneficiario': beneficiario });
			} else {
				let confirm = this.alertCtrl.create({
					title: 'Deseja atualizar o seu endereço?',
					buttons: [
						{
							text: 'Não',
							handler: () => {
								//confirm.dismiss();
								let loader = this.loadingCtrl.create({
									content: "Por favor aguarde...",
								});
								loader.present();
								this.revalidacaoService.revalidarBeneficiario(
									beneficiario.matriculaCassems
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
								this.navCtrl.push('RevalidacaoAtualizarEnderecoPage', { 'Beneficiario': beneficiario });
							}
						}
					]
				});
				confirm.present();
			}
		} else {
			let loader = this.loadingCtrl.create({
				content: "Por favor aguarde...",
			});
			loader.present();
			this.revalidacaoService.revalidarBeneficiario(
				beneficiario.matriculaCassems
			).subscribe((auxiliar: DtoAuxiliar) => {
				loader.dismiss();
				this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
				this.recarregarDados();
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
}
