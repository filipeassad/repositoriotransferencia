webpackJsonp([87],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosBuscaAgendamentoCentroMedicoModule", function() { return FiltrosBuscaAgendamentoCentroMedicoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_centro_medico__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FiltrosBuscaAgendamentoCentroMedicoModule = /** @class */ (function () {
    function FiltrosBuscaAgendamentoCentroMedicoModule() {
    }
    FiltrosBuscaAgendamentoCentroMedicoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_centro_medico__["a" /* FiltrosBuscaAgendamentoCentroMedicoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_centro_medico__["a" /* FiltrosBuscaAgendamentoCentroMedicoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_centro_medico__["a" /* FiltrosBuscaAgendamentoCentroMedicoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], FiltrosBuscaAgendamentoCentroMedicoModule);
    return FiltrosBuscaAgendamentoCentroMedicoModule;
}());

//# sourceMappingURL=filtros-busca-agendamento-centro-medico.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrosBuscaAgendamentoCentroMedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FiltrosBuscaAgendamentoCentroMedicoPage = /** @class */ (function () {
    function FiltrosBuscaAgendamentoCentroMedicoPage(toastHelper, navCtrl, loadingCtrl, agendamentoService) {
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.agendamentoService = agendamentoService;
        this.listaEspecialidades = [];
        this.listaCentroMedicos = [];
        this.buscarForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'codCentroMedico': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'codEspecialidade': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
    }
    FiltrosBuscaAgendamentoCentroMedicoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaCentroMedico().subscribe(function (lista) {
            if (lista.length) {
                _this.listaCentroMedicos = lista;
                loader.dismiss();
            }
            else {
                _this.toastHelper.notificacaoMensagem('Não há centros médicos');
                loader.dismiss();
                _this.navCtrl.pop();
            }
        }, function (erro) {
            _this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
            _this.navCtrl.pop();
        });
    };
    FiltrosBuscaAgendamentoCentroMedicoPage.prototype.buscarPrestador = function () {
        this.navCtrl.push('BuscarPrestadorAgendamentoPage', {
            'codCentroMedico': this.codCentroMedico,
            'codEspecialidade': this.codEspecialidade,
            'tipoBusca': "cm"
        });
    };
    FiltrosBuscaAgendamentoCentroMedicoPage.prototype.buscarEspecialidade = function () {
        var _this = this;
        this.codEspecialidade = null;
        if (this.codCentroMedico) {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico).subscribe(function (lista) {
                if (!lista.length) {
                    _this.toastHelper.notificacaoMensagem('Não existem centros médicos para esta especialidade');
                    _this.listaEspecialidades = [];
                }
                else {
                    _this.listaEspecialidades = lista;
                }
                loader_1.dismiss();
            }, function (erro) {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader_1.dismiss();
            });
        }
        else {
            this.listaEspecialidades = [];
        }
    };
    FiltrosBuscaAgendamentoCentroMedicoPage.prototype.limparCamposBusca = function () {
        this.codEspecialidade = null;
        this.codCentroMedico = null;
    };
    FiltrosBuscaAgendamentoCentroMedicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filtros-busca-agendamento-centro-medico',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\filtros-busca-agendamento-centro-medico\filtros-busca-agendamento-centro-medico.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Buscar Prestador</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBuscarPrestadorAgendamento">\n    <form (ngSubmit)="buscarPrestador()" class="formBuscarPrestadorAgendamento" [formGroup]="buscarForm"\n          #buscarFormElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Centro Médico</ion-label>\n                <ion-select [(ngModel)]="codCentroMedico" formControlName="codCentroMedico" cancelText="Fechar"\n                            (ngModelChange)="buscarEspecialidade()">\n                    <ion-option [value]="centroMedico.codCentroMedico" *ngFor="let centroMedico of listaCentroMedicos">\n                        {{centroMedico.descricao | capitalizeAll}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Especialidade</ion-label>\n                <ion-select [(ngModel)]="codEspecialidade" formControlName="codEspecialidade" cancelText="Fechar"\n                            [disabled]="listaEspecialidades.length == 0">\n                    <ion-option [value]="especialidade.codEspecialidade"\n                                *ngFor="let especialidade of listaEspecialidades">{{especialidade.descricao |\n                        capitalizeAll}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-row>\n            <ion-col col-6>\n                <button type="submit" ion-button block [disabled]="!buscarFormElement.form.valid || listaEspecialidades.length == 0">Buscar</button>\n            </ion-col>\n            <ion-col col-6>\n                <button type="button" ion-button block [disabled]="!buscarFormElement.form.valid"\n                        (click)="limparCamposBusca()"><span text-wrap>Limpar</span></button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\filtros-busca-agendamento-centro-medico\filtros-busca-agendamento-centro-medico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__["a" /* AgendamentoService */]])
    ], FiltrosBuscaAgendamentoCentroMedicoPage);
    return FiltrosBuscaAgendamentoCentroMedicoPage;
}());

//# sourceMappingURL=filtros-busca-agendamento-centro-medico.js.map

/***/ })

});
//# sourceMappingURL=87.js.map