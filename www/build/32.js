webpackJsonp([32],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoFamiliarTitularModule", function() { return GrupoFamiliarTitularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grupo_familiar_titular__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GrupoFamiliarTitularModule = /** @class */ (function () {
    function GrupoFamiliarTitularModule() {
    }
    GrupoFamiliarTitularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grupo_familiar_titular__["a" /* GrupoFamiliarTitularPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grupo_familiar_titular__["a" /* GrupoFamiliarTitularPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__grupo_familiar_titular__["a" /* GrupoFamiliarTitularPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], GrupoFamiliarTitularModule);
    return GrupoFamiliarTitularModule;
}());

//# sourceMappingURL=grupo-familiar-titular.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoFamiliarTitularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GrupoFamiliarTitularPage = /** @class */ (function () {
    function GrupoFamiliarTitularPage(navCtrl, loadingCtrl, storageService, beneficiarioBennerService, toastHelper) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.beneficiarioBennerService = beneficiarioBennerService;
        this.toastHelper = toastHelper;
        this.listaBeneficiarios = [];
        this._listaBeneficiarios = [];
    }
    GrupoFamiliarTitularPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getGrupoFamiliar()
            .then(function (grupoFamiliar) {
            _this.listaBeneficiarios = grupoFamiliar;
            _this._listaBeneficiarios = grupoFamiliar;
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    GrupoFamiliarTitularPage.prototype.visualizarBeneficiario = function (beneficiario) {
        this.navCtrl.push('BeneficiarioPage', { 'beneficiario': beneficiario });
    };
    GrupoFamiliarTitularPage.prototype.buscarBeneficiario = function (event) {
        this.listaBeneficiarios = this._listaBeneficiarios;
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.listaBeneficiarios = this.listaBeneficiarios.filter(function (beneficiario) {
                return (beneficiario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GrupoFamiliarTitularPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(this.listaBeneficiarios[0].handleTitular)
            .subscribe(function (grupoFamiliar) {
            _this.storageService.setGrupoFamiliar(grupoFamiliar)
                .then(function () {
                _this.listaBeneficiarios = grupoFamiliar;
                _this._listaBeneficiarios = grupoFamiliar;
                refresher.complete();
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                refresher.complete();
            });
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    };
    GrupoFamiliarTitularPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-grupo-familiar-titular',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\grupo-familiar\titular\grupo-familiar-titular\grupo-familiar-titular.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Grupo Familiar</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentGrupoFamiliar">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-searchbar placeholder="Buscar" autocomplete="on" animated=true (ionInput)="buscarBeneficiario($event)"></ion-searchbar>\n    <ion-list text-wrap>\n        <button ion-item class="list-item" *ngFor="let beneficiario of listaBeneficiarios" (click)="visualizarBeneficiario(beneficiario)">\n            <ion-row no-padding class="content-row one-line">\n\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap>{{ beneficiario.nome | capitalizeAll}}</h3>\n                    <p class="item-description">Matrícula: {{beneficiario.matriculaCassems | matriculaCassems}}</p>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\grupo-familiar\titular\grupo-familiar-titular\grupo-familiar-titular.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */]])
    ], GrupoFamiliarTitularPage);
    return GrupoFamiliarTitularPage;
}());

//# sourceMappingURL=grupo-familiar-titular.js.map

/***/ })

});
//# sourceMappingURL=32.js.map