webpackJsonp([53],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarExtratoBeneficiarioTitularModule", function() { return BuscarExtratoBeneficiarioTitularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_extrato_beneficiario_titular__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscarExtratoBeneficiarioTitularModule = /** @class */ (function () {
    function BuscarExtratoBeneficiarioTitularModule() {
    }
    BuscarExtratoBeneficiarioTitularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buscar_extrato_beneficiario_titular__["a" /* BuscarExtratoBeneficiarioTitularPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buscar_extrato_beneficiario_titular__["a" /* BuscarExtratoBeneficiarioTitularPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__buscar_extrato_beneficiario_titular__["a" /* BuscarExtratoBeneficiarioTitularPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], BuscarExtratoBeneficiarioTitularModule);
    return BuscarExtratoBeneficiarioTitularModule;
}());

//# sourceMappingURL=buscar-extrato-beneficiario-titular.module.js.map

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

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarExtratoBeneficiarioTitularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_to_buscar_extrato_beneficiario_to_model__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_tipo_busca_extrato_beneficiario_enum__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_ios_helper__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BuscarExtratoBeneficiarioTitularPage = /** @class */ (function () {
    function BuscarExtratoBeneficiarioTitularPage(navCtrl, loadingCtrl, storageService, toastHelper, iosHelper) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.toastHelper = toastHelper;
        this.iosHelper = iosHelper;
        this.buscarExtratoBeneficiarioTO = new __WEBPACK_IMPORTED_MODULE_3__models_to_buscar_extrato_beneficiario_to_model__["a" /* BuscarExtratoBeneficiarioTO */]();
        this.listaTipoBusca = __WEBPACK_IMPORTED_MODULE_4__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */];
        this.listaGrupoFamiliar = [];
        this.buscaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'data-inicial': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'data-final': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'tipo-busca': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    }
    BuscarExtratoBeneficiarioTitularPage.prototype.ionViewDidLoad = function () {
        this.iosHelper.mostrarLoaderTemporario();
    };
    BuscarExtratoBeneficiarioTitularPage.prototype.alternarValidacaoTipoBusca = function () {
        if (this.buscaForm.contains('beneficiario')) {
            this.buscaForm.removeControl('beneficiario');
        }
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == __WEBPACK_IMPORTED_MODULE_4__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */].Individual) {
            this.buscaForm.addControl('beneficiario', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required));
        }
        this.buscaForm.updateValueAndValidity();
    };
    BuscarExtratoBeneficiarioTitularPage.prototype.buscarExtratoBeneficiario = function () {
        if (this.buscarExtratoBeneficiarioTO.dataInicial != null && this.buscarExtratoBeneficiarioTO.dataInicial != null && this.buscarExtratoBeneficiarioTO.tipoBusca != null) {
            if (this.buscarExtratoBeneficiarioTO.tipoBusca == __WEBPACK_IMPORTED_MODULE_4__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */].Individual && this.buscarExtratoBeneficiarioTO.beneficiario == null) {
                this.toastHelper.notificacaoPreencherTodosCamposBusca();
            }
            else {
                this.navCtrl.push('ListaExtratoBeneficiarioPage', { 'buscarExtratoBeneficiarioTO': this.buscarExtratoBeneficiarioTO });
            }
        }
        else {
            this.toastHelper.notificacaoPreencherTodosCamposBusca();
        }
    };
    BuscarExtratoBeneficiarioTitularPage.prototype.buscarGrupoFamiliar = function () {
        var _this = this;
        this.buscarExtratoBeneficiarioTO.beneficiario = null;
        if (this.buscarExtratoBeneficiarioTO.tipoBusca == __WEBPACK_IMPORTED_MODULE_4__enums_tipo_busca_extrato_beneficiario_enum__["a" /* TipoBuscaExtratoBeneficiarioEnum */].Individual) {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.storageService.getGrupoFamiliar()
                .then(function (grupoFamiliar) {
                _this.listaGrupoFamiliar = grupoFamiliar;
                loader_1.dismiss();
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                _this.buscarExtratoBeneficiarioTO.tipoBusca = null;
                loader_1.dismiss();
            });
        }
    };
    BuscarExtratoBeneficiarioTitularPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-buscar-extrato-beneficiario-titular',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\titular\buscar-extrato-beneficiario-titular\buscar-extrato-beneficiario-titular.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Extrato Beneficiário</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBuscaExtratoBeneficiario">\n    <form (ngSubmit)="buscarExtratoBeneficiario()" class="formBuscaExtratoBeneficiario" [formGroup]="buscaForm" #buscaFormElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Data Inicial</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" doneText="Ok" cancelText="Fechar" [(ngModel)]="buscarExtratoBeneficiarioTO.dataInicial" formControlName="data-inicial"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Data Final</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" doneText="Ok" cancelText="Fechar" [(ngModel)]="buscarExtratoBeneficiarioTO.dataFinal" formControlName="data-final"></ion-datetime>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Tipo Busca</ion-label>\n                <ion-select [(ngModel)]="buscarExtratoBeneficiarioTO.tipoBusca" formControlName="tipo-busca" cancelText="Fechar" (ngModelChange)="alternarValidacaoTipoBusca();buscarGrupoFamiliar()" >\n                    <ion-option [value]="tipo.value" *ngFor="let tipo of listaTipoBusca | keysEnum">{{tipo.key}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item *ngIf="buscarExtratoBeneficiarioTO.tipoBusca == listaTipoBusca.Individual && listaGrupoFamiliar.length > 0">\n                <ion-label floating>Beneficiário</ion-label>\n                <ion-select text-wrap [(ngModel)]="buscarExtratoBeneficiarioTO.beneficiario" formControlName="beneficiario" cancelText="Fechar">\n                    <ion-option text-wrap [value]="beneficiario" *ngFor="let beneficiario of listaGrupoFamiliar">{{beneficiario.nome}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!buscaFormElement.form.valid">Buscar</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\extrato-beneficiario\titular\buscar-extrato-beneficiario-titular\buscar-extrato-beneficiario-titular.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_ios_helper__["a" /* IosHelper */]])
    ], BuscarExtratoBeneficiarioTitularPage);
    return BuscarExtratoBeneficiarioTitularPage;
}());

//# sourceMappingURL=buscar-extrato-beneficiario-titular.js.map

/***/ })

});
//# sourceMappingURL=53.js.map