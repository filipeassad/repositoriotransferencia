webpackJsonp([20],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorModule", function() { return PrestadorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prestador__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrestadorModule = /** @class */ (function () {
    function PrestadorModule() {
    }
    PrestadorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prestador__["a" /* PrestadorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prestador__["a" /* PrestadorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__prestador__["a" /* PrestadorPage */]],
            schemas: [],
            providers: [],
        })
    ], PrestadorModule);
    return PrestadorModule;
}());

//# sourceMappingURL=prestador.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_prestador_model__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prestador_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_atendimento_service__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrestadorPage = /** @class */ (function () {
    function PrestadorPage(navParams, prestadorService, loadingCtrl, locaisAtendimentoService, platform, actionSheetCtrl, toastHelper, launchNavigator, callNumber) {
        this.navParams = navParams;
        this.prestadorService = prestadorService;
        this.loadingCtrl = loadingCtrl;
        this.locaisAtendimentoService = locaisAtendimentoService;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastHelper = toastHelper;
        this.launchNavigator = launchNavigator;
        this.callNumber = callNumber;
        this.prestador = new __WEBPACK_IMPORTED_MODULE_2__models_prestador_model__["a" /* Prestador */]();
        this.listaLocaisAtendimento = [];
        this.stringEspecialidadesPrestador = '';
    }
    PrestadorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.prestador = this.navParams.get('Prestador');
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].forkJoin(this.locaisAtendimentoService.buscarLocaisAtendimento(this.prestador.codCredenciado), this.prestadorService.buscarEspecialidadesPrestador(this.prestador.codCredenciado.toString())).subscribe(function (result) {
            _this.listaLocaisAtendimento = result[0];
            _this.prestador.especialidades = result[1];
            _this.stringEspecialidadesPrestador = result[1].map(function (array) { return array.descricaoEspecialidade.trim(); }).join(', ');
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    PrestadorPage.prototype.abrirOpcoesLocalAtendimento = function (localAtendimento) {
        var _this = this;
        if (this.platform.is('windows') || localAtendimento.fone == '') {
            this.abrirNavegacao(localAtendimento);
        }
        else {
            this.actionSheetCtrl.create({
                title: 'O que deseja fazer?',
                buttons: [
                    {
                        text: 'Ligar',
                        handler: function () {
                            _this.abrirLigacao(localAtendimento);
                        }
                    },
                    {
                        text: 'Visualizar no mapa',
                        handler: function () {
                            _this.abrirNavegacao(localAtendimento);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    }
                ]
            }).present();
        }
    };
    PrestadorPage.prototype.abrirLigacao = function (localAtendimento) {
        this.callNumber.callNumber('+55' + localAtendimento.fone, true);
    };
    PrestadorPage.prototype.abrirNavegacao = function (localAtendimento) {
        var _this = this;
        this.launchNavigator.availableApps().then(function (apps) {
            var possuiAppPromissor = false;
            Object.keys(apps).forEach(function (valor) {
                if (apps[valor] == true) {
                    possuiAppPromissor = true;
                }
            });
            if (possuiAppPromissor) {
                var options = {};
                var appSelectionOptions = {};
                var rememberChoiceOptions = {};
                rememberChoiceOptions.enabled = false;
                appSelectionOptions.rememberChoice = rememberChoiceOptions;
                appSelectionOptions.cancelButtonText = 'Fechar';
                appSelectionOptions.dialogHeaderText = 'Selecione um aplicativo de navegação/mapa';
                options.destinationName = _this.prestador.nome;
                options.appSelection = appSelectionOptions;
                _this.launchNavigator.navigate(localAtendimento.endereco + ', ' + localAtendimento.descricaoMunicipio + ' - ' + localAtendimento.uf, options).then(function (success) { return 'ok'; }, function (error) {
                    if (error !== 'cancelled') {
                        _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao abrir o aplicativo de nagevação/mapa, tente novamente mais tarde');
                    }
                });
            }
            else {
                _this.toastHelper.notificacaoMensagem('Você não possui nenhum app de navegação/mapa disponível');
            }
        }, function (error) {
            _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao localizar os aplicativos de nagevação/mapas, tente novamente mais tarde');
        });
    };
    PrestadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prestador',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\prestador\prestador.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Prestador</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-wrap class="contentPrestador">\n    <div class="prestador">\n        <ion-row wrap class="prestador-title-row">\n            <ion-col no-padding col-12 text-center>\n                <h2 class="prestador-title">{{prestador.nome | capitalizeAll}}</h2>\n            </ion-col>\n            <section class="prestador-details-section">\n                <ion-col no-padding col-12 *ngIf="prestador.cpf">\n                    <p class="prestador-description">\n                        CPF: {{prestador.cpf | cpf}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="prestador.cnpj">\n                    <p class="prestador-description">\n                        CNPJ: {{prestador.cnpj | cnpj}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="prestador.descCategoria">\n                    <p class="prestador-description">\n                        Tipo Assistência: {{prestador.descCategoria | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="prestador.tipoConselho">\n                    <p class="prestador-description">\n                        Tipo Conselho: {{prestador.tipoConselho | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="prestador.numConselho">\n                    <p class="prestador-description">\n                        Número Conselho: {{prestador.numConselho}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12 *ngIf="prestador.ufConselho">\n                    <p class="prestador-description">\n                        UF Conselho: {{prestador.ufConselho}}\n                    </p>\n                </ion-col>\n                <section class="lista-especialidades-section" *ngIf="stringEspecialidadesPrestador">\n                    <ion-col no-padding col-12>\n                        <p class="prestador-description">\n                            Especialidades: {{stringEspecialidadesPrestador | capitalizeAll}}\n                        </p>\n                    </ion-col>\n                </section>\n            </section>\n        </ion-row>\n    </div>\n    <section class="prestador-locais-atendimento-section" *ngIf="listaLocaisAtendimento.length">\n        <h2 class="titulo-locais-atendimento" text-center>Locais de Atendimento</h2>\n        <ion-list>\n            <button ion-item class="list-item" *ngFor="let localAtendimento of listaLocaisAtendimento" (click)="abrirOpcoesLocalAtendimento(localAtendimento)">\n                <ion-row no-padding class="content-row one-line">\n\n                    <ion-col no-padding width-90 class="item-content">\n                        <h3 class="item-title" text-wrap>Endereço: {{localAtendimento.endereco | capitalizeAll}}</h3>\n                        <p class="item-description" *ngIf="localAtendimento.bairro">Bairro: {{localAtendimento.bairro | capitalizeAll}}</p>\n                        <p class="item-description" *ngIf="localAtendimento.descricaoMunicipio">Município: {{localAtendimento.descricaoMunicipio | capitalizeAll}} - {{localAtendimento.uf}}</p>\n                        <p class="item-description" *ngIf="localAtendimento.fone">Telefone: {{localAtendimento.fone}}</p>\n                    </ion-col>\n                    <ion-col no-padding width-10 class="item-icon">\n                        <ion-icon name="arrow-forward"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </button>\n        </ion-list>\n    </section>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\prestador\prestador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_prestador_service__["a" /* PrestadorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_local_atendimento_service__["a" /* LocalAtendimentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */]])
    ], PrestadorPage);
    return PrestadorPage;
}());

//# sourceMappingURL=prestador.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prestador; });
var Prestador = /** @class */ (function () {
    function Prestador() {
    }
    Object.defineProperty(Prestador.prototype, "codCredenciado", {
        get: function () {
            return this._codCredenciado;
        },
        set: function (value) {
            this._codCredenciado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "codMunicipio", {
        get: function () {
            return this._codMunicipio;
        },
        set: function (value) {
            this._codMunicipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "municipio", {
        get: function () {
            return this._municipio;
        },
        set: function (value) {
            this._municipio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "uf", {
        get: function () {
            return this._uf;
        },
        set: function (value) {
            this._uf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "codCategoria", {
        get: function () {
            return this._codCategoria;
        },
        set: function (value) {
            this._codCategoria = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "descCategoria", {
        get: function () {
            return this._descCategoria;
        },
        set: function (value) {
            this._descCategoria = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "codEspecialidade", {
        get: function () {
            return this._codEspecialidade;
        },
        set: function (value) {
            this._codEspecialidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "descEspecialidade", {
        get: function () {
            return this._descEspecialidade;
        },
        set: function (value) {
            this._descEspecialidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "cnpj", {
        get: function () {
            return this._cnpj;
        },
        set: function (value) {
            this._cnpj = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "razaoSocial", {
        get: function () {
            return this._razaoSocial;
        },
        set: function (value) {
            this._razaoSocial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "numConselho", {
        get: function () {
            return this._numConselho;
        },
        set: function (value) {
            this._numConselho = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "ufConselho", {
        get: function () {
            return this._ufConselho;
        },
        set: function (value) {
            this._ufConselho = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "tipoConselho", {
        get: function () {
            return this._tipoConselho;
        },
        set: function (value) {
            this._tipoConselho = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "tipoPessoa", {
        get: function () {
            return this._tipoPessoa;
        },
        set: function (value) {
            this._tipoPessoa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Prestador.prototype, "especialidades", {
        get: function () {
            return this._especialidades;
        },
        set: function (value) {
            this._especialidades = value;
        },
        enumerable: true,
        configurable: true
    });
    return Prestador;
}());

//# sourceMappingURL=prestador.model.js.map

/***/ })

});
//# sourceMappingURL=20.js.map