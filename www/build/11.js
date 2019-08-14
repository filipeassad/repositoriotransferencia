webpackJsonp([11],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoModule", function() { return AgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agendamento__ = __webpack_require__(386);
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

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_agendamento_keys__ = __webpack_require__(387);
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
            selector: 'page-agendamento',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\agendamento\agendamento.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Agendamento</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="abrirInformacoes()">\n\n                <ion-icon name="information"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentAgendamento">\n\n    <div class="agendamento-details">\n\n        <ion-row wrap class="agendamento-bio-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="agendamento-name">{{agendamento.dtoPrestador.nome| capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="agendamento-detail-section">\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Especialidade: {{agendamento.dtoEspecialidade.descricao | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Centro Médico: {{agendamento.dtoCentroMedico.descricao| capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Data: {{agendamento.dataFormatada}} - {{agendamento.horaFormatada}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Beneficiário: {{beneficiario.nome | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Situação: {{statusAutorizacao | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n            </section>\n\n        </ion-row>\n\n    </div>\n\n    <button type="button" class="btn-cancelar-agendamento" ion-button block (click)="paginaCancelarAgendamento()">Cancelar Agendamento</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\agendamento\agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], AgendamentoPage);
    return AgendamentoPage;
}());

//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 387:
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
//# sourceMappingURL=11.js.map