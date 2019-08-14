webpackJsonp([27],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaGrupoFamiliarRevalidacaoModule", function() { return ListaGrupoFamiliarRevalidacaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_grupo_familiar_revalidacao__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListaGrupoFamiliarRevalidacaoModule = /** @class */ (function () {
    function ListaGrupoFamiliarRevalidacaoModule() {
    }
    ListaGrupoFamiliarRevalidacaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lista_grupo_familiar_revalidacao__["a" /* ListaGrupoFamiliarRevalidacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__lista_grupo_familiar_revalidacao__["a" /* ListaGrupoFamiliarRevalidacaoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__lista_grupo_familiar_revalidacao__["a" /* ListaGrupoFamiliarRevalidacaoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ListaGrupoFamiliarRevalidacaoModule);
    return ListaGrupoFamiliarRevalidacaoModule;
}());

//# sourceMappingURL=lista-grupo-familiar-revalidacao.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaGrupoFamiliarRevalidacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_revalidacao_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaGrupoFamiliarRevalidacaoPage = /** @class */ (function () {
    function ListaGrupoFamiliarRevalidacaoPage(alertCtrl, toastHelper, navCtrl, loadingCtrl, revalidacaoService, storageService) {
        this.alertCtrl = alertCtrl;
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.revalidacaoService = revalidacaoService;
        this.storageService = storageService;
        this.listaBeneficiarios = [];
    }
    ListaGrupoFamiliarRevalidacaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            _this.revalidacaoService.listaGrupoFamiliarAptoRevalidacao(_this.beneficiario.handleTitular).subscribe(function (lista) {
                _this.listaBeneficiarios = lista.map(function (beneficiario) {
                    return beneficiario;
                });
                loader.dismiss();
            }, function (error) {
                loader.dismiss();
                _this.toastHelper.notificacaoErroCarregarDados();
            });
        }, function (error) {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    /**
     * Metodo utilizado para recarregar a lista de beneficiarios aptos para revalidacao
     *
     * @author Anderson Friaca
     * @since v2.2.0 22/05/2017
     * @param refresher
     */
    ListaGrupoFamiliarRevalidacaoPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        this.revalidacaoService.listaGrupoFamiliarAptoRevalidacao(this.beneficiario.handleTitular).subscribe(function (lista) {
            _this.listaBeneficiarios = lista.map(function (beneficiario) {
                return beneficiario;
            });
            if (refresher != null) {
                refresher.complete();
            }
        }, function () {
            if (refresher != null) {
                refresher.complete();
            }
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    /**
     * Metodo utilizado para realizar o direcionamento das revalidacoes
     *
     * @author Anderson Friaca
     * @since v2.2.0 22/05/2017
     * @param beneficiario
     */
    ListaGrupoFamiliarRevalidacaoPage.prototype.revalidar = function (beneficiario) {
        var _this = this;
        if (beneficiario.titular === 'S') {
            if (parseInt(beneficiario.codVinculo) === 103) {
                return this.navCtrl.push('TermoConvocadoPage', { 'Beneficiario': beneficiario });
            }
            else {
                var confirm_1 = this.alertCtrl.create({
                    title: 'Deseja atualizar o seu endereço?',
                    buttons: [
                        {
                            text: 'Não',
                            handler: function () {
                                //confirm.dismiss();
                                var loader = _this.loadingCtrl.create({
                                    content: "Por favor aguarde...",
                                });
                                loader.present();
                                _this.revalidacaoService.revalidarBeneficiario(beneficiario.matriculaCassems).subscribe(function (auxiliar) {
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
                                _this.navCtrl.push('RevalidacaoAtualizarEnderecoPage', { 'Beneficiario': beneficiario });
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        }
        else {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.revalidacaoService.revalidarBeneficiario(beneficiario.matriculaCassems).subscribe(function (auxiliar) {
                loader_1.dismiss();
                _this.toastHelper.notificacaoMensagem(auxiliar.descricaoCompleta);
                _this.recarregarDados();
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
    ListaGrupoFamiliarRevalidacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lista-grupo-familiar-revalidacao',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\lista-grupo-familiar-revalidacao\lista-grupo-familiar-revalidacao.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Revalidação</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentRevalidacao">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <h2 class="titulo-lista-beneficiario-vazia" text-center *ngIf="listaBeneficiarios.length == 0">Não há beneficiários para revalidar</h2>\n    <ion-list *ngIf="listaBeneficiarios.length > 0">\n        <button ion-item class="list-item" *ngFor="let beneficiario of listaBeneficiarios" (click)="revalidar(beneficiario)">\n            <ion-row no-padding class="content-row one-line">\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap>{{ beneficiario.nome | capitalizeAll}}</h3>\n                    <p class="item-description">Data Validade Carteira: {{ beneficiario.compValidadeFinal | date: "dd/MM/y"}}</p>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\revalidacao\lista-grupo-familiar-revalidacao\lista-grupo-familiar-revalidacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_revalidacao_service__["a" /* RevalidacaoService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__["a" /* StorageService */]])
    ], ListaGrupoFamiliarRevalidacaoPage);
    return ListaGrupoFamiliarRevalidacaoPage;
}());

//# sourceMappingURL=lista-grupo-familiar-revalidacao.js.map

/***/ })

});
//# sourceMappingURL=27.js.map