webpackJsonp([62],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemonstrativoPagamentoModule", function() { return DemonstrativoPagamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demonstrativo_pagamento__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemonstrativoPagamentoModule = /** @class */ (function () {
    function DemonstrativoPagamentoModule() {
    }
    DemonstrativoPagamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__demonstrativo_pagamento__["a" /* DemonstrativoPagamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__demonstrativo_pagamento__["a" /* DemonstrativoPagamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__demonstrativo_pagamento__["a" /* DemonstrativoPagamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], DemonstrativoPagamentoModule);
    return DemonstrativoPagamentoModule;
}());

//# sourceMappingURL=demonstrativo-pagamento.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaDemonstrativoPagamentoTO; });
var BuscaDemonstrativoPagamentoTO = /** @class */ (function () {
    function BuscaDemonstrativoPagamentoTO() {
    }
    Object.defineProperty(BuscaDemonstrativoPagamentoTO.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (value) {
            this._ano = value;
        },
        enumerable: true,
        configurable: true
    });
    return BuscaDemonstrativoPagamentoTO;
}());

//# sourceMappingURL=busca-demonstrativo-pagamento.to.model.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemonstrativoPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_to_busca_demonstrativo_pagamento_to_model__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_demonstrativo_pagamento_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_beneficiario_benner_en_vi_portal_beneficiario_model__ = __webpack_require__(214);
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







var DemonstrativoPagamentoPage = /** @class */ (function () {
    function DemonstrativoPagamentoPage(navParams, loadingCtrl, storageService, toastHelper, demonstrativoPagamentoService, navCtrl) {
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storageService = storageService;
        this.toastHelper = toastHelper;
        this.demonstrativoPagamentoService = demonstrativoPagamentoService;
        this.navCtrl = navCtrl;
        this.buscaDemonstrativoPagamentoTO = new __WEBPACK_IMPORTED_MODULE_2__models_to_busca_demonstrativo_pagamento_to_model__["a" /* BuscaDemonstrativoPagamentoTO */]();
        this.beneficiario = new __WEBPACK_IMPORTED_MODULE_5__models_beneficiario_benner_en_vi_portal_beneficiario_model__["a" /* EnViPortalBeneficiario */]();
        this.listaDemonstrativoPagamento = [];
    }
    DemonstrativoPagamentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.buscaDemonstrativoPagamentoTO = this.navParams.get('buscaDemonstrativoPagamentoTO');
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            _this.demonstrativoPagamentoService.buscarDemonstrativoPagamento(_this.beneficiario.cpf, parseInt(_this.buscaDemonstrativoPagamentoTO.ano)).subscribe(function (lista) {
                if (lista.length) {
                    _this.listaDemonstrativoPagamento = lista;
                    loader.dismiss();
                }
                else {
                    _this.toastHelper.notificacaoMensagem('Não há dados para o ano desejado');
                    loader.dismiss();
                    _this.navCtrl.pop();
                }
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                _this.navCtrl.pop();
            });
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
            _this.navCtrl.pop();
        });
    };
    DemonstrativoPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-demonstrativo-pagamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\demonstrativo-pagamento\demonstrativo-pagamento\demonstrativo-pagamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Demonstrativo Pagamento</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentDemonstrativoPagamento">\n    <div class="demonstrativo" *ngFor="let demonstrativoPagamento of listaDemonstrativoPagamento">\n        <ion-row wrap class="demonstrativo-title-row">\n            <ion-col no-padding col-12>\n                <h2 class="demonstrativo-title">{{demonstrativoPagamento.nome | capitalizeAll}}</h2>\n            </ion-col>\n            <section class="demonstrativo-details-section">\n                <ion-col no-padding col-12>\n                    <p class="demonstrativo-description">\n                        Valor: {{demonstrativoPagamento.valor | monetarioBrasil}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\demonstrativo-pagamento\demonstrativo-pagamento\demonstrativo-pagamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_4__providers_demonstrativo_pagamento_service__["a" /* DemonstrativoPagamentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], DemonstrativoPagamentoPage);
    return DemonstrativoPagamentoPage;
}());

//# sourceMappingURL=demonstrativo-pagamento.js.map

/***/ })

});
//# sourceMappingURL=62.js.map