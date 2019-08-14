webpackJsonp([43],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarAgendamentoModule", function() { return ConfirmarAgendamentoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmar_agendamento__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmarAgendamentoModule = /** @class */ (function () {
    function ConfirmarAgendamentoModule() {
    }
    ConfirmarAgendamentoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__confirmar_agendamento__["a" /* ConfirmarAgendamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__confirmar_agendamento__["a" /* ConfirmarAgendamentoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipe_module__["a" /* PipeModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__confirmar_agendamento__["a" /* ConfirmarAgendamentoPage */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
        })
    ], ConfirmarAgendamentoModule);
    return ConfirmarAgendamentoModule;
}());

//# sourceMappingURL=confirmar-agendamento.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarAgendamentoPage; });
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




var ConfirmarAgendamentoPage = /** @class */ (function () {
    function ConfirmarAgendamentoPage(agendamentoService, loadingCtrl, navParams, navCtrl, toastHelper, alertCtrl) {
        this.agendamentoService = agendamentoService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastHelper = toastHelper;
        this.alertCtrl = alertCtrl;
        this.listaMensagens = [];
        this.prestador = this.navParams.get('Prestador');
        this.centroMedico = this.navParams.get('CentroMedico');
        this.especialidade = this.navParams.get('Especialidade');
        this.beneficiario = this.navParams.get('Beneficiario');
        this.dataAgendamento = this.navParams.get('dataAgendamento');
        this.horaAgendamento = this.navParams.get('horaAgendamento');
    }
    ConfirmarAgendamentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.validarParametrosAgendamento(this.beneficiario.benId, this.especialidade.codEspecialidade, this.prestador.codCredenciado.toString(), this.centroMedico.codCentroMedico).subscribe(function (validaAgendamento) {
            _this.listaMensagens = validaAgendamento.listMensagem;
            loader.dismiss();
        }, function (error) { return loader.dismiss(); });
    };
    ConfirmarAgendamentoPage.prototype.realizarAgendamento = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor aguarde...",
        });
        loader.present();
        this.agendamentoService.agendar(this.beneficiario.matriculaCassems, this.dataAgendamento, this.horaAgendamento, this.especialidade.codEspecialidade, this.centroMedico.codCentroMedico, this.prestador.codCredenciado).subscribe(function (result) {
            loader.dismiss();
            _this.toastHelper.notificacaoMensagem('Agendamento realizado com sucesso');
            _this.navCtrl.setRoot('MeusAgendamentosPage');
        }, function (error) {
            loader.dismiss();
            if (error.status == 400) {
                _this.toastHelper.notificacaoMensagem(error.error.motivoNegativa);
                _this.navCtrl.pop();
            }
            else {
                _this.toastHelper.notificacaoMensagem('Ocorreu um erro ao realizar o agendamento, por favor tente novamente mais tarde');
            }
        });
    };
    ConfirmarAgendamentoPage.prototype.abrirInformacoes = function () {
        var alert = this.alertCtrl.create({
            title: 'Agendamento',
            subTitle: 'Os atendimentos são realizados por ordem de chegada',
            buttons: ['OK']
        });
        alert.present();
    };
    ConfirmarAgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirmar-agendamento',template:/*ion-inline-start:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\confirmar-agendamento\confirmar-agendamento.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Confirmar Agendamento</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="abrirInformacoes()">\n\n                <ion-icon name="information"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contentConfirmarAgendamento">\n\n    <div class="agendamento-details">\n\n        <ion-row wrap class="agendamento-bio-row">\n\n            <ion-col no-padding col-12 text-center>\n\n                <h2 class="agendamento-name">{{prestador.nome | capitalizeAll}}</h2>\n\n            </ion-col>\n\n            <section class="agendamento-detail-section">\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Especialidade: {{especialidade.descricao | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Centro Médico: {{centroMedico.descricao| capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Data: {{dataAgendamento}} - {{horaAgendamento}}\n\n                    </p>\n\n                </ion-col>\n\n                <ion-col no-padding col-12>\n\n                    <p class="agendamento-description">\n\n                        Beneficiário: {{beneficiario.nome | capitalizeAll}}\n\n                    </p>\n\n                </ion-col>\n\n            </section>\n\n        </ion-row>\n\n    </div>\n\n    <section class="lista-mensagens-section" *ngIf="listaMensagens.length">\n\n        <h2 class="titulo-lista-mensagens" text-center>Avisos</h2>\n\n        <ion-list>\n\n            <ion-item class="list-item" *ngFor="let mensagem of listaMensagens">\n\n                <ion-row no-padding class="content-row one-line">\n\n                    <ion-col no-padding width-100 class="item-content">\n\n                        <p class="item-description">{{mensagem.mensagem | capitalizeAll}}</p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-item>\n\n        </ion-list>\n\n    </section>\n\n    <button margin-top="25px" type="button" ion-button block (click)="realizarAgendamento()">Realizar Agendamento</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Filipe\Projetos Android\cassems-beneficiario\src\pages\agendamento\confirmar-agendamento\confirmar-agendamento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_agendamento_service__["a" /* AgendamentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_toast_helper__["a" /* ToastHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmarAgendamentoPage);
    return ConfirmarAgendamentoPage;
}());

//# sourceMappingURL=confirmar-agendamento.js.map

/***/ })

});
//# sourceMappingURL=43.js.map