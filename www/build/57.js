webpackJsonp([57],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoModule", function() { return AgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agendamento__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgendamentoModule = /** @class */ (function () {
    function AgendamentoModule() {
    }
    AgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__agendamento__["a" /* AgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__agendamento__["a" /* AgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__agendamento__["a" /* AgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], AgendamentoModule);
    return AgendamentoModule;
}());

//# sourceMappingURL=agendamento.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_agendamento_keys__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoPage = /** @class */ (function () {
    function AgendamentoPage(navParams, alertCtrl, navCtrl) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.agendamento = this.navParams.get('Agendamento');
        this.beneficiario = this.navParams.get('Beneficiario');
        this.statusAutorizacao = __WEBPACK_IMPORTED_MODULE_2__status_agendamento_keys__["a" /* StatusAgendamentoKeys */].getStatusAgendamento(this.agendamento.status);
    }
    AgendamentoPage.prototype.abrirInformacoes = function () {
        var alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    };
    AgendamentoPage.prototype.paginaCancelarAgendamento = function () {
        this.navCtrl.push('CancelarAgendamentoPage', {
            'Agendamento': this.agendamento
        });
    };
    AgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-agendamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\agendamento\agendamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Agendamento</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="abrirInformacoes()">\n                <ion-icon name="information"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentAgendamento">\n    <div class="agendamento-details">\n        <ion-row wrap class="agendamento-bio-row">\n            <ion-col no-padding col-12 text-center>\n                <h2 class="agendamento-name">{{agendamento.dtoPrestador.nome| capitalizeAll}}</h2>\n            </ion-col>\n            <section class="agendamento-detail-section">\n                <ion-col no-padding col-12>\n                    <p class="agendamento-description">\n                        Especialidade: {{agendamento.dtoEspecialidade.descricao | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="agendamento-description">\n                        Centro Médico: {{agendamento.dtoCentroMedico.descricao| capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="agendamento-description">\n                        Data: {{agendamento.dataFormatada}} - {{agendamento.horaFormatada}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="agendamento-description">\n                        Beneficiário: {{beneficiario.nome | capitalizeAll}}\n                    </p>\n                </ion-col>\n                <ion-col no-padding col-12>\n                    <p class="agendamento-description">\n                        Situação: {{statusAutorizacao | capitalizeAll}}\n                    </p>\n                </ion-col>\n            </section>\n        </ion-row>\n    </div>\n    <button type="button" class="btn-cancelar-agendamento" ion-button block (click)="paginaCancelarAgendamento()">Cancelar Agendamento</button>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\agendamento\agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AgendamentoPage);
    return AgendamentoPage;
}());

//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusAgendamentoKeys; });
var StatusAgendamentoKeys = /** @class */ (function () {
    function StatusAgendamentoKeys() {
    }
    StatusAgendamentoKeys.getStatusAgendamento = function (value) {
        var status = {
            'A': 'Autorizado',
            'N': 'Negado',
            'C': 'Concluído',
            'L': 'oncluído',
            'F': 'Falta'
        };
        if (typeof status[value]) {
            return status[value];
        }
        return null;
    };
    return StatusAgendamentoKeys;
}());

//# sourceMappingURL=status-agendamento.keys.js.map

/***/ })

});
//# sourceMappingURL=57.js.map