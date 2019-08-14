webpackJsonp([29],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemNegociacaoPageModule", function() { return ListagemNegociacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listagem_negociacao__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListagemNegociacaoPageModule = /** @class */ (function () {
    function ListagemNegociacaoPageModule() {
    }
    ListagemNegociacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listagem_negociacao__["a" /* ListagemNegociacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listagem_negociacao__["a" /* ListagemNegociacaoPage */]),
            ],
        })
    ], ListagemNegociacaoPageModule);
    return ListagemNegociacaoPageModule;
}());

//# sourceMappingURL=listagem-negociacao.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemNegociacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_negociacao_service__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListagemNegociacaoPage = /** @class */ (function () {
    function ListagemNegociacaoPage(navCtrl, navParams, negociacaoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.negociacaoService = negociacaoService;
        this.loadingCtrl = loadingCtrl;
        this.negociacoes = [];
        this.autorizacaoSelecionada = this.navParams.get('autorizacaoSelecionada');
    }
    ListagemNegociacaoPage.prototype.ionViewDidLoad = function () {
    };
    ListagemNegociacaoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        this.negociacaoService.buscarNegociacoes(this.autorizacaoSelecionada.handleAutorizacao)
            .subscribe(function (listaNegocicaoes) {
            _this.negociacoes = listaNegocicaoes;
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    ListagemNegociacaoPage.prototype.redirecionarNegociacao = function (negociacaoSelecionada) {
        this.navCtrl.push('ListagemFaturasNegociacaoPage', { 'negociacaoSelecionada': negociacaoSelecionada });
    };
    ListagemNegociacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listagem-negociacao',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\listagem-negociacao\listagem-negociacao.html"*/'<ion-header class="listing-header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Negociações</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h4 style="color:#0090BF; text-align: left;">Negociações</h4>\n    <ion-list>\n        <ion-item *ngFor="let negociacao of negociacoes">\n            <ion-row>\n                <ion-col no-padding col-2>\n                    <p>{{negociacao.snId}}</p>\n                </ion-col>\n                <ion-col no-padding col-8>\n                    <ion-row>\n                        <ion-col no-padding col-12>\n                            <p>{{negociacao.snDatacadastro | date: "dd/MM/yyyy"}}</p>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col no-padding col-12>\n                            <p>{{negociacao.snDataaceite != null ? \'Aceito\' : (negociacao.snDatarejeicao != null ? \'Rejeitado\' : \'Aberto\') }}</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n                <ion-col no-padding col-2 *ngIf="negociacao.snDataaceite == null && negociacao.snDatarejeicao == null">\n                    <img width="20px" src="./assets/images/left-arrow.png" alt="" (click)="redirecionarNegociacao(negociacao)">\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\listagem-negociacao\listagem-negociacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_negociacao_service__["a" /* NegociacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ListagemNegociacaoPage);
    return ListagemNegociacaoPage;
}());

//# sourceMappingURL=listagem-negociacao.js.map

/***/ })

});
//# sourceMappingURL=29.js.map