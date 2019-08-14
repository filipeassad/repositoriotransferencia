webpackJsonp([15],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaPrestadorListaModule", function() { return BuscaPrestadorListaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busca_prestador_lista__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscaPrestadorListaModule = /** @class */ (function () {
    function BuscaPrestadorListaModule() {
    }
    BuscaPrestadorListaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__busca_prestador_lista__["a" /* BuscaPrestadorListaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__busca_prestador_lista__["a" /* BuscaPrestadorListaPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__busca_prestador_lista__["a" /* BuscaPrestadorListaPage */]],
            schemas: [],
            providers: [],
        })
    ], BuscaPrestadorListaModule);
    return BuscaPrestadorListaModule;
}());

//# sourceMappingURL=busca-prestador-lista.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPrestadorTO; });
var BuscaPrestadorTO = /** @class */ (function () {
    function BuscaPrestadorTO() {
    }
    Object.defineProperty(BuscaPrestadorTO.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "tipoPrestador", {
        get: function () {
            return this._tipoPrestador;
        },
        set: function (value) {
            this._tipoPrestador = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "especialidade", {
        get: function () {
            return this._especialidade;
        },
        set: function (value) {
            this._especialidade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "bairro", {
        get: function () {
            return this._bairro;
        },
        set: function (value) {
            this._bairro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscaPrestadorTO.prototype, "municipio", {
        get: function () {
            return this._municipio;
        },
        set: function (value) {
            this._municipio = value;
        },
        enumerable: true,
        configurable: true
    });
    return BuscaPrestadorTO;
}());

//# sourceMappingURL=busca-prestador.to.model.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPrestadorListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_to_busca_prestador_to_model__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prestador_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuscaPrestadorListaPage = /** @class */ (function () {
    function BuscaPrestadorListaPage(prestadorService, loadingCtrl, navParams, navCtrl, toastHelper) {
        this.prestadorService = prestadorService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.listaPrestadores = [];
        this._listaPrestadores = [];
        this.buscaPrestadorTO = new __WEBPACK_IMPORTED_MODULE_2__models_to_busca_prestador_to_model__["a" /* BuscaPrestadorTO */]();
        this.buscaPrestadorTO = this.navParams.get('BuscaPrestadorTO');
    }
    BuscaPrestadorListaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.prestadorService.buscarPrestador(this.buscaPrestadorTO.nome, this.buscaPrestadorTO.municipio, this.buscaPrestadorTO.tipoPrestador, this.buscaPrestadorTO.especialidade).subscribe(function (lista) {
            if (lista.length) {
                _this.listaPrestadores = lista;
                _this._listaPrestadores = _this.listaPrestadores;
                loader.dismiss();
            }
            else {
                loader.dismiss();
                _this.toastHelper.notificacaoMensagem('Não foram encontrados dados para a busca desejada');
                _this.navCtrl.pop();
            }
        }, function (error) {
            loader.dismiss();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    BuscaPrestadorListaPage.prototype.buscarPrestador = function (event) {
        this.listaPrestadores = this._listaPrestadores;
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.listaPrestadores = this.listaPrestadores.filter(function (prestador) {
                return (prestador.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BuscaPrestadorListaPage.prototype.visualizarPrestador = function (prestador) {
        this.navCtrl.push('PrestadorPage', { 'Prestador': prestador });
    };
    BuscaPrestadorListaPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.prestadorService.buscarPrestador(this.buscaPrestadorTO.nome, this.buscaPrestadorTO.municipio, this.buscaPrestadorTO.tipoPrestador, this.buscaPrestadorTO.especialidade).subscribe(function (lista) {
            _this.listaPrestadores = lista;
            _this._listaPrestadores = _this.listaPrestadores;
            refresher.complete();
        }, function (error) {
            _this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    };
    BuscaPrestadorListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-busca-prestador-lista',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\busca-prestador-lista\busca-prestador-lista.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Prestadores</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentPrestadorBuscaLista">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-searchbar placeholder="Buscar" autocomplete="on" animated=true\n                   (ionInput)="buscarPrestador($event)"></ion-searchbar>\n    <ion-list text-wrap>\n        <button ion-item class="list-item" *ngFor="let prestador of listaPrestadores"\n                (click)="visualizarPrestador(prestador)">\n            <ion-row no-padding class="content-row one-line">\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap>{{ prestador.nome | capitalizeAll}}</h3>\n                    <p class="item-description">Município: {{prestador.municipio | capitalizeAll}} - {{prestador.uf}}</p>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\prestador\busca-prestador-lista\busca-prestador-lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_prestador_service__["a" /* PrestadorService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_toast_helper__["a" /* ToastHelper */]])
    ], BuscaPrestadorListaPage);
    return BuscaPrestadorListaPage;
}());

//# sourceMappingURL=busca-prestador-lista.js.map

/***/ })

});
//# sourceMappingURL=15.js.map