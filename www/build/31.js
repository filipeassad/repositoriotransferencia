webpackJsonp([31],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemAutorizacaoPageModule", function() { return ListagemAutorizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listagem_autorizacao__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListagemAutorizacaoPageModule = /** @class */ (function () {
    function ListagemAutorizacaoPageModule() {
    }
    ListagemAutorizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listagem_autorizacao__["a" /* ListagemAutorizacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listagem_autorizacao__["a" /* ListagemAutorizacaoPage */]),
            ],
        })
    ], ListagemAutorizacaoPageModule);
    return ListagemAutorizacaoPageModule;
}());

//# sourceMappingURL=listagem-autorizacao.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemAutorizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_beneficiario_benner_beneficiario_benner_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_autorizacao_autorizacao__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListagemAutorizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListagemAutorizacaoPage = /** @class */ (function () {
    function ListagemAutorizacaoPage(navCtrl, navParams, beneficiarioBennerService, autorizacaoProvider, storageService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.beneficiarioBennerService = beneficiarioBennerService;
        this.autorizacaoProvider = autorizacaoProvider;
        this.storageService = storageService;
        this.loadingCtrl = loadingCtrl;
        this.beneficiarios = [];
        this.autorizacoes = [];
    }
    ListagemAutorizacaoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            _this.beneficiarioBennerService.buscarBeneficiariosGrupoFamiliarPortal(_this.beneficiario.handleTitular)
                .subscribe(function (listaGrupoFamiliar) {
                _this.beneficiarios = listaGrupoFamiliar;
                loader.dismiss();
            }, function () {
                loader.dismiss();
            });
        }, function () {
            loader.dismiss();
        });
    };
    ListagemAutorizacaoPage.prototype.buscarAutorizacoes = function (handleTitular) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.autorizacaoProvider.buscarAutoriazacao(handleTitular)
            .subscribe(function (listaAutorizacoes) {
            _this.autorizacoes = listaAutorizacoes;
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    ListagemAutorizacaoPage.prototype.redirecionarDetalhe = function (autorizacaoSelecionada) {
        console.log(autorizacaoSelecionada);
        this.navCtrl.push('DetalhesAutorizacaoPage', { 'autorizacaoSelecionada': autorizacaoSelecionada });
    };
    ListagemAutorizacaoPage.prototype.redirecionarNegociacaoAut = function (autorizacaoSelecionada) {
        this.navCtrl.push('ListagemNegociacaoPage', { 'autorizacaoSelecionada': autorizacaoSelecionada });
    };
    ListagemAutorizacaoPage.prototype.buscarMesEscrito = function (mes) {
        var meses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"];
        var mesInt = parseInt(mes) - 1;
        return meses[mesInt];
    };
    ListagemAutorizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listagem-autorizacao',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\listagem-autorizacao\listagem-autorizacao.html"*/'<ion-header class="listing-header">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Consultar Autorizações</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label floating>Beneficiário</ion-label>\n\n        <ion-select [(ngModel)]="beneficiarioSelecionado"\n\n            (ionChange)="buscarAutorizacoes(beneficiarioSelecionado.handle)">\n\n            <ion-option [value]="beneficiarioItem" *ngFor="let beneficiarioItem of beneficiarios">\n\n                {{ beneficiarioItem.nome}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-list text-wrap>\n\n        <ion-item *ngFor="let autorizacao of autorizacoes">\n\n            <div style="display: inline-block; vertical-align: middle; width: 15%; text-align: center;">\n\n                <div text-center style="font-size: 35px; color: #A4A4A4;">{{autorizacao.dataInclusao | date: "dd"}}\n\n                </div>\n\n                <div text-center style="font-size: 10px; color: #A4A4A4;">{{ buscarMesEscrito(autorizacao.dataInclusao | date: "MM") }}</div>\n\n                <div text-center style="font-size: 10px; color: #A4A4A4;">{{autorizacao.dataInclusao | date: "yyyy"}}\n\n                </div>\n\n                <div text-center style="font-size: 10px; color: #A4A4A4;">{{autorizacao.dataInclusao | date: "hh:MM"}}\n\n                </div>\n\n            </div>\n\n            <div style="display: inline-block; vertical-align: middle; width: 65%; margin-left: 20px;">\n\n                <div style="font-size: 15px; color:#0090BF; text-align: left; overflow: hidden;">{{autorizacao.beneficiario}}</div>\n\n                <div style="margin-top: 5px;">\n\n                    <div style="display: inline-block; vertical-align: middle; width: 6%;">\n\n                        <img width="100%" src="./assets/images/asterisk.png" alt="">\n\n                    </div>\n\n                    <div\n\n                        style="display: inline-block; vertical-align: middle; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n                        Autorização: {{autorizacao.autorizacao}}</div>\n\n                </div>\n\n                <div>\n\n                    <div style="display: inline-block; vertical-align: middle; width: 6%;">\n\n                        <img width="100%" src="./assets/images/calendar-page-empty.png" alt="">\n\n                    </div>\n\n                    <div\n\n                        style="display: inline-block; vertical-align: middle; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n                        Data de Validade: {{autorizacao.dataValidade | date: "dd/MM/yyyy"}}</div>\n\n                </div>\n\n                <div>\n\n                    <div style="display: inline-block; vertical-align: middle; width: 6%;">\n\n                        <img width="100%" src="./assets/images/newspaper.png" alt="">\n\n                    </div>\n\n                    <div\n\n                        style="display: inline-block; vertical-align: middle; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n                        Tipo de Guia: {{autorizacao.descricaoTipoAutorizacao}}</div>\n\n                </div>\n\n            </div>\n\n            <div style="display: inline-block; vertical-align: middle; width: 9%; padding-top: 10px;">\n\n                <div style="width: 100%;">\n\n                    <img width="100%" src="./assets/images/left-arrow.png" alt="" (click)="redirecionarDetalhe(autorizacao)">\n\n                </div>\n\n                <div style="width: 100%; margin-top: 5px;">\n\n                    <img *ngIf="autorizacao.temFatura == 1" width="100%" src="./assets/images/dollar-symbol.png" alt="" (click)="redirecionarNegociacaoAut(autorizacao)">\n\n                </div>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\listagem-autorizacao\listagem-autorizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_beneficiario_benner_beneficiario_benner_service__["a" /* BeneficiarioBennerService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_autorizacao_autorizacao__["a" /* AutorizacaoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ListagemAutorizacaoPage);
    return ListagemAutorizacaoPage;
}());

//# sourceMappingURL=listagem-autorizacao.js.map

/***/ })

});
//# sourceMappingURL=31.js.map