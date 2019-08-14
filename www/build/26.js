webpackJsonp([26],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermoConvocadoModule", function() { return TermoConvocadoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termo_convocado__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermoConvocadoModule = /** @class */ (function () {
    function TermoConvocadoModule() {
    }
    TermoConvocadoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__termo_convocado__["a" /* TermoConvocadoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__termo_convocado__["a" /* TermoConvocadoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__termo_convocado__["a" /* TermoConvocadoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], TermoConvocadoModule);
    return TermoConvocadoModule;
}());

//# sourceMappingURL=termo-convocado.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermoConvocadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_revalidacao_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermoConvocadoPage = /** @class */ (function () {
    function TermoConvocadoPage(alertCtrl, toastHelper, navCtrl, navParams, loadingCtrl, revalidacaoService) {
        this.alertCtrl = alertCtrl;
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.revalidacaoService = revalidacaoService;
    }
    TermoConvocadoPage.prototype.ionViewDidLoad = function () {
        this.beneficiario = this.navParams.get('Beneficiario');
    };
    /**
     * Metodo utilizado para realizar o direcionamento das revalidacoes
     *
     * @author Anderson Friaca
     */
    TermoConvocadoPage.prototype.revalidar = function () {
        var _this = this;
        if (this.beneficiario.titular === 'S') {
            var confirm_1 = this.alertCtrl.create({
                title: 'Deseja atualizar o seu endereço?',
                buttons: [
                    {
                        text: 'Não',
                        handler: function () {
                            var loader = _this.loadingCtrl.create({
                                content: "Por favor aguarde...",
                            });
                            loader.present();
                            _this.revalidacaoService.revalidarBeneficiario(_this.beneficiario.matriculaCassems).subscribe(function (auxiliar) {
                                loader.dismiss();
                                _this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
                                _this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
                            }, function (error) {
                                loader.dismiss();
                                if (error.status == 400) {
                                    _this.toastHelper.notificacaoMensagem(error.error.descricaoCompleta);
                                }
                                else {
                                    _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                                }
                            });
                        }
                    },
                    {
                        text: 'Sim',
                        handler: function () {
                            _this.navCtrl.push('RevalidacaoAtualizarEnderecoPage', { 'Beneficiario': _this.beneficiario });
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.revalidacaoService.revalidarBeneficiario(this.beneficiario.matriculaCassems).subscribe(function (auxiliar) {
                loader_1.dismiss();
                _this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
                _this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
            }, function (error) {
                if (error.status == 400) {
                    _this.toastHelper.notificacaoMensagem(error.error.descricaoCompleta);
                }
                else {
                    _this.toastHelper.notificacaoMensagem('Ocorreu um erro interno, por favor tente novamente mais tarde');
                }
                loader_1.dismiss();
            });
        }
    };
    TermoConvocadoPage.prototype.rejeitar = function () {
        this.navCtrl.setRoot('ListaGrupoFamiliarRevalidacaoPage');
    };
    TermoConvocadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-termo-convocado',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\revalidacao\termo-convocado\termo-convocado.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <span class="titulo-page">Termo de Aceite Revalidação</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content-termo">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h4 class="title">Resolução Normativa n°26 de 01 de Fevereiro de 2014</h4>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <p align="justify"><strong>Regulamenta a adesão dos Professores Convocados à CASSEMS –\n\n          Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul.</strong><br/><br/>\n\n\n\n          O Conselho de Administração da Caixa de Assistência dos Servidores do Estado de Mato Grosso do Sul -\n\n          CASSEMS, no uso das atribuições que lhe confere a letra "m" do artigo 35, através de seu presidente\n\n          e de acordo com as letras "a" e "d" do artigo 44 do Estatuto da CASSEMS;<br/><br/>\n\n\n\n          <strong>CONSIDERANDO:</strong><br/><br/>\n\n\n\n          1. que a CASSEMS é associação civil sem fins econômicos, instituída em regime de autogestão\n\n          destinada à Assistência à Saúde aos empregados ativos, aposentados, pensionista e ex-empregados com\n\n          o Governo do Estado e outras patrocinadoras;<br/>\n\n\n\n          2. as dificuldades enfrentadas pelos Professores Convocados para prestação de serviços à\n\n          Patrocinadora devido às datas de convocação para o ano letivo e Regularização Cadastral no Plano de\n\n          Saúde;<br/>\n\n\n\n          3. a necessidade de Assistência à Saúde de forma contínua, bem como o adimplemento das obrigações\n\n          financeiras;<br/>\n\n\n\n          4. que o objetivo da CASSEMS é a promoção do bem estar social e instituição de outros benefícios\n\n          assistenciais e proteção à saúde dos seus beneficiários;<br/>\n\n\n\n          5. a decisão proferida na 5ª Assembléia Geral Ordinária da CASSEMS, quanto ao valor mínimo das\n\n          contribuições;\n\n          <br/><br/>\n\n\n\n          <strong>RESOLVE</strong> adotar, por deliberação do Conselho de Administração, a seguinte Resolução\n\n          Normativa:<br/>\n\n          1. Fica autorizada a inclusão de Professores Convocados e seus Dependentes como Beneficiários da\n\n          CASSEMS, pelo prazo máximo de um ano compreendido entre o mês de Março de um exercício ao mês de\n\n          março do exercício seguinte, e não havendo manifestação em contrário de ambas as partes, o contrato\n\n          será automaticamente renovado por igual período.<br/>\n\n\n\n          2. Não havendo nova convocação para o exercício seguinte e decorrido o prazo de um ano da assinatura\n\n          do termo de adesão o contrato será rescindido de pleno direito e automaticamente.<br/>\n\n\n\n          3. Os professores convocados assumem o pagamento integral das contribuições devidas à CASSEMS, ou\n\n          seja, além da sua contribuição, a contribuição patronal, nos meses que não possuírem vínculo com o\n\n          Estado.<br/>\n\n\n\n          4. O valor das contribuições devem atender o valor mínimo de 20horas aula do Professor Nível 2, sob\n\n          pena de ser necessária a complementação pelo Associado.<br/>\n\n\n\n          5. Os servidores que aderirem à CASSEMS não terão quaisquer direitos a ressarcimento de\n\n          contribuição.<br/>\n\n\n\n          6. Eventuais beneficiários que constem como Dependentes de outros Associados Titulares, deverão\n\n          contribuir para a CASSEMS, não fazendo jus à quaisquer restituições.<br/>\n\n\n\n          7. Os professores convocados das Prefeituras também se sujeitam à presente Resolução.<br/>\n\n\n\n          8. O inadimplemento das obrigações financeiras ensejará a suspensão de atendimento aos\n\n          beneficiários.<br/>\n\n\n\n          Esta resolução entra em vigor a partir de 01 de Fevereiro do corrente ano, ficando revogados os\n\n          efeitos da Resolução Normativa n.º 20/2006<br/><br/><br/>\n\n\n\n\n\n          Cumpra-se.<br/><br/><br/>\n\n\n\n\n\n          Ricardo Ayache\n\n          Presidente\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button block type="button" (click)="revalidar()">Aceito</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button block type="button" (click)="rejeitar()">Não Aceito</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\revalidacao\termo-convocado\termo-convocado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_revalidacao_service__["a" /* RevalidacaoService */]])
    ], TermoConvocadoPage);
    return TermoConvocadoPage;
}());

//# sourceMappingURL=termo-convocado.js.map

/***/ })

});
//# sourceMappingURL=26.js.map