webpackJsonp([43],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPrestadorAgendamentoModule", function() { return BuscarPrestadorAgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar_prestador_agendamento__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscarPrestadorAgendamentoModule = /** @class */ (function () {
    function BuscarPrestadorAgendamentoModule() {
    }
    BuscarPrestadorAgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__buscar_prestador_agendamento__["a" /* BuscarPrestadorAgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__buscar_prestador_agendamento__["a" /* BuscarPrestadorAgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__buscar_prestador_agendamento__["a" /* BuscarPrestadorAgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], BuscarPrestadorAgendamentoModule);
    return BuscarPrestadorAgendamentoModule;
}());

//# sourceMappingURL=buscar-prestador-agendamento.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarPrestadorAgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_service__ = __webpack_require__(212);
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




var BuscarPrestadorAgendamentoPage = /** @class */ (function () {
    function BuscarPrestadorAgendamentoPage(agendamentoService, loadingCtrl, navParams, navCtrl, toastHelper) {
        this.agendamentoService = agendamentoService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.listaPrestadores = [];
        this._listaPrestadores = [];
    }
    BuscarPrestadorAgendamentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nome = this.navParams.get('nome');
        this.codCentroMedico = this.navParams.get('codCentroMedico');
        this.codEspecialidade = this.navParams.get('codEspecialidade');
        this.tipoBusca = this.navParams.get('tipoBusca');
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaCredenciado(this.codCentroMedico, this.codEspecialidade, this.nome).subscribe(function (lista) {
            _this.listaPrestadores = lista;
            _this._listaPrestadores = _this.listaPrestadores;
            loader.dismiss();
        }, function (error) {
            _this.toastHelper.notificacaoErroCarregarDados();
            _this.navCtrl.pop();
            loader.dismiss();
        });
    };
    BuscarPrestadorAgendamentoPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.agendamentoService.buscarListaCredenciado(this.codCentroMedico, this.codEspecialidade, this.nome).subscribe(function (lista) {
            _this.listaPrestadores = lista;
            _this._listaPrestadores = _this.listaPrestadores;
            refresher.complete();
        }, function (error) {
            _this.toastHelper.notificacaoErroCarregarDados();
            refresher.complete();
        });
    };
    BuscarPrestadorAgendamentoPage.prototype.buscarPrestador = function (event) {
        this.listaPrestadores = this._listaPrestadores;
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.listaPrestadores = this.listaPrestadores.filter(function (prestador) {
                return (prestador.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BuscarPrestadorAgendamentoPage.prototype.visualizarPrestador = function (prestador) {
        this.navCtrl.push('EscolherDataAgendamentoPage', {
            'Prestador': prestador,
            'codEspecialidade': this.codEspecialidade,
            'codCentroMedico': this.codCentroMedico,
            'tipoBusca': this.tipoBusca
        });
    };
    BuscarPrestadorAgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-buscar-prestador-agendamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\buscar-prestador-agendamento\buscar-prestador-agendamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Prestadores</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBuscarPrestadorAgendamento">\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Puxe para atualizar"\n                refreshingSpinner="circles"\n                refreshingText="Carregando dados...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-searchbar placeholder="Buscar" autocomplete="on" animated=true\n                   (ionInput)="buscarPrestador($event)"></ion-searchbar>\n    <ion-list text-wrap>\n        <button ion-item class="list-item" *ngFor="let prestador of listaPrestadores"\n                (click)="visualizarPrestador(prestador)">\n            <ion-row no-padding class="content-row one-line">\n                <ion-col no-padding width-90 class="item-content">\n                    <h3 class="item-title" text-wrap>{{ prestador.nome | capitalizeAll}}</h3>\n                </ion-col>\n                <ion-col no-padding width-10 class="item-icon">\n                    <ion-icon name="arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\buscar-prestador-agendamento\buscar-prestador-agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_agendamento_service__["a" /* AgendamentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */]])
    ], BuscarPrestadorAgendamentoPage);
    return BuscarPrestadorAgendamentoPage;
}());

//# sourceMappingURL=buscar-prestador-agendamento.js.map

/***/ })

});
//# sourceMappingURL=43.js.map