webpackJsonp([83],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoAgendamentoModule", function() { return TipoAgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tipo_agendamento__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TipoAgendamentoModule = /** @class */ (function () {
    function TipoAgendamentoModule() {
    }
    TipoAgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tipo_agendamento__["a" /* TipoAgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tipo_agendamento__["a" /* TipoAgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__tipo_agendamento__["a" /* TipoAgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], TipoAgendamentoModule);
    return TipoAgendamentoModule;
}());

//# sourceMappingURL=tipo-agendamento.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoAgendamentoPage; });
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


var TipoAgendamentoPage = /** @class */ (function () {
    function TipoAgendamentoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TipoAgendamentoPage.prototype.realizarAgendamentoPor = function (tipo) {
        if (tipo == 'prestador') {
            this.navCtrl.push('FiltrosBuscaAgendamentoPrestadorPage');
        }
        else {
            if (tipo == 'especialidade') {
                this.navCtrl.push('FiltrosBuscaAgendamentoEspecialidadePage');
            }
            else {
                this.navCtrl.push('FiltrosBuscaAgendamentoCentroMedicoPage');
            }
        }
    };
    TipoAgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tipo-agendamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\tipo-agendamento\tipo-agendamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Tipo de Agendamento</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentTipoAgendamento">\n    <h2 class="titulo-lista-tipo-agendamentos" text-center>Deseja realizar o agendamento por qual tipo?</h2>\n\n    <div class="group-btn-tipo-agendamento">\n        <button type="button" class="btn-tipo-agendamento" ion-button block (click)="realizarAgendamentoPor(\'prestador\')">Prestador</button>\n        <button type="button" class="btn-tipo-agendamento" ion-button block (click)="realizarAgendamentoPor(\'especialidade\')">Especialidade</button>\n        <button type="button" class="btn-tipo-agendamento" ion-button block (click)="realizarAgendamentoPor(\'centro medico\')">Centro Médico</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\tipo-agendamento\tipo-agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TipoAgendamentoPage);
    return TipoAgendamentoPage;
}());

//# sourceMappingURL=tipo-agendamento.js.map

/***/ })

});
//# sourceMappingURL=83.js.map