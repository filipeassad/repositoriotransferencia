webpackJsonp([25],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtratoCabespBoletoModule", function() { return ExtratoCabespBoletoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extrato_cabesp_boleto__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExtratoCabespBoletoModule = /** @class */ (function () {
    function ExtratoCabespBoletoModule() {
    }
    ExtratoCabespBoletoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__extrato_cabesp_boleto__["a" /* ExtratoCabespBoletoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__extrato_cabesp_boleto__["a" /* ExtratoCabespBoletoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__extrato_cabesp_boleto__["a" /* ExtratoCabespBoletoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ExtratoCabespBoletoModule);
    return ExtratoCabespBoletoModule;
}());

//# sourceMappingURL=extrato-cabesp-boleto.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtratoCabespBoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_segunda_via_boleto_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtratoCabespBoletoPage = /** @class */ (function () {
    function ExtratoCabespBoletoPage(segundaViaBoletoService, loadingCtrl, navParams, toastHelper, navCtrl) {
        this.segundaViaBoletoService = segundaViaBoletoService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.listaExtratoCabesp = [];
    }
    ExtratoCabespBoletoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.boletoSapiens = this.navParams.get('BoletoSapiens');
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.segundaViaBoletoService.buscarExtratoCabesp(this.boletoSapiens.numTitulo).subscribe(function (lista) {
            if (lista.length) {
                _this.listaExtratoCabesp = lista;
                loader.dismiss();
            }
            else {
                loader.dismiss().then(function () {
                    _this.toastHelper.notificacaoMensagem('Não há dados disponíveis para o extrato desejado');
                    _this.navCtrl.pop();
                });
            }
        }, function (error) {
            loader.dismiss().then(function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                _this.navCtrl.pop();
            });
        });
    };
    ExtratoCabespBoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-extrato-cabesp-boleto',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\segunda-via-boleto\extrato-cabesp-boleto\extrato-cabesp-boleto.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Extrato Reciprocidade</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentExtratoCabespBoleto">\n    <div class="extrato" *ngFor="let extratoCabesp of listaExtratoCabesp">\n        <ion-row wrap class="extrato-title-row">\n            <ion-col no-padding col-12>\n                <h2 class="extrato-title" align="center">Número da Guia: {{extratoCabesp.numero}}</h2>\n            </ion-col>\n            <section class="extrato-details-section">\n                <ion-col no-padding col-12>\n                    <p class="extrato-description">\n                        Tipo da Guia: {{extratoCabesp.tipo | capitalizeAll}}\n                    </p>\n                    <p class="extrato-description">\n                        Data do Atendimento: {{extratoCabesp.dataAtendimento | date: "dd/MM/y"}}\n                    </p>\n                    <p class="extrato-description">\n                        Local do Atendimento: {{extratoCabesp.nome}}\n                    </p>\n                    <p class="extrato-description">\n                        Cidade do Atendimento: {{extratoCabesp.descricao}}\n                    </p>\n                    <p class="extrato-description">\n                        Descrição do Procedimento: {{extratoCabesp.descTuss}}\n                    </p>\n                    <p class="extrato-description">\n                        Valor do Procedimento: {{extratoCabesp.valor | monetarioBrasil}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\segunda-via-boleto\extrato-cabesp-boleto\extrato-cabesp-boleto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_segunda_via_boleto_service__["a" /* SegundaViaBoletoService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */]])
    ], ExtratoCabespBoletoPage);
    return ExtratoCabespBoletoPage;
}());

//# sourceMappingURL=extrato-cabesp-boleto.js.map

/***/ })

});
//# sourceMappingURL=25.js.map