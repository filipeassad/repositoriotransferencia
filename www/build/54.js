webpackJsonp([54],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaExtratoBeneficiarioModule", function() { return ListaExtratoBeneficiarioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_extrato_beneficiario__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListaExtratoBeneficiarioModule = /** @class */ (function () {
    function ListaExtratoBeneficiarioModule() {
    }
    ListaExtratoBeneficiarioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lista_extrato_beneficiario__["a" /* ListaExtratoBeneficiarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__lista_extrato_beneficiario__["a" /* ListaExtratoBeneficiarioPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__lista_extrato_beneficiario__["a" /* ListaExtratoBeneficiarioPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ListaExtratoBeneficiarioModule);
    return ListaExtratoBeneficiarioModule;
}());

//# sourceMappingURL=lista-extrato-beneficiario.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarExtratoBeneficiarioTO; });
var BuscarExtratoBeneficiarioTO = /** @class */ (function () {
    function BuscarExtratoBeneficiarioTO() {
    }
    Object.defineProperty(BuscarExtratoBeneficiarioTO.prototype, "dataInicial", {
        get: function () {
            return this._dataInicial;
        },
        set: function (value) {
            this._dataInicial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarExtratoBeneficiarioTO.prototype, "dataFinal", {
        get: function () {
            return this._dataFinal;
        },
        set: function (value) {
            this._dataFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarExtratoBeneficiarioTO.prototype, "tipoBusca", {
        get: function () {
            return this._tipoBusca;
        },
        set: function (value) {
            this._tipoBusca = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarExtratoBeneficiarioTO.prototype, "beneficiario", {
        get: function () {
            return this._beneficiario;
        },
        set: function (value) {
            this._beneficiario = value;
        },
        enumerable: true,
        configurable: true
    });
    return BuscarExtratoBeneficiarioTO;
}());

//# sourceMappingURL=buscar-extrato-beneficiario.to.model.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoBuscaExtratoBeneficiarioEnum; });
var TipoBuscaExtratoBeneficiarioEnum;
(function (TipoBuscaExtratoBeneficiarioEnum) {
    TipoBuscaExtratoBeneficiarioEnum[TipoBuscaExtratoBeneficiarioEnum["Individual"] = 1] = "Individual";
    TipoBuscaExtratoBeneficiarioEnum[TipoBuscaExtratoBeneficiarioEnum["Grupo Familiar"] = 2] = "Grupo Familiar";
})(TipoBuscaExtratoBeneficiarioEnum || (TipoBuscaExtratoBeneficiarioEnum = {}));
//# sourceMappingURL=tipo-busca-extrato-beneficiario.enum.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaExtratoBeneficiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_to_buscar_extrato_beneficiario_to_model__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_extrato_beneficiario_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_tipo_busca_extrato_beneficiario_enum__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListaExtratoBeneficiarioPage = /** @class */ (function () {
    function ListaExtratoBeneficiarioPage(navParams, navCtrl, extratoBeneficiarioService, loadingCtrl, storageService, toastHelper) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.extratoBeneficiarioService = extratoBeneficiarioService;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.toastHelper = toastHelper;
        this.buscarExtratoBeneficiarioTO = new __WEBPACK_IMPORTED_MODULE_2__models_to_buscar_extrato_beneficiario_to_model__["a" /* BuscarExtratoBeneficiarioTO */]();
        this.listaExtratoBeneficiario = [];
        this._listaExtratoBeneficiario = [];
    }
    ListaExtratoBeneficiarioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.buscarExtratoBeneficiarioTO = this.navParams.get('buscarExtratoBeneficiarioTO');
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        var dataInicial = new Date(this.buscarExtratoBeneficiarioTO.dataInicial.toString().replace(/-/g, '\/'));
        var dataFinal = new Date(this.buscarExtratoBeneficiarioTO.dataFinal.toString().replace(/-/g, '\/'));
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == __WEBPACK_IMPORTED_MODULE_5__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */].Individual) {
            if (this.buscarExtratoBeneficiarioTO.beneficiario) {
                this.extratoBeneficiarioService.buscarExtratoBeneficiarioIndividual(this.buscarExtratoBeneficiarioTO.beneficiario.matriculaCassems, dataInicial.getDate() + "-" + (dataInicial.getMonth() + 1) + "-" + dataInicial.getFullYear(), dataFinal.getDate() + "-" + (dataFinal.getMonth() + 1) + "-" + dataFinal.getFullYear())
                    .subscribe(function (lista) {
                    _this.listaExtratoBeneficiario = lista;
                    _this._listaExtratoBeneficiario = lista;
                    loader.dismiss();
                }, function (error) {
                    _this.toastHelper.notificacaoErroCarregarDados();
                    loader.dismiss();
                });
            }
            else {
                this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                this.navCtrl.pop();
            }
        }
        else {
            this.storageService.getBeneficiarioTitular()
                .then(function (beneficiario) {
                _this.extratoBeneficiarioService.buscarExtratoBeneficiarioGrupo(beneficiario.cpf, dataInicial.getDate() + "-" + (dataInicial.getMonth() + 1) + "-" + dataInicial.getFullYear(), dataFinal.getDate() + "-" + (dataFinal.getMonth() + 1) + "-" + dataFinal.getFullYear())
                    .subscribe(function (lista) {
                    _this.listaExtratoBeneficiario = lista;
                    _this._listaExtratoBeneficiario = lista;
                    loader.dismiss();
                }, function () {
                    _this.toastHelper.notificacaoErroCarregarDados();
                    loader.dismiss();
                });
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
            });
        }
    };
    ListaExtratoBeneficiarioPage.prototype.buscarExtratoBeneficiario = function (event) {
        this.listaExtratoBeneficiario = this._listaExtratoBeneficiario;
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.listaExtratoBeneficiario = this.listaExtratoBeneficiario.filter(function (extratoBeneficiario) {
                return (extratoBeneficiario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    extratoBeneficiario.descProcedimento.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListaExtratoBeneficiarioPage.prototype.visualizarExtratoBeneficiario = function (extratoBeneficiario) {
        this.navCtrl.push('ExtratoBeneficiarioPage', { 'ExtratoBeneficiario': extratoBeneficiario });
    };
    ListaExtratoBeneficiarioPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        var dataInicial = new Date(this.buscarExtratoBeneficiarioTO.dataInicial.toString().replace(/-/g, '\/'));
        var dataFinal = new Date(this.buscarExtratoBeneficiarioTO.dataFinal.toString().replace(/-/g, '\/'));
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == __WEBPACK_IMPORTED_MODULE_5__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */].Individual) {
            if (this.buscarExtratoBeneficiarioTO.beneficiario) {
                this.extratoBeneficiarioService.buscarExtratoBeneficiarioIndividual(this.buscarExtratoBeneficiarioTO.beneficiario.matriculaCassems, dataInicial.getDate() + "-" + (dataInicial.getMonth() + 1) + "-" + dataInicial.getFullYear(), dataFinal.getDate() + "-" + (dataFinal.getMonth() + 1) + "-" + dataFinal.getFullYear())
                    .subscribe(function (lista) {
                    _this.listaExtratoBeneficiario = lista;
                    _this._listaExtratoBeneficiario = lista;
                    refresher.complete();
                }, function (error) {
                    _this.toastHelper.notificacaoErroCarregarDados();
                    refresher.complete();
                });
            }
            else {
                this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
                this.navCtrl.pop();
            }
        }
        else {
            this.storageService.getBeneficiarioTitular()
                .then(function (beneficiario) {
                _this.extratoBeneficiarioService.buscarExtratoBeneficiarioGrupo(beneficiario.cpf, dataInicial.getDate() + "-" + (dataInicial.getMonth() + 1) + "-" + dataInicial.getFullYear(), dataFinal.getDate() + "-" + (dataFinal.getMonth() + 1) + "-" + dataFinal.getFullYear())
                    .subscribe(function (lista) {
                    _this.listaExtratoBeneficiario = lista;
                    _this._listaExtratoBeneficiario = lista;
                    refresher.complete();
                }, function () {
                    _this.toastHelper.notificacaoErroCarregarDados();
                    refresher.complete();
                });
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
            });
        }
    };
    ListaExtratoBeneficiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lista-extrato-beneficiario',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\lista-extrato-beneficiario\lista-extrato-beneficiario.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Extrato Beneficiário</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentListaExtratoBeneficiario">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-searchbar placeholder="Buscar" autocomplete="on" animated=true\n                   (ionInput)="buscarExtratoBeneficiario($event)"></ion-searchbar>\n    <ion-list>\n        <button ion-item class="list-item" *ngFor="let extratoBeneficiario of listaExtratoBeneficiario"\n                (click)="visualizarExtratoBeneficiario(extratoBeneficiario)">\n            <ion-row no-padding class="content-row one-line">\n\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap>{{ extratoBeneficiario.nome | capitalizeAll}}</h3>\n                    <p class="item-description">Data: {{ extratoBeneficiario.dataInicial | date: "dd/MM/y"}}</p>\n                    <p class="item-description">Procedimento: {{extratoBeneficiario.descProcedimento |\n                        capitalizeAll}}</p>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\lista-extrato-beneficiario\lista-extrato-beneficiario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_extrato_beneficiario_service__["a" /* ExtratoBeneficiarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__["a" /* ToastHelper */]])
    ], ListaExtratoBeneficiarioPage);
    return ListaExtratoBeneficiarioPage;
}());

//# sourceMappingURL=lista-extrato-beneficiario.js.map

/***/ })

});
//# sourceMappingURL=54.js.map