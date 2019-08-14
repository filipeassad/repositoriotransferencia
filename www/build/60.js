webpackJsonp([60],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaPrestadorModule", function() { return BuscaPrestadorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca_prestador__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscaPrestadorModule = /** @class */ (function () {
    function BuscaPrestadorModule() {
    }
    BuscaPrestadorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__busca_prestador__["a" /* BuscaPrestadorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__busca_prestador__["a" /* BuscaPrestadorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__busca_prestador__["a" /* BuscaPrestadorPage */]],
            schemas: [],
            providers: [],
        })
    ], BuscaPrestadorModule);
    return BuscaPrestadorModule;
}());

//# sourceMappingURL=busca-prestador.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPrestadorTO; });
var BuscaPrestadorTO = /** @class */ (function () {
    function BuscaPrestadorTO() {
    }
    Object.defineProperty(BuscaPrestadorTO.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "tipoPrestador", {
        get: function () {
            return this._tipoPrestador;
        },
        set: function (value) {
            this._tipoPrestador = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "especialidade", {
        get: function () {
            return this._especialidade;
        },
        set: function (value) {
            this._especialidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (value) {
            this._bairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "municipio", {
        get: function () {
            return this._municipio;
        },
        set: function (value) {
            this._municipio = value;
        },
        enumerable: true,
        configurable: true
    });
    return BuscaPrestadorTO;
}());

//# sourceMappingURL=busca-prestador.to.model.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPrestadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_to_busca_prestador_to_model__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tipo_prestador_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_especialidade_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_municipio_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BuscaPrestadorPage = /** @class */ (function () {
    function BuscaPrestadorPage(especialidadeService, tipoPrestadorService, municipioService, loadingCtrl, navCtrl, storageService, toastHelper) {
        this.especialidadeService = especialidadeService;
        this.tipoPrestadorService = tipoPrestadorService;
        this.municipioService = municipioService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.toastHelper = toastHelper;
        this.buscaPrestadorTO = new __WEBPACK_IMPORTED_MODULE_2__models_to_busca_prestador_to_model__["a" /* BuscaPrestadorTO */]();
        this.listaEspecialidades = [];
        this.listaTipoPrestadores = [];
        this.listaMunicipios = [];
        this.habilitarEnvioFormulario = false;
    }
    BuscaPrestadorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        Promise.all([
            this.storageService.getEspecialidades(),
            this.storageService.getTipoPrestadores(),
            this.storageService.getMunicipios()
        ])
            .then(function (result) {
            _this.listaEspecialidades = result[0];
            _this.listaTipoPrestadores = result[1];
            _this.listaMunicipios = result[2];
            if (!_this.listaEspecialidades || !_this.listaTipoPrestadores || !_this.listaMunicipios) {
                __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].forkJoin(_this.especialidadeService.buscarListaEspecialidades(), _this.tipoPrestadorService.buscarListaTipoPrestadores(), _this.municipioService.buscarListaMunicipios()).subscribe(function (result) {
                    _this.listaEspecialidades = result[0];
                    _this.listaTipoPrestadores = result[1];
                    _this.listaMunicipios = result[2];
                    Promise.all([
                        _this.storageService.setEspecialidades(_this.listaEspecialidades),
                        _this.storageService.setTipoPrestadores(_this.listaTipoPrestadores),
                        _this.storageService.setMunicipios(_this.listaMunicipios)
                    ])
                        .then(function () {
                        loader.dismiss();
                    }, function () {
                        loader.dismiss();
                        _this.toastHelper.notificacaoErroCarregarDados();
                    });
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoErroCarregarDados();
                });
            }
            else {
                loader.dismiss();
            }
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    BuscaPrestadorPage.prototype.buscarPrestadorForm = function () {
        this.navCtrl.push('BuscaPrestadorListaPage', { 'BuscaPrestadorTO': this.buscaPrestadorTO });
    };
    BuscaPrestadorPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].forkJoin(this.especialidadeService.buscarListaEspecialidades(), this.tipoPrestadorService.buscarListaTipoPrestadores(), this.municipioService.buscarListaMunicipios()).subscribe(function (result) {
            _this.listaEspecialidades = result[0];
            _this.listaTipoPrestadores = result[1];
            _this.listaMunicipios = result[2];
            Promise.all([
                _this.storageService.setEspecialidades(_this.listaEspecialidades),
                _this.storageService.setTipoPrestadores(_this.listaTipoPrestadores),
                _this.storageService.setMunicipios(_this.listaMunicipios)
            ])
                .then(function () {
                refresher.complete();
            }, function () {
                refresher.complete();
            });
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    };
    BuscaPrestadorPage.prototype.habilitarEnvio = function () {
        var habilitar = false;
        if (this.buscaPrestadorTO.nome != '') {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.especialidade != null) {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.tipoPrestador != null) {
            habilitar = true;
        }
        if (this.buscaPrestadorTO.municipio != null) {
            habilitar = true;
        }
        this.habilitarEnvioFormulario = habilitar;
    };
    BuscaPrestadorPage.prototype.limparCamposBusca = function () {
        this.buscaPrestadorTO.nome = '';
        this.buscaPrestadorTO.tipoPrestador = null;
        this.buscaPrestadorTO.especialidade = null;
        this.buscaPrestadorTO.municipio = null;
        this.buscaPrestadorTO.bairro = null;
        this.habilitarEnvioFormulario = false;
    };
    BuscaPrestadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-busca-prestador',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\busca-prestador\busca-prestador.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Buscar Prestador</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentPrestadorBusca">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <form (ngSubmit)="buscarPrestadorForm()" class="formPrestadorBusca" #buscaPrestadorTOFormElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Nome do Prestador</ion-label>\n                <ion-input type="text" [(ngModel)]="buscaPrestadorTO.nome" name="nome" (ngModelChange)="habilitarEnvio()"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Tipo de Assistência</ion-label>\n                <ion-select [(ngModel)]="buscaPrestadorTO.tipoPrestador" name="tipo-assistencia" cancelText="Fechar" (ionChange)="habilitarEnvio()">\n                    <ion-option [value]="categoria.codigo" *ngFor="let categoria of listaTipoPrestadores">{{categoria.descricao | capitalizeAll}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Especialidade</ion-label>\n                <ion-select [(ngModel)]="buscaPrestadorTO.especialidade" name="especialidade" cancelText="Fechar" (ionChange)="habilitarEnvio()">\n                    <ion-option [value]="especidalidade.codEspecialidade" *ngFor="let especidalidade of listaEspecialidades">{{especidalidade.descricao | capitalizeAll}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Município</ion-label>\n                <ion-select [(ngModel)]="buscaPrestadorTO.municipio" name="municipio" cancelText="Fechar" (ionChange)="habilitarEnvio()">\n                    <ion-option [value]="municipio.codLocal" *ngFor="let municipio of listaMunicipios">{{municipio.descricao | capitalizeAll}} - {{municipio.uf}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-row>\n            <ion-col col-6>\n                <button type="submit" ion-button block [disabled]="!habilitarEnvioFormulario">Buscar</button>\n            </ion-col>\n            <ion-col col-6>\n                <button type="button" ion-button block [disabled]="!habilitarEnvioFormulario" (click)="limparCamposBusca()"><span text-wrap>Limpar</span></button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\busca-prestador\busca-prestador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_especialidade_service__["a" /* EspecialidadeService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tipo_prestador_service__["a" /* TipoPrestadorService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_municipio_service__["a" /* MunicipioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_toast_helper__["a" /* ToastHelper */]])
    ], BuscaPrestadorPage);
    return BuscaPrestadorPage;
}());

//# sourceMappingURL=busca-prestador.js.map

/***/ })

});
//# sourceMappingURL=60.js.map