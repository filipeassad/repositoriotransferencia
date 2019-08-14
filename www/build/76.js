webpackJsonp([76],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemFaturasNegociacaoPageModule", function() { return ListagemFaturasNegociacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listagem_faturas_negociacao__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListagemFaturasNegociacaoPageModule = /** @class */ (function () {
    function ListagemFaturasNegociacaoPageModule() {
    }
    ListagemFaturasNegociacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listagem_faturas_negociacao__["a" /* ListagemFaturasNegociacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listagem_faturas_negociacao__["a" /* ListagemFaturasNegociacaoPage */]),
            ],
        })
    ], ListagemFaturasNegociacaoPageModule);
    return ListagemFaturasNegociacaoPageModule;
}());

//# sourceMappingURL=listagem-faturas-negociacao.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemFaturasNegociacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_negociacao_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_negociacao_item_estatico_service__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListagemFaturasNegociacaoPage = /** @class */ (function () {
    function ListagemFaturasNegociacaoPage(navCtrl, navParams, negociacaoService, loadingCtrl, negociacaoItemEstaticoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.negociacaoService = negociacaoService;
        this.loadingCtrl = loadingCtrl;
        this.negociacaoItemEstaticoService = negociacaoItemEstaticoService;
        this.itensNegociacao = [];
        this.desabilitaAceitacao = true;
        this.negociacaoSelecionada = this.navParams.get('negociacaoSelecionada');
        this.itensNegociacao = this.negociacaoSelecionada.tbSolNegociacaoItems;
    }
    ListagemFaturasNegociacaoPage.prototype.ionViewDidLoad = function () {
    };
    ListagemFaturasNegociacaoPage.prototype.ionViewDidEnter = function () {
        if (this.negociacaoItemEstaticoService.negociacaoItemAlterado) {
            var itemNegociacaoAlterado = this.negociacaoItemEstaticoService.negociacaoItemAlterado;
            var index = 0;
            for (var i = 0; i < this.itensNegociacao.length; i++) {
                if (this.itensNegociacao[i].sniId = itemNegociacaoAlterado.sniId)
                    index = i;
            }
            this.itensNegociacao.splice(index, 1);
            this.itensNegociacao.push(itemNegociacaoAlterado);
            this.liberarAceitacao();
            this.negociacaoItemEstaticoService.negociacaoItemAlterado = null;
        }
    };
    ListagemFaturasNegociacaoPage.prototype.aceitarTermos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        this.negociacaoService.confirmarNegociacao(this.negociacaoSelecionada.snId)
            .subscribe(function (resultado) {
            _this.navCtrl.pop();
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    ListagemFaturasNegociacaoPage.prototype.liberarAceitacao = function () {
        var quantidadeNegociados = 0;
        for (var _i = 0, _a = this.itensNegociacao; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.sniCondicaopagamento != null)
                quantidadeNegociados++;
        }
        this.desabilitaAceitacao = quantidadeNegociados != this.itensNegociacao.length
            || (this.negociacaoSelecionada.snDataaceite != null || this.negociacaoSelecionada.snDataaceite != null);
    };
    ListagemFaturasNegociacaoPage.prototype.rejeitarTermos = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        this.negociacaoService.rejeitarNegociacao(this.negociacaoSelecionada.snId)
            .subscribe(function (resultado) {
            _this.navCtrl.pop();
            loader.dismiss();
        }, function () {
            loader.dismiss();
        });
    };
    ListagemFaturasNegociacaoPage.prototype.negociacaoFatura = function (itemNegociacaoSelecionada) {
        this.navCtrl.push('NegociacaoPage', { 'itemNegociacaoSelecionada': itemNegociacaoSelecionada });
    };
    ListagemFaturasNegociacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listagem-faturas-negociacao',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\listagem-faturas-negociacao\listagem-faturas-negociacao.html"*/'<ion-header class="listing-header">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Listagem Faturas da Negociação</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>   \n    <h4 style="color:#0090BF; text-align: left;" padding>Faturas à negociar</h4>\n\n    <ion-list text-wrap>\n        <ion-item *ngFor="let itemNegociacao of itensNegociacao">\n            <div style="display: inline-block; vertical-align: middle; width: 10%;" *ngIf="itemNegociacao.sniCondicaopagamento != null">\n                <img width="60%" src="./assets/images/checked.png" alt="">\n            </div>\n            <div style="display: inline-block; vertical-align: middle; width: 10%;" *ngIf="itemNegociacao.sniCondicaopagamento == null">\n                <img width="60%" src="./assets/images/check-box-empty.png" alt="">\n            </div>\n            <div style="margin-left: 5px; display: inline-block; vertical-align: middle; font-size: 10px; color: #A4A4A4; width: 15%;">\n                {{ itemNegociacao.handleFatura }}\n            </div>\n            <div style="display: inline-block; vertical-align: middle; font-size: 10px; color: #A4A4A4; width: 35%;">\n                {{ itemNegociacao.sniDescTipofatura }}\n            </div>\n            <div style="display: inline-block; vertical-align: middle; font-size: 10px; color: #A4A4A4; width: 20%; text-align: right;">\n                R$ {{ itemNegociacao.sniValortotal }}\n            </div>\n            <div style="margin-left: 10px; display: inline-block; vertical-align: middle; width: 10%;" *ngIf="itemNegociacao.sniCondicaopagamento == null">\n                <img width="80%" src="./assets/images/plus.png" alt="" (click)="negociacaoFatura(itemNegociacao)">\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <ion-row style="margin-top: 10px;" padding>\n        <ion-col no-padding col-4>\n            Total devido:\n        </ion-col>\n        <ion-col no-padding col-4>\n            R$ {{ negociacaoSelecionada.snValortotal }}\n        </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-top: 20px;">          \n        <ion-col offset-1 col-10>\n            <button style="width: 100%;" ion-button type="button" [disabled]="desabilitaAceitacao" (click)="aceitarTermos()" >Eu aceito os termos de uso</button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>          \n        <ion-col offset-1 col-10>\n            <button style="width: 100%;" ion-button type="button" (click)="rejeitarTermos()">Rejeitar</button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\listagem-faturas-negociacao\listagem-faturas-negociacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_negociacao_service__["a" /* NegociacaoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_negociacao_item_estatico_service__["a" /* NegociacaoItemEstaticoService */]])
    ], ListagemFaturasNegociacaoPage);
    return ListagemFaturasNegociacaoPage;
}());

//# sourceMappingURL=listagem-faturas-negociacao.js.map

/***/ })

});
//# sourceMappingURL=76.js.map