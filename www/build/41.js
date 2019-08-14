webpackJsonp([41],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolherDataAgendamentoModule", function() { return EscolherDataAgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolher_data_agendamento__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EscolherDataAgendamentoModule = /** @class */ (function () {
    function EscolherDataAgendamentoModule() {
    }
    EscolherDataAgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__escolher_data_agendamento__["a" /* EscolherDataAgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__escolher_data_agendamento__["a" /* EscolherDataAgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__escolher_data_agendamento__["a" /* EscolherDataAgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], EscolherDataAgendamentoModule);
    return EscolherDataAgendamentoModule;
}());

//# sourceMappingURL=escolher-data-agendamento.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherDataAgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EscolherDataAgendamentoPage = /** @class */ (function () {
    function EscolherDataAgendamentoPage(agendamentoService, loadingCtrl, navParams, navCtrl, toastHelper, storageService, alertCtrl) {
        this.agendamentoService = agendamentoService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.listaEspecialidades = [];
        this.listaCentroMedicos = [];
        this.listaDatasAgendamento = [];
        this.listaGrupoFamiliar = [];
        this.prestador = this.navParams.get('Prestador');
        this.codCentroMedico = this.navParams.get('codCentroMedico');
        this.codEspecialidade = this.navParams.get('codEspecialidade');
        this.tipoBusca = this.navParams.get('tipoBusca');
        this.agendamentoForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'nome': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]({ value: this.prestador.nome, disabled: true }),
            'codCentroMedico': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'codEspecialidade': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'dataAgendamento': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'matriculaCassems': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    }
    EscolherDataAgendamentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        var buscaEspecialidadeCentroMedico = new Promise(function (resolve, reject) {
            if (_this.tipoBusca == 'prestador') {
                _this.agendamentoService.buscarListaEspecialidade(null, _this.prestador.codCredenciado).subscribe(function (lista) {
                    if (lista.length) {
                        _this.listaEspecialidades = lista;
                        resolve();
                    }
                    else {
                        reject('Não há dados na lista de especialidades');
                    }
                }, function (error) { return reject(error); });
            }
            else {
                if (_this.tipoBusca == 'especialidade') {
                    if (_this.codCentroMedico) {
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(_this.agendamentoService.buscarListaEspecialidade(_this.codCentroMedico, _this.prestador.codCredenciado), _this.agendamentoService.buscarListaCentroMedico(_this.codEspecialidade, _this.prestador.codCredenciado), _this.agendamentoService.buscarAgendaPrestador(_this.prestador.codCredenciado, _this.codCentroMedico)).subscribe(function (result) {
                            _this.listaEspecialidades = result[0];
                            _this.listaCentroMedicos = result[1];
                            if (!result[2].length) {
                                _this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                                _this.listaDatasAgendamento = [];
                            }
                            else {
                                result[2] = result[2].map(function (obj) {
                                    obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                                    return obj;
                                });
                                _this.listaDatasAgendamento = result[2];
                            }
                            resolve();
                        }, function (error) { return reject(error); });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(_this.agendamentoService.buscarListaEspecialidade(null, _this.prestador.codCredenciado), _this.agendamentoService.buscarListaCentroMedico(_this.codEspecialidade, _this.prestador.codCredenciado)).subscribe(function (result) {
                            _this.listaEspecialidades = result[0];
                            _this.listaCentroMedicos = result[1];
                            resolve();
                        }, function (error) { return reject(error); });
                    }
                }
                else {
                    if (_this.codEspecialidade) {
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(_this.agendamentoService.buscarListaCentroMedico(_this.codEspecialidade, _this.prestador.codCredenciado), _this.agendamentoService.buscarListaEspecialidade(_this.codCentroMedico, _this.prestador.codCredenciado), _this.agendamentoService.buscarAgendaPrestador(_this.prestador.codCredenciado, _this.codCentroMedico)).subscribe(function (result) {
                            _this.listaCentroMedicos = result[0];
                            _this.listaEspecialidades = result[1];
                            if (!result[2].length) {
                                _this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                                _this.listaDatasAgendamento = [];
                            }
                            else {
                                result[2] = result[2].map(function (obj) {
                                    obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                                    return obj;
                                });
                                _this.listaDatasAgendamento = result[2];
                            }
                            resolve();
                        }, function (error) { return reject(error); });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(_this.agendamentoService.buscarListaCentroMedico(null, _this.prestador.codCredenciado), _this.agendamentoService.buscarListaEspecialidade(_this.codCentroMedico, _this.prestador.codCredenciado)).subscribe(function (result) {
                            _this.listaCentroMedicos = result[0];
                            _this.listaEspecialidades = result[1];
                            resolve();
                        }, function (error) { return reject(error); });
                    }
                }
            }
        });
        buscaEspecialidadeCentroMedico.then(function () {
            Promise.all([
                _this.storageService.getBeneficiario(),
                _this.storageService.getGrupoFamiliar()
            ]).then(function (result) {
                if (result[0].titular === 'S') {
                    _this.listaGrupoFamiliar = result[1];
                }
                else {
                    _this.listaGrupoFamiliar = [result[0]];
                }
                loader.dismiss();
            }, function () {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader.dismiss();
                _this.navCtrl.pop();
            });
        }, function () {
            _this.toastHelper.notificacaoErroCarregarDados();
            loader.dismiss();
            _this.navCtrl.pop();
        });
    };
    EscolherDataAgendamentoPage.prototype.confirmarAgendamento = function () {
        var _this = this;
        var especialidade = this.listaEspecialidades.filter(function (obj) { return obj.codEspecialidade == _this.codEspecialidade; })[0];
        var centroMedico = this.listaCentroMedicos.filter(function (obj) { return obj.codCentroMedico == _this.codCentroMedico; })[0];
        var dataAgendamento = /\d{2}\/\d{2}\/\d{4}/.exec(this.dataAgendamento).toString();
        this.navCtrl.push('ConfirmarAgendamentoPage', {
            'Beneficiario': this.beneficiario,
            'Especialidade': especialidade,
            'CentroMedico': centroMedico,
            'Prestador': this.prestador,
            'dataAgendamento': dataAgendamento,
            'horaAgendamento': this.horaAgendamento
        });
    };
    EscolherDataAgendamentoPage.prototype.buscarEspecialidade = function () {
        var _this = this;
        if (this.codCentroMedico) {
            this.codEspecialidade = null;
            this.dataAgendamento = null;
            this.listaDatasAgendamento = [];
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_1.present();
            this.agendamentoService.buscarListaEspecialidade(this.codCentroMedico, this.prestador.codCredenciado).subscribe(function (lista) {
                _this.listaEspecialidades = lista;
                if (!lista.length) {
                    _this.toastHelper.notificacaoMensagem('Não há especialidades disponíveis para este centro médico');
                }
                loader_1.dismiss();
            }, function (error) {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader_1.dismiss();
                _this.navCtrl.pop();
            });
        }
    };
    EscolherDataAgendamentoPage.prototype.buscarCentroMedico = function () {
        var _this = this;
        if (this.codEspecialidade) {
            this.codCentroMedico = null;
            this.dataAgendamento = null;
            this.listaDatasAgendamento = [];
            var loader_2 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_2.present();
            this.agendamentoService.buscarListaCentroMedico(this.codEspecialidade, this.prestador.codCredenciado).subscribe(function (lista) {
                _this.listaCentroMedicos = lista;
                if (!lista.length) {
                    _this.toastHelper.notificacaoMensagem('Não há centros médicos disponíveis para esta especialidade');
                }
                loader_2.dismiss();
            }, function (error) {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader_2.dismiss();
                _this.navCtrl.pop();
            });
        }
    };
    EscolherDataAgendamentoPage.prototype.buscarAgendaPrestador = function () {
        var _this = this;
        if (this.codCentroMedico) {
            this.dataAgendamento = null;
            this.horaAgendamento = null;
            var loader_3 = this.loadingCtrl.create({
                content: "Por favor aguarde...",
            });
            loader_3.present();
            this.agendamentoService.buscarAgendaPrestador(this.prestador.codCredenciado, this.codCentroMedico).subscribe(function (lista) {
                if (!lista.length) {
                    _this.toastHelper.notificacaoMensagem('Não há datas disponíveis para agendamento');
                    _this.listaDatasAgendamento = [];
                }
                else {
                    lista = lista.map(function (obj) {
                        obj.horaFormatada = /\d{2}:\d{2}/.exec(obj.horaFormatada);
                        return obj;
                    });
                    _this.listaDatasAgendamento = lista;
                }
                loader_3.dismiss();
            }, function (error) {
                _this.toastHelper.notificacaoErroCarregarDados();
                loader_3.dismiss();
                _this.navCtrl.pop();
            });
        }
    };
    EscolherDataAgendamentoPage.prototype.abrirInformacoes = function () {
        var alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    };
    EscolherDataAgendamentoPage.prototype.atribuirHora = function () {
        if (this.dataAgendamento) {
            this.horaAgendamento = /\d{2}:\d{2}/.exec(this.dataAgendamento).toString();
        }
        else {
            this.horaAgendamento = null;
        }
    };
    EscolherDataAgendamentoPage.prototype.atribuirBeneficiario = function () {
        var _this = this;
        this.beneficiario = this.listaGrupoFamiliar.find(function (beneficiario) {
            return (beneficiario.matriculaCassems == _this.matriculaCassems);
        });
    };
    EscolherDataAgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-escolher-data-agendamento',template:/*ion-inline-start:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\escolher-data-agendamento\escolher-data-agendamento.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span class="titulo-page">Data Agendamento</span>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="abrirInformacoes()">\n                <ion-icon name="information"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contentEscolherDataAgendamento">\n    <form (ngSubmit)="confirmarAgendamento()" class="formEscolherDataAgendamento" [formGroup]="agendamentoForm"\n          #agendamentoFormElement="ngForm" novalidate>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Nome do Prestador</ion-label>\n                <ion-input class="text-dark" [readonly]="true" type="text" [(ngModel)]="prestador.nome"\n                           formControlName="nome"></ion-input>\n            </ion-item>\n            <div *ngIf="tipoBusca == \'especialidade\' || tipoBusca == \'prestador\'">\n                <ion-item>\n                    <ion-label floating>Especialidade</ion-label>\n                    <ion-select [(ngModel)]="codEspecialidade" formControlName="codEspecialidade" cancelText="Fechar"\n                                (ionChange)="buscarCentroMedico()">\n                        <ion-option [value]="especialidade.codEspecialidade"\n                                    *ngFor="let especialidade of listaEspecialidades">{{especialidade.descricao |\n                            capitalizeAll}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Centro Médico</ion-label>\n                    <ion-select [(ngModel)]="codCentroMedico" formControlName="codCentroMedico" cancelText="Fechar"\n                                (ionChange)="buscarAgendaPrestador()" [disabled]="listaCentroMedicos.length == 0">\n                        <ion-option [value]="centroMedico.codCentroMedico"\n                                    *ngFor="let centroMedico of listaCentroMedicos">\n                            {{centroMedico.descricao | capitalizeAll}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n            <div *ngIf="tipoBusca == \'cm\'">\n                <ion-item>\n                    <ion-label floating>Centro Médico</ion-label>\n                    <ion-select [(ngModel)]="codCentroMedico" formControlName="codCentroMedico" cancelText="Fechar"\n                                (ionChange)="buscarEspecialidade()">\n                        <ion-option [value]="centroMedico.codCentroMedico"\n                                    *ngFor="let centroMedico of listaCentroMedicos">\n                            {{centroMedico.descricao | capitalizeAll}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Especialidade</ion-label>\n                    <ion-select [(ngModel)]="codEspecialidade" formControlName="codEspecialidade" cancelText="Fechar"\n                                (ionChange)="buscarAgendaPrestador()"\n                                [disabled]="listaEspecialidades.length == 0">\n                        <ion-option [value]="especialidade.codEspecialidade"\n                                    *ngFor="let especialidade of listaEspecialidades">{{especialidade.descricao |\n                            capitalizeAll}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n            <ion-item>\n                <ion-label floating>Data</ion-label>\n                <ion-select [(ngModel)]="dataAgendamento" formControlName="dataAgendamento" cancelText="Fechar"\n                            (ionChange)="atribuirHora()" [disabled]="listaDatasAgendamento.length == 0">\n                    <ion-option [value]="data.dataFormatada+\'-\'+data.horaFormatada" *ngFor="let data of listaDatasAgendamento">\n                        {{data.dataFormatada+" - "+data.horaFormatada}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Beneficiário</ion-label>\n                <ion-select [(ngModel)]="matriculaCassems" formControlName="matriculaCassems" cancelText="Fechar" #beneficiario\n                             (ionChange)="atribuirBeneficiario()">\n                    <ion-option [value]="beneficiario.matriculaCassems" *ngFor="let beneficiario of listaGrupoFamiliar">\n                        {{beneficiario.nome | capitalizeAll}}\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button type="submit" ion-button block [disabled]="!agendamentoFormElement.form.valid">Confirmar Agendamento\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Projetos Android\CassemsBeneficiario-02\app-cassems-beneficiario-#76\app-cassems-beneficiario-#76\src\pages\agendamento\escolher-data-agendamento\escolher-data-agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_agendamento_service__["a" /* AgendamentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EscolherDataAgendamentoPage);
    return EscolherDataAgendamentoPage;
}());

//# sourceMappingURL=escolher-data-agendamento.js.map

/***/ })

});
//# sourceMappingURL=41.js.map