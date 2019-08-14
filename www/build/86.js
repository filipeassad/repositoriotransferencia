webpackJsonp([86],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrosBuscaAgendamentoEspecialidadeModule", function() { return FiltrosBuscaAgendamentoEspecialidadeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_especialidade__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FiltrosBuscaAgendamentoEspecialidadeModule = /** @class */ (function () {
    function FiltrosBuscaAgendamentoEspecialidadeModule() {
    }
    FiltrosBuscaAgendamentoEspecialidadeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_especialidade__["a" /* FiltrosBuscaAgendamentoEspecialidadePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_especialidade__["a" /* FiltrosBuscaAgendamentoEspecialidadePage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__filtros_busca_agendamento_especialidade__["a" /* FiltrosBuscaAgendamentoEspecialidadePage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], FiltrosBuscaAgendamentoEspecialidadeModule);
    return FiltrosBuscaAgendamentoEspecialidadeModule;
}());

//# sourceMappingURL=filtros-busca-agendamento-especialidade.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrosBuscaAgendamentoEspecialidadePage; });
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





var FiltrosBuscaAgendamentoEspecialidadePage = /** @class */ (function () {
    function FiltrosBuscaAgendamentoEspecialidadePage(toastHelper, navCtrl, loadingCtrl, agendamentoService) {
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.agendamentoService = agendamentoService;
        this.listaEspecialidades = [];
        this.listaCentroMedicos = [];
        this.buscarForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'codEspecialidade': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'codCentroMedico': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
    }
    FiltrosBuscaAgendamentoEspecialidadePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.buscarListaEspecialidade().subscribe(function (lista) {
            if (lista.length) {
                _this.listaEspecialidades = lista;
                loader.dismiss();
            }
            else {
                _this.toastHelper.notificacaoMensagem('Não há especialidades');
                loader.dismiss();
                _this.navCtrl.pop();
            }
        }, function (erro) {
            _this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
            _this.navCtrl.pop();
        });
    };
    FiltrosBuscaAgendamentoEspecialidadePage.prototype.buscarPrestador = function () {
        this.navCtrl.push('BuscarPrestadorAgendamentoPage', {
            'codEspecialidade': this.codEspecialidade,
            'codCentroMedico': this.codCentroMedico,
            'tipoBusca': "especialidade"
        });
    };
    FiltrosBuscaAgendamentoEspecialidadePage.prototype.buscarCentroMedico = function () {
        var _this = this;
        this.codCentroMedico = null;
        if (this.codEspecialidade) {
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade).subscribe(function (lista) {
                if (!lista.length) {
                    _this.toastHelper.notificacaoMensagem('Não há centros médicos para esta especialidade');
                    _this.listaCentroMedicos = [];
                }
                else {
                    _this.listaCentroMedicos = lista;
                }
                loader_1.dismiss();
            }, function (erro) {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader_1.dismiss();
            });
        }
        else {
            this.listaCentroMedicos = [];
        }
    };
    FiltrosBuscaAgendamentoEspecialidadePage.prototype.limparCamposBusca = function () {
        this.codEspecialidade = null;
        this.codCentroMedico = null;
    };
    FiltrosBuscaAgendamentoEspecialidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filtros-busca-agendamento-especialidade',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\filtros-busca-agendamento-especialidade\filtros-busca-agendamento-especialidade.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Buscar Prestador</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBuscarPrestadorAgendamento">\n    <form (ngSubmit)="buscarPrestador()" class="formBuscarPrestadorAgendamento" [formGroup]="buscarForm"\n          #buscarFormElement="ngForm">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Especialidade</ion-label>\n                <ion-select [(ngModel)]="codEspecialidade" formControlName="codEspecialidade" cancelText="Fechar"\n                            (ngModelChange)="buscarCentroMedico()">\n                    <ion-option [value]="especialidade.codEspecialidade"\n                                *ngFor="let especialidade of listaEspecialidades">{{especialidade.descricao |\n                        capitalizeAll}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Centro Médico</ion-label>\n                <ion-select [(ngModel)]="codCentroMedico" formControlName="codCentroMedico" cancelText="Fechar"\n                            [disabled]="listaCentroMedicos.length == 0">\n                    <ion-option [value]="centroMedico.codCentroMedico" *ngFor="let centroMedico of listaCentroMedicos">\n                        {{centroMedico.descricao | capitalizeAll}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-row>\n            <ion-col col-6>\n                <button type="submit" ion-button block [disabled]="!buscarFormElement.form.valid || listaCentroMedicos.length == 0">Buscar</button>\n            </ion-col>\n            <ion-col col-6>\n                <button type="button" ion-button block [disabled]="!buscarFormElement.form.valid"\n                        (click)="limparCamposBusca()"><span text-wrap>Limpar</span></button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\filtros-busca-agendamento-especialidade\filtros-busca-agendamento-especialidade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__["a" /* AgendamentoService */]])
    ], FiltrosBuscaAgendamentoEspecialidadePage);
    return FiltrosBuscaAgendamentoEspecialidadePage;
}());

//# sourceMappingURL=filtros-busca-agendamento-especialidade.js.map

/***/ })

});
//# sourceMappingURL=86.js.map