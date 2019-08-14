webpackJsonp([38],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusAgendamentosModule", function() { return MeusAgendamentosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meus_agendamentos__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeusAgendamentosModule = /** @class */ (function () {
    function MeusAgendamentosModule() {
    }
    MeusAgendamentosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meus_agendamentos__["a" /* MeusAgendamentosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meus_agendamentos__["a" /* MeusAgendamentosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__meus_agendamentos__["a" /* MeusAgendamentosPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], MeusAgendamentosModule);
    return MeusAgendamentosModule;
}());

//# sourceMappingURL=meus-agendamentos.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusAgendamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agendamento_service__ = __webpack_require__(212);
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





var MeusAgendamentosPage = /** @class */ (function () {
    function MeusAgendamentosPage(toastHelper, navCtrl, navParams, loadingCtrl, agendamentoService, storageService) {
        this.toastHelper = toastHelper;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.agendamentoService = agendamentoService;
        this.storageService = storageService;
        this.listaAgendamentos = [];
        this.listaBeneficiarios = [];
    }
    MeusAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.beneficiario = this.navParams.get('Beneficiario');
        if (!this.beneficiario) {
            Promise.all([
                this.storageService.getBeneficiario(),
                this.storageService.getGrupoFamiliar()
            ])
                .then(function (result) {
                _this.beneficiario = result[0];
                if (_this.beneficiario.titular === 'S') {
                    _this.listaBeneficiarios = result[1];
                }
                else {
                    _this.listaBeneficiarios = [_this.beneficiario];
                }
                _this.selectMatriculaBeneficiario = _this.beneficiario.matriculaCassems;
                _this.agendamentoService.listarAgendaBeneficiario(_this.beneficiario.matriculaCassems).subscribe(function (lista) {
                    lista = lista.map(function (agendamento) {
                        return _this.montarDataFinal(agendamento);
                    });
                    _this.listaAgendamentos = lista;
                    loader.dismiss();
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoErroCarregarDados();
                });
            }, function () {
                loader.dismiss();
                _this.toastHelper.notificacaoErroCarregarDados();
            });
        }
        else {
            this.selectMatriculaBeneficiario = this.beneficiario.matriculaCassems;
            this.storageService.getGrupoFamiliar()
                .then(function (grupoFamilar) {
                _this.listaBeneficiarios = grupoFamilar;
                _this.agendamentoService.listarAgendaBeneficiario(_this.beneficiario.matriculaCassems).subscribe(function (lista) {
                    lista = lista.map(function (agendamento) {
                        return _this.montarDataFinal(agendamento);
                    });
                    _this.listaAgendamentos = lista;
                    loader.dismiss();
                }, function () {
                    loader.dismiss();
                    _this.toastHelper.notificacaoErroCarregarDados();
                });
            }, function () {
                loader.dismiss();
                _this.toastHelper.notificacaoErroCarregarDados();
            });
        }
    };
    MeusAgendamentosPage.prototype.recarregarDados = function (refresher) {
        var _this = this;
        this.agendamentoService.listarAgendaBeneficiario(this.beneficiario.matriculaCassems).subscribe(function (lista) {
            lista = lista.map(function (agendamento) {
                return _this.montarDataFinal(agendamento);
            });
            _this.listaAgendamentos = lista;
            refresher.complete();
        }, function () {
            refresher.complete();
            _this.toastHelper.notificacaoErroCarregarDados();
        });
    };
    MeusAgendamentosPage.prototype.alterarBeneficiario = function () {
        var _this = this;
        if (this.beneficiario.matriculaCassems != this.selectMatriculaBeneficiario) {
            var beneficiario = this.listaBeneficiarios.find(function (beneficiario) {
                return _this.selectMatriculaBeneficiario === beneficiario.matriculaCassems;
            });
            this.navCtrl.setRoot('MeusAgendamentosPage', { 'Beneficiario': beneficiario });
        }
    };
    MeusAgendamentosPage.prototype.visualizarAgendamento = function (agendamento) {
        this.navCtrl.push('AgendamentoPage', {
            'Agendamento': agendamento,
            'Beneficiario': this.beneficiario
        });
    };
    MeusAgendamentosPage.prototype.novoAgendamento = function () {
        this.navCtrl.push('TipoAgendamentoPage');
    };
    MeusAgendamentosPage.prototype.montarDataFinal = function (agendamento) {
        var array = agendamento.dataFormatada.split('/');
        agendamento.dataFinal = new Date(Number(array[2]), Number(array[1]) - 1, Number(array[0]));
        var hora = agendamento.horaFormatada.split(':');
        agendamento.dataFinal.setHours(Number(hora[0]), Number(hora[1]));
        return agendamento;
    };
    MeusAgendamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-meus-agendamentos',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\meus-agendamentos\meus-agendamentos.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <span class="titulo-page">Meus Agendamentos</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentMeusAgendamentos">\n\n    <ion-refresher (ionRefresh)="recarregarDados($event)">\n\n        <ion-refresher-content\n\n                pullingIcon="arrow-dropdown"\n\n                pullingText="Puxe para atualizar"\n\n                refreshingSpinner="circles"\n\n                refreshingText="Carregando dados...">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label floating>Beneficiário</ion-label>\n\n            <ion-select [(ngModel)]="selectMatriculaBeneficiario" name="selectMatriculaBeneficiario" cancelText="Fechar"\n\n                        (ionChange)="alterarBeneficiario()">\n\n                <ion-option [value]="beneficiario.matriculaCassems"\n\n                            *ngFor="let beneficiario of listaBeneficiarios">{{beneficiario.nome |\n\n                    capitalizeAll}}\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n    <h2 class="titulo-lista-vazia" text-center *ngIf="listaAgendamentos.length == 0">Não existem agendamentos para este beneficiário</h2>\n\n    <ion-list class="schedule-list" *ngIf="listaAgendamentos.length > 0">\n\n        <ion-item class="schedule-item" *ngFor="let agendamento of listaAgendamentos">\n\n            <ion-row>\n\n                <ion-col width-20 class="schedule-date">\n\n                    <h2 class="schedule-day">{{agendamento.dataFinal | date:\'d\'}}</h2>\n\n                    <h3 class="schedule-month">{{agendamento.dataFinal.getMonth() | mesBrasil}}</h3>\n\n                    <h4 class="schedule-time">{{agendamento.dataFinal | date:\'y\'}}</h4>\n\n                    <h4 class="schedule-time">{{agendamento.horaFormatada}}</h4>\n\n                </ion-col>\n\n                <ion-col width-80 class="schedule-data" (click)="visualizarAgendamento(agendamento)">\n\n                    <div class="data-item">\n\n                        <div class="item-content">\n\n                            <h2 class="item-title">{{agendamento.dtoPrestador.nome}}</h2>\n\n                            <div class="item-description">\n\n                                <ion-icon class="description-icon" name="medical"></ion-icon>\n\n                                <p class="description-text">{{agendamento.dtoEspecialidade.descricao}}</p>\n\n                            </div>\n\n                            <div class="item-description">\n\n                                <ion-icon class="description-icon" name="navigate"></ion-icon>\n\n                                <p class="description-text">{{agendamento.dtoCentroMedico.descricao}}</p>\n\n                            </div>\n\n                        </div>\n\n                        <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-fab right bottom>\n\n        <button ion-fab (click)="novoAgendamento()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\meus-agendamentos\meus-agendamentos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_agendamento_service__["a" /* AgendamentoService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_service__["a" /* StorageService */]])
    ], MeusAgendamentosPage);
    return MeusAgendamentosPage;
}());

//# sourceMappingURL=meus-agendamentos.js.map

/***/ })

});
//# sourceMappingURL=38.js.map