webpackJsonp([24],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaSegundaViaBoletoModule", function() { return ListaSegundaViaBoletoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_segunda_via_boleto__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListaSegundaViaBoletoModule = /** @class */ (function () {
    function ListaSegundaViaBoletoModule() {
    }
    ListaSegundaViaBoletoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lista_segunda_via_boleto__["a" /* ListaSegundaViaBoletoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__lista_segunda_via_boleto__["a" /* ListaSegundaViaBoletoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__lista_segunda_via_boleto__["a" /* ListaSegundaViaBoletoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ListaSegundaViaBoletoModule);
    return ListaSegundaViaBoletoModule;
}());

//# sourceMappingURL=lista-segunda-via-boleto.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSegundaViaBoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_segunda_via_boleto_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaSegundaViaBoletoPage = /** @class */ (function () {
    function ListaSegundaViaBoletoPage(navCtrl, loadingCtrl, segundaViaBoletoService, storageService, toastHelper) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.segundaViaBoletoService = segundaViaBoletoService;
        this.storageService = storageService;
        this.toastHelper = toastHelper;
        this.listaBoletosEmAberto = [];
    }
    ListaSegundaViaBoletoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.storageService.getBeneficiario()
            .then(function (beneficiario) {
            _this.beneficiario = beneficiario;
            _this.segundaViaBoletoService.buscarListaBoletosEmAberto(_this.beneficiario.handleTitular).subscribe(function (lista) {
                if (lista != null) {
                    if (lista.length) {
                        lista = _this.calcularDataVencimento(lista);
                        _this.listaBoletosEmAberto = lista;
                        loader.dismiss();
                    }
                    else {
                        loader.dismiss();
                        _this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                        _this.navCtrl.setRoot('HomePage');
                    }
                }
                else {
                    loader.dismiss();
                    _this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                    _this.navCtrl.setRoot('HomePage');
                }
            }, function () {
                loader.dismiss();
                _this.toastHelper.notificacaoErroCarregarDados();
                _this.navCtrl.setRoot('HomePage');
            });
        }, function () {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    ListaSegundaViaBoletoPage.prototype.visualizarBoleto = function (boleto) {
        this.navCtrl.push('SegundaViaBoletoPage', { boleto: boleto });
    };
    ListaSegundaViaBoletoPage.prototype.calcularDataVencimento = function (lista) {
        return lista.map(function (boleto) {
            boleto.dataVencimentoCalculado = new Date(boleto.vctOri_data);
            return boleto;
        });
    };
    ListaSegundaViaBoletoPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.segundaViaBoletoService.buscarListaBoletosEmAberto(this.beneficiario.handleTitular).subscribe(function (lista) {
            if (lista.length) {
                lista = _this.calcularDataVencimento(lista);
                _this.listaBoletosEmAberto = lista;
                refresher.complete();
            }
            else {
                refresher.complete();
                _this.toastHelper.notificacaoMensagem('Não possui boletos em aberto');
                _this.navCtrl.setRoot('HomePage');
            }
        }, function () {
            refresher.complete();
            _this.toastHelper.notificacaoErroCarregarDados();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    ListaSegundaViaBoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lista-segunda-via-boleto',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\segunda-via-boleto\lista-segunda-via-boleto\lista-segunda-via-boleto.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Segunda Via Boleto</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentListaSegundaViaBoleto">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-list text-wrap>\n        <button ion-item class="list-item" *ngFor="let boleto of listaBoletosEmAberto" (click)="visualizarBoleto(boleto)">\n            <ion-row no-padding class="content-row one-line">\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap *ngIf="boleto.nomeCli_titular">{{ boleto.nomeCli_titular | capitalizeAll}}</h3>\n                    <h3 class="item-title" text-wrap *ngIf="boleto.nomeCli_agregado">{{ boleto.nomeCli_agregado | capitalizeAll}}</h3>\n                    <p class="item-description">Título: {{boleto.desTpt | capitalizeAll}}</p>\n                    <p class="item-description">Número Título: {{boleto.numTitulo}}</p>\n                    <p class="item-description">Vencimento: {{boleto.dataVencimentoCalculado | date: "dd/MM/y"}}</p>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\segunda-via-boleto\lista-segunda-via-boleto\lista-segunda-via-boleto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_segunda_via_boleto_service__["a" /* SegundaViaBoletoService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */]])
    ], ListaSegundaViaBoletoPage);
    return ListaSegundaViaBoletoPage;
}());

//# sourceMappingURL=lista-segunda-via-boleto.js.map

/***/ })

});
//# sourceMappingURL=24.js.map