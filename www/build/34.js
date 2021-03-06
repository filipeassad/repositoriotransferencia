webpackJsonp([34],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesAutorizacaoPageModule", function() { return DetalhesAutorizacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes_autorizacao__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhesAutorizacaoPageModule = /** @class */ (function () {
    function DetalhesAutorizacaoPageModule() {
    }
    DetalhesAutorizacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhes_autorizacao__["a" /* DetalhesAutorizacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhes_autorizacao__["a" /* DetalhesAutorizacaoPage */]),
            ],
        })
    ], DetalhesAutorizacaoPageModule);
    return DetalhesAutorizacaoPageModule;
}());

//# sourceMappingURL=detalhes-autorizacao.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesAutorizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the DetalhesAutorizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesAutorizacaoPage = /** @class */ (function () {
    function DetalhesAutorizacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autorizacaoSelecionada = this.navParams.get('autorizacaoSelecionada');
    }
    DetalhesAutorizacaoPage.prototype.ionViewDidLoad = function () {
    };
    DetalhesAutorizacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detalhes-autorizacao',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\detalhes-autorizacao\detalhes-autorizacao.html"*/'<ion-header class="listing-header">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Detalhes Autorização</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-wrap >\n\n  <div>\n\n    <p\n\n      style="width: 50%; display: inline-block; vertical-align: middle; font-size: 15px; color:#0090BF; text-align: left;">\n\n      {{autorizacaoSelecionada.solicitante}}\n\n    </p>\n\n    <p\n\n      style="width: 45%; display: inline-block; vertical-align: middle; font-size: 15px; color:#0090BF; text-align: right;">\n\n      {{autorizacaoSelecionada.autorizacao}}\n\n    </p>\n\n  </div>\n\n    <ion-item *ngFor="let evento of autorizacaoSelecionada.eventos">\n\n        <div style="margin-top: 15px; font-size: 10px; text-align: left; color: #A4A4A4;" *ngIf="autorizacaoSelecionada.eventos != null" >\n\n          Evento: {{evento.codEvento}} - {{evento.descricaoEvento}}\n\n        </div>\n\n        <div style="margin-top: 5px; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n          Status da Autorização: {{autorizacaoSelecionada.statusAutorizacao}}\n\n        </div>\n\n        <div style="margin-top: 5px; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n          Data Pedido: {{autorizacaoSelecionada.dataInclusao | date: "dd/MM/yyyy"}}\n\n        </div>\n\n        <div style="margin-top: 5px; font-size: 10px; text-align: left; color: #A4A4A4;">\n\n          Data Validade: {{autorizacaoSelecionada.dataValidade | date: "dd/MM/yyyy"}}\n\n        </div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\detalhes-autorizacao\detalhes-autorizacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DetalhesAutorizacaoPage);
    return DetalhesAutorizacaoPage;
}());

//# sourceMappingURL=detalhes-autorizacao.js.map

/***/ })

});
//# sourceMappingURL=34.js.map