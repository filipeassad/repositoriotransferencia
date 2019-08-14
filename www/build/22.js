webpackJsonp([22],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegundaViaBoletoModule", function() { return SegundaViaBoletoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__segunda_via_boleto__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SegundaViaBoletoModule = /** @class */ (function () {
    function SegundaViaBoletoModule() {
    }
    SegundaViaBoletoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__segunda_via_boleto__["a" /* SegundaViaBoletoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__segunda_via_boleto__["a" /* SegundaViaBoletoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__segunda_via_boleto__["a" /* SegundaViaBoletoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], SegundaViaBoletoModule);
    return SegundaViaBoletoModule;
}());

//# sourceMappingURL=segunda-via-boleto.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegundaViaBoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_boleto_sapiens_model__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_segunda_via_boleto_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SegundaViaBoletoPage = /** @class */ (function () {
    function SegundaViaBoletoPage(loadingCtrl, navParams, clipboard, segundaViaBoletoService, toastHelper, alertCtrl, storageService, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.segundaViaBoletoService = segundaViaBoletoService;
        this.toastHelper = toastHelper;
        this.alertCtrl = alertCtrl;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.boleto = new __WEBPACK_IMPORTED_MODULE_3__models_boleto_sapiens_model__["a" /* BoletoSapiens */]();
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_7__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
    }
    SegundaViaBoletoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.boleto = this.navParams.get('boleto');
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            loader.dismiss();
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
        });
    };
    SegundaViaBoletoPage.prototype.copiarLinhaDigitavel = function () {
        var _this = this;
        this.clipboard.copy(this.boleto.numeroDigitavel).then(function () {
            _this.toastHelper.notificacaoMensagem('Linha digitável copiada com sucesso');
        }, function (error) {
            _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao copiar a linha digitável, por favor tente novamente mais tarde');
        });
    };
    SegundaViaBoletoPage.prototype.abrirAlertOpcaoEmail = function () {
        var _this = this;
        var inputs = [];
        if (this.beneficiario.emailPortal != null) {
            inputs.push({
                type: 'radio',
                label: this.beneficiario.emailPortal,
                value: this.beneficiario.emailPortal,
                checked: true
            });
        }
        inputs.push({
            type: 'radio',
            label: 'Outro',
            value: 'Outro',
            checked: false
        });
        var alert = this.alertCtrl.create({
            title: 'E-mail',
            message: 'Selecione para qual e-mail deseja enviar',
            inputs: inputs,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Selecionar',
                    handler: function (data) {
                        if (data == _this.beneficiario.emailPortal && _this.beneficiario.emailPortal != null) {
                            alert.dismiss().then(function () {
                                _this.enviarBoletoEmail(_this.beneficiario.emailPortal);
                            });
                        }
                        else {
                            alert.dismiss().then(function () {
                                _this.abrirAlertDigitarEmailEnvioBoleto();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SegundaViaBoletoPage.prototype.abrirAlertDigitarEmailEnvioBoleto = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'E-mail',
            message: 'Digite o e-mail que deseja receber a segunda via do boleto',
            cssClass: 'category-prompt',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'E-mail'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        if (_this.validarEmail(data.email)) {
                            alert.dismiss().then(function () {
                                _this.enviarBoletoEmail(data.email);
                            });
                        }
                        else {
                            _this.toastHelper.notificacaoMensagem('E-mail inválido');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SegundaViaBoletoPage.prototype.enviarBoletoEmail = function (email) {
        var _this = this;
        if (this.boleto.numTitulo) {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            var numTitulo = this.boleto.numTitulo.replace('/', '-');
            this.segundaViaBoletoService.enviarBoletoEmail(numTitulo, email).subscribe(function () {
                loader_1.dismiss();
                _this.toastHelper.notificacaoMensagem('O e-mail foi enviado com sucesso');
            }, function (error) {
                loader_1.dismiss();
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao enviar o e-mail, por favor tente novamente mais tarde');
            });
        }
        else {
            this.toastHelper.notificacaoErroCarregarDados();
        }
    };
    SegundaViaBoletoPage.prototype.abrirExtratoCabespBoleto = function () {
        this.navCtrl.push('ExtratoCabespBoletoPage', {
            'BoletoSapiens': this.boleto
        });
    };
    SegundaViaBoletoPage.prototype.validarEmail = function (email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };
    SegundaViaBoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-segunda-via-boleto',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\segunda-via-boleto\segunda-via-boleto\segunda-via-boleto.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Segunda Via Boleto</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentSegundaViaBoleto" text-wrap>\n\n    <div class="details">\n\n        <ion-row wrap class="details-title-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="details-title" *ngIf="boleto.nomeCli_titular">{{boleto.nomeCli_titular | capitalizeAll}}</h2>\n\n                <h2 class="details-title" *ngIf="boleto.nomeCli_agregado">{{boleto.nomeCli_agregado | capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="details-section">\n\n                <ion-col no-padding col-12>\n\n                    <p class="details-description">\n\n                        Título: {{boleto.desTpt | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="details-description">\n\n                        Número Título: {{boleto.numTitulo}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="details-description">\n\n                        Transação: {{boleto.desTns | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="details-description">\n\n                        Valor: {{boleto.vlr_Abe | monetarioBrasil}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="details-description">\n\n                        Vencimento: {{boleto.dataVencimentoCalculado | date: "dd/MM/y"}}\n\n                    </p>\n\n                </ion-col>\n\n            </section>\n\n        </ion-row>\n\n        <section class="opcoes-boleto">\n\n            <section class="linha-digitavel-section" *ngIf="boleto.numeroDigitavel && boleto.dias_Venc < 60">\n\n                <h2 class="section-title" text-center="">Linha Digitável</h2>\n\n                <p text-center>{{boleto.numeroDigitavel}}</p>\n\n                <button class="copiar-linha-digitavel-button" ion-button full type="button"\n\n                        (click)="copiarLinhaDigitavel()">Copiar Linha Digitável\n\n                </button>\n\n                <button class="enviar-por-email-button" ion-button full type="button"\n\n                        (click)="abrirAlertOpcaoEmail()">Enviar\n\n                    Boleto por E-mail\n\n                </button>\n\n            </section>\n\n            <section class="boleto-vencido-section" *ngIf="boleto.dias_Venc >= 60">\n\n                <h4 class="section-title" text-center><ion-icon name="alert" class="icon-color-warning"></ion-icon> Atenção</h4>\n\n                <p text-center>Boleto vencido a mais de 60 dias. Vá até um local de atendimento para negociação.</p>\n\n            </section>\n\n            <button class="extrato-cabesp-button" ion-button full type="button" *ngIf="boleto.reciprocidade"\n\n                    (click)="abrirExtratoCabespBoleto()">Visualizar Extrato Reciprocidade\n\n            </button>\n\n        </section>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\segunda-via-boleto\segunda-via-boleto\segunda-via-boleto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_4__providers_segunda_via_boleto_service__["a" /* SegundaViaBoletoService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SegundaViaBoletoPage);
    return SegundaViaBoletoPage;
}());

//# sourceMappingURL=segunda-via-boleto.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoSapiens; });
var BoletoSapiens = /** @class */ (function () {
    function BoletoSapiens() {
    }
    Object.defineProperty(BoletoSapiens.prototype, "numTitulo", {
        get: function () {
            return this._numTitulo;
        },
        set: function (value) {
            this._numTitulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "codTpt", {
        get: function () {
            return this._codTpt;
        },
        set: function (value) {
            this._codTpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "desTpt", {
        get: function () {
            return this._desTpt;
        },
        set: function (value) {
            this._desTpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "codTns", {
        get: function () {
            return this._codTns;
        },
        set: function (value) {
            this._codTns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "desTns", {
        get: function () {
            return this._desTns;
        },
        set: function (value) {
            this._desTns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "codCli_titular", {
        get: function () {
            return this._codCli_titular;
        },
        set: function (value) {
            this._codCli_titular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "nomeCli_titular", {
        get: function () {
            return this._nomeCli_titular;
        },
        set: function (value) {
            this._nomeCli_titular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "ideCli_titular", {
        get: function () {
            return this._ideCli_titular;
        },
        set: function (value) {
            this._ideCli_titular = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "cliBen_agregado", {
        get: function () {
            return this._cliBen_agregado;
        },
        set: function (value) {
            this._cliBen_agregado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "nomeCli_agregado", {
        get: function () {
            return this._nomeCli_agregado;
        },
        set: function (value) {
            this._nomeCli_agregado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "ideBen_agregado", {
        get: function () {
            return this._ideBen_agregado;
        },
        set: function (value) {
            this._ideBen_agregado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "datemi", {
        get: function () {
            return this._datemi;
        },
        set: function (value) {
            this._datemi = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "vctOri", {
        get: function () {
            return this._vctOri;
        },
        set: function (value) {
            this._vctOri = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "vctOri_data", {
        get: function () {
            return this._vctOri_data;
        },
        set: function (value) {
            this._vctOri_data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "hoje", {
        get: function () {
            return this._hoje;
        },
        set: function (value) {
            this._hoje = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "cmpOri", {
        get: function () {
            return this._cmpOri;
        },
        set: function (value) {
            this._cmpOri = new Date(value.toString().replace(/-/g, '\/'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "dias_Venc", {
        get: function () {
            return this._dias_Venc;
        },
        set: function (value) {
            this._dias_Venc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "vlr_Abe", {
        get: function () {
            return this._vlr_Abe;
        },
        set: function (value) {
            this._vlr_Abe = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "sit_tit", {
        get: function () {
            return this._sit_tit;
        },
        set: function (value) {
            this._sit_tit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "tit_ban", {
        get: function () {
            return this._tit_ban;
        },
        set: function (value) {
            this._tit_ban = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "doc_ori", {
        get: function () {
            return this._doc_ori;
        },
        set: function (value) {
            this._doc_ori = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "numeroDigitavel", {
        get: function () {
            return this._numeroDigitavel;
        },
        set: function (value) {
            this._numeroDigitavel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "dataVencimentoCalculado", {
        get: function () {
            return this._dataVencimentoCalculado;
        },
        set: function (value) {
            this._dataVencimentoCalculado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoletoSapiens.prototype, "reciprocidade", {
        get: function () {
            return this._reciprocidade;
        },
        set: function (value) {
            this._reciprocidade = value;
        },
        enumerable: true,
        configurable: true
    });
    return BoletoSapiens;
}());

//# sourceMappingURL=boleto-sapiens.model.js.map

/***/ })

});
//# sourceMappingURL=22.js.map