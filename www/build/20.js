webpackJsonp([20],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorModule", function() { return PrestadorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prestador__ = __webpack_require__(423);
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_prestador_model__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prestador_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_atendimento_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(234);
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
            selector: 'page-prestador',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\prestador\prestador\prestador.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Prestador</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content text-wrap class="contentPrestador">\n\n    <div class="prestador">\n\n        <ion-row wrap class="prestador-title-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="prestador-title">{{prestador.nome | capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="prestador-details-section">\n\n                <ion-col no-padding col-12 *ngIf="prestador.cpf">\n\n                    <p class="prestador-description">\n\n                        CPF: {{prestador.cpf | cpf}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="prestador.cnpj">\n\n                    <p class="prestador-description">\n\n                        CNPJ: {{prestador.cnpj | cnpj}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="prestador.descCategoria">\n\n                    <p class="prestador-description">\n\n                        Tipo Assistência: {{prestador.descCategoria | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="prestador.tipoConselho">\n\n                    <p class="prestador-description">\n\n                        Tipo Conselho: {{prestador.tipoConselho | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="prestador.numConselho">\n\n                    <p class="prestador-description">\n\n                        Número Conselho: {{prestador.numConselho}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12 *ngIf="prestador.ufConselho">\n\n                    <p class="prestador-description">\n\n                        UF Conselho: {{prestador.ufConselho}}\n\n                    </p>\n\n                </ion-col>\n\n                <section class="lista-especialidades-section" *ngIf="stringEspecialidadesPrestador">\n\n                    <ion-col no-padding col-12>\n\n                        <p class="prestador-description">\n\n                            Especialidades: {{stringEspecialidadesPrestador | capitalizeAll}}\n\n                        </p>\n\n                    </ion-col>\n\n                </section>\n\n            </section>\n\n        </ion-row>\n\n    </div>\n\n    <section class="prestador-locais-atendimento-section" *ngIf="listaLocaisAtendimento.length">\n\n        <h2 class="titulo-locais-atendimento" text-center>Locais de Atendimento</h2>\n\n        <ion-list>\n\n            <button ion-item class="list-item" *ngFor="let localAtendimento of listaLocaisAtendimento" (click)="abrirOpcoesLocalAtendimento(localAtendimento)">\n\n                <ion-row no-padding class="content-row one-line">\n\n\n\n                    <ion-col no-padding width-90 class="item-content">\n\n                        <h3 class="item-title" text-wrap>Endereço: {{localAtendimento.endereco | capitalizeAll}}</h3>\n\n                        <p class="item-description" *ngIf="localAtendimento.bairro">Bairro: {{localAtendimento.bairro | capitalizeAll}}</p>\n\n                        <p class="item-description" *ngIf="localAtendimento.descricaoMunicipio">Município: {{localAtendimento.descricaoMunicipio | capitalizeAll}} - {{localAtendimento.uf}}</p>\n\n                        <p class="item-description" *ngIf="localAtendimento.fone">Telefone: {{localAtendimento.fone}}</p>\n\n                    </ion-col>\n\n                    <ion-col no-padding width-10 class="item-icon">\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </button>\n\n        </ion-list>\n\n    </section>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\prestador\prestador\prestador.html"*/
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

/***/ 424:
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